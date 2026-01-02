"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function WhatWeDontCollectSection() {
  return (
    <section className="relative bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              What we don&apos;t collect
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              This list matters more than what we do collect.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  ✕
                </span>
                <p className="text-body text-foreground">
                  No video or audio recordings — ever
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  ✕
                </span>
                <p className="text-body text-foreground">
                  No location tracking of your parent
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  ✕
                </span>
                <p className="text-body text-foreground">No biometric data</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  ✕
                </span>
                <p className="text-body text-foreground">
                  No data sold to third parties — not now, not ever
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                These aren&apos;t features we haven&apos;t built yet.
                <span className="block mt-2 text-muted-foreground">
                  They&apos;re lines we&apos;ve decided not to cross.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
