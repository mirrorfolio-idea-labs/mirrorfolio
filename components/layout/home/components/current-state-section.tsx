"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function CurrentStateSection() {
  return (
    <section className="bg-card relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <FadeIn className="lg:col-span-4" direction="left">
            <h2 className="font-serif text-heading text-foreground">
              Where this stands today
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6" delay={0.15}>
            <p className="text-body-lg text-foreground leading-relaxed">
              Mirrorfolio is in an early pilot phase. We&apos;re starting with a
              narrowly scoped household setup and learning carefully before
              broader availability.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
