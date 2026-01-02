"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function AboutFounderSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Mirrorfolio is founded and led by someone with a background in
              building systems —
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-12">
              not content, not marketing, not growth hacks.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body text-foreground leading-relaxed mb-6">
              The focus has always been on:
            </p>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  —
                </span>
                <p className="text-body text-foreground">
                  Long-term reliability
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  —
                </span>
                <p className="text-body text-foreground">
                  Avoiding false confidence
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  —
                </span>
                <p className="text-body text-foreground">
                  Designing for edge cases, not demos
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                This product isn&apos;t built to impress quickly.
                <span className="block mt-2 text-muted-foreground">
                  It&apos;s built to be lived with.
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-caption text-muted-foreground mt-12">
              Based in India, building India-first with global intent.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
