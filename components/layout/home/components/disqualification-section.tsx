"use client";

import { FadeIn, FadeInStagger, fadeInVariant } from "@/components/ui/fade-in";
import { motion } from "framer-motion";

export function DisqualificationSection() {
  const disqualifications = [
    "Not a health app",
    "Not surveillance or monitoring",
    "Not cameras or wearables",
    "Not constant alerts",
    "Not turning a home into a hospital",
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <FadeIn className="lg:col-span-4" direction="left">
            <h2 className="font-serif text-heading text-primary-foreground">
              What this is not
            </h2>
          </FadeIn>
          <div className="lg:col-span-7 lg:col-start-6">
            <FadeInStagger staggerDelay={0.08}>
              <ul className="py-5">
                {disqualifications.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInVariant}
                    className="text-body-lg text-primary-foreground/85 flex items-start gap-4 border-b border-primary-foreground/10 pb-5"
                  >
                    <span className="text-accent text-caption font-medium mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
