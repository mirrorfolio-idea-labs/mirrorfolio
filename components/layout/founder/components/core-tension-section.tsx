"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function CoreTensionSection() {
  return (
    <section className="relative bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Almost every existing solution pushed families into a corner:
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="my-12 py-6">
              <p className="text-heading font-serif text-foreground leading-relaxed">
                Either watch more closely,
              </p>
              <p className="text-heading font-serif text-muted-foreground leading-relaxed">
                or accept that you&apos;ll only find out after something goes
                wrong.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-foreground leading-relaxed mb-4">
              Cameras, wearables, constant alerts —
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-8">
              they solve visibility by creating surveillance.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body-lg text-foreground leading-relaxed pl-6">
                For many families, that trade-off felt wrong.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
