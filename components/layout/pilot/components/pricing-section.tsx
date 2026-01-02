"use client";

import { FadeIn } from "@/components/ui/fade-in";

const covers = [
  "Hardware",
  "Setup and configuration",
  "Ongoing learning and support during the pilot",
  "App access",
];

const doesNotInclude = [
  "Medical services",
  "Emergency response",
  "Outcome guarantees",
];

export function PricingSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Warm highlight background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        {/* Price Hero — Full Width */}
        <FadeIn className="mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <p className="text-micro uppercase tracking-widest text-accent mb-8">
              Pilot pricing
            </p>
            <p className="font-serif text-display md:text-display-lg text-foreground mb-3">
              ₹8,499
            </p>
            <p className="text-body-lg text-muted-foreground mb-10">
              One-time for the 6-month pilot
            </p>
            <div className="h-px bg-accent/20 w-24 mb-8" />
            <p className="text-body text-foreground">
              We price the pilot to be serious, but proportionate.
            </p>
          </div>
        </FadeIn>

        {/* Breakdown — Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn delay={0.15}>
            <div>
              <p className="text-micro uppercase tracking-widest text-foreground mb-6">
                What this covers
              </p>
              <ul className="space-y-4">
                {covers.map((item, i) => (
                  <li
                    key={i}
                    className="text-body text-foreground flex items-start gap-4"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="md:pt-0 pt-8 md:border-t-0 border-t border-border/50">
              <p className="text-micro uppercase tracking-widest text-muted-foreground mb-6">
                What it does not include
              </p>
              <ul className="space-y-3">
                {doesNotInclude.map((item, i) => (
                  <li
                    key={i}
                    className="text-caption text-muted-foreground flex items-start gap-4"
                  >
                    <span className="w-1 h-1 rounded-full bg-border mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
