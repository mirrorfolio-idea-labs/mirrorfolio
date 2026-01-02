"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function CaregiversSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-heading text-foreground mb-12">
              What this means for caregivers
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-4">
              You don&apos;t gain control.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-body-lg text-foreground leading-relaxed mb-10">
              You gain{" "}
              <strong className="font-medium">
                visibility without intrusion
              </strong>
              .
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              You are not asked to watch dashboards or respond constantly.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-body text-foreground leading-relaxed mb-12">
              You are given context when context actually matters.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="pl-6 border-l-2 border-accent/30">
              <p className="text-body text-muted-foreground italic leading-relaxed">
                Most of the time, nothing appears — and that is intentional.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
