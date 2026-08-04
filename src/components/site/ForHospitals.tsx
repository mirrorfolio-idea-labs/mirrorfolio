import Link from "next/link";
import { CellGrid, HeadlineRow, SectionRail } from "./Section";
import { proofClinical } from "./proof";

const value = [
  { k: "Readmissions", t: "60-day window", b: "Visibility during the period that decides whether recovery holds." },
  { k: "Evidence", t: "Objective data", b: "Recovery trajectories instead of recalled symptoms." },
  { k: "Timing", t: "Early triggers", b: "Follow-up directed at the households that need it." },
  { k: "Experience", t: "Family confidence", b: "Discharge stops feeling like an ending." },
];

export function ForHospitals() {
  return (
    <section className="border-b border-border">
      <SectionRail index="07" label="For hospitals" note="Continuity of care" />
      <HeadlineRow
        headline={
          <>
            Continuity of care
            <br />
            <span className="text-muted-foreground">
              shouldn&apos;t end at discharge.
            </span>
          </>
        }
        body="Mirrorfolio extends clinical visibility into the home, giving discharge coordinators objective data on how recovery is actually going. Not another monitoring dashboard — a behavioural intelligence layer that fits the workflow you already have."
      />
      <CellGrid items={value} />
      <div className="border-t border-border p-5 md:p-8">
        <Link
          href="/hospitals"
          className="mono-label border border-border px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
        >
          See the discharge pathway ↗
        </Link>
        <p className="mono-label mt-6 leading-relaxed">{proofClinical}</p>
      </div>
    </section>
  );
}
