import { CellGrid, HeadlineRow, SectionRail } from "./Section";

const roadmap = [
  { k: "Prove", t: "18 months", b: "Supervised real-world validation, in gated pilot waves of 50 households." },
  { k: "Convert", t: "Hospital pilot", b: "Hospital interest into LOIs and a paid pilot, which sets up the seed round." },
  { k: "Scale", t: "Kerala, then beyond", b: "Hospital chains refer at discharge, then direct to households." },
];

export function Vision() {
  return (
    <section className="border-b border-border">
      <SectionRail index="09" label="Where we're headed" note="One household at a time" />
      <HeadlineRow
        headline={
          <>
            Healthcare should become
            <br />
            <span className="text-muted-foreground">
              ambient, proactive
              <br />
              and invisible.
            </span>
          </>
        }
        body="Today it is post-discharge recovery; tomorrow, chronic disease management, preventive care and ageing in place. We start with hospital discharge desks and expand one household at a time — the intelligence compounds, the care improves, and the fear recedes."
      />
      <CellGrid items={roadmap} cols={3} />
    </section>
  );
}
