import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Mirrorfolio — AI Care Copilot for Families",
  description: "Monitor your elderly parent's recovery routine remotely — no cameras, no apps for them, just peace of mind. Join early access.",
  authors: [{ name: "Mirrorfolio" }],
  openGraph: {
    title: "Mirrorfolio — Know they're okay, from anywhere",
    description: "AI-powered recovery monitoring for elderly parents. No cameras. No apps for them. Just peace of mind for you.",
    type: "website",
    url: "https://mirrorfolio.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirrorfolio — AI Care Copilot for Families",
    description: "Monitor your parent's recovery remotely. No cameras. No apps for them. Just peace of mind.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${dmSans.variable} antialiased`}>
        <TooltipProvider>
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
