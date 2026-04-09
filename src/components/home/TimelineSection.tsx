import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timelineSteps = [
  { week: "Discharge", description: "Patient leaves hospital with prescriptions and a recovery plan.", status: "good" },
  { week: "Week 1–2", description: "Routines hold. Family is vigilant. Everything seems fine.", status: "good" },
  { week: "Week 3–4", description: "Subtle drift begins. A missed dose. A skipped walk. Nobody notices.", status: "warning" },
  { week: "Week 5–8", description: "Drift compounds. Recovery stalls. Risk rises silently.", status: "danger" },
  { week: "With Mirrorfolio", description: "Drift detected at Week 3. Family alerted. Course corrected. Recovery stays on track.", status: "resolved" },
];

const dotColors: Record<string, string> = {
  good: "bg-primary",
  warning: "bg-yellow-500",
  danger: "bg-destructive",
  resolved: "bg-primary",
};

const borderColors: Record<string, string> = {
  good: "border-primary/20",
  warning: "border-yellow-500/20",
  danger: "border-destructive/20",
  resolved: "border-primary/30",
};

export default function TimelineSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary/30" />
            <p className="text-sm font-statement-medium tracking-[0.08em] uppercase text-primary">
              The invisible decline
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground mb-16">
            The recovery timeline no one talks about
          </h2>

          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-destructive/30 to-primary/50" />
            <div className="space-y-6">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="relative pl-10"
                >
                  <div className={`absolute left-1 top-3 w-3 h-3 rounded-full ${dotColors[step.status]} ${step.status === "resolved" ? "ring-2 ring-primary/30" : ""}`} />
                  <div className={`warm-card p-5 rounded-xl border ${borderColors[step.status]}`}>
                    <p className="text-xs font-statement-medium tracking-[0.1em] uppercase text-foreground mb-2">
                      {step.week}
                    </p>
                    <p className="font-statement text-muted-foreground text-sm leading-[1.8]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
