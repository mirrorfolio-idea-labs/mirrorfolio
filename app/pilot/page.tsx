import { Metadata } from "next";
import {
  PilotOrientationSection,
  WhoThisIsForSection,
  WhatsIncludedSection,
  PricingSection,
  HowPilotWorksSection,
  LimitsAndRisksSection,
  AfterPilotSection,
  ApplySection,
} from "@/components/layout/pilot/components";

export const metadata: Metadata = {
  title: "Pilot Program",
  description:
    "Join the Mirrorfolio pilot — a 6-month learning partnership for families seeking awareness without surveillance. ₹8,499, clear limits, no manipulation.",
  keywords: [
    "mirrorfolio pilot program",
    "elder care pilot India",
    "non-intrusive care trial",
    "aging parents monitoring pilot",
  ],
  alternates: {
    canonical: "https://mirrorfolio.com/pilot",
  },
};

// Product structured data for the pilot program
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Mirrorfolio Pilot Program",
  description:
    "A 6-month learning partnership for families seeking awareness without surveillance for aging parents living alone.",
  brand: {
    "@type": "Brand",
    name: "Mirrorfolio",
  },
  offers: {
    "@type": "Offer",
    price: "8499",
    priceCurrency: "INR",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://mirrorfolio.com/pilot",
    priceValidUntil: "2026-12-31",
    seller: {
      "@type": "Organization",
      name: "Mirrorfolio",
    },
  },
  category: "Elder Care Technology",
};

export default function PilotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 pt-16">
          <PilotOrientationSection />
          <WhoThisIsForSection />
          <WhatsIncludedSection />
          <PricingSection />
          <HowPilotWorksSection />
          <LimitsAndRisksSection />
          <AfterPilotSection />
          <ApplySection />
        </main>
      </div>
    </>
  );
}
