import type { Metadata } from "next";

import { PageHeader, HospitalCta } from "@/components/site/PageHeader";
import { proofClinical } from "@/components/site/proof";
import { CellGrid, HeadlineRow, SectionRail } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { pageMetadata } from "@/lib/metadata";

const title = "For Hospitals — Mirrorfolio";
const description =
  "Extend clinical visibility past discharge. Objective recovery data, early intervention triggers, and lower 60-day readmissions — without another dashboard.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/hospitals",
});

const gap = [
  {
    k: "H.01",
    t: "Discharge is a cliff",
    b: "Continuous monitoring stops the moment the patient goes home.",
  },
  {
    k: "H.02",
    t: "Follow-up is blind",
    b: "Reviews rely on recall, weeks after the change began.",
  },
  {
    k: "H.03",
    t: "Risk is uneven",
    b: "The households that need attention look like the ones that don't.",
  },
];

const clinical = [
  {
    k: "01",
    t: "Reduced 60-day readmissions",
    b: "Attention directed where recovery is drifting.",
  },
  { k: "02", t: "Objective recovery data", b: "Behavioural trajectories between appointments." },
  {
    k: "03",
    t: "Early intervention triggers",
    b: "A signal days before a presentation, not after.",
  },
  { k: "04", t: "Family satisfaction", b: "Discharge stops feeling like abandonment." },
];

const deployment = [
  {
    k: "D.01",
    t: "Discharge pathway",
    b: "Enrolment happens at discharge, inside existing workflow.",
  },
  { k: "D.02", t: "Home setup", b: "Devices are placed in minutes. No installation, no wiring." },
  { k: "D.03", t: "Coordinator view", b: "A cohort-level read of which recoveries are stable." },
  { k: "D.04", t: "Consent-first", b: "The family controls what the care team can see." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        index="H"
        eyebrow="For hospitals"
        title={
          <>
            Continuity of care
            <br />
            <span className="text-muted-foreground">doesn&apos;t end at discharge.</span>
          </>
        }
        lede="Mirrorfolio is a behavioural intelligence layer for the recovery period — the weeks after discharge when clinical visibility disappears and readmission risk peaks."
        action={
          <>
            <HospitalCta primary />
          </>
        }
        proof={proofClinical}
      />

      <section className="border-b border-border">
        <SectionRail index="H.1" label="The discharge gap" />
        <CellGrid items={gap} cols={3} />
      </section>

      <section className="border-b border-border">
        <SectionRail index="H.2" label="Clinical value" />
        <HeadlineRow
          headline={
            <>
              Not another dashboard.
              <br />
              <span className="text-muted-foreground">A read on recovery.</span>
            </>
          }
          body="Mirrorfolio reports routine stability, not raw signal. Care teams see whether recovery is holding, and where it is drifting — with the context to know which changes matter."
        />
        <CellGrid items={clinical} />
      </section>

      <section className="border-b border-border bg-ink text-ink-foreground">
        <SectionRail index="H.3" label="Deployment model" invert />
        <CellGrid items={deployment} invert />
      </section>

      <CTA />
    </>
  );
}
