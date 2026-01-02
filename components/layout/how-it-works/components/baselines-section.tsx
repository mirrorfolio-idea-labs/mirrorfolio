"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function BaselinesSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-heading text-foreground mb-12">
              Learning what &ldquo;normal&rdquo; looks like
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-6">
              Every home is different.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-body-lg text-foreground leading-relaxed mb-10">
              Every person&apos;s routine is different.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-muted-foreground leading-relaxed mb-10">
              Mirrorfolio starts by quietly learning what <em>normal</em> looks
              like{" "}
              <strong className="font-medium text-foreground">
                in that specific home
              </strong>
              , over time.
            </p>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.3}>
              <p className="text-body text-foreground leading-relaxed">
                There are no universal thresholds.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p className="text-body text-foreground leading-relaxed">
                There are no predefined rules.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.45}>
            <p className="text-body text-muted-foreground leading-relaxed mt-10">
              Changes are understood only{" "}
              <strong className="font-medium text-foreground">
                in relation to that home&apos;s own history
              </strong>
              .
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
