import { serverEnv } from "@/lib/env";

/**
 * Fixed-window rate limiter, per IP, held in process memory.
 *
 * This is deliberately simple and has a known limitation: on a multi-instance or
 * serverless deployment each instance keeps its own counter, so the effective
 * limit is (limit x instances). It stops naive floods and scripted abuse, which
 * is what a marketing-site contact form actually faces. If the site ever needs a
 * hard global guarantee, swap this module for a Redis/Upstash counter — the
 * `check` signature is all the route handler depends on.
 */
type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();

/** Stop the map growing without bound on a long-lived server. */
function sweep(now: number): void {
  if (windows.size < 10_000) return;
  for (const [key, window] of windows) {
    if (window.resetAt <= now) windows.delete(key);
  }
}

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function check(key: string): RateLimitResult {
  const { LEAD_RATE_LIMIT, LEAD_RATE_WINDOW_MS } = serverEnv();
  const now = Date.now();
  sweep(now);

  const existing = windows.get(key);
  if (!existing || existing.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + LEAD_RATE_WINDOW_MS });
    return { ok: true, remaining: LEAD_RATE_LIMIT - 1, retryAfterSeconds: 0 };
  }

  existing.count += 1;
  const remaining = Math.max(0, LEAD_RATE_LIMIT - existing.count);
  return {
    ok: existing.count <= LEAD_RATE_LIMIT,
    remaining,
    retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
  };
}

/**
 * Best-effort client IP. Behind Vercel/Cloudflare/nginx the socket address is the
 * proxy, so the forwarded headers are what identify the caller.
 */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return headers.get("x-real-ip")?.trim() || "unknown";
}
