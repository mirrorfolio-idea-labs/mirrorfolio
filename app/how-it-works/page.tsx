import { Metadata } from "next";
import {
  OrientationSection,
  AttentionSection,
  BaselinesSection,
  ContextSection,
  EscalationSection,
  ParentsSection,
  CaregiversSection,
  BoundarySection,
  NavigationFooterSection,
} from "@/components/layout/how-it-works/components";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Understand what Mirrorfolio pays attention to, what it deliberately ignores, and how it provides visibility without intrusion for caregivers of aging parents.",
  keywords: [
    "how mirrorfolio works",
    "non-intrusive elder monitoring",
    "activity pattern detection",
    "elder care without cameras",
  ],
  alternates: {
    canonical: "https://mirrorfolio.com/how-it-works",
  },
};

// FAQ structured data for rich snippets
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Mirrorfolio work without cameras?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mirrorfolio uses passive sensors to detect activity patterns in the home — like whether the kitchen is being used or if there's movement in living areas. It never records video, audio, or tracks location.",
      },
    },
    {
      "@type": "Question",
      name: "What does Mirrorfolio monitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mirrorfolio monitors routine patterns, not specific activities. It learns what's normal for your parent and only alerts you when patterns break unexpectedly — like an unusually quiet morning.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mirrorfolio invade privacy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Mirrorfolio is designed around dignity. It provides awareness without surveillance — you see patterns, not activities. Your parent's home remains their private space.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when the system detects something unusual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When patterns break, you receive a gentle notification. It's designed to reduce anxiety, not create it. You get context, not alarms.",
      },
    },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 pt-16">
          <OrientationSection />
          <AttentionSection />
          <BaselinesSection />
          <ContextSection />
          <EscalationSection />
          <ParentsSection />
          <CaregiversSection />
          <BoundarySection />
          <NavigationFooterSection />
        </main>
      </div>
    </>
  );
}
