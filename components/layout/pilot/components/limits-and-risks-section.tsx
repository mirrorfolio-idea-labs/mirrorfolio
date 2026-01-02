"use client";

import { FadeIn } from "@/components/ui/fade-in";

const truths = [
  "This is not prevention",
  "This is not diagnosis",
  "This does not replace judgment or care",
  "False positives are actively avoided, not eliminated",
  "Silence is preferred over wrong insight",
];

export function LimitsAndRisksSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark, serious treatment */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl ">
          <FadeIn className="mb-12">
            <p className="text-micro uppercase tracking-widest text-accent mb-8">
              Before you join
            </p>
            <h2 className="font-serif text-display-sm text-primary-foreground mb-16">
              What to understand
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ul className="py-6 mb-16">
              {truths.map((item, i) => (
                <li
                  key={i}
                  className="text-body font-semibold pb-3 text-primary-foreground leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative pt-8">
              <div className="absolute top-0 left-0 w-16 h-px bg-accent/50" />
              <p className="text-body-lg text-primary-foreground leading-relaxed">
                If you&apos;re looking for certainty,
                <span className="block mt-1 text-primary-foreground/60">
                  this will disappoint you.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
