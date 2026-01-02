"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export function EthicsClosingSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark, serious treatment */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl mb-20">
          <FadeIn>
            <p className="text-body-lg text-primary-foreground leading-relaxed mb-6">
              These boundaries are not flexible.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body text-primary-foreground/70 leading-relaxed mb-2">
              They make the product harder to build —
            </p>
            <p className="text-body text-primary-foreground/70 leading-relaxed mb-10">
              and the business slower to grow.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body-lg text-primary-foreground">
              We accept that tradeoff.
            </p>
          </FadeIn>
        </div>

        {/* Navigation */}
        <FadeIn delay={0.3}>
          <div className="pt-12 border-t border-primary-foreground/20">
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/how-it-works"
                className="group text-body text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2"
              >
                How it works
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <Link
                href="/pilot"
                className="group text-body text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2"
              >
                Pilot
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="group text-body text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2"
              >
                Talk to us
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
