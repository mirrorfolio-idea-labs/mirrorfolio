"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function PilotOrientationSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent/8 via-accent/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <FadeIn delay={0.1}>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              Join the pilot
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-foreground mb-12">
              Pilot
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-body-lg text-foreground leading-relaxed mb-6">
              Mirrorfolio is not a finished consumer product.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-body text-muted-foreground leading-relaxed mb-16">
              We&apos;re starting with a small number of households to learn
              carefully, validate assumptions, and earn intelligence before
              broader availability.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body-lg text-foreground leading-relaxed pl-6">
                The pilot is paid because it is real, deliberate work —
                <span className="block mt-2 text-muted-foreground text-body">
                  not an experiment on your family.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
