"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function OrientationSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-card/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display-sm md:text-display text-foreground mb-16">
              How it works
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Most emergencies don&apos;t begin as emergencies.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
              They are preceded by small, quiet changes in daily routines —
              missed once, delayed often, altered slowly.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-body text-foreground leading-relaxed max-w-xl">
              Families usually don&apos;t see these changes in time.
              <br />
              Not because they don&apos;t care — but because distance creates
              blindness.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
