import Link from "next/link";
import type { Intent } from "@/lib/leads/intents";
import { LogoMark, LogoWordmark } from "./Logo";

type Item = { label: string; to: string; intent?: Intent };

const columns: { title: string; items: Item[] }[] = [
  {
    title: "Product",
    items: [
      { to: "/platform", label: "Platform" },
      { to: "/ecosystem", label: "Ecosystem" },
      { to: "/privacy", label: "Privacy" },
    ],
  },
  {
    title: "Audiences",
    items: [
      { to: "/families", label: "For Families" },
      { to: "/hospitals", label: "For Hospitals" },
      { to: "/contact", label: "Investors", intent: "investor" },
    ],
  },
  {
    title: "Company",
    items: [
      { to: "/company", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact", intent: "waitlist" },
    ],
  },
];

function FooterLink({ item }: { item: Item }) {
  const className = "text-muted-foreground transition-colors hover:text-foreground";

  const href = item.intent ? `${item.to}?intent=${item.intent}` : item.to;

  return (
    <Link href={href} className={className}>
      {item.label}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="grid md:grid-cols-4">
        <div className="border-b border-border bg-ink p-5 text-ink-foreground brackets md:border-b-0 md:border-r md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <LogoMark className="h-6 w-6" />
            <LogoWordmark className="h-[14px] w-auto" />
            <span className="sr-only">Mirrorfolio</span>
          </div>
          <div className="display-caps text-lg leading-tight">
            We believe healthcare
            <br />
            should become ambient,
            <br />
            <span className="text-ink-foreground/50">proactive and invisible.</span>
          </div>
          <p className="mt-6 max-w-[42ch] text-xs leading-relaxed text-ink-foreground/70">
            Mirrorfolio is an Ambient Care Intelligence platform. We make recovery visible between
            hospital and home.
          </p>
        </div>

        {columns.map((c, i) => (
          <div
            key={c.title}
            className={`border-b border-border p-5 md:border-b-0 md:p-8 ${
              i < columns.length - 1 ? "md:border-r" : ""
            }`}
          >
            <div className="mono-label mb-5">{c.title}</div>
            <ul className="space-y-3 text-xs">
              {c.items.map((it) => (
                <li key={it.label}>
                  <FooterLink item={it} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mono-label flex flex-col gap-2 border-t border-border px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <span>© {year} Mirrorfolio Idea Labs Pvt. Ltd.</span>
        <span className="flex items-center gap-4">
          <span>Kerala, India</span>
          <span aria-hidden>·</span>
          <span>v0.1 · Pre-market</span>
        </span>
      </div>
    </footer>
  );
}
