"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function ContextSection() {
  return (
    <section className="bg-card relative">
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/20 to-accent/40" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-heading text-foreground mb-12">
              From change to context
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Mirrorfolio does not react to single events.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              A missed action once may mean nothing.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-muted-foreground leading-relaxed mb-10">
              A subtle shift over weeks may mean something.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-body text-foreground leading-relaxed mb-12">
              When changes persist or compound, we surface{" "}
              <strong className="font-medium">context</strong>, not commands.
            </p>
          </FadeIn>

          {/* Clarification */}
          <FadeIn delay={0.4}>
            <div className="border-t border-border pt-10 mb-12">
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                What you receive is not an alert telling you what to do.
              </p>
              <p className="text-body text-foreground leading-relaxed">
                It&apos;s a quiet signal that something may be drifting — with
                possible reasons, not conclusions.
              </p>
            </div>
          </FadeIn>

          {/* Boundary statements */}
          <FadeIn delay={0.5}>
            <div className="space-y-3">
              <p className="text-caption text-muted-foreground">
                Mirrorfolio does not diagnose.
              </p>
              <p className="text-caption text-muted-foreground">
                It does not predict outcomes.
              </p>
              <p className="text-caption text-muted-foreground">
                It does not claim prevention.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
