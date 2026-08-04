import Link from "next/link";
import { CellGrid, HeadlineRow, SectionRail } from "./Section";

const layers = [
  { k: "Baseline", t: "What normal is", b: "Weeks of quiet observation build a routine unique to one person." },
  { k: "Drift", t: "When it changes", b: "Breakfast skipped. Medication delayed. Walking reduced." },
  { k: "Context", t: "Why it matters", b: "One signal is noise. Several together are meaningful." },
  { k: "Signal", t: "Who hears it", b: "Family first. Clinicians when the family chooses to share." },
];

export function Solution() {
  return (
    <section className="border-b border-border">
      <SectionRail
        index="03"
        label="Routine Stability Intelligence"
        note="Baseline · Drift · Context"
      />
      <HeadlineRow
        headline={
          <>
            We don&apos;t monitor health.
            <br />
            <span className="text-muted-foreground">
              We understand routine.
            </span>
          </>
        }
        body="Mirrorfolio builds a behavioural baseline unique to each person — when they wake, how they move through their home, whether they took their medication, how they slept. When that routine drifts, it means something. And you'll know before the phone call you dread."
      />
      <CellGrid items={layers} />
      <div className="border-t border-border p-5 md:p-8">
        <Link
          href="/ecosystem"
          className="mono-label border border-border px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
        >
          Meet the devices ↗
        </Link>
      </div>
    </section>
  );
}
