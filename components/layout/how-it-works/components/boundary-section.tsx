"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function BoundarySection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark inverted section for weight */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-heading text-primary-foreground mb-12">
              Where this stops
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-primary-foreground leading-relaxed mb-10">
              Mirrorfolio does not replace family, doctors, or judgment.
            </p>
          </FadeIn>

          <div className="space-y-4 mb-10">
            <FadeIn delay={0.2}>
              <p className="text-body text-primary-foreground/80 leading-relaxed">
                It does not guarantee safety.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-body text-primary-foreground/80 leading-relaxed">
                It does not promise prevention.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-body text-primary-foreground/80 leading-relaxed">
                It does not claim outcomes.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <p className="text-body text-primary-foreground leading-relaxed">
              Its role is limited, deliberate, and defined.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
