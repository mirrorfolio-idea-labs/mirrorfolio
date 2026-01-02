"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function HowDecisionsSection() {
  return (
    <section className="relative bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              Judgment signal
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Decisions at Mirrorfolio are made conservatively.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6 mb-12">
              <p className="text-body text-foreground leading-relaxed">
                If there&apos;s uncertainty about whether something helps or
                harms dignity,
                <span className="block text-muted-foreground">
                  we choose not to ship it.
                </span>
              </p>
              <p className="text-body text-foreground leading-relaxed">
                If a feature would reduce anxiety for one family
                <span className="block">
                  but create pressure or control for another,
                </span>
                <span className="block text-muted-foreground">
                  we pause and reconsider.
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                This isn&apos;t because we&apos;re cautious by nature —
                <span className="block mt-2 text-muted-foreground">
                  it&apos;s because the consequences land in real homes.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
