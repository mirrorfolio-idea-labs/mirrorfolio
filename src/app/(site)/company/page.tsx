import type { Metadata } from "next";

import { PageHeader, WaitlistCta } from "@/components/site/PageHeader";
import { proofLine, validationMetrics } from "@/components/site/proof";
import { CellGrid, HeadlineRow, MetricRow, SectionRail } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { pageMetadata } from "@/lib/metadata";

const title = "Company — Mirrorfolio";
const description =
  "Mirrorfolio Idea Labs builds post-discharge recovery monitoring from Kerala, India — 350+ family conversations, 30+ real-home deployments, 8 hardware generations built.";

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
    k: "2024",
    t: "Listening",
    b: "Home visits and conversations with families across India about what actually goes wrong.",
  },
  {
    k: "2025—26",
    t: "Iterating",
    b: "Eight hardware generations built and tested in real homes, not showrooms. A ninth, with contactless physiological sensing, is in development.",
  },
  {
    k: "Now",
    t: "Proving",
    b: "Supervised validation in gated pilot waves of 50 households, with hospital chains in Kerala in discussion.",
  },
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
        lede="Mirrorfolio Idea Labs is building post-discharge recovery monitoring for people over 65, from Kerala, India — for the millions of households where care happens quietly, at home, without help."
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
          body="Hospitals see hours. Families live the weeks in between. We're building the way families and clinicians see that recovery — without cameras, wearables or anything an older adult has to remember."
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
