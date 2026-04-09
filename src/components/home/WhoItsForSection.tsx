import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WhoItsForSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 md:py-36 bg-warm-cream">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <p className="text-sm font-statement-medium text-primary mb-4 tracking-[0.08em] uppercase">Who it's for</p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-center"
        >
          <p className="font-sentence text-2xl sm:text-3xl md:text-4xl text-foreground leading-snug">
            "You're in Bangalore. Your father is in Lucknow. He had a cardiac 
            episode six weeks ago. The hospital sent him home. And now — you lie 
            awake wondering if he took his medication, if he ate, if he's okay."
          </p>
          <footer className="mt-10">
            <p className="font-statement text-muted-foreground text-base leading-[1.8] max-w-lg mx-auto">
              If this sounds like your life, Mirrorfolio was built for you. 
              Not for hospitals. Not for insurance companies. For{" "}
              <span className="text-primary font-statement-medium">you</span> — the 
              one who carries the worry.
            </p>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
