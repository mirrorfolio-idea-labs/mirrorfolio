import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

const footerLinks = [
  { label: "Founder", href: "/founder" },
  { label: "Writing / Notes", href: "/writing" },
  { label: "Privacy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 mt-auto bg-card/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="font-serif text-lg text-foreground">
              Mirrorfolio
            </div>
            <ul className="flex flex-wrap items-center gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-micro text-muted-foreground/60">
              © {new Date().getFullYear()} Mirrorfolio. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
