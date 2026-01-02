"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function FounderOpeningSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent/5 via-accent/2 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <FadeIn delay={0.1}>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              Who decides where the lines are drawn
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-foreground mb-12">
              Founder
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-body-lg text-foreground leading-relaxed mb-4">
              Before trusting a system in your parent&apos;s home,
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
              it&apos;s reasonable to want to know who decided where the lines
              are drawn.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="relative mt-12">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                This page exists for that reason — not to tell a story,
                <span className="block mt-2 text-muted-foreground">
                  but to make our decision-making visible.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
