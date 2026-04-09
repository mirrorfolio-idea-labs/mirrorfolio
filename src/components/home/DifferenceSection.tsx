import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X, Check } from "lucide-react";

const comparisons = [
  { feature: "Cameras in the home", others: true, mirrorfolio: false },
  { feature: "Wearable devices", others: true, mirrorfolio: false },
  { feature: "Smartphone required for elder", others: true, mirrorfolio: false },
  { feature: "Changes to their routine", others: true, mirrorfolio: false },
  { feature: "Cognitive load on elder", others: true, mirrorfolio: false },
  { feature: "Respects their dignity", others: false, mirrorfolio: true },
  { feature: "Invisible to them", others: false, mirrorfolio: true },
  { feature: "AI-powered drift detection", others: false, mirrorfolio: true },
];

export default function DifferenceSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-statement-medium text-primary mb-4 tracking-[0.08em] uppercase">The difference</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground leading-tight mb-6">
            Not surveillance.{" "}
            <span className="text-primary">Awareness.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="warm-card overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-border px-6 py-4 bg-card">
            <span className="text-sm font-statement text-muted-foreground" />
            <span className="text-sm font-statement text-muted-foreground text-center">
              Other solutions
            </span>
            <span className="text-sm font-statement-medium text-primary text-center">
              Mirrorfolio
            </span>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-4 items-center ${
                i !== comparisons.length - 1 ? "border-b border-border/50" : ""
              }`}
            >
              <span className="text-sm font-statement text-foreground">{row.feature}</span>
              <div className="flex justify-center">
                {row.others ? (
                  <X className="w-4 h-4 text-destructive/60" />
                ) : (
                  <Check className="w-4 h-4 text-muted-foreground/40" />
                )}
              </div>
              <div className="flex justify-center">
                {row.mirrorfolio ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : (
                  <span className="text-xs text-muted-foreground">No</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
