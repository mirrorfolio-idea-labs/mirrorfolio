"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function AttentionSection() {
  return (
    <section className="bg-card relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-heading text-foreground mb-12">
              What we pay attention to
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Mirrorfolio pays attention to{" "}
              <strong className="font-medium">
                patterns around daily life
              </strong>
              , not people themselves.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-muted-foreground leading-relaxed mb-12">
              We look at how certain household objects are used over time —
              whether routines stay consistent, drift gradually, or change
              meaningfully.
            </p>
          </FadeIn>

          {/* The refusals - trust-defining */}
          <div className="border-t border-border pt-12 py-6">
            <FadeIn delay={0.3}>
              <p className="text-body text-foreground leading-relaxed">
                We do not watch individuals.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p className="text-body text-foreground leading-relaxed">
                We do not record behavior.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-body text-foreground leading-relaxed">
                We do not listen, see, or track movement.
              </p>
            </FadeIn>
          </div>

          {/* Critical boundary statement */}
          <FadeIn delay={0.5}>
            <div className="mt-16 pl-6 border-l-2 border-accent/30">
              <p className="text-body text-muted-foreground italic leading-relaxed">
                If something cannot be understood through quiet consistency over
                time, we choose not to observe it.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
