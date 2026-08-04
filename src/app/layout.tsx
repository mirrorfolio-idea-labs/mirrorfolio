import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";

import { jsonLd } from "@/lib/json-ld";
import { siteUrl } from "@/lib/site";

import "./globals.css";

/**
 * Self-hosted replacement for the old
 * `fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600` link.
 * Same family, same four weights — no render-blocking third-party request.
 */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Mirrorfolio Labs" }],
  openGraph: {
    siteName: "Mirrorfolio",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f3f1",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mirrorfolio",
  description: "Ambient care intelligence for older adults — edge AI, no cameras, no wearables.",
  url: "/",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationLd) }}
        />
      </body>
    </html>
  );
}
