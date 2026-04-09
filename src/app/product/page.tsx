"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const productSteps = [
  {
    step: "01",
    title: "Everyday objects, quietly upgraded",
    description:
      "We place discreet sensors into things your parent already uses — a pillbox, a drawer, a door. An edge device disguised as a table lamp sits in their space, connecting it all. They don't learn anything new. They just live.",
  },
  {
    step: "02",
    title: "It quietly learns their daily rhythm",
    description:
      "Medicine times, movement patterns, meal routines — Mirrorfolio understands what 'normal' looks like for your parent. No cameras. No microphones. Just passive, ambient awareness built into the objects around them.",
  },
  {
    step: "03",
    title: "You see a simple daily summary",
    description:
      "Open the app on your phone. A clean, calm dashboard shows whether routines are on track. Not a surveillance feed — just the reassurance that things are okay today.",
  },
  {
    step: "04",
    title: "If something drifts, you get a gentle nudge",
    description:
      "A missed dose. An unusual stillness. A routine that's slowly changing. Mirrorfolio catches the drift before it becomes a crisis — and sends you a quiet alert. Not an alarm. A nudge.",
  },
];

const faqs = [
  {
    q: "Do they need to do anything differently?",
    a: "No. There's no app to install, no wearable to charge, no button to press. The device sits in their space and works silently. To them, nothing changed.",
  },
  {
    q: "Is this a camera or tracking device?",
    a: "Absolutely not. No cameras, no microphones, no GPS. Mirrorfolio uses passive sensing to understand routine patterns — not to watch or listen.",
  },
  {
    q: "What if they don't want to be monitored?",
    a: "That's exactly why we built this the way we did. There's nothing visible that feels like monitoring. No blinking lights, no beeps, no reminders. Their dignity stays intact.",
  },
  {
    q: "How is this different from a smart pillbox?",
    a: "Smart pillboxes beep and remind. Mirrorfolio's pillbox is the starting point — it senses without alerting your parent, and connects to a broader picture of their routine over days and weeks. Not just pills.",
  },
  {
    q: "How is my family's data protected?",
    a: "Data is processed locally on the device. Only anonymized routine summaries reach your dashboard. We never sell data. Period.",
  },
  {
    q: "What happens if the internet goes down?",
    a: "The device continues sensing and storing data locally. When connectivity returns, everything syncs. No gaps in awareness.",
  },
];

export default function Product() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20">
          {/* Hero */}
          <section className="min-h-[60vh] flex items-center justify-center bg-warm-gradient relative px-6">
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-3xl relative z-10"
            >
              <p className="text-sm font-statement-medium text-primary mb-6 tracking-[0.08em] uppercase">
                How it works
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sentence text-foreground leading-[1.05]">
                Simple for them.
                <br />
                <span className="text-primary">Reassuring</span> for you.
              </h1>
              <p className="mt-6 font-statement text-muted-foreground text-lg max-w-md mx-auto leading-[1.8]">
                No cameras. No wearables. No learning curve. Sensors in everyday objects, quietly watching over routine.
              </p>
            </motion.div>
          </section>

          {/* Steps */}
          <section className="py-24 md:py-36 bg-background">
            <div className="container mx-auto px-6 max-w-2xl">
              {productSteps.map((step, i) => (
                <ProductStep key={i} step={step} index={i} isLast={i === productSteps.length - 1} />
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 md:py-36 bg-warm-cream">
            <div className="container mx-auto px-6 max-w-3xl">
              <FAQSection />
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 md:py-36 bg-background text-center px-6">
            <BottomCTA />
          </section>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}

function ProductStep({ step, index, isLast }: { step: typeof productSteps[0]; index: number; isLast: boolean }) {
  const { ref, isInView } = useScrollReveal({ margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`py-12 ${!isLast ? "border-b border-border/40" : ""}`}
    >
      <p className="text-sm font-statement-medium text-primary mb-4 tracking-[0.08em]">{step.step}</p>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-sentence text-foreground mb-4 leading-snug">
        {step.title}
      </h3>
      <p className="font-statement text-muted-foreground text-base md:text-lg leading-[1.8]">
        {step.description}
      </p>
    </motion.div>
  );
}

function FAQSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <p className="text-sm font-statement-medium text-primary mb-6 tracking-[0.08em] uppercase">FAQ</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground">
          Questions families ask
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-background rounded-2xl px-6 border border-border/40 data-[state=open]:border-primary/20 shadow-sm"
          >
            <AccordionTrigger className="text-left text-base font-statement-medium hover:no-underline text-foreground">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-statement text-muted-foreground leading-[1.8]">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}

function BottomCTA() {
  const { ref, isInView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground mb-6 leading-tight">
        Ready to try{" "}
        <span className="text-primary">Mirrorfolio?</span>
      </h2>
      <p className="font-statement text-muted-foreground text-base mb-10 max-w-md mx-auto leading-[1.8]">
        Join families choosing a quieter way to care.
      </p>
      <Link
        href="/early-access"
        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-statement-medium transition-all duration-300 hover:bg-clay hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
      >
        Pre-order for ₹499
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
