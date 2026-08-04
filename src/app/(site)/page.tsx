import type { Metadata } from "next";

import { Hero } from "@/components/site/Hero";
import { Gap } from "@/components/site/Gap";
import { Reality } from "@/components/site/Reality";
import { Solution } from "@/components/site/Solution";
import { HowItLearns } from "@/components/site/HowItLearns";
import { Ecosystem } from "@/components/site/Ecosystem";
import { ForFamilies } from "@/components/site/ForFamilies";
import { ForHospitals } from "@/components/site/ForHospitals";
import { Validation } from "@/components/site/Validation";
import { Vision } from "@/components/site/Vision";
import { CTA } from "@/components/site/CTA";
import { jsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

const title = "Mirrorfolio — Ambient Care Intelligence";
const description =
  "Mirrorfolio learns the rhythms of daily life — medication, movement, rest — and notices when they change. No cameras. No wearables. Nothing to charge.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/" });

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mirrorfolio",
  url: siteUrl,
  description,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(websiteLd) }}
      />
      <Hero />
      <Gap />
      <Reality />
      <Solution />
      <HowItLearns />
      <Ecosystem />
      <ForFamilies />
      <ForHospitals />
      <Validation />
      <Vision />
      <CTA />
    </>
  );
}
