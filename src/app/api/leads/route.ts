import { after, NextResponse } from "next/server";

import { notifyNewLead } from "@/lib/leads/notify";
import { check, clientIp } from "@/lib/leads/rate-limit";
import { leadSchema, toStoredLead } from "@/lib/leads/schema";
import { saveLead } from "@/lib/leads/store";

/** Mongo and the filesystem need Node, and every submission must hit the origin. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16_000;

/** Forms filled in under this are almost certainly scripted. */
const MIN_HUMAN_ELAPSED_MS = 1_500;

export async function POST(request: Request) {
  const ip = clientIp(request.headers);

  const limit = check(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Submission too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".") || "form";
      fieldErrors[key] ??= issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  // Spam guards. Both respond exactly like the success path so a bot learns
  // nothing from the difference, but nothing is stored and nobody is emailed.
  const trippedHoneypot = Boolean(lead.company_website);
  const tooFast = lead.elapsedMs !== undefined && lead.elapsedMs < MIN_HUMAN_ELAPSED_MS;
  if (trippedHoneypot || tooFast) {
    console.warn(
      `[leads] discarded suspected bot submission (honeypot=${trippedHoneypot}, tooFast=${tooFast}) from ${ip}`,
    );
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const stored = toStoredLead(lead, {
    userAgent: request.headers.get("user-agent") ?? undefined,
    referer: request.headers.get("referer") ?? undefined,
  });

  let outcome;
  try {
    outcome = await saveLead(stored);
  } catch (error) {
    // Both Mongo and the dead-letter file failed, so this submission exists
    // nowhere else. Log the payload itself as the sink of last resort — the
    // platform's log retention is the only thing left holding it — then tell
    // the visitor rather than pretending it landed.
    console.error("[leads] could not persist lead:", error);
    // Listed field by field rather than spread, so anything later added to
    // StoredLead has to be opted in here instead of quietly landing in the
    // logs. The request context (user agent, referer) is deliberately absent:
    // it is diagnostic, and would add personal data without making the lead any
    // easier to follow up by hand.
    console.error(
      "[leads] unpersisted lead payload:",
      JSON.stringify({
        intent: stored.intent,
        name: stored.name,
        email: stored.email,
        details: stored.details,
        receivedAt: stored.receivedAt,
      }),
    );
    return NextResponse.json(
      {
        ok: false,
        error: "We couldn't save that. Please email kabeer@mirrorfolio.com directly.",
      },
      { status: 503 },
    );
  }

  // Persisted, so the visitor is done waiting. `after` runs the SMTP send once
  // the response has been flushed but keeps the serverless function alive until
  // it settles — awaiting it here made the form hang ~13s on a cold connection.
  after(() => notifyNewLead(stored));

  return NextResponse.json({ ok: true, degraded: outcome.sink !== "mongodb" }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
