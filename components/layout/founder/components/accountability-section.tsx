"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function AccountabilitySection() {
  return (
    <section className="relative bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              Accountability
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Being founder-led here means something specific.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4 mb-12">
              <p className="text-body text-foreground leading-relaxed">
                It means decisions don&apos;t get hidden behind roadmaps or
                press releases.
              </p>
              <p className="text-body text-foreground leading-relaxed">
                It means boundaries don&apos;t get quietly relaxed later.
              </p>
              <p className="text-body text-foreground leading-relaxed">
                It means there&apos;s a person accountable when something feels
                off.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body-lg text-foreground leading-relaxed pl-6">
                If Mirrorfolio ever crosses a line it shouldn&apos;t,
                <span className="block mt-2 text-muted-foreground">
                  that responsibility sits here.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
