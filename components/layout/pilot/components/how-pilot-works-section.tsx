"use client";

import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  { num: "01", text: "You apply and share basic context" },
  { num: "02", text: "We confirm fit and expectations" },
  { num: "03", text: "The starter setup is installed at home" },
  { num: "04", text: "The system learns quietly over time" },
  { num: "05", text: "You receive contextual insights when patterns shift" },
  { num: "06", text: "We review learnings together during the pilot" },
];

export function HowPilotWorksSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <FadeIn>
          <h2 className="font-serif text-display-sm text-foreground mb-16 max-w-md">
            How the pilot works
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.05}>
              <div className="group">
                <p className="text-accent font-mono text-caption mb-4">
                  {step.num}
                </p>
                <p className="text-body text-foreground leading-relaxed group-hover:text-accent transition-colors duration-300">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-20 max-w-xl">
            <div className="h-px bg-accent/20 mb-8" />
            <p className="text-body-lg text-foreground">
              Most days, nothing happens —{" "}
              <span className="text-muted-foreground">
                and that&apos;s intentional.
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
