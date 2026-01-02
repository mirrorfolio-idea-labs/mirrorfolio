"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Image from "next/image";

const includedItems = [
  { label: "Mirrorfolio Starter Kit", detail: "home pod + 2 companion devices" },
  { label: "Companion app access", detail: "for up to 4 family members" },
  { label: "Pattern learning and contextual insights", detail: "When things matter most" },
  { label: "Guided pilot support", detail: "for 6 months " },
];

export function WhatsIncludedSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        {/* Starter Kit Image — Hero Feature */}

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Title column */}
          <FadeIn className="lg:col-span-4 flex flex-col gap-12">
            <h2 className="font-serif text-heading text-foreground lg:sticky lg:top-24">
              What&apos;s included in the pilot
            </h2>

            <FadeIn className="mb-16 lg:mb-24">
              <div className="relative w-full overflow-hidden rounded-lg bg-card">
                <Image
                  src="/starter-kit.jpg"
                  alt="Mirrorfolio starter kit — home pod and companion devices"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </FadeIn>

          {/* Content column */}
          <div className="lg:col-span-7 lg:col-start-6">
            <FadeIn delay={0.1}>
              <ul className="space-y-0">
                {includedItems.map((item, i = 0) => (
                  <li
                    key={i + 1}
                    className="py-6 border-b border-border/60 first:pt-0"
                  >
                    <span className="text-body-lg text-foreground">
                      {item.label}
                    </span>
                    {item.detail && (
                      <span className="text-body text-muted-foreground ml-2">
                        — {item.detail}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-12 pt-8  border-accent/20">
                <p className="text-body text-muted-foreground leading-relaxed">
                  This is not a bundle of features.
                </p>
                <p className="text-body text-foreground leading-relaxed mt-3">
                  It&apos;s a bounded system designed to learn what matters in{" "}
                  <em>your</em> context.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
