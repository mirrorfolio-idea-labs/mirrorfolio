import { Metadata } from "next";
import {
  EthicsOpeningSection,
  CorePrincipleSection,
  WillNotDoSection,
  ConsentSection,
  SilenceDesignSection,
  EscalationLimitsSection,
  ResponsibilitySection,
  DataSection,
  WhyPaidSection,
  EthicsClosingSection,
} from "@/components/layout/ethics/components";

export const metadata: Metadata = {
  title: "Ethics & Boundaries",
  description:
    "What Mirrorfolio will and won't do. Our boundaries around data, privacy, and dignity in elder care technology.",
  keywords: [
    "elder care ethics",
    "privacy in elder monitoring",
    "ethical elder care technology",
    "dignity-first care",
  ],
  alternates: {
    canonical: "https://mirrorfolio.com/ethics",
  },
};

// FAQ schema for ethics questions
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Mirrorfolio record video or audio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Mirrorfolio never records video or audio. We detect activity patterns, not the activities themselves.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mirrorfolio track location?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We don't track where your parent goes. The system only monitors activity patterns within the home.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mirrorfolio sell user data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, not now and not ever. Your data is never sold to third parties, advertisers, or data brokers.",
      },
    },
  ],
};

export default function EthicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 pt-16">
          <EthicsOpeningSection />
          <CorePrincipleSection />
          <WillNotDoSection />
          <ConsentSection />
          <SilenceDesignSection />
          <EscalationLimitsSection />
          <ResponsibilitySection />
          <DataSection />
          <WhyPaidSection />
          <EthicsClosingSection />
        </main>
      </div>
    </>
  );
}
