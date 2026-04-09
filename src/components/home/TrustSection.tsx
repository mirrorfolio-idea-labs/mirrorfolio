import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Eye, Heart } from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, text: "No data selling" },
  { icon: Eye, text: "No cameras ever" },
  { icon: Heart, text: "Made in India" },
];

export default function TrustSection() {
  const { ref: sectionRef, isInView } = useScrollReveal();

  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-statement-medium text-primary mb-4 tracking-[0.08em] uppercase">Trust</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground leading-tight mb-6">
            Built on trust,{" "}
            <span className="text-primary">not surveillance.</span>
          </h2>
        </motion.div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-statement-medium text-foreground">
                  {badge.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
