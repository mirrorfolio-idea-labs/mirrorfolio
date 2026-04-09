"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ArrowRight, Shield, RefreshCw, Heart } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(2, "City is required"),
  condition: z.string().min(1, "Please select a condition"),
  livingSituation: z.string().min(1, "Please select living situation"),
  dischargeTimeline: z.string().min(1, "Please select timeline"),
});

type FormData = z.infer<typeof schema>;

const conditions = [
  "Post-cardiac event", "Post-stroke recovery", "Blood pressure management",
  "Diabetes management", "Post-surgery recovery", "General elderly care", "Other",
];

const livingSituations = [
  "Living alone", "With spouse (both elderly)", "With family members", "With a caretaker",
];

const dischargeTimelines = [
  "Not yet discharged", "Within the last week", "1–4 weeks ago", "1–3 months ago", "More than 3 months ago",
];

const commitmentBenefits = [
  { icon: RefreshCw, text: "Fully refundable, anytime" },
  { icon: Shield, text: "Priority access at launch" },
  { icon: Heart, text: "Early feedback circle" },
];

export default function EarlyAccess() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "", email: "", phone: "", city: "",
      condition: "", livingSituation: "", dischargeTimeline: "",
    },
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch, trigger } = form;
  const values = watch();

  const nextStep = async () => {
    if (step === 1) {
      const valid = await trigger(["name", "email", "phone", "city"]);
      if (valid) setStep(2);
    } else if (step === 2) {
      const valid = await trigger(["condition", "livingSituation", "dischargeTimeline"]);
      if (valid) setStep(3);
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    setStep(4);
  };

  const handlePayment = async () => {
    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const order = await res.json();
      
      if (order.error) {
        alert("Could not create order: " + order.error);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);

      script.onload = () => {
        const options = {
          key: order.keyId,
          amount: order.amount,
          currency: order.currency,
          name: "Mirrorfolio",
          description: "Early Access Pre-order",
          order_id: order.orderId,
          handler: async function (response: Record<string, string>) {
            const verifyRes = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });
            const result = await verifyRes.json();
            if (result.success) {
              setSubmitted(true);
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          },
          prefill: {
            name: values.name,
            email: values.email,
            contact: values.phone,
          },
          theme: {
            color: "#E24419", // Ember color
          },
        };
        const rzp = new (window as unknown as { Razorpay: new (opts: object) => { open: () => void } }).Razorpay(options);
        rzp.open();
      };
    } catch (error) {
      console.error(error);
      alert("Something went wrong processing payment.");
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  const totalSteps = 4;

  if (submitted) {
    return (
      <>
        <Navbar />
        <PageTransition>
          <main className="pt-20 min-h-screen flex items-center justify-center bg-warm-gradient relative px-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-center max-w-lg relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </motion.div>
              <h1 className="text-4xl sm:text-5xl font-sentence text-foreground mb-4">
                You&apos;re in.
              </h1>
              <p className="font-statement text-muted-foreground text-lg leading-[1.8] mb-2">
                Thank you, {values.name}. Your ₹499 is refundable anytime.
              </p>
              <p className="font-statement text-muted-foreground text-lg leading-[1.8] mb-6">
                We'll reach out when Mirrorfolio launches in {values.city}.
              </p>
              <div className="warm-card rounded-2xl p-6 text-left space-y-3 max-w-sm mx-auto">
                <p className="text-xs font-statement-medium uppercase tracking-[0.08em] text-foreground/70 mb-3">What happens next</p>
                <p className="font-statement text-muted-foreground text-sm leading-[1.8]">
                  1. We'll send a confirmation to <span className="text-foreground font-statement-medium">{values.email}</span>
                </p>
                <p className="font-statement text-muted-foreground text-sm leading-[1.8]">
                  2. You'll get priority access when we launch in your area
                </p>
                <p className="font-statement text-muted-foreground text-sm leading-[1.8]">
                  3. We may reach out for early feedback — your input shapes the product
                </p>
              </div>
            </motion.div>
          </main>
          <Footer />
        </PageTransition>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="pt-20 min-h-screen bg-warm-gradient relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
          </div>
          <div className="container mx-auto px-6 py-20 max-w-xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="text-sm font-statement-medium tracking-[0.08em] uppercase text-primary mb-4">
                Pre-order
              </p>
              <h1 className="text-4xl sm:text-5xl font-sentence text-foreground mb-4">
                Pre-order Mirrorfolio
              </h1>
              <p className="font-statement text-muted-foreground leading-[1.8]">
                Reserve yours for ₹499 — fully refundable if you change your mind.
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="flex items-center gap-2 mb-10">
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
                <div key={s} className="h-1 flex-1 rounded-full overflow-hidden bg-border">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: s <= step ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <p className="text-xs font-statement-medium uppercase tracking-[0.08em] text-muted-foreground mb-6">
                      Step 1 of 4 — Your Details
                    </p>

                    <div>
                      <Label htmlFor="name" className="text-xs font-statement uppercase tracking-[0.08em] text-muted-foreground">Name</Label>
                      <Input id="name" {...register("name")} placeholder="Your name" className="mt-2 bg-background border-border font-statement" />
                      {errors.name && <p className="text-destructive text-xs mt-1 font-statement">{errors.name.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-xs font-statement uppercase tracking-[0.08em] text-muted-foreground">Email</Label>
                      <Input id="email" type="email" {...register("email")} placeholder="you@example.com" className="mt-2 bg-background border-border font-statement" />
                      {errors.email && <p className="text-destructive text-xs mt-1 font-statement">{errors.email.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-xs font-statement uppercase tracking-[0.08em] text-muted-foreground">Phone</Label>
                      <Input id="phone" {...register("phone")} placeholder="+91 98765 43210" className="mt-2 bg-background border-border font-statement" />
                      {errors.phone && <p className="text-destructive text-xs mt-1 font-statement">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="city" className="text-xs font-statement uppercase tracking-[0.08em] text-muted-foreground">City</Label>
                      <Input id="city" {...register("city")} placeholder="Your city" className="mt-2 bg-background border-border font-statement" />
                      {errors.city && <p className="text-destructive text-xs mt-1 font-statement">{errors.city.message}</p>}
                    </div>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="group w-full flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-[0.08em] font-statement-medium transition-all duration-300 hover:bg-clay hover:shadow-lg hover:shadow-primary/20 mt-6"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <p className="text-xs font-statement-medium uppercase tracking-[0.08em] text-muted-foreground mb-6">
                      Step 2 of 4 — About Your Parent
                    </p>

                    <div>
                      <Label className="text-xs font-statement uppercase tracking-[0.08em] text-muted-foreground">Primary Condition</Label>
                      <Select onValueChange={(v) => setValue("condition", v)} value={values.condition}>
                        <SelectTrigger className="mt-2 bg-background border-border font-statement"><SelectValue placeholder="Select condition" /></SelectTrigger>
                        <SelectContent>{conditions.map((c) => (<SelectItem key={c} value={c}>{c}</SelectItem>))}</SelectContent>
                      </Select>
                      {errors.condition && <p className="text-destructive text-xs mt-1 font-statement">{errors.condition.message}</p>}
                    </div>

                    <div>
                      <Label className="text-xs font-statement uppercase tracking-[0.08em] text-muted-foreground">Living Situation</Label>
                      <Select onValueChange={(v) => setValue("livingSituation", v)} value={values.livingSituation}>
                        <SelectTrigger className="mt-2 bg-background border-border font-statement"><SelectValue placeholder="Select living situation" /></SelectTrigger>
                        <SelectContent>{livingSituations.map((l) => (<SelectItem key={l} value={l}>{l}</SelectItem>))}</SelectContent>
                      </Select>
                      {errors.livingSituation && <p className="text-destructive text-xs mt-1 font-statement">{errors.livingSituation.message}</p>}
                    </div>

                    <div>
                      <Label className="text-xs font-statement uppercase tracking-[0.08em] text-muted-foreground">Time Since Discharge</Label>
                      <Select onValueChange={(v) => setValue("dischargeTimeline", v)} value={values.dischargeTimeline}>
                        <SelectTrigger className="mt-2 bg-background border-border font-statement"><SelectValue placeholder="Select timeline" /></SelectTrigger>
                        <SelectContent>{dischargeTimelines.map((d) => (<SelectItem key={d} value={d}>{d}</SelectItem>))}</SelectContent>
                      </Select>
                      {errors.dischargeTimeline && <p className="text-destructive text-xs mt-1 font-statement">{errors.dischargeTimeline.message}</p>}
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button type="button" onClick={() => setStep(1)}
                        className="flex-1 py-4 rounded-full border border-border text-foreground text-sm font-statement uppercase tracking-[0.08em] transition-all duration-200 hover:bg-accent">
                        Back
                      </button>
                      <button type="button" onClick={nextStep}
                        className="group flex-1 flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-[0.08em] font-statement-medium transition-all hover:bg-clay hover:shadow-lg hover:shadow-primary/20">
                        Continue
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="enter" animate="center" exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <p className="text-xs font-statement-medium uppercase tracking-[0.08em] text-muted-foreground mb-6">
                      Step 3 of 4 — Review
                    </p>

                    <div className="warm-card rounded-2xl p-6 space-y-4">
                      <ReviewRow label="Name" value={values.name} />
                      <ReviewRow label="Email" value={values.email} />
                      <ReviewRow label="Phone" value={values.phone} />
                      <ReviewRow label="City" value={values.city} />
                      <div className="h-px bg-border" />
                      <ReviewRow label="Condition" value={values.condition} />
                      <ReviewRow label="Living Situation" value={values.livingSituation} />
                      <ReviewRow label="Since Discharge" value={values.dischargeTimeline} />
                    </div>

                    <div className="flex gap-3 mt-6">
                      <button type="button" onClick={() => setStep(2)}
                        className="flex-1 py-4 rounded-full border border-border text-foreground text-sm font-statement uppercase tracking-[0.08em] transition-all duration-200 hover:bg-accent">
                        Back
                      </button>
                      <button type="submit"
                        className="group flex-1 flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-[0.08em] font-statement-medium transition-all hover:bg-clay hover:shadow-lg hover:shadow-primary/20">
                        Looks good — next step
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Step 4: Payment — outside the form */}
            <AnimatePresence mode="wait">
              {step === 4 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-xs font-statement-medium uppercase tracking-[0.08em] text-muted-foreground mb-6">
                    Step 4 of 4 — Confirm Pre-order
                  </p>

                  <div className="warm-card rounded-2xl p-8 text-center">
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-5xl font-sentence text-foreground">₹499</span>
                    </div>
                    <p className="font-statement text-muted-foreground text-sm mb-8">
                      One-time · Fully refundable
                    </p>

                    <div className="space-y-4 text-left max-w-xs mx-auto mb-8">
                      {commitmentBenefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <benefit.icon className="w-4 h-4 text-primary" />
                          </div>
                          <p className="font-statement text-foreground text-sm leading-[1.8]">{benefit.text}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handlePayment}
                      className="group w-full flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-[0.08em] font-statement-medium transition-all duration-300 hover:bg-clay hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.01]"
                    >
                      Pre-order · ₹499
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <p className="text-center font-statement text-dust text-xs tracking-[0.04em]">
                    Refundable anytime — no questions asked
                  </p>

                  <button type="button" onClick={() => setStep(3)}
                    className="w-full py-3 rounded-full border border-border text-foreground text-sm font-statement uppercase tracking-[0.08em] transition-all duration-200 hover:bg-accent">
                    Go back
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-statement text-muted-foreground text-xs uppercase tracking-[0.08em]">{label}</span>
      <span className="font-statement-medium text-foreground text-sm">{value}</span>
    </div>
  );
}
