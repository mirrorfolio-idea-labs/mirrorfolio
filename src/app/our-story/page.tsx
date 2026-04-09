"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function Act({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className={`py-24 md:py-36 ${className}`}>
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-statement-medium uppercase tracking-[0.12em] text-primary mb-10">
            {label}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default function OurStory() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-warm-gradient">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-statement-medium text-primary mb-6 tracking-[0.08em] uppercase"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-sentence text-foreground leading-[1.15]"
            >
              I started building this for my grandfather.{" "}
              <span className="text-primary">He didn't get to see it.</span>
            </motion.h1>
          </div>
        </section>

        {/* Act 1 — The Moment */}
        <Act label="THE MOMENT" className="bg-background">
          <div className="space-y-6">
            <p className="font-sentence text-foreground text-xl sm:text-2xl leading-snug">
              After his first cardiac arrest, he came back. Everyone was relieved.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              For a while, things felt normal again. But I was working in another city, 
              and over the weeks that followed, I started noticing things on our phone calls. 
              Small drifts — in his routine, his energy, his presence. The kind of changes 
              you can only catch if you're paying close attention. And the kind he'd never 
              admit to.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              I tried checking in more. Gently pushing. But he didn't like being watched over — 
              he was too proud for that. And I couldn't push without actually knowing what was 
              happening. I was guessing from kilometres away.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              That's when the idea started. Not as a startup — as a hobby project. Something 
              quiet, built for my own home, for him.{" "}
              <span className="text-foreground font-statement-medium">Just to know.</span>
            </p>
          </div>
        </Act>

        {/* Act 2 — The Loss */}
        <Act label="THE LOSS" className="bg-warm-cream">
          <div className="space-y-6">
            <p className="font-sentence text-foreground text-xl sm:text-2xl leading-snug">
              The second cardiac arrest came without warning.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              He didn't call anyone. He came to me and said,{" "}
              <span className="text-foreground font-statement-medium italic">
                "Let's go see the doctor. Don't tell anyone."
              </span>{" "}
              I agreed. I went with him.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              He died in my arms before my parents reached the ICU.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              Then it was blank. Days of nothing. I couldn't think, couldn't work, 
              couldn't look at the project I'd been building for him.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              But eventually, I started talking — to other families, other people carrying 
              the same quiet weight. And something shifted. The question changed. It was no longer{" "}
              <span className="text-foreground font-statement-medium">"Can I help my grandfather?"</span> — 
              it became{" "}
              <span className="text-foreground font-statement-medium">"How many families are living through this exact thing right now?"</span>
            </p>
          </div>
        </Act>

        {/* Act 3 — The Conviction */}
        <Act label="THE CONVICTION" className="bg-background">
          <div className="space-y-6">
            <p className="font-sentence text-foreground text-xl sm:text-2xl leading-snug">
              350 families. The same silence. Different names.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              When I finally started talking again, I spoke with over 350 families 
              across India. Working professionals in Bangalore, Dubai, Germany — 
              all carrying the same quiet guilt I'd carried. All noticing the same 
              small drifts from phone calls. All guessing from a distance. All 
              terrified of the call they might get one morning.
            </p>
          </div>
        </Act>

        {/* Act 4 — The Reason */}
        <Act label="THE REASON" className="bg-warm-cream">
          <div className="space-y-6">
            <p className="font-sentence text-foreground text-xl sm:text-2xl leading-snug">
              India has over 140 million elders. No one built anything for this reality.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              Most are aging without adequate care — not because their families don't 
              care, but because every solution asks the elder to change: wear a device, 
              learn an app, accept a camera in their home. My grandfather would have 
              refused all of it. He was too proud. Most of them are.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              The problem was never the elder. The problem was the{" "}
              <span className="text-foreground font-statement-medium">
                gap between caring and knowing
              </span>
              {" "}— the same gap I was living in when I was guessing from 
              phone calls, kilometres away, unable to push without proof.
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              So I asked a different question:{" "}
              <span className="text-foreground font-statement-medium italic">
                What if the object changed instead of the person?
              </span>
            </p>
            <p className="font-statement text-muted-foreground text-lg leading-[1.8]">
              That's Mirrorfolio. Not a surveillance tool. Not a medical device. 
              A quiet presence — embedded in everyday objects your parent already 
              uses — that lets you know they're okay. Without asking them to do 
              a single thing differently. The kind of thing my grandfather would 
              have never noticed. And never refused.
            </p>
            <p className="font-statement text-foreground text-lg leading-[1.8] mt-10">
              Dignity in aging shouldn't depend on geography or distance. 
              That's not a tagline. It's the reason this company exists.
            </p>
          </div>
        </Act>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-warm-cream">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-statement text-muted-foreground text-lg mb-8">
                If this story feels familiar, Mirrorfolio is being built for you.
              </p>
              <Link
                href="/early-access"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-statement-medium transition-all duration-300 hover:bg-clay hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Pre-order for ₹499
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="mt-6 text-xs text-dust tracking-[0.06em]">
                Fully refundable · Ships to early backers first
              </p>
              <p className="mt-10 font-statement-medium text-foreground text-sm">
                — Ahammad Kabeer Hadi, Founder
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
