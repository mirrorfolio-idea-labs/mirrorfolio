"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <p className="text-micro uppercase tracking-widest text-accent mb-8">
              Early visibility for caregivers — without surveillance
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-serif text-display-sm md:text-display lg:text-display-lg text-foreground text-balance mb-10">
              When parents live independently, change rarely announces itself.{" "}
              <span className="italic text-accent">It drifts.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-body-lg text-muted-foreground max-w-xl mb-6">
              Most families only realize something is wrong after a fall, a
              missed medication, or a hospital visit.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-body text-foreground max-w-xl mb-12">
              You want awareness — not cameras, wearables, constant alerts, or a
              home that feels like a hospital.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <Link
              href="/how-it-works"
              className="group inline-flex items-center gap-3 text-body font-medium text-accent hover:text-accent/80 transition-colors duration-200"
            >
              <span className="border-b-2 border-accent/30 group-hover:border-accent pb-1 transition-colors duration-200">
                See how this works
              </span>
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
