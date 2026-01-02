"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function AfterPilotSection() {
  return (
    <section className="relative bg-card">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Title */}
          <FadeIn className="lg:col-span-4">
            <h2 className="font-serif text-heading text-foreground">
              After the pilot
            </h2>
          </FadeIn>

          {/* Content */}
          <div className="lg:col-span-7 lg:col-start-6">
            <FadeIn delay={0.1}>
              <p className="text-body-lg text-foreground leading-relaxed mb-10">
                At the end of 6 months, you decide whether to continue.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4 mb-12">
                <p className="text-body text-foreground flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  You keep the starter kit, or you can expand the touch points
                  
                </p>
                <p className="text-body text-foreground flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  You can continue with a modest monthly fee
                </p>
                <p className="text-body text-foreground flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  You can pause or stop with no penalty
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="pt-8 border-t border-border/50">
                <p className="text-caption text-muted-foreground">
                  There is no lock-in, no pressure, and no post-incident
                  upselling.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
