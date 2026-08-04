"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeadlineRow, SectionRail, StatusTag } from "./Section";
import { products } from "./products.data";

export function Ecosystem() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section className="border-b border-border">
      <SectionRail index="05" label="The ecosystem" note="Six objects · One system" />
      <HeadlineRow
        headline={
          <>
            Designed to disappear.
            <br />
            <span className="text-muted-foreground">Built to understand.</span>
          </>
        }
        body="Each device is a window into a different dimension of daily life. Together, they form a complete picture of routine — without ever asking the person living with them to change a thing."
      />

      <div className="border-t border-border">
        <div
          ref={trackRef}
          tabIndex={0}
          aria-label="Mirrorfolio device family"
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          {products.map((p) => (
            <article
              key={p.name}
              data-card
              className="group flex w-full shrink-0 snap-start flex-col border-r border-border md:w-1/2 lg:w-1/3"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {p.img ? (
                  <Image
                    src={p.img}
                    alt={`Mirrorfolio ${p.name}`}
                    loading="lazy"
                    width={1408}
                    height={1408}
                    className="h-full w-full object-contain p-4 [mask-image:radial-gradient(closest-side,#000_62%,transparent_98%)] [-webkit-mask-image:radial-gradient(closest-side,#000_62%,transparent_98%)] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02] md:p-6"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center grid-mesh">
                    <span className="mono-label border border-border px-3 py-1">Undisclosed</span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 grid-mesh opacity-40" />
                <div className="pointer-events-none absolute inset-0 flex items-start justify-between p-4">
                  <span className="mono-label">{p.dimension}</span>
                  <StatusTag status={p.status} />
                </div>
              </div>
              <div className="flex-1 border-t border-border p-5 md:p-8">
                <div className="mono-label">{p.when}</div>
                <div className="display-caps mt-3 text-xl">{p.name}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border p-5 md:p-8">
        <Link
          href="/ecosystem"
          className="mono-label border border-border px-6 py-4 transition-colors hover:bg-secondary hover:text-foreground"
        >
          View full ecosystem ↗
        </Link>
        <div className="flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous device"
            className="mono-label border border-border px-5 py-4 transition-colors hover:bg-secondary hover:text-foreground"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next device"
            className="mono-label border border-l-0 border-border px-5 py-4 transition-colors hover:bg-secondary hover:text-foreground"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
