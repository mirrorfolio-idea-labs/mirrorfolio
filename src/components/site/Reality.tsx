import { CellGrid, HeadlineRow, SectionRail } from "./Section";

const assumptions = [
  { k: "Wear it", t: "Nothing to wear", b: "Devices left in drawers don't measure anything." },
  { k: "Charge it", t: "Nothing to charge", b: "A flat battery is a blind spot in the record." },
  { k: "Open it", t: "No app to open", b: "Daily check-ins fade within the first fortnight." },
  { k: "Report it", t: "No symptom diary", b: "Self-reporting asks the most from those with the least energy." },
];

export function Reality() {
  return (
    <section className="border-b border-border">
      <SectionRail index="02" label="Why it persists" note="Adoption, not ambition" />
      <HeadlineRow
        headline={
          <>
            Most solutions ask
            <br />
            <span className="text-muted-foreground">
              the patient to do
              <br />
              something new.
            </span>
          </>
        }
        body="Wear it. Charge it. Open the app. Accept a camera in the room. For an older adult, that effort wears thin and the monitoring is slowly abandoned. We think understanding recovery is the caretaker's job, not the patient's, so Mirrorfolio asks nothing of them."
      />
      <CellGrid items={assumptions} />
    </section>
  );
}
