import { z } from "zod";

import { intents } from "./intents";

/**
 * Lead sources: the four contact-page flows plus the standalone /hello
 * conference landing page, which collects a looser set of fields.
 */
export const leadIntents = [...intents, "hello"] as const;
export type LeadIntent = (typeof leadIntents)[number];

const name = z.string().trim().min(1, "Name is required").max(120);
const email = z.string().trim().toLowerCase().email("Enter a valid email").max(254);
const shortText = z.string().trim().max(200);
const longText = z.string().trim().max(4000);
const optionalShort = shortText
  .optional()
  .or(z.literal(""))
  .transform((v) => v || undefined);
const optionalLong = longText
  .optional()
  .or(z.literal(""))
  .transform((v) => v || undefined);

/**
 * Anti-spam fields, submitted by every form.
 * - `company_website` is a honeypot: hidden from people, irresistible to bots.
 * - `elapsedMs` is how long the form was on screen; humans take seconds.
 */
const spamGuards = z.object({
  /**
   * Accepted, never rejected. Failing validation here would hand a bot a 422
   * naming the honeypot; the route instead takes a filled value as a signal and
   * answers exactly like the success path. Bounded only to cap the body size.
   */
  company_website: z.string().max(200).optional(),
  elapsedMs: z.coerce.number().int().nonnegative().optional(),
});

const waitlist = z.object({
  intent: z.literal("waitlist"),
  name,
  email,
  city: shortText.min(1, "City or area is required"),
  relationship: shortText.min(1, "Please choose who this is for"),
  note: optionalLong,
});

const hospital = z.object({
  intent: z.literal("hospital"),
  name,
  email,
  organisation: shortText.min(1, "Hospital or network is required"),
  role: shortText.min(1, "Your role is required"),
  volume: optionalShort,
  note: optionalLong,
});

const investor = z.object({
  intent: z.literal("investor"),
  name,
  email,
  firm: shortText.min(1, "Firm is required"),
  stage: optionalShort,
  note: optionalLong,
});

const careers = z.object({
  intent: z.literal("careers"),
  name,
  email,
  role: shortText.min(1, "Role of interest is required"),
  link: z
    .string()
    .trim()
    .url("Enter a valid URL")
    .max(500)
    .optional()
    .or(z.literal(""))
    .transform((v) => v || undefined),
  note: longText.min(1, "Tell us what you'd want to build"),
});

const hello = z.object({
  intent: z.literal("hello"),
  name,
  email,
  organisation: optionalShort,
  role: optionalShort,
  message: optionalLong,
  /** Which QR code / card the visitor arrived from. */
  s: optionalShort,
});

export const leadSchema = z
  .discriminatedUnion("intent", [waitlist, hospital, investor, careers, hello])
  .and(spamGuards);

export type LeadInput = z.infer<typeof leadSchema>;

/** What actually gets persisted — the submission plus server-observed context. */
export type StoredLead = {
  intent: LeadIntent;
  name: string;
  email: string;
  /** Flow-specific answers (city, firm, organisation, …), empty values dropped. */
  details: Record<string, string>;
  receivedAt: Date;
  userAgent?: string;
  referer?: string;
};

const CONTEXT_KEYS = new Set(["intent", "name", "email", "company_website", "elapsedMs"]);

export function toStoredLead(
  input: LeadInput,
  context: { userAgent?: string; referer?: string },
): StoredLead {
  const details: Record<string, string> = {};
  for (const [key, value] of Object.entries(input)) {
    if (CONTEXT_KEYS.has(key)) continue;
    if (typeof value === "string" && value.length > 0) details[key] = value;
  }

  return {
    intent: input.intent,
    name: input.name,
    email: input.email,
    details,
    receivedAt: new Date(),
    userAgent: context.userAgent,
    referer: context.referer,
  };
}
