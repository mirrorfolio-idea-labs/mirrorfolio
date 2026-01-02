"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function DataSection() {
  return (
    <section className="bg-card relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-display-sm text-foreground mb-10">
              Data, simply explained
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-4">
              Most context stays inside the home.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-12">
              What leaves the home is minimal — only what&apos;s needed to share
              meaningful insights with family.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-3 mb-12">
              <p className="text-body text-foreground">
                We don&apos;t sell data.
              </p>
              <p className="text-body text-foreground">
                We don&apos;t use it for advertising.
              </p>
              <p className="text-body text-foreground">
                We don&apos;t quietly expand scope.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative pt-8">
              <div className="absolute top-0 left-0 w-16 h-px bg-accent/50" />
              <p className="text-body text-foreground">
                If we ever change these rules,
                <span className="text-accent"> this page changes first.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
