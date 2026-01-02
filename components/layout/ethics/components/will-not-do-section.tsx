"use client";

import { FadeIn } from "@/components/ui/fade-in";

const refusals = [
  "use cameras or microphones",
  "ask your parent to wear or charge something",
  "record conversations or movements",
  "score, rank, or judge behavior",
  "nudge, remind, or pressure your parent to act",
  "turn daily life into something that feels monitored",
];

export function WillNotDoSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-display-sm text-foreground mb-12">
              What we will not do
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground mb-10">
              Mirrorfolio will never:
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ul className="space-y-4 mb-12">
              {refusals.map((item, i) => (
                <li
                  key={i}
                  className="text-body text-foreground flex items-start gap-4"
                >
                  <span className="text-accent mt-1">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="pt-8 border-t border-border/50">
              <p className="text-body-lg text-foreground">
                If a feature makes a home feel watched,
                <span className="block mt-1 text-accent">
                  we don&apos;t build it.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
