import { tmpdir } from "node:os";
import { join } from "node:path";

import { z } from "zod";

/** Set by Vercel during both build and runtime; never set on a dev machine. */
const onVercel = Boolean(process.env.VERCEL);

/**
 * Serverless bundles are read-only apart from the OS temp dir, so on Vercel the
 * dead-letter sink has to live under /tmp — `.data/` next to the bundle throws
 * ENOENT. /tmp is wiped between cold starts, which is acceptable: it only ever
 * holds leads Mongo already refused, and the route logs those as well.
 */
const DEFAULT_DEAD_LETTER_FILE = onVercel
  ? join(tmpdir(), "mirrorfolio-leads-dead-letter.jsonl")
  : ".data/leads-dead-letter.jsonl";

/**
 * Server-side configuration.
 *
 * MongoDB is the system of record for leads. On a dev machine the URI defaults
 * to a local mongod so the site runs with no setup. On Vercel there is no such
 * fallback: a missing MONGODB_URI fails loudly instead of quietly pointing
 * production at 127.0.0.1, which is how a misspelled variable name in the
 * project settings turned into silently refused connections.
 *
 * Everything else is optional, but anything that *is* set has to be well-formed
 * — a typo'd URI should fail loudly on boot rather than silently drop a lead.
 */
const serverEnvSchema = z.object({
  MONGODB_URI: onVercel
    ? z.string().min(1)
    : z.string().min(1).default("mongodb://127.0.0.1:27017"),
  MONGODB_DB: z.string().min(1).default("mirrorfolio"),
  MONGODB_LEADS_COLLECTION: z.string().min(1).default("leads"),

  /**
   * Dead-letter sink. If the Mongo write fails, the lead is appended here so it
   * is never lost. Relative paths resolve from the project root.
   */
  LEADS_DEAD_LETTER_FILE: z.string().min(1).default(DEFAULT_DEAD_LETTER_FILE),

  /**
   * SMTP notification (optional). Host, user, password and a recipient must all
   * be present before any mail is attempted — see `canNotifyByEmail`.
   *
   * SMTP_SECURE is implicit TLS on connect (port 465). Port 587 upgrades via
   * STARTTLS instead and must leave this false, which is the common setup.
   */
  SMTP_HOST: z.string().min(1).optional(),
  SMTP_PORT: z.coerce.number().int().positive().max(65535).default(587),
  SMTP_SECURE: z
    .enum(["true", "false"])
    .default("false")
    .transform((value) => value === "true"),
  SMTP_USER: z.string().min(1).optional(),
  SMTP_PASSWORD: z.string().min(1).optional(),
  SMTP_FROM: z.string().min(1).default("Mirrorfolio <noreply@mirrorfolio.com>"),

  LEAD_NOTIFY_TO: z.string().email().optional(),

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
  return Boolean(env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASSWORD && env.LEAD_NOTIFY_TO);
}
