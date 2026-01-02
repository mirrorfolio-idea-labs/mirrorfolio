"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export function FounderClosingSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-body-lg text-foreground leading-relaxed mb-4">
              You don&apos;t need to trust this immediately.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-2 mb-12">
              <p className="text-body text-muted-foreground leading-relaxed">
                Read how it works.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Read the boundaries.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Decide at your own pace.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative mb-16">
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-accent/40" />
              <p className="text-body text-foreground leading-relaxed pl-6">
                If you choose to engage,
                <span className="block mt-2 text-muted-foreground">
                  it should be because this feels measured and sane, not urgent.
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <nav className="pt-8 border-t border-border/50">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-body text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    How it works
                    <span className="text-accent">→</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ethics"
                    className="text-body text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    Ethics & boundaries
                    <span className="text-accent">→</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pilot"
                    className="text-body text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    Pilot
                    <span className="text-accent">→</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-body text-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
                  >
                    Talk to us
                    <span className="text-accent">→</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
