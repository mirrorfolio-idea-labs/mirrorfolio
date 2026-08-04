import Image from "next/image";
import Link from "next/link";
import warmth from "@/assets/human-warmth.jpg";
import { SectionRail } from "./Section";

export function ForFamilies() {
  return (
    <section className="border-b border-border">
      <SectionRail index="06" label="For families" note="Quiet knowing" />

      <div className="grid md:grid-cols-4">
        <div className="border-b border-border p-5 md:col-span-2 md:border-b-0 md:border-r md:p-8">
          <h2 className="display-caps text-[clamp(1.8rem,3.4vw,3rem)]">
            Peace of mind
            <br />
            isn&apos;t a dashboard.
            <br />
            <span className="text-muted-foreground">It&apos;s a quiet confidence.</span>
          </h2>
          <p className="mt-8 max-w-[50ch] text-sm leading-relaxed text-muted-foreground md:text-base">
            The daughter who sleeps through the night because she knows her father&apos;s routine is
            stable. The son who travels for work without the low-grade fear that something is wrong
            and no one would know. Mirrorfolio doesn&apos;t replace presence. It extends it.
          </p>
          <blockquote className="mt-10 border-t border-border pt-6">
            <p className="max-w-[46ch] text-sm leading-relaxed md:text-base">
              &quot;For the first time in two years, I don&apos;t wake up wondering if I should have called
              yesterday.&quot;
            </p>
            <footer className="mono-label mt-3">Priya · Bangalore</footer>
          </blockquote>
          <div className="mt-10">
            <Link
              href="/families"
              className="mono-label border border-border px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
            >
              What a family actually sees ↗
            </Link>
          </div>
        </div>

        <div className="relative md:col-span-2">
          <Image
            src={warmth}
            alt="Elderly hands cradling a warm cup in soft morning light"
            width={1600}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover grayscale-[35%]"
          />
          <div className="pointer-events-none absolute inset-0 grid-mesh opacity-40" />
          <div className="mono-label absolute bottom-0 left-0 right-0 border-t border-border bg-background/90 px-5 py-3 backdrop-blur-sm md:px-8">
            Fewer surprise calls. More ordinary mornings.
          </div>
        </div>
      </div>
    </section>
  );
}
