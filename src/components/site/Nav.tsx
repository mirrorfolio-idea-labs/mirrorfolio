"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLockup } from "./Logo";

const links = [
  { to: "/platform", label: "Platform" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/families", label: "For Families" },
  { to: "/hospitals", label: "For Hospitals" },
  { to: "/company", label: "Company" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border transition-colors duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="flex h-16 items-stretch justify-between">
        <Link
          href="/"
          aria-label="Mirrorfolio home"
          className="flex shrink-0 items-center border-r border-border px-5 md:px-8"
        >
          <LogoLockup />
        </Link>

        <nav className="hidden items-stretch lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`mono-label flex items-center border-l border-border px-5 transition-colors hover:bg-secondary hover:text-foreground${
                pathname === l.to ? " text-foreground bg-secondary" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center border-l border-border px-5 lg:flex">
          <Link
            href="/contact?intent=waitlist"
            className="mono-label clip-corner bg-signal px-5 py-3 text-signal-foreground transition-opacity hover:opacity-85"
          >
            Contact
          </Link>
        </div>

        <button
          className="mono-label border-l border-border px-5 lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className="mono-label border-b border-border px-5 py-4"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact?intent=waitlist"
              className="mono-label bg-signal px-5 py-4 text-signal-foreground"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
