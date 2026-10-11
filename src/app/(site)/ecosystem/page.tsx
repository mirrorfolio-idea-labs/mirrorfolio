import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader, WaitlistCta } from "@/components/site/PageHeader";
import { proofLine } from "@/components/site/proof";
import { CTA } from "@/components/site/CTA";
import { HeadlineRow, SectionRail, StatusTag } from "@/components/site/Section";
import { products } from "@/components/site/products.data";
import { jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";

const title = "Ecosystem — Mirrorfolio";
const description =
  "The Mirrorfolio device family: the Home Hub, Pill Companion and Nutrition Box as Gen 8 prototypes, with contactless physiological sensing in Gen 9 development.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/ecosystem",
});

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mirrorfolio device family",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.body,
      brand: { "@type": "Brand", name: "Mirrorfolio" },
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListLd) }}
      />

      <PageHeader
        index="E"
        eyebrow="Ecosystem"
        title={
          <>
            Each device senses
            <br />
            a different dimension
            <br />
            <span className="text-muted-foreground">of recovery at home.</span>
          </>
        }
        lede="Together they form a complete picture of recovery. Three Gen 8 prototypes exist today, and Gen 9 adds contactless sensing of breathing and heart rhythm. Our first pilot wave is gated at 50 households."
        action={
          <>
            <WaitlistCta />
          </>
        }
        proof={proofLine}
      />

      <section className="border-b border-border">
        <SectionRail index="E.1" label="The device family" note="3 Gen 8 prototypes · Gen 9 in development" />
        <div className="grid md:grid-cols-2">
          {products.map((p, i) => (
            <article
              key={p.name}
              className={`flex flex-col border-b border-border md:p-0 ${
                i % 2 === 0 ? "md:border-r" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                {p.img ? (
                  <Image
                    src={p.img}
                    alt={`Mirrorfolio ${p.name}`}
                    loading="lazy"
                    width={1408}
                    height={1408}
                    className="h-full w-full object-contain p-4 [mask-image:radial-gradient(closest-side,#000_62%,transparent_98%)] [-webkit-mask-image:radial-gradient(closest-side,#000_62%,transparent_98%)] md:p-6"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center grid-mesh">
                    <span className="mono-label border border-border px-3 py-1">Undisclosed</span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 grid-mesh opacity-30" />
                <div className="pointer-events-none absolute inset-0 flex items-start justify-between p-4">
                  <span className="mono-label">{p.dimension}</span>
                  <StatusTag status={p.status} />
                </div>
              </div>
              <div className="p-5 md:p-8">
                <div className="mono-label">{p.when}</div>
                <div className="display-caps mt-3 text-xl">{p.name}</div>
                <p className="mt-3 max-w-[52ch] text-xs leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-ink text-ink-foreground">
        <SectionRail index="E.2" label="How they work together" invert />
        <HeadlineRow
          invert
          headline={
            <>
              One system.
              <br />
              <span className="text-ink-foreground/50">One intelligence.</span>
            </>
          }
          body="Each device contributes a signal, from routine or from physiology. The Home Hub synthesises them into a single recovery stability read. When several signals drift together, confidence rises. When one drifts alone, context decides."
        />
      </section>

      <CTA />
    </>
  );
}
