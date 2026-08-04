import Link from "next/link";
import { MetricRow, SectionRail } from "./Section";
import { validationMetrics } from "./proof";

export function Validation() {
  return (
    <section className="border-b border-border">
      <SectionRail index="08" label="Built from real homes" note="India · 2023—2026" />

      <div className="grid md:grid-cols-4">
        <div className="border-b border-border p-5 md:col-span-2 md:border-b-0 md:border-r md:p-8">
          <h2 className="display-caps text-[clamp(1.8rem,3.4vw,3rem)]">
            We didn&apos;t build this
            <br />
            <span className="text-muted-foreground">in a lab.</span>
          </h2>
        </div>
        <div className="p-5 md:col-span-2 md:p-8">
          <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            We built it in living rooms, bedrooms and kitchens across India — with families who told
            us what actually matters, and with elderly users who showed us which devices get
            unplugged and which ones get forgotten.
          </p>
        </div>
      </div>

      <MetricRow items={validationMetrics} />

      <div className="border-t border-border p-5 md:p-8">
        <Link
          href="/company"
          className="mono-label border border-border px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
        >
          Meet the team behind it ↗
        </Link>
      </div>
    </section>
  );
}
