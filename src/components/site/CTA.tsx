import Link from "next/link";
import { AmbientField } from "./AmbientField";
import { proofShort } from "./proof";

export function CTA() {
  return (
    <section className="relative isolate grain overflow-hidden border-b border-border">
      <AmbientField className="opacity-50" />
      <div className="mono-label relative flex items-center justify-between border-b border-border bg-background px-5 py-3 md:px-8">
        <span>10 / Next</span>
        <span className="hidden sm:inline">Waitlist · Open</span>
      </div>

      <div className="relative grid md:grid-cols-4">
        <div className="border-b border-border p-5 md:col-span-3 md:border-b-0 md:border-r md:p-8 md:py-24">
          <h2 className="display-caps text-[clamp(1.9rem,4.4vw,3.6rem)]">
            Be among the first
            <br />
            to bring Mirrorfolio
            <br />
            <span className="text-muted-foreground">home.</span>
          </h2>
          <p className="mt-8 max-w-[50ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            First deployments start in 2026 with hospital partners and pilot
            families. Leave your details and we&apos;ll write to you when Mirrorfolio
            reaches your area — nothing else.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact?intent=waitlist"
              className="mono-label clip-corner bg-signal px-6 py-4 text-signal-foreground transition-opacity hover:opacity-85"
            >
              Join the waitlist
            </Link>
            <Link
              href="/contact?intent=hospital"
              className="mono-label border border-border bg-background px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
            >
              Partner your hospital ↗
            </Link>
            <Link
              href="/contact?intent=investor"
              className="mono-label flex items-center px-2 py-4 text-muted-foreground transition-colors hover:text-foreground"
            >
              Investor enquiries ↗
            </Link>
          </div>

          <p className="mono-label mt-8 leading-relaxed">{proofShort}</p>
        </div>

        <div className="flex flex-col justify-between bg-ink p-5 text-ink-foreground brackets md:p-8">
          <div className="mono-label text-ink-foreground/60">Waitlist</div>
          <div>
            <div className="display-caps text-3xl">Open</div>
            <p className="mt-3 text-sm leading-relaxed text-ink-foreground/75">
              Families, hospitals and partners. Usually within two days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
