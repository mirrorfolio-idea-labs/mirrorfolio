"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function YourRightsSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              Your rights
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Your data belongs to you. These rights are non-negotiable.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  →
                </span>
                <div>
                  <p className="text-body text-foreground font-medium">
                    Right to access
                  </p>
                  <p className="text-body text-muted-foreground">
                    Request a copy of all data we hold about you at any time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  →
                </span>
                <div>
                  <p className="text-body text-foreground font-medium">
                    Right to correction
                  </p>
                  <p className="text-body text-muted-foreground">
                    Update or correct any inaccurate information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  →
                </span>
                <div>
                  <p className="text-body text-foreground font-medium">
                    Right to deletion
                  </p>
                  <p className="text-body text-muted-foreground">
                    Request complete deletion of your data. We comply within 30
                    days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  →
                </span>
                <div>
                  <p className="text-body text-foreground font-medium">
                    Right to portability
                  </p>
                  <p className="text-body text-muted-foreground">
                    Export your data in a standard, machine-readable format.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-caption mt-0.5">
                  →
                </span>
                <div>
                  <p className="text-body text-foreground font-medium">
                    Right to withdraw consent
                  </p>
                  <p className="text-body text-muted-foreground">
                    Stop using Mirrorfolio at any time. No lock-in, no friction.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                To exercise any of these rights, contact us.
                <span className="block mt-2 text-muted-foreground">
                  We respond within 48 hours.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
