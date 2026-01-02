"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function ParentsSection() {
  return (
    <section className="bg-card relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-heading text-foreground mb-12">
              What this means for parents
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-10">
              Nothing about daily life is changed.
            </p>
          </FadeIn>

          <div className="space-y-4 mb-12">
            <FadeIn delay={0.2}>
              <p className="text-body text-muted-foreground leading-relaxed">
                There is no device to wear.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-body text-muted-foreground leading-relaxed">
                No camera to avoid.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-body text-muted-foreground leading-relaxed">
                No app demanding attention.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <p className="text-body text-foreground leading-relaxed mb-12">
              The home remains a home — not a monitored environment.
            </p>
          </FadeIn>

          {/* Key line */}
          <FadeIn delay={0.5}>
            <div className="pl-6 border-l-2 border-accent/30">
              <p className="text-body-lg text-foreground leading-relaxed">
                Mirrorfolio is designed to be{" "}
                <strong className="font-medium">
                  forgettable when life is normal
                </strong>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
