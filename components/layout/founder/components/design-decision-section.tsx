"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function DesignDecisionSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              The key decision
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body text-muted-foreground leading-relaxed mb-8">
              Mirrorfolio is built around a simple decision:
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="my-12 py-8 border-l-2 border-accent/40 pl-8">
              <p className="font-serif text-display-sm text-foreground leading-tight">
                If awareness requires taking away dignity,
                <span className="block mt-2 text-muted-foreground">
                  it&apos;s not worth building.
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-body text-foreground leading-relaxed mb-4">
              That decision shapes everything —
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-8">
              what we build, what we refuse, and what we stay silent about.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-body text-foreground leading-relaxed">
              It also means the product grows slower,
              <span className="block">learns carefully,</span>
              <span className="block text-muted-foreground mt-2">
                and avoids features that would make things &quot;look
                impressive&quot; at the cost of trust.
              </span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
