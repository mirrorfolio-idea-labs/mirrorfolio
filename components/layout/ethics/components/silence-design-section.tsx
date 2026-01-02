"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function SilenceDesignSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-display-sm text-foreground mb-10">
              Silence is a design choice
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              Many systems prove their value by interrupting you.
            </p>
            <p className="text-body-lg text-foreground leading-relaxed mb-10">
              Mirrorfolio does the opposite.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-foreground leading-relaxed mb-4">
              When nothing meaningful changes, it stays silent —
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-12">
              because noise creates anxiety, not clarity.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                We would rather miss a weak signal
                <span className="block mt-2 text-muted-foreground">
                  than surface something misleading.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
