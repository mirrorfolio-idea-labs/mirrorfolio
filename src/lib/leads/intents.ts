/**
 * The four contact flows. Shared by the contact UI, the footer links and the
 * lead API's validation schema so the set can never drift between them.
 */
export const intents = ["waitlist", "hospital", "investor", "careers"] as const;

export type Intent = (typeof intents)[number];

export const defaultIntent: Intent = "waitlist";

export function parseIntent(value: unknown): Intent {
  return intents.includes(value as Intent) ? (value as Intent) : defaultIntent;
}
