"use client";

import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

const learnLinks: NavItem[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/ethics", label: "Ethics & boundaries" },
];

const participateLinks: NavItem[] = [
  { href: "/pilot", label: "Pilot" },
  { href: "/contact", label: "Talk to us" },
];

function NavLink({ href, label }: NavItem) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center justify-between border-b border-border py-6 hover:border-accent/50 transition-colors duration-200"
      >
        <span className="text-body-lg text-foreground group-hover:text-accent transition-colors duration-200">
          {label}
        </span>
        <span className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">
          →
        </span>
      </Link>
    </li>
  );
}

export function NavigationSection() {
  return (
    <section className="bg-card border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn direction="up">
            <h3 className="text-micro uppercase tracking-widest text-accent mb-8">
              Learn
            </h3>
            <ul className="space-y-0">
              {learnLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h3 className="text-micro uppercase tracking-widest text-accent mb-8">
              Participate
            </h3>
            <ul className="space-y-0">
              {participateLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
