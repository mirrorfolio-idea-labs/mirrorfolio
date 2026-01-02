"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function WhatWeCollectSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              What we collect
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              We collect only what&apos;s necessary for the product to work.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-8 mb-12">
              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  Contact information
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Your name, email, and phone number — so we can communicate
                  with you about setup, support, and updates.
                </p>
              </div>

              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  Device activity patterns
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Routine data from the Mirrorfolio device — when it detects
                  activity, not what the activity is. This is how we provide
                  awareness without surveillance.
                </p>
              </div>

              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  Payment information
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Processed securely through Razorpay. We never store card
                  details directly.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                Each piece of data has a clear purpose.
                <span className="block mt-2 text-muted-foreground">
                  If we don&apos;t need it, we don&apos;t ask for it.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
