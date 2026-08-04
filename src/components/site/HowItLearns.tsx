import Link from "next/link";
import { CellGrid, HeadlineRow, SectionRail } from "./Section";

const places = [
  { k: "Bedside", t: "Rest", b: "When the day begins and how the night went." },
  { k: "Cabinet", t: "Medication", b: "Presence and timing — never pill counting." },
  { k: "Kitchen", t: "Meals", b: "Whether a meal happened, not what was eaten." },
  { k: "Hallway", t: "Movement", b: "Room transitions and the pace between them." },
];

export function HowItLearns() {
  return (
    <section className="border-b border-border bg-ink text-ink-foreground">
      <SectionRail
        index="04"
        label="How it learns"
        note="On-device · Nothing recorded"
        invert
      />
      <HeadlineRow
        invert
        headline={
          <>
            The home itself
            <br />
            <span className="text-ink-foreground/50">becomes the observer.</span>
          </>
        }
        body="Small, quiet devices sit where life already happens — the bedside, the medicine cabinet, the kitchen — and sense movement, presence and interaction. No video, no sound: everything is processed on the device, nothing is recorded, and nothing leaves the home unless the family chooses to share it."
      />
      <CellGrid items={places} invert />
      <div className="border-t border-ink-foreground/15 p-5 md:p-8">
        <Link
          href="/privacy"
          className="mono-label border border-ink-foreground/25 px-6 py-4 text-ink-foreground transition-colors hover:bg-ink-foreground/10"
        >
          See what stays in the home ↗
        </Link>
      </div>
    </section>
  );
}
