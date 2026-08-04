import type { Metadata } from "next";

import { PageHeader } from "@/components/site/PageHeader";
import { CellGrid, HeadlineRow, SectionRail } from "@/components/site/Section";
import { pageMetadata } from "@/lib/metadata";

const title = "Privacy — Mirrorfolio";
const description =
  "No cameras. No microphones. No recordings. How Mirrorfolio processes behavioural signals on-device and keeps families in control of what is shared.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/privacy",
});

const never = [
  { k: "N.01", t: "No cameras", b: "No image sensor exists in any Mirrorfolio device." },
  { k: "N.02", t: "No microphones", b: "No speech is captured, stored or transmitted." },
  { k: "N.03", t: "No recordings", b: "There is no footage to leak, subpoena or sell." },
  { k: "N.04", t: "No data sale", b: "Household data is never sold or brokered. Ever." },
];

const how = [
  { k: "H.01", t: "Processed on-device", b: "Behavioural inference happens inside the home." },
  { k: "H.02", t: "Works offline", b: "The system does not depend on connectivity to function." },
  {
    k: "H.03",
    t: "State, not signal",
    b: "What leaves is a human-meaningful state, if shared at all.",
  },
  { k: "H.04", t: "Family-controlled", b: "Consent decides who sees what, and can be withdrawn." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        index="PR"
        eyebrow="Privacy"
        title={
          <>
            Privacy isn&apos;t a policy.
            <br />
            <span className="text-muted-foreground">It&apos;s the architecture.</span>
          </>
        }
        lede="We designed Mirrorfolio so that the most invasive options were never technically available. The safest data is the data that is never captured."
      />

      <section className="border-b border-border bg-ink text-ink-foreground">
        <SectionRail index="PR.1" label="What we never do" invert />
        <CellGrid items={never} invert />
      </section>

      <section className="border-b border-border">
        <SectionRail index="PR.2" label="How it works instead" />
        <CellGrid items={how} />
      </section>

      <section className="border-b border-border">
        <SectionRail index="PR.3" label="Consent" />
        <HeadlineRow
          headline={
            <>
              The person living
              <br />
              with it
              <br />
              <span className="text-muted-foreground">decides.</span>
            </>
          }
          body="Sharing with family or a care team is opt-in, specific and reversible. Consent is a surface in the product, not a checkbox in a document. For the full policy, write to kabeer@mirrorfolio.com."
        />
      </section>
    </>
  );
}
