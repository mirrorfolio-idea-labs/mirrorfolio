import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Objects they already use",
    description:
      "We place a gentle edge device — right now, a table lamp — alongside discreet sensors embedded into everyday objects like pillboxes, drawers, and doors. Nothing new to learn. They just live.",
  },
  {
    number: "02",
    title: "Their routine, understood",
    description:
      "As they go about their day, the system quietly learns their patterns — meals, movement, sleep, medication. No cameras. No wearables. No data leaves without purpose.",
  },
  {
    number: "03",
    title: "If something drifts, you'll know",
    description:
      "When their routine changes in a meaningful way, you get a calm, clear insight on your phone. Act early, before it becomes a crisis.",
  },
];

export default function ProductPreview() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 md:py-36 bg-warm-cream">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-sm font-statement-medium text-primary mb-4 tracking-[0.08em] uppercase">How it works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground leading-tight mb-6">
            Simple for them.{" "}
            <span className="text-primary">Powerful for you.</span>
          </h2>
          <p className="font-statement text-muted-foreground text-lg max-w-xl mx-auto leading-[1.8]">
            Three steps to peace of mind. No tech skills needed — by anyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-sentence text-xl text-primary">{step.number}</span>
              </div>
              <h3 className="font-statement-medium text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-statement text-muted-foreground text-sm leading-[1.8] max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16 font-sentence text-muted-foreground text-sm"
        >
          We're starting with one simple device that understands — the pillbox.
        </motion.p>
      </div>
    </section>
  );
}
