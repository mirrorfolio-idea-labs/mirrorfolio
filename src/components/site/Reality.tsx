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
            Every solution asks
            <br />
            <span className="text-muted-foreground">
              the patient to do
              <br />
              something new.
            </span>
          </>
        }
        body="Wear it. Charge it. Open the app. Report your symptoms. Those assumptions fail in real homes — especially for older adults recovering from illness. The devices that get adopted are the ones that disappear into the routine already there."
      />
      <CellGrid items={assumptions} />
    </section>
  );
}
