import Image from "next/image";
import Link from "next/link";
import heroHub from "@/assets/render-hub.jpg";
import { AmbientField } from "./AmbientField";
import { proofLine } from "./proof";

export function Hero() {
  return (
    <section className="relative isolate grain overflow-hidden border-b border-border pt-16">
      {/* Row 01 — stamp rail */}
      <div className="grid grid-cols-2 border-b border-border md:grid-cols-4">
        <div className="mono-label flex items-center gap-2 border-r border-border px-5 py-3 md:px-8">
          <span className="inline-block h-1.5 w-1.5 bg-signal" />
          Ambient Care Intelligence
        </div>
        <div className="mono-label hidden items-center border-r border-border px-5 py-3 md:flex md:px-8">
          Pre-market · First deployments
        </div>
        <div className="mono-label hidden items-center border-r border-border px-5 py-3 md:flex md:px-8">
          Kerala, India
        </div>
        <div className="mono-label flex items-center justify-end px-5 py-3 md:px-8">v0.1</div>
      </div>

      {/* Row 02 — the whole pitch, left; the object, right */}
      <div className="relative grid md:grid-cols-4">
        <AmbientField className="opacity-70" />

        <div className="relative border-b border-border md:col-span-2 md:border-b-0 md:border-r">
          <div className="flex h-full flex-col justify-center p-5 md:min-h-[min(78vh,600px)] md:p-8">
            <div className="tick" />
            <h1
              className="display-caps reveal text-[clamp(1.95rem,3.5vw,3.2rem)]"
              style={{ animationDelay: "60ms" }}
            >
              Know your parent
              <br />
              is alright —
              <br />
              <span className="text-muted-foreground">
                without asking them
                <br />
                to prove it.
              </span>
            </h1>

            <p
              className="reveal mt-7 max-w-[46ch] text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "180ms" }}
            >
              Mirrorfolio learns the rhythms of daily life at home — medication, movement, rest —
              and tells you when they change. No cameras. No wearables. Nothing to charge.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact?intent=waitlist"
                className="mono-label clip-corner bg-signal px-6 py-4 text-signal-foreground transition-opacity hover:opacity-85"
              >
                Join the waitlist
              </Link>
              <Link
                href="/platform"
                className="mono-label border border-border bg-background px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
              >
                See how it learns ↗
              </Link>
            </div>

            <p className="mono-label mt-7 leading-relaxed">{proofLine}</p>
          </div>
        </div>

        <div className="relative flex flex-col border-border md:col-span-2">
          <div className="relative aspect-[4/3] border-b border-border sm:aspect-[16/10] md:aspect-auto md:min-h-0 md:flex-1">
            <Image
              src={heroHub}
              alt="The Mirrorfolio Home Hub — a softly lit table lamp on a graphite base, sitting quietly in a room"
              width={1408}
              height={1408}
              priority
              className="absolute inset-0 h-full w-full object-contain p-6 [mask-image:radial-gradient(closest-side,#000_62%,transparent_98%)] [-webkit-mask-image:radial-gradient(closest-side,#000_62%,transparent_98%)] md:p-10"
            />
            <div className="mono-label absolute left-0 top-0 p-5 md:p-8">
              Home Hub
              <br />
              In Development · The brain
            </div>
          </div>

          <div className="grid sm:grid-cols-2">
            <div className="mono-label flex items-center border-b border-border p-5 sm:border-b-0 sm:border-r md:p-8">
              Routine is
              <br />
              the signal
            </div>
            <div className="bg-ink p-5 text-ink-foreground brackets md:p-8">
              <div className="mono-label text-ink-foreground/60">Routine</div>
              <div className="display-caps mt-2 text-2xl">Stable</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/75">
                What a good week looks like, said plainly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
