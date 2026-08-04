import type { Metadata } from "next";

import { ContactForm } from "@/components/site/ContactForm";
import { parseIntent } from "@/lib/leads/intents";
import { pageMetadata } from "@/lib/metadata";

const title = "Contact — Mirrorfolio";
const description =
  "Join the Mirrorfolio waitlist, partner your hospital, talk to us about investing, or introduce yourself for a role. A person, not a script, replies.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/contact",
});

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  // Parsed here so a shared /contact?intent=hospital link opens on that flow,
  // server-rendered, before any JavaScript runs.
  const intent = parseIntent((await searchParams).intent);

  return <ContactForm initialIntent={intent} />;
}
