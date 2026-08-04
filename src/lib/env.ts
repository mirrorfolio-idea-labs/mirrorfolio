import { z } from "zod";

/**
 * Server-side configuration.
 *
 * MongoDB is the system of record for leads. The default URI points at a local
 * mongod so the site runs on a dev machine with no setup; production sets
 * MONGODB_URI to the Atlas connection string.
 *
 * Everything else is optional, but anything that *is* set has to be well-formed
 * — a typo'd URI should fail loudly on boot rather than silently drop a lead.
 */
const serverEnvSchema = z.object({
  MONGODB_URI: z.string().min(1).default("mongodb://127.0.0.1:27017"),
  MONGODB_DB: z.string().min(1).default("mirrorfolio"),
  MONGODB_LEADS_COLLECTION: z.string().min(1).default("leads"),

  /**
   * Dead-letter sink. If the Mongo write fails, the lead is appended here so it
   * is never lost. Relative paths resolve from the project root.
   */
  LEADS_DEAD_LETTER_FILE: z.string().min(1).default(".data/leads-dead-letter.jsonl"),

  // Email notification (optional). Both must be set for mail to be sent.
  RESEND_API_KEY: z.string().min(1).optional(),
  LEAD_NOTIFY_TO: z.string().email().optional(),
  LEAD_NOTIFY_FROM: z.string().min(1).default("Mirrorfolio <onboarding@resend.dev>"),

  // Requests per window, per IP, against POST /api/leads.
  LEAD_RATE_LIMIT: z.coerce.number().int().positive().default(5),
  LEAD_RATE_WINDOW_MS: z.coerce.number().int().positive().default(60_000),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

let cached: ServerEnv | undefined;

export function serverEnv(): ServerEnv {
  if (cached) return cached;

  const parsed = serverEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    const detail = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
    throw new Error(`Invalid server environment — ${detail}`);
  }

  cached = parsed.data;
  return cached;
}

/** True when a lead notification email can actually be sent. */
export function canNotifyByEmail(): boolean {
  const env = serverEnv();
  return Boolean(env.RESEND_API_KEY && env.LEAD_NOTIFY_TO);
}
