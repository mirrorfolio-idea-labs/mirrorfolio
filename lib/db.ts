import { Pool, PoolClient } from "pg";

// Singleton pool instance
let pool: Pool | null = null;

/**
 * Get or create the database connection pool
 * Uses connection pooling for better performance and resource management
 */
function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not set");
    }

    pool = new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: true, // Enforce SSL certificate validation in production
      },
      // Connection pool settings for production
      max: 10, // Maximum number of clients in the pool
      min: 2, // Minimum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 10000, // Timeout after 10 seconds if can't connect
      maxUses: 7500, // Close connection after this many queries (prevents memory leaks)
    });

    // Handle pool errors
    pool.on("error", (err) => {
      console.error("Unexpected database pool error:", err);
    });
  }

  return pool;
}

/**
 * Execute a query with automatic client management and error handling
 */
async function query<T>(
  text: string,
  params?: (string | number | null | undefined)[]
): Promise<T[]> {
  const client = await getPool().connect();
  try {
    const result = await client.query(text, params);
    return result.rows as T[];
  } finally {
    client.release();
  }
}

/**
 * Execute a transaction with automatic rollback on error
 */
async function transaction<T>(
  callback: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    const result = await callback(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

/**
 * Initialize the database with required tables
 * Uses IF NOT EXISTS for idempotency
 */
export async function initializeDatabase(): Promise<void> {
  const client = await getPool().connect();
  try {
    // Create contact_submissions table with proper constraints
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL CHECK (char_length(name) >= 2),
        email VARCHAR(255) NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
        phone VARCHAR(20),
        message TEXT NOT NULL CHECK (char_length(message) >= 10 AND char_length(message) <= 2000),
        ip_address VARCHAR(45), -- Supports IPv6
        user_agent TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'read', 'replied', 'archived'))
      )
    `);

    // Create index for faster lookups by email (for rate limiting checks)
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
      ON contact_submissions(email)
    `);

    // Create index for faster lookups by IP (for rate limiting)
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_ip 
      ON contact_submissions(ip_address)
    `);

    // Create index for sorting by created_at
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_created 
      ON contact_submissions(created_at DESC)
    `);

    console.log("Database tables initialized successfully");
  } finally {
    client.release();
  }
}

/**
 * Save a contact submission to the database
 * Uses parameterized queries to prevent SQL injection
 */
export async function saveContactSubmission(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  ipAddress?: string;
  userAgent?: string;
}): Promise<{ id: number; createdAt: string }> {
  // Use parameterized query - this is the primary defense against SQL injection
  // The $1, $2, etc. placeholders are replaced with properly escaped values by pg
  const result = await query<{ id: number; created_at: string }>(
    `INSERT INTO contact_submissions (name, email, phone, message, ip_address, user_agent)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, created_at`,
    [
      data.name,
      data.email,
      data.phone || null,
      data.message,
      data.ipAddress || null,
      data.userAgent || null,
    ]
  );

  return {
    id: result[0].id,
    createdAt: result[0].created_at.toString(),
  };
}

/**
 * Check if an email has submitted too many times recently
 * Returns true if rate limit exceeded
 */
export async function checkEmailRateLimit(
  email: string,
  maxSubmissions: number = 3,
  windowMinutes: number = 60
): Promise<boolean> {
  const result = await query<{ count: string }>(
    `SELECT COUNT(*) as count 
     FROM contact_submissions 
     WHERE email = $1 
     AND created_at > NOW() - INTERVAL '${windowMinutes} minutes'`,
    [email]
  );

  return parseInt(result[0].count) >= maxSubmissions;
}

/**
 * Check if an IP has submitted too many times recently
 * Returns true if rate limit exceeded
 */
export async function checkIpRateLimit(
  ipAddress: string,
  maxSubmissions: number = 10,
  windowMinutes: number = 60
): Promise<boolean> {
  if (!ipAddress || ipAddress === "unknown") return false;

  const result = await query<{ count: string }>(
    `SELECT COUNT(*) as count 
     FROM contact_submissions 
     WHERE ip_address = $1 
     AND created_at > NOW() - INTERVAL '${windowMinutes} minutes'`,
    [ipAddress]
  );

  return parseInt(result[0].count) >= maxSubmissions;
}

/**
 * Get recent submissions for admin review
 */
export async function getRecentSubmissions(
  limit: number = 50,
  offset: number = 0
): Promise<
  Array<{
    id: number;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    status: string;
    createdAt: string;
  }>
> {
  const result = await query<{
    id: number;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    status: string;
    created_at: string;
  }>(
    `SELECT id, name, email, phone, message, status, created_at
     FROM contact_submissions
     ORDER BY created_at DESC
     LIMIT $1 OFFSET $2`,
    [limit, offset]
  );

  return result.map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    message: row.message,
    status: row.status,
    createdAt: row.created_at,
  }));
}

/**
 * Update submission status
 */
export async function updateSubmissionStatus(
  id: number,
  status: "pending" | "read" | "replied" | "archived"
): Promise<void> {
  await query(`UPDATE contact_submissions SET status = $1 WHERE id = $2`, [
    status,
    id,
  ]);
}

/**
 * Gracefully close the pool (call on app shutdown)
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

export { getPool, query, transaction };
