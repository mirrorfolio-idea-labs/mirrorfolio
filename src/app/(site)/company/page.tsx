import type { Metadata } from "next";

import { PageHeader, WaitlistCta } from "@/components/site/PageHeader";
import { proofLine, validationMetrics } from "@/components/site/proof";
import { CellGrid, HeadlineRow, MetricRow, SectionRail } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { pageMetadata } from "@/lib/metadata";

const title = "Company — Mirrorfolio";
const description =
  "Mirrorfolio Idea Labs builds Ambient Care Intelligence from Kerala, India — 350+ family conversations, 30+ real-home validations, Gen 8 hardware.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/company",
});

const beliefs = [
  { k: "B.01", t: "Dignity first", b: "If a system costs someone their privacy, it isn't care." },
  { k: "B.02", t: "Calm by default", b: "Most days should say nothing. Silence is a feature." },
  { k: "B.03", t: "Evidence over claims", b: "We publish what we've validated, not what we hope." },
  { k: "B.04", t: "Homes, not labs", b: "Every iteration was tested where people actually live." },
];

const timeline = [
  {
    k: "2023",
    t: "Listening",
    b: "Conversations with families across India about what actually goes wrong.",
  },
  {
    k: "2024—25",
    t: "Iterating",
    b: "Nine hardware generations, tested in real homes, not showrooms.",
  },
  { k: "2026", t: "Deploying", b: "First hospital partnerships and pilot households." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        index="A"
        eyebrow="Company"
        title={
          <>
            We started by
            <br />
            <span className="text-muted-foreground">listening to families.</span>
          </>
        }
        lede="Mirrorfolio Idea Labs is building Ambient Care Intelligence from Kerala, India — for the millions of households where care happens quietly, at home, without help."
        action={
          <>
            <WaitlistCta />
          </>
        }
        proof={proofLine}
      />

      <section className="border-b border-border">
        <SectionRail index="A.1" label="Why we exist" />
        <HeadlineRow
          headline={
            <>
              The most important
              <br />
              part of recovery
              <br />
              <span className="text-muted-foreground">is unobserved.</span>
            </>
          }
          body="Hospitals see hours. Families live the weeks in between. We're building the layer that connects them — without cameras, wearables or anything an older adult has to remember."
        />
      </section>

      <section className="border-b border-border">
        <SectionRail index="A.2" label="What we believe" />
        <CellGrid items={beliefs} />
      </section>

      <section className="border-b border-border">
        <SectionRail index="A.3" label="How we got here" />
        <CellGrid items={timeline} cols={3} />
        <MetricRow items={validationMetrics} />
      </section>

      <CTA />
    </>
  );
}
