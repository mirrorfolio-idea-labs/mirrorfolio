"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function CorePrincipleSection() {
  return (
    <section className="bg-card relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-10">
              The core principle
            </p>
          </FadeIn>

          {/* The memorable line — visually prominent */}
          <FadeIn delay={0.15}>
            <blockquote className="relative mb-12">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent" />
              <p className="font-serif text-heading md:text-display-sm text-foreground leading-tight pl-8">
                Mirrorfolio is built to reduce uncertainty —
                <span className="block mt-2">not to create control.</span>
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-body-lg text-foreground leading-relaxed">
              That means helping families notice meaningful changes,
              <span className="block mt-2 text-muted-foreground">
                without watching, tracking, or directing how someone lives.
              </span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
