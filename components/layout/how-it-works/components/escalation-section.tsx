"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function EscalationSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-heading text-foreground mb-12">
              When silence is broken
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-body-lg text-foreground leading-relaxed mb-8">
              Most of the time, Mirrorfolio stays silent.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body text-muted-foreground leading-relaxed mb-10">
              But not all changes carry the same weight.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-body text-foreground leading-relaxed mb-6">
              Some situations — such as time-sensitive medications — require
              greater care. In these cases, escalation is{" "}
              <strong className="font-medium">contextual</strong>, deliberate,
              and rare.
            </p>
          </FadeIn>

          {/* Important qualifier */}
          <FadeIn delay={0.4}>
            <div className="pl-6 border-l-2 border-accent/30 my-12">
              <p className="text-body text-muted-foreground italic leading-relaxed">
                Escalation is based on{" "}
                <strong className="font-medium text-foreground not-italic">
                  what is being missed and why it matters
                </strong>
                ,
                <br />
                not on activity volume or compliance rules.
              </p>
            </div>
          </FadeIn>

          {/* Boundary */}
          <FadeIn delay={0.5}>
            <p className="text-caption text-muted-foreground">
              Even then, Mirrorfolio informs — it does not instruct.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
