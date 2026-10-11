import Link from "next/link";
import { CellGrid, HeadlineRow, SectionRail } from "./Section";

const places = [
  { k: "Bedside", t: "Rest", b: "When the day begins and how the night went." },
  { k: "Cabinet", t: "Medication", b: "Presence and timing — never pill counting." },
  { k: "Kitchen", t: "Meals", b: "Whether a meal happened, not what was eaten." },
  { k: "Room", t: "Physiology", b: "Breathing and heart rhythm, from across the room. In development." },
];

export function HowItLearns() {
  return (
    <section className="border-b border-border bg-ink text-ink-foreground">
      <SectionRail
        index="04"
        label="How it learns"
        note="On the hub · No audio or video"
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
        body="Small, quiet devices sit where life already happens — the bedside, the medicine cabinet, the kitchen — and sense movement, presence and interaction, and our next generation adds contactless sensing of breathing and heart rhythm. No audio or video, ever: the intelligence runs on the hub inside the home, and nothing leaves it unless the family chooses to share."
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
