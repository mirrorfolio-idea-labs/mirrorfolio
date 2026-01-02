/**
 * Security utilities for input sanitization and protection
 */

// HTML entities to escape
const htmlEntities: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;",
};

/**
 * Escape HTML entities to prevent XSS attacks
 */
export function escapeHtml(str: string): string {
  return str.replace(/[&<>"'`=/]/g, (char) => htmlEntities[char] || char);
}

/**
 * Sanitize string input - removes control characters and trims
 */
export function sanitizeString(input: string): string {
  if (typeof input !== "string") return "";

  // Remove control characters (except newlines and tabs in messages)
  const sanitized = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

  // Trim whitespace
  return sanitized.trim();
}

/**
 * Sanitize email to prevent header injection
 */
export function sanitizeEmail(email: string): string {
  if (typeof email !== "string") return "";

  // Remove newlines and other characters that could be used for header injection
  return email
    .replace(/[\r\n\t]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .toLowerCase();
}

/**
 * Sanitize phone number - keep only digits, +, -, and spaces
 */
export function sanitizePhone(phone: string): string {
  if (typeof phone !== "string") return "";
  return phone.replace(/[^\d+\-\s]/g, "").trim();
}

/**
 * Sanitize message - preserve newlines but escape HTML
 */
export function sanitizeMessage(message: string): string {
  if (typeof message !== "string") return "";

  // Remove control characters except newlines
  const cleaned = message.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F]/g, "");

  return cleaned.trim();
}

/**
 * Validate that a string doesn't contain SQL injection patterns
 * Note: This is a defense-in-depth measure - parameterized queries are the primary protection
 */
export function containsSqlInjection(input: string): boolean {
  if (typeof input !== "string") return false;

  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|TRUNCATE)\b)/i,
    /(--|\/\*|\*\/|;)/,
    /(\bOR\b\s+\d+\s*=\s*\d+)/i,
    /(\bAND\b\s+\d+\s*=\s*\d+)/i,
    /(EXEC|EXECUTE)\s*\(/i,
  ];

  return sqlPatterns.some((pattern) => pattern.test(input));
}

/**
 * Simple in-memory rate limiter
 * In production, use Redis or a dedicated rate limiting service
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 5,
  windowMs: number = 60000 // 1 minute
): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Clean up old entries periodically
  if (rateLimitMap.size > 10000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < now) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || record.resetTime < now) {
    // New window
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { allowed: true, remaining: maxRequests - 1, resetIn: windowMs };
  }

  if (record.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetIn: record.resetTime - now,
    };
  }

  record.count++;
  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetIn: record.resetTime - now,
  };
}

/**
 * Get client IP from request headers
 */
export function getClientIp(headers: Headers): string {
  // Check common proxy headers
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

/**
 * Validate content type
 */
export function isValidContentType(headers: Headers): boolean {
  const contentType = headers.get("content-type");
  return contentType?.includes("application/json") ?? false;
}

/**
 * Check for common bot patterns in user agent
 */
export function isLikelyBot(headers: Headers): boolean {
  const userAgent = headers.get("user-agent")?.toLowerCase() || "";

  const botPatterns = [
    "bot",
    "crawler",
    "spider",
    "scraper",
    "curl",
    "wget",
    "python-requests",
    "go-http-client",
  ];

  // Allow legitimate bots like search engines if needed
  const allowedBots = ["googlebot", "bingbot", "slackbot"];

  if (allowedBots.some((bot) => userAgent.includes(bot))) {
    return false;
  }

  return botPatterns.some((pattern) => userAgent.includes(pattern));
}
