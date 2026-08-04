import type { ReactNode } from "react";
import Link from "next/link";
import { AmbientField } from "./AmbientField";

/** The one loud action. Orange, high contrast — never more than one per screen. */
export function WaitlistCta({ label = "Join the waitlist" }: { label?: string }) {
  return (
    <Link
      href="/contact?intent=waitlist"
      className="mono-label clip-corner bg-signal px-6 py-4 text-signal-foreground transition-opacity hover:opacity-85"
    >
      {label}
    </Link>
  );
}

export function HospitalCta({ primary = false }: { primary?: boolean }) {
  return (
    <Link
      href="/contact?intent=hospital"
      className={
        primary
          ? "mono-label clip-corner bg-signal px-6 py-4 text-signal-foreground transition-opacity hover:opacity-85"
          : "mono-label border border-border bg-background px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
      }
    >
      Partner your hospital{primary ? "" : " ↗"}
    </Link>
  );
}

export function InvestorCta() {
  return (
    <Link
      href="/contact?intent=investor"
      className="mono-label flex items-center px-2 py-4 text-muted-foreground transition-colors hover:text-foreground"
    >
      Investor enquiries ↗
    </Link>
  );
}

/**
 * PageHeader — shared header for interior routes.
 * Grid stamp rail + tracked-out mono display caps.
 * `action` and `proof` keep the first screen a complete pitch: headline,
 * context, one action, and the reassurance sitting right beside it.
 */
export function PageHeader({
  index,
  eyebrow,
  title,
  lede,
  action,
  proof,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  action?: ReactNode;
  proof?: ReactNode;
}) {
  return (
    <section className="relative isolate grain overflow-hidden border-b border-border pt-16">
      <div className="mono-label relative flex items-center justify-between border-b border-border px-5 py-3 md:px-8">
        <span>
          {index} / {eyebrow}
        </span>
        <span className="hidden sm:inline">Mirrorfolio · Pre-market</span>
      </div>

      <div className="relative grid md:grid-cols-4">
        <AmbientField className="opacity-50" />

        <div className="relative border-b border-border p-5 md:col-span-3 md:border-b-0 md:border-r md:p-8 md:py-20">
          <h1
            className="display-caps reveal text-[clamp(2rem,5vw,4.2rem)]"
            style={{ animationDelay: "60ms" }}
          >
            {title}
          </h1>
          {lede && (
            <p
              className="reveal mt-8 max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:text-base"
              style={{ animationDelay: "180ms" }}
            >
              {lede}
            </p>
          )}
          {action && (
            <div className="mt-8 flex flex-wrap items-center gap-4">{action}</div>
          )}
          {proof && <p className="mono-label mt-7 leading-relaxed">{proof}</p>}
        </div>

        <div className="relative flex items-end justify-between p-5 md:flex-col md:items-start md:justify-end md:p-8">
          <span className="mono-label">{index}</span>
          <span className="mt-0 inline-block h-1.5 w-1.5 bg-signal signal-pulse md:mt-4" />
        </div>
      </div>
    </section>
  );
}
