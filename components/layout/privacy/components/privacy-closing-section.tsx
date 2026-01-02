"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export function PrivacyClosingSection() {
  return (
    <section className="relative bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Privacy isn&apos;t a feature we added.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-12">
              It&apos;s a constraint we designed around from the beginning.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative mb-16">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                If something in this policy isn&apos;t clear,
                <span className="block mt-2 text-muted-foreground">
                  ask us. We&apos;ll explain it plainly.
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="pt-8 border-t border-border/50">
              <p className="text-caption text-muted-foreground mb-6">
                Last updated: January 2026
              </p>
              <Link
                href="/contact"
                className="text-body text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                Questions about privacy?
                <span className="text-accent">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
