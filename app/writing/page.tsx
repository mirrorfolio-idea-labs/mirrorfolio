import { Metadata } from "next";
import { WritingListSection } from "@/components/layout/writing/components";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building care technology that respects boundaries. Design decisions, research findings, and updates from Mirrorfolio.",
  keywords: [
    "elder care blog",
    "caregiving technology insights",
    "dignity in elder care",
    "mirrorfolio updates",
  ],
  alternates: {
    canonical: "https://mirrorfolio.com/writing",
  },
};

// Blog schema
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Mirrorfolio Writing",
  description:
    "Notes on building care technology that respects boundaries. Design decisions, research findings, and updates.",
  url: "https://mirrorfolio.com/writing",
  publisher: {
    "@type": "Organization",
    name: "Mirrorfolio",
    url: "https://mirrorfolio.com",
  },
  author: {
    "@type": "Person",
    name: "Kabeer Hadi",
  },
};

export default function WritingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 pt-16">
          <WritingListSection />
        </main>
      </div>
    </>
  );
}
