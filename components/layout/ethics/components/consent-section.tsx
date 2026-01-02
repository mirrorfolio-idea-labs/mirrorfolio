"use client";

import { FadeIn } from "@/components/ui/fade-in";

const consentMeans = [
  "they know something exists",
  "they know what it does and what it doesn't",
  "they don't feel watched, tricked, or managed",
];

export function ConsentSection() {
  return (
    <section className="bg-card relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-display-sm text-foreground mb-10">
              Consent, as it actually works
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-10">
              Mirrorfolio is not something you secretly install.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-body text-foreground leading-relaxed mb-2">
              Caregivers give <strong>informed consent</strong>.
            </p>
            <p className="text-body text-foreground leading-relaxed mb-10">
              Parents give <strong>clear, ethical assent</strong>.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-muted-foreground mb-6">That means:</p>
            <ul className="space-y-4 mb-12">
              {consentMeans.map((item, i) => (
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
            <div className="relative pt-8">
              <div className="absolute top-0 left-0 w-16 h-px bg-accent/50" />
              <p className="text-body-lg text-foreground">
                If assent isn&apos;t real, we don&apos;t proceed.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
