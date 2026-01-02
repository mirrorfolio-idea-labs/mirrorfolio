import { Metadata } from "next";
import {
  PrivacyOpeningSection,
  WhatWeCollectSection,
  WhatWeDontCollectSection,
  DataStorageSection,
  WhoHasAccessSection,
  YourRightsSection,
  PrivacyClosingSection,
} from "@/components/layout/privacy/components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mirrorfolio handles your data. No legal jargon — plain language about what we collect, what we don't, and why.",
  keywords: [
    "mirrorfolio privacy policy",
    "elder care data privacy",
    "privacy-first elder monitoring",
  ],
  alternates: {
    canonical: "https://mirrorfolio.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1 pt-16">
        <PrivacyOpeningSection />
        <WhatWeCollectSection />
        <WhatWeDontCollectSection />
        <DataStorageSection />
        <WhoHasAccessSection />
        <YourRightsSection />
        <PrivacyClosingSection />
      </main>
    </div>
  );
}
