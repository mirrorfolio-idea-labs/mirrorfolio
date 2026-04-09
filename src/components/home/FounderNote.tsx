import { motion } from "framer-motion";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FounderNote() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 md:py-36 bg-warm-cream">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-statement-medium text-primary mb-8 tracking-[0.08em] uppercase">
            From the founder
          </p>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-sentence text-foreground leading-snug mb-8">
            "I started building Mirrorfolio after losing my grandfather to the very problem I was trying to solve. 
            The slow drift no one noticed — a skipped pill, a missed walk — until it was too late."
          </blockquote>
          <p className="font-statement text-muted-foreground text-lg leading-[1.8] mb-4">
            I spoke with over 350 families. Tested 8 prototypes in 30 real homes. 
            Every solution on the market asked elders to change something — wear a device, learn an app, accept a camera. 
            None of it felt right.
          </p>
          <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
            So I built something that doesn't ask them to change anything at all.
          </p>
          <div className="flex items-center justify-between mt-8">
            <p className="font-statement-medium text-foreground text-sm">
              — Ahammad Kabeer Hadi, Founder
            </p>
            <Link
              href="/our-story"
              className="text-sm font-statement-medium text-primary hover:text-clay transition-colors"
            >
              Read the full story →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
