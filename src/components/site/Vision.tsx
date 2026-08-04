import { CellGrid, HeadlineRow, SectionRail } from "./Section";

const roadmap = [
  { k: "2026", t: "First deployments", b: "Hospital partners and pilot families in Kerala." },
  { k: "2027", t: "Multi-hospital scale", b: "Discharge pathways across networks." },
  { k: "2028", t: "Insurance & expansion", b: "Chronic care, preventive health, ageing in place." },
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
        body="Today it is post-discharge recovery; tomorrow, chronic disease management, preventive care and ageing in place. We start with one hospital network and expand one household at a time — the intelligence compounds, the care improves, and the fear recedes."
      />
      <CellGrid items={roadmap} cols={3} />
    </section>
  );
}
