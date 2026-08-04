import { Resend } from "resend";

import { canNotifyByEmail, serverEnv } from "@/lib/env";
import type { StoredLead } from "./schema";

const INTENT_LABELS: Record<string, string> = {
  waitlist: "Waitlist",
  hospital: "Hospital partnership",
  investor: "Investor enquiry",
  careers: "Careers",
  hello: "From the stall",
};

let resend: Resend | undefined;

/**
 * Email the inbox when a lead lands. Best-effort by design: notification failure
 * must never fail the submission, because the lead is already persisted.
 */
export async function notifyNewLead(lead: StoredLead): Promise<void> {
  if (!canNotifyByEmail()) return;

  const env = serverEnv();
  resend ??= new Resend(env.RESEND_API_KEY);

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
    await resend.emails.send({
      from: env.LEAD_NOTIFY_FROM,
      to: env.LEAD_NOTIFY_TO!,
      replyTo: lead.email,
      subject: `Mirrorfolio — ${label} — ${lead.name}`,
      text,
    });
  } catch (error) {
    console.error("[leads] notification email failed:", error);
  }
}
