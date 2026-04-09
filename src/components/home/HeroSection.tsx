import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const surfaceEmerge = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const driftIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-warm-gradient overflow-hidden">

      {/* Soft atmospheric light */}
      <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full bg-accent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-32 pb-20 max-w-4xl text-center relative z-10">
        <motion.div
          variants={driftIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-sm font-statement-medium text-primary mb-6 tracking-[0.08em] uppercase">
            Care, without intrusion
          </p>
        </motion.div>

        <motion.h1
          variants={surfaceEmerge}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sentence text-foreground leading-[1.1] mb-8"
        >
          Know they're okay —{" "}
          <br className="hidden sm:block" />
          <span className="text-primary">without being there.</span>
        </motion.h1>

        <motion.p
          variants={driftIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="font-statement text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-[1.8]"
        >
          Mirrorfolio is a quiet, invisible AI care copilot that helps you 
          watch over your elderly parent's recovery — no cameras, no wearables, 
          no burden on them.
        </motion.p>

        <motion.div
          variants={driftIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/early-access"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-statement-medium transition-all duration-300 hover:bg-clay hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Pre-order for ₹499
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/our-story"
            className="text-sm font-statement-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border hover:decoration-foreground"
          >
            Why we're building this
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 text-xs text-dust tracking-[0.08em]"
        >
          Fully refundable · Ships to early backers first
        </motion.p>
      </div>
    </section>
  );
}
