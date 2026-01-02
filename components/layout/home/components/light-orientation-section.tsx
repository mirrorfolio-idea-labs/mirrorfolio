"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function LightOrientationSection() {
  return (
    <section className="bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <FadeIn className="lg:col-span-4" direction="left">
            <h2 className="font-serif text-heading text-foreground">
              What this is
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6" delay={0.15}>
            <p className="font-serif text-display-sm text-foreground leading-snug text-balance">
              A way to notice{" "}
              <span className="text-accent">meaningful changes</span> in daily
              routines over time, without watching people or directing behavior.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
