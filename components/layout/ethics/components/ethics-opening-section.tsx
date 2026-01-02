"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function EthicsOpeningSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent/5 via-accent/2 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <FadeIn delay={0.1}>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              Why we stop where we stop
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-foreground mb-12">
              Ethics & Boundaries
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-body-lg text-foreground leading-relaxed mb-4">
              Most products don&apos;t cross lines on day one.
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
              They cross them slowly — one feature at a time.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-body text-foreground leading-relaxed mb-4">
              We&apos;ve learned that if boundaries aren&apos;t clear from the
              start, they eventually disappear.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="relative mt-12">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                This page exists to be explicit about where Mirrorfolio stops —
                <span className="block mt-2 text-muted-foreground">
                  even when stopping is inconvenient.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
