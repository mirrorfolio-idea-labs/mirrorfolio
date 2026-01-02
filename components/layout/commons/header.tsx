"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pilot", href: "/pilot" },
  { label: "Ethics & Boundaries", href: "/ethics" },
  { label: "Talk to us", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Check if link is current page for aria-current
  const isCurrentPage = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16 border-b border-border/40"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-serif text-xl text-foreground tracking-tight"
            aria-label="Mirrorfolio - Home"
          >
            Mirrorfolio
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-caption text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-current={isCurrentPage(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 -mr-2 text-foreground hover:text-accent transition-colors touch-target"
                aria-label="Open navigation menu"
                aria-expanded={open}
                aria-controls="mobile-nav"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-xs bg-background border-border"
              aria-label="Navigation menu"
            >
              <SheetHeader className="text-left pb-8">
                <SheetTitle className="font-serif text-xl">
                  Mirrorfolio
                </SheetTitle>
              </SheetHeader>
              <nav
                id="mobile-nav"
                className="flex flex-col"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="py-4 text-body-lg text-foreground border-b border-border/50 hover:text-accent transition-colors duration-200"
                    style={{ animationDelay: `${i * 50}ms` }}
                    aria-current={isCurrentPage(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="absolute bottom-8 left-6 right-6">
                <p className="text-micro text-muted-foreground">
                  Early visibility for caregivers — without surveillance
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
