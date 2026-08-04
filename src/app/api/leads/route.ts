import { NextResponse } from "next/server";

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
    // Both Mongo and the dead-letter file failed — the lead is genuinely lost,
    // so tell the visitor rather than pretending it landed.
    console.error("[leads] could not persist lead:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "We couldn't save that. Please email kabeer@mirrorfolio.com directly.",
      },
      { status: 503 },
    );
  }

  // Persisted — notify out of band. A mail failure must not fail the request.
  await notifyNewLead(stored);

  return NextResponse.json({ ok: true, degraded: outcome.sink !== "mongodb" }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
