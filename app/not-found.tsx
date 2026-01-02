import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 pt-16">
        <section className="relative bg-background py-24 lg:py-40">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            {/* 404 indicator */}
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              404 — Not Found
            </p>

            {/* Main heading */}
            <h1 className="font-serif text-display-sm md:text-display text-foreground mb-6">
              This page doesn't exist
            </h1>

            {/* Description */}
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
              You might have followed an old link, or the page has moved.
            </p>
            <p className="text-body text-foreground leading-relaxed mb-12 max-w-xl">
              If you think something should be here, let us know.
            </p>

            {/* Navigation options */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Link
                href="/"
                className="text-body text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2"
              >
                <span>←</span>
                <span>Back to home</span>
              </Link>
              <Link
                href="/contact"
                className="text-body text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact us
              </Link>
            </div>

            {/* Decorative element */}
            <div className="mt-24 pt-12 border-t border-border/50">
              <p className="text-caption text-muted-foreground">
                Looking for something specific?
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <Link
                  href="/how-it-works"
                  className="text-caption text-muted-foreground hover:text-accent transition-colors"
                >
                  How it works
                </Link>
                <Link
                  href="/pilot"
                  className="text-caption text-muted-foreground hover:text-accent transition-colors"
                >
                  Pilot program
                </Link>
                <Link
                  href="/ethics"
                  className="text-caption text-muted-foreground hover:text-accent transition-colors"
                >
                  Ethics & boundaries
                </Link>
                <Link
                  href="/founder"
                  className="text-caption text-muted-foreground hover:text-accent transition-colors"
                >
                  Founder
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
