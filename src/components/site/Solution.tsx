import Link from "next/link";
import { CellGrid, HeadlineRow, SectionRail } from "./Section";

const layers = [
  { k: "Baseline", t: "What normal is", b: "Weeks at home build a picture of normal for one person." },
  { k: "Drift", t: "When it changes", b: "Breathing and rest shift. Breakfast skipped. Medication delayed." },
  { k: "Context", t: "Why it matters", b: "One signal is noise. Physiology and routine together are meaningful." },
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
            Routine and physiology,
            <br />
            <span className="text-muted-foreground">
              read together.
            </span>
          </>
        }
        body="Vital signs describe a body at a moment. Routine shows the pattern across weeks. Mirrorfolio reads both, contactlessly, and builds a baseline unique to each person — how they breathe at rest, when they wake, how they move through their home, whether they took their medication. When that pattern drifts, it means something. And you'll know before the phone call you dread."
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
