import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/site/PageHeader";
import { CellGrid, HeadlineRow, SectionRail } from "@/components/site/Section";
import { jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

const title = "Careers — Mirrorfolio";
const description =
  "Build Ambient Care Intelligence with us. Embedded, on-device ML, industrial design and clinical partnership roles at Mirrorfolio Idea Labs.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/careers",
});

const roles = [
  {
    k: "R.01",
    t: "Embedded engineer",
    b: "Low-power firmware for devices that must run for years, quietly.",
  },
  {
    k: "R.02",
    t: "On-device ML",
    b: "Behavioural models small enough to live inside a ceramic object.",
  },
  {
    k: "R.03",
    t: "Industrial design",
    b: "Hardware that a living room accepts without negotiation.",
  },
  {
    k: "R.04",
    t: "Clinical partnerships",
    b: "Working with discharge teams to fit real hospital workflow.",
  },
];

const jobPostingsLd = roles.map((r) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: r.t,
  description: r.b,
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Mirrorfolio",
    url: siteUrl,
  },
  jobLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
  },
  directApply: true,
}));

export default function Page() {
  return (
    <>
      {jobPostingsLd.map((ld) => (
        <script
          key={ld.title}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(ld) }}
        />
      ))}

      <PageHeader
        index="K"
        eyebrow="Careers"
        title={
          <>
            Build the care layer
            <br />
            <span className="text-muted-foreground">nobody has to see.</span>
          </>
        }
        lede="We're a small team in Kerala working on hardware, on-device intelligence and clinical partnerships. We hire slowly and carefully."
      />

      <section className="border-b border-border">
        <SectionRail index="K.1" label="How we work" />
        <HeadlineRow
          headline={
            <>
              Fewer people.
              <br />
              <span className="text-muted-foreground">Longer horizons.</span>
            </>
          }
          body="Deep work, real homes, and iterations measured in months rather than sprints. If you want to ship something that has to work when nobody is watching, this is that."
        />
      </section>

      <section className="border-b border-border">
        <SectionRail index="K.2" label="Where we need help" note="Open, ongoing" />
        <CellGrid items={roles} />
        <div className="border-t border-border p-5 md:p-8">
          <Link
            href="/contact?intent=careers"
            className="mono-label clip-corner bg-signal px-6 py-4 text-signal-foreground transition-opacity hover:opacity-85"
          >
            Introduce yourself
          </Link>
        </div>
      </section>
    </>
  );
}
