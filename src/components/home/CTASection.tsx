import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 md:py-36 bg-warm-cream">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground leading-tight mb-6">
            Every family deserves this <span className="text-primary">peace of mind.</span>
          </h2>
          <p className="font-statement text-muted-foreground text-lg mb-10 max-w-lg mx-auto leading-[1.8]">
            Join families choosing a better way to care — from wherever they are.
          </p>

          <Link
            href="/early-access"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-statement-medium transition-all duration-300 hover:bg-clay hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Pre-order for ₹499
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <p className="mt-6 text-xs font-statement text-dust tracking-[0.08em]">
            Fully refundable · Ships to early backers first
          </p>
        </motion.div>
      </div>
    </section>
  );
}
