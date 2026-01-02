import { Metadata } from "next";
import {
  FounderOpeningSection,
  LivedProblemSection,
  CoreTensionSection,
  DesignDecisionSection,
  HowDecisionsSection,
  AboutFounderSection,
  AccountabilitySection,
  FounderClosingSection,
} from "@/components/layout/founder/components";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Who decides where the lines are drawn. Not biography, not origin story — just visible decision-making at Mirrorfolio.",
  keywords: [
    "Kabeer Hadi",
    "Mirrorfolio founder",
    "elder care startup India",
    "caregiving technology founder",
  ],
  alternates: {
    canonical: "https://mirrorfolio.com/founder",
  },
};

// Person schema for founder
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kabeer Hadi",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Mirrorfolio",
    url: "https://mirrorfolio.com",
  },
  email: "kabeer@mirrorfolio.com",
  url: "https://mirrorfolio.com/founder",
  description:
    "Founder of Mirrorfolio, building non-intrusive elder care technology in India.",
};

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 pt-16">
          <FounderOpeningSection />
          <LivedProblemSection />
          <CoreTensionSection />
          <DesignDecisionSection />
          <HowDecisionsSection />
          <AboutFounderSection />
          <AccountabilitySection />
          <FounderClosingSection />
        </main>
      </div>
    </>
  );
}
