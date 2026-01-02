import { Metadata } from "next";
import {
  ContactOpeningSection,
  ContactFormSection,
} from "@/components/layout/contact/components";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have questions about Mirrorfolio? Reach out before committing. We respond within 48 hours.",
  keywords: [
    "contact mirrorfolio",
    "elder care questions",
    "mirrorfolio support",
  ],
  alternates: {
    canonical: "https://mirrorfolio.com/contact",
  },
};

// ContactPage schema
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Mirrorfolio",
  description: "Get in touch with questions about Mirrorfolio.",
  url: "https://mirrorfolio.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Mirrorfolio",
    email: "kabeer@mirrorfolio.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "kabeer@mirrorfolio.com",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-1 pt-16">
          <ContactOpeningSection />
          <ContactFormSection />
        </main>
      </div>
    </>
  );
}
