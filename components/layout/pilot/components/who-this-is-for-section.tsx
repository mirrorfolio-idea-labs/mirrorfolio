"use client";

import { FadeIn } from "@/components/ui/fade-in";

const forItems = [
  "You are an adult child living away from aging parents",
  "You have had a recent scare or near-miss",
  "Your parents are still mostly independent",
  "Your family wants awareness without surveillance",
];

const notForItems = [
  "You need emergency response systems",
  "You expect continuous monitoring",
  "Your family wants guarantees or medical outcomes",
  "Your situation requires active clinical supervision",
];

export function WhoThisIsForSection() {
  return (
    <section className="bg-card relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <FadeIn className="mb-12">
          <h2 className="font-serif text-display-sm text-foreground mb-16 max-w-lg">
            Who this is for
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* For — emphasized */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <p className="text-micro uppercase tracking-widest text-accent mb-10">
                This is for you if
              </p>
              <ul className="py-6">
                {forItems.map((item, i) => (
                  <li
                    key={i}
                    className="text-body-lg text-foreground leading-relaxed pl-6 relative"
                  >
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Not for — subdued */}
          <FadeIn delay={0.25}>
            <div className="lg:pt-16">
              <p className="text-micro uppercase tracking-widest text-muted-foreground mb-10">
                This is not for
              </p>
              <ul className="py-5">
                {notForItems.map((item, i) => (
                  <li
                    key={i}
                    className="text-body text-muted-foreground leading-relaxed pl-6 relative"
                  >
                    <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-border" />
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
