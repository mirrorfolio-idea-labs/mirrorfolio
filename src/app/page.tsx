"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ProductPreview from "@/components/home/ProductPreview";
import DifferenceSection from "@/components/home/DifferenceSection";
import WhoItsForSection from "@/components/home/WhoItsForSection";
import TimelineSection from "@/components/home/TimelineSection";
import FounderNote from "@/components/home/FounderNote";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main>
          <HeroSection />
          <ProblemSection />
          <ProductPreview />
          <DifferenceSection />
          <WhoItsForSection />
          <TimelineSection />
          <FounderNote />
          <TrustSection />
          <CTASection />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
