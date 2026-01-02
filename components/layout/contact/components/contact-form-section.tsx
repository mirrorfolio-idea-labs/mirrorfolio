"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

// Phone validation regex that accepts:
// - 10 digits starting with 6-9 (e.g., 9876543210)
// - 11 digits starting with 0 (e.g., 09876543210)
// - +91 followed by 10 digits (e.g., +919876543210 or +91 9876543210)
// - + followed by country code and number
const phoneRegex =
  /^(?:\+91[\s-]?[6-9]\d{9}|\+[1-9]\d{6,14}|0[6-9]\d{9}|[6-9]\d{9})$/;

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Please tell us a bit more — at least 10 characters")
    .max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="relative bg-background">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-40">
          <div className="max-w-xl">
            <FadeIn>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-8">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="font-serif text-display-sm text-foreground mb-6">
                Message received
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-4">
                We&apos;ll get back to you within 48 hours.
              </p>
              <p className="text-body text-foreground leading-relaxed mb-10">
                In the meantime, you might want to read about how the pilot
                works or our approach to ethics and boundaries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pilot"
                  className="text-body text-accent hover:text-accent/80 transition-colors"
                >
                  Learn about the pilot →
                </Link>
                <Link
                  href="/"
                  className="text-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  Return home
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-background w-full">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col w-full lg:flex-row">
          {/* Left — Copy */}
          <div className="lg:w-2/5">
            <FadeIn delay={0.1}>
              <p className="text-body text-muted-foreground pt-4 leading-relaxed my-4">
                Not sure if Mirrorfolio is right for you?
              </p>
              <p className="text-body-lg text-foreground pt-2 leading-relaxed my-12">
                That&apos;s exactly what this is for.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="py-6">
                <p className="text-caption text-muted-foreground uppercase tracking-wider">
                  You can ask about
                </p>
                <div className="py-5 space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-mono text-caption mt-0.5">
                      —
                    </span>
                    <p className="text-body text-foreground">
                      Whether this fits your family&apos;s situation
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-mono text-caption mt-0.5">
                      —
                    </span>
                    <p className="text-body text-foreground">
                      What the pilot actually involves
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-mono text-caption mt-0.5">
                      —
                    </span>
                    <p className="text-body text-foreground">
                      Technical questions about how it works
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-accent font-mono text-caption mt-0.5">
                      —
                    </span>
                    <p className="text-body text-foreground">
                      Anything else on your mind
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Form */}
          <div className="lg:flex-1">
            <FadeIn delay={0.25}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Name Field */}
                <div className="flex flex-col gap-3 py-4">
                  <Label htmlFor="name" required>
                    Your name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    autoComplete="name"
                    error={!!errors.name}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="text-micro text-destructive"
                      role="alert"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex py-4 flex-col gap-3">
                  <Label htmlFor="email" required>
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    error={!!errors.email}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="text-micro text-destructive"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field (Optional) */}
                <div className="flex py-4 flex-col gap-3">
                  <Label htmlFor="phone">
                    Phone number{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    error={!!errors.phone}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="text-micro text-destructive"
                      role="alert"
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="flex py-4 flex-col gap-3">
                  <Label htmlFor="message" required>
                    Your message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="What would you like to know?"
                    className="min-h-32"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-micro text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* API Error - announced to screen readers */}
                {error && (
                  <div
                    className="p-4 bg-destructive/10 border border-destructive/20 text-destructive text-caption rounded"
                    role="alert"
                    aria-live="polite"
                  >
                    {error}
                  </div>
                )}

                {/* Actions */}
                <div className="pt-4 flex py-4 flex-col gap-4">
                  <Button
                    variant="default"
                    type="submit"
                    size="lg"
                    className="w-full py-6"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span aria-live="polite">Sending...</span>
                    ) : (
                      <>
                        <span>Send message</span>
                        <span
                          className="text-lg group-hover:translate-x-1 transition-transform duration-200"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </>
                    )}
                  </Button>

                  <Button
                    variant="ghost"
                    size="default"
                    className="w-full hover:bg-transparent hover:text-accent"
                    asChild
                  >
                    <Link href="/pilot">
                      Ready to apply for the pilot instead?
                    </Link>
                  </Button>
                </div>

                {/* Privacy Note */}
                <p className="text-micro text-muted-foreground text-center pt-2">
                  We won&apos;t share your information or add you to any mailing
                  list.
                </p>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
