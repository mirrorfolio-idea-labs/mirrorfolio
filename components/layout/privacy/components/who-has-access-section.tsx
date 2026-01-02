"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function WhoHasAccessSection() {
  return (
    <section className="relative bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              Who has access
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Access to your data is tightly controlled.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-8 mb-12">
              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  You and your designated family members
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  You control who in your family can view activity awareness. No
                  one is added without explicit consent.
                </p>
              </div>

              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  Mirrorfolio support team
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Only when actively troubleshooting an issue you&apos;ve
                  reported. Access is logged and time-limited.
                </p>
              </div>

              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  No one else
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  We don&apos;t share data with advertisers, data brokers, or
                  any third parties for commercial purposes.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                Legal requests are handled carefully.
                <span className="block mt-2 text-muted-foreground">
                  We will notify you if legally permitted before sharing
                  anything with authorities.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
