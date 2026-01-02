import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/commons/Footer";
import { Header } from "@/components/layout/commons/header";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Site-wide metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://mirrorfolio.com"),
  title: {
    default:
      "Mirrorfolio — Early visibility for caregivers, without surveillance",
    template: "%s | Mirrorfolio",
  },
  description:
    "A non-intrusive way for adult children to stay aware of aging parents living alone. No cameras, no microphones, no location tracking — just awareness.",
  keywords: [
    "elder care without surveillance",
    "non-intrusive care for aging parents",
    "remote monitoring without cameras",
    "dignity-first elder care India",
    "caregiver awareness system",
    "aging parents living alone",
    "elder care technology India",
    "remote care without invasion of privacy",
    "awareness not surveillance",
    "parent care from distance",
  ],
  authors: [{ name: "Kabeer Hadi", url: "https://mirrorfolio.com/founder" }],
  creator: "Mirrorfolio",
  publisher: "Mirrorfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mirrorfolio.com",
    siteName: "Mirrorfolio",
    title:
      "Mirrorfolio — Early visibility for caregivers, without surveillance",
    description:
      "A non-intrusive way for adult children to stay aware of aging parents living alone. No cameras, no microphones, no location tracking.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mirrorfolio - Early visibility for caregivers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mirrorfolio — Early visibility for caregivers, without surveillance",
    description:
      "A non-intrusive way for adult children to stay aware of aging parents living alone.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://mirrorfolio.com",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/logo icon.svg",
    apple: "/logo icon.svg",
  },
  category: "technology",
};

// Organization structured data (JSON-LD)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mirrorfolio",
  url: "https://mirrorfolio.com",
  logo: "https://mirrorfolio.com/logo icon.svg",
  description:
    "A non-intrusive remote care system for adult children to stay aware of aging parents living alone, without surveillance.",
  founder: {
    "@type": "Person",
    name: "Kabeer Hadi",
    email: "kabeer@mirrorfolio.com",
  },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "kabeer@mirrorfolio.com",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Preconnect to font origins for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {/* Skip link for keyboard navigation - WCAG 2.1 */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
