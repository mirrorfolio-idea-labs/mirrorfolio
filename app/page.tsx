import { Metadata } from "next";
import {
  HeroSection,
  CurrentStateSection,
  DisqualificationSection,
  LightOrientationSection,
  NavigationSection,
} from "@/components/layout/home/components";

export const metadata: Metadata = {
  title: "Mirrorfolio — Early visibility for caregivers, without surveillance",
  description:
    "A non-intrusive way for adult children to stay aware of aging parents living alone. No cameras, no microphones, no location tracking — just awareness.",
  alternates: {
    canonical: "https://mirrorfolio.com",
  },
};

// Homepage structured data
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mirrorfolio",
  url: "https://mirrorfolio.com",
  description:
    "Early visibility for caregivers, without surveillance. A non-intrusive way for adult children to stay aware of aging parents living alone.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mirrorfolio.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 pt-16">
          <HeroSection />
          <CurrentStateSection />
          <DisqualificationSection />
          <LightOrientationSection />
          <NavigationSection />
        </main>
      </div>
    </>
  );
}
