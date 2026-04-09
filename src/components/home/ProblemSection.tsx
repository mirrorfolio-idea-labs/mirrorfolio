import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const failedSolutions = [
  {
    icon: "/icon-camera.svg",
    title: "You tried cameras.",
    quote: "\"He found it and unplugged it. Said he's not a criminal.\"",
    detail: "Privacy violation. Elders resist or refuse.",
  },
  {
    icon: "/icon-watch.svg",
    title: "You tried wearables.",
    quote: "\"She stopped charging it after the second week.\"",
    detail: "Requires compliance. Adds cognitive load.",
  },
  {
    icon: "/icon-caretaker.svg",
    title: "You hired a caretaker.",
    quote: "\"We found things missing. And she stopped talking when he was around.\"",
    detail: "Expensive. Hard to trust. Often changes the home dynamic.",
  },
  {
    icon: "/icon-phone.svg",
    title: "You call every day.",
    quote: "\"She says she's fine. She always says she's fine.\"",
    detail: "Surface-level. You never get the real picture.",
  },
];

export default function ProblemSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-statement-medium text-primary mb-4 tracking-[0.08em] uppercase">The problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground leading-tight mb-6">
            You've tried <span className="text-primary">everything.</span>
          </h2>
          <p className="font-statement text-muted-foreground text-lg max-w-xl mx-auto leading-[1.8]">
            After a parent's health scare, the options all feel wrong. 
            Too intrusive, too unreliable, or too dependent on them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {failedSolutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: "easeOut",
              }}
              className="warm-card p-8 flex flex-col"
            >
              <img src={item.icon} alt={item.title} className="w-14 h-14 mb-4" loading="lazy" />
              <h3 className="font-statement-medium text-xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-sentence text-foreground/80 text-sm leading-relaxed mb-4 flex-1">
                {item.quote}
              </p>
              <p className="text-dust text-xs tracking-[0.04em]">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
