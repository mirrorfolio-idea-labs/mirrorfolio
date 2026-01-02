"use client";

import { FadeIn } from "@/components/ui/fade-in";

const escalationTraits = [
  "contextual",
  "rare",
  "based on what is drifting and why it matters",
];

export function EscalationLimitsSection() {
  return (
    <section className="bg-card relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-display-sm text-foreground mb-10">
              Escalation has limits
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body text-foreground leading-relaxed mb-10">
              Some situations carry more weight than others.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-body text-muted-foreground leading-relaxed mb-10">
              For example, missing a time-sensitive medication is different from
              a routine happening later than usual.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-foreground mb-6">
              In those cases, escalation is:
            </p>
            <ul className="space-y-3 mb-12">
              {escalationTraits.map((item, i) => (
                <li
                  key={i}
                  className="text-body text-foreground flex items-start gap-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="pt-8 border-t border-border/50">
              <p className="text-body-lg text-foreground">
                Even then, Mirrorfolio <strong>informs</strong> — it does not
                instruct.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
