"use client";

import { FadeIn } from "@/components/ui/fade-in";

const whyWeCharge = [
  "avoid advertising incentives",
  "avoid growth-at-any-cost decisions",
  'say "no" when saying "yes" would break trust',
];

export function WhyPaidSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-display-sm text-foreground mb-10">
              Why this costs money
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-4">
              Mirrorfolio isn&apos;t free — intentionally.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-12">
              Free products are often paid for with attention, data, or
              pressure.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-foreground mb-6">
              We charge so we can:
            </p>
            <ul className="space-y-4 mb-8">
              {whyWeCharge.map((item, i) => (
                <li
                  key={i}
                  className="text-body text-foreground flex items-start gap-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
