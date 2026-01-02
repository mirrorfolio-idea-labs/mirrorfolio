"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function ResponsibilitySection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-display-sm text-foreground mb-10">
              What we are not responsible for
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-10">
              Mirrorfolio is not responsible for outcomes.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-3 mb-12">
              <p className="text-body text-muted-foreground">
                It doesn&apos;t prevent emergencies.
              </p>
              <p className="text-body text-muted-foreground">
                It doesn&apos;t guarantee safety.
              </p>
              <p className="text-body text-muted-foreground">
                It doesn&apos;t replace medical care or family judgment.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                Its role is limited by design —
                <span className="block mt-2 text-muted-foreground">
                  to reduce blindness, not eliminate risk.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
