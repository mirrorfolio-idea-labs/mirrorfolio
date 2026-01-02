"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CAL_BOOKING_URL =
  "https://cal.com/mirrorfolio-kabeerhadi/project-mirrorfolio";

export function ApplySection() {
  return (
    <section className="relative bg-background w-full">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        {/* Section Header */}
        <FadeIn className="mb-16 lg:mb-20">
          <p className="text-micro uppercase tracking-widest text-accent mb-6">
            Join the pilot
          </p>
          <h2 className="font-serif text-display-sm md:text-display text-foreground max-w-lg">
            Let&apos;s talk first
          </h2>
        </FadeIn>

        <div className="flex flex-col w-full lg:flex-row gap-16 lg:gap-24">
          {/* Left — Copy */}
          <div className="lg:w-2/5">
            <FadeIn delay={0.1}>
              <p className="text-body text-muted-foreground leading-relaxed mb-4">
                This isn&apos;t instant checkout.
              </p>
              <p className="text-body-lg text-foreground leading-relaxed mb-12">
                We start with a short conversation to confirm fit — for you and
                for us.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="py-6">
                <p className="text-caption text-muted-foreground uppercase tracking-wider mb-5">
                  What happens next
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-mono text-caption mt-0.5">
                      01
                    </span>
                    <p className="text-body text-foreground">
                      Book a 15-minute call with us
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-mono text-caption mt-0.5">
                      02
                    </span>
                    <p className="text-body text-foreground">
                      We understand your family&apos;s context
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-mono text-caption mt-0.5">
                      03
                    </span>
                    <p className="text-body text-foreground">
                      If it&apos;s a fit, we guide you through next steps
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-caption text-muted-foreground uppercase tracking-wider mb-3">
                  Pilot investment
                </p>
                <p className="font-serif text-display-sm text-foreground">
                  ₹8,499
                </p>
                <p className="text-caption text-muted-foreground mt-2">
                  One-time. 6-month pilot period.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right — Booking CTA */}
          <div className="lg:flex-1 flex flex-col justify-center">
            <FadeIn delay={0.25}>
              <div className="bg-card/50 p-6 border border-border/50 rounded-lg">
                <h3 className="font-serif text-heading text-foreground mb-4">
                  Schedule a conversation
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed mb-8">
                  Pick a time that works for you. We&apos;ll discuss your
                  situation, answer your questions, and help you decide if
                  Mirrorfolio is right for your family.
                </p>

                <div className="space-y-4">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full py-6"
                    asChild
                  >
                    <a
                      href={CAL_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Book a call</span>
                      <span className="text-lg ml-2">→</span>
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="default"
                    className="w-full hover:bg-transparent hover:text-accent"
                    asChild
                  >
                    <Link href="/contact">Prefer to message us instead?</Link>
                  </Button>
                </div>

                
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
