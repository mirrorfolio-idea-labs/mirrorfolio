import type { Metadata } from "next";

import { PageHeader, WaitlistCta } from "@/components/site/PageHeader";
import { proofShort } from "@/components/site/proof";
import { CellGrid, HeadlineRow, SectionRail } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { pageMetadata } from "@/lib/metadata";

const title = "For Families — Mirrorfolio";
const description =
  "Know your parent is okay without asking, without cameras, and without turning their home into surveillance. Mirrorfolio watches routine, not people.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/families",
});

const dilemma = [
  {
    k: "Distance",
    t: "You can't be there",
    b: "Work, cities, time zones. Love doesn't shrink the distance.",
  },
  {
    k: "Asking",
    t: "You hate asking",
    b: '"Did you take your tablets?" changes a relationship.',
  },
  {
    k: "Guilt",
    t: "You carry it anyway",
    b: "Every unanswered call becomes a small emergency in your head.",
  },
  {
    k: "Dignity",
    t: "They deserve privacy",
    b: "Independence isn't worth trading for a camera in the hallway.",
  },
];

const help = [
  {
    k: "Learns",
    t: "What normal is",
    b: "A few weeks of quiet observation, unique to your parent.",
  },
  {
    k: "Notices",
    t: "When it changes",
    b: "Medication delayed. Walking reduced. Rest disrupted.",
  },
  {
    k: "Tells you",
    t: "Calmly",
    b: '"Routine is stable" — or "a change was detected". No sirens.',
  },
];

const seen = [
  {
    k: "View 01",
    t: "Routine is stable",
    b: "Most days say nothing more than this. That is the point.",
  },
  {
    k: "View 02",
    t: "A change was detected",
    b: "What changed, when it started, and how unusual it is.",
  },
  {
    k: "View 03",
    t: "Context",
    b: "Whether other signals moved with it, or it stands alone.",
  },
  {
    k: "View 04",
    t: "Controls",
    b: "Who can see what, and what is shared with clinicians.",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        index="F"
        eyebrow="For families"
        title={
          <>
            You&apos;ll know they&apos;re okay
            <br />
            <span className="text-muted-foreground">without having to ask.</span>
          </>
        }
        lede="Mirrorfolio gives families the quiet confidence that a parent's day is unfolding the way it usually does — and tells you early when it isn't."
        action={
          <>
            <WaitlistCta />
          </>
        }
        proof={proofShort}
      />

      <section className="border-b border-border">
        <SectionRail index="F.01" label="The caregiver's dilemma" />
        <CellGrid items={dilemma} />
      </section>

      <section className="border-b border-border">
        <SectionRail index="F.02" label="How Mirrorfolio helps" />
        <HeadlineRow
          headline={
            <>
              It extends presence.
              <br />
              <span className="text-muted-foreground">It doesn&apos;t replace it.</span>
            </>
          }
          body="Nothing to wear. Nothing to charge. Nothing your parent has to remember. The devices sit where life already happens and learn the shape of an ordinary day."
        />
        <CellGrid items={help} cols={3} />
      </section>

      <section className="border-b border-border">
        <SectionRail index="F.03" label="What families see" />
        <CellGrid items={seen} />
      </section>

      <section className="border-b border-border bg-ink text-ink-foreground">
        <SectionRail index="F.04" label="Privacy & trust" invert />
        <HeadlineRow
          invert
          headline={
            <>
              No cameras.
              <br />
              No recordings.
              <br />
              <span className="text-ink-foreground/50">No exceptions.</span>
            </>
          }
          body="Everything is processed inside the home, on the device itself. There is no video and no audio to leak, because none is ever captured. What leaves the home is a human-meaningful state — and only when your family chooses to share it."
        />
      </section>

      <CTA />
    </>
  );
}
