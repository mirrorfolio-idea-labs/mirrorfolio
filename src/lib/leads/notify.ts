import nodemailer, { type Transporter } from "nodemailer";

import { canNotifyByEmail, serverEnv } from "@/lib/env";
import type { StoredLead } from "./schema";

const INTENT_LABELS: Record<string, string> = {
  waitlist: "Waitlist",
  hospital: "Hospital partnership",
  investor: "Investor enquiry",
  careers: "Careers",
  hello: "From the stall",
};

/**
 * Next hot-reloads modules and serverless platforms reuse warm instances, so the
 * transport is cached on globalThis — otherwise every request opens a new SMTP
 * connection pool and the provider starts refusing them.
 */
const globalForMail = globalThis as typeof globalThis & {
  __mirrorfolioMailer?: Transporter;
};

function transport(): Transporter {
  const env = serverEnv();
  globalForMail.__mirrorfolioMailer ??= nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    // Implicit TLS on 465; 587 connects plain and upgrades via STARTTLS.
    secure: env.SMTP_SECURE,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASSWORD },
    // A hung mail server must not hold a form submission open.
    connectionTimeout: 8_000,
    greetingTimeout: 8_000,
    socketTimeout: 10_000,
  });
  return globalForMail.__mirrorfolioMailer;
}

/**
 * Email the inbox when a lead lands. Best-effort by design: notification failure
 * must never fail the submission, because the lead is already persisted.
 */
export async function notifyNewLead(lead: StoredLead): Promise<void> {
  if (!canNotifyByEmail()) return;

  const env = serverEnv();
  const label = INTENT_LABELS[lead.intent] ?? lead.intent;
  const detailLines = Object.entries(lead.details)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  const text = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Flow: ${label}`,
    detailLines,
    "",
    `Received: ${lead.receivedAt.toISOString()}`,
    lead.referer ? `Page: ${lead.referer}` : undefined,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transport().sendMail({
      from: env.SMTP_FROM,
      to: env.LEAD_NOTIFY_TO,
      // Replying to the alert goes straight back to the person who wrote in.
      replyTo: lead.email,
      subject: `Mirrorfolio — ${label} — ${lead.name}`,
      text,
    });
  } catch (error) {
    // Drop the transport so the next lead reconnects rather than reusing a
    // socket the server may already have closed.
    globalForMail.__mirrorfolioMailer = undefined;
    console.error("[leads] notification email failed:", error);
  }
}
