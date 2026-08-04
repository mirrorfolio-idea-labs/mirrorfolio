import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader, WaitlistCta } from "@/components/site/PageHeader";
import { proofLine } from "@/components/site/proof";
import { CellGrid, HeadlineRow, SectionRail } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { pageMetadata } from "@/lib/metadata";

const title = "Platform — Mirrorfolio";
const description =
  "Routine Stability Intelligence: how Mirrorfolio forms a behavioural baseline, detects drift, and turns it into one calm signal for families and clinicians.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/platform",
});

const baseline = [
  { k: "P.01", t: "Weeks, not minutes", b: "The baseline forms slowly, from ordinary days." },
  { k: "P.02", t: "One person only", b: "No population average decides what normal means here." },
  { k: "P.03", t: "Seasons allowed", b: "It adapts to weather and habit, not to declining health." },
];

const drift = [
  { k: "01", t: "Breakfast skipped", b: "A morning that starts later, then later again." },
  { k: "02", t: "Medication delayed", b: "Timing loosens before it stops." },
  { k: "03", t: "Walking reduced", b: "Fewer room transitions, slower pace between them." },
  { k: "04", t: "Hydration falling", b: "Kitchen interactions thin out across the day." },
];

const view = [
  { k: "V.01", t: "Routine is stable", b: "The sentence most days deserve." },
  { k: "V.02", t: "A change was detected", b: "Plain language. What moved, and since when." },
  { k: "V.03", t: "No graphs to read", b: "Interpretation is our job, not the family's." },
  { k: "V.04", t: "No red badges", b: "Nothing designed to raise your heart rate." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        index="P"
        eyebrow="Platform"
        title={
          <>
            Routine Stability
            <br />
            <span className="text-muted-foreground">Intelligence.</span>
          </>
        }
        lede="Health rarely changes suddenly. Routine shifts first. Mirrorfolio learns what normal looks like for one person, then notices when it drifts."
        action={
          <>
            <WaitlistCta />
            <Link
              href="/ecosystem"
              className="mono-label border border-border bg-background px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
            >
              See the devices ↗
            </Link>
          </>
        }
        proof={proofLine}
      />

      <section className="border-b border-border">
        <SectionRail index="P.1" label="What routine stability is" />
        <HeadlineRow
          headline={
            <>
              Baseline is normal.
              <br />
              Drift is change.
              <br />
              <span className="text-muted-foreground">Neither is a diagnosis.</span>
            </>
          }
          body="Mirrorfolio doesn't diagnose and doesn't treat. It gives early visibility into behavioural change, so that the people who can act have time to act."
        />
      </section>

      <section className="border-b border-border">
        <SectionRail index="P.2" label="How the baseline forms" />
        <CellGrid items={baseline} cols={3} />
      </section>

      <section className="border-b border-border">
        <SectionRail index="P.3" label="What drift looks like" />
        <CellGrid items={drift} />
      </section>

      <section className="border-b border-border">
        <SectionRail index="P.4" label="The caregiver view" />
        <CellGrid items={view} />
      </section>

      <section className="border-b border-border bg-ink text-ink-foreground">
        <SectionRail index="P.5" label="Privacy by design" invert />
        <HeadlineRow
          invert
          headline={
            <>
              On-device intelligence.
              <br />
              <span className="text-ink-foreground/50">No cloud dependency.</span>
            </>
          }
          body="No video. No audio. Learning happens inside the home on the device itself, and works without connectivity. The family decides what is shared, and with whom."
        />
      </section>

      <CTA />
    </>
  );
}
