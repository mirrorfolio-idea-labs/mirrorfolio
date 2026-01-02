"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function LivedProblemSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Mirrorfolio didn&apos;t start as a startup idea.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body text-muted-foreground leading-relaxed mb-12">
              It started from repeated conversations with families who had gone
              through a scare — and then realised how little visibility they had
              before it happened.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-foreground leading-relaxed mb-8">
              Across hundreds of homes, the same pattern kept appearing:
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  —
                </span>
                <p className="text-body text-foreground">
                  Things didn&apos;t fail suddenly
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  —
                </span>
                <p className="text-body text-foreground">
                  Routines drifted quietly
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  —
                </span>
                <p className="text-body text-foreground">
                  Families noticed too late
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                What stood out wasn&apos;t a lack of care.
                <span className="block mt-2 text-muted-foreground">
                  It was a lack of early, non-intrusive awareness.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
