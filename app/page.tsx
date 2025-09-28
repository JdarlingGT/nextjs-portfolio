"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { HeroSection } from "@/components/sections/hero";
import { FeaturedWorkSection } from "@/components/sections/featured-work";
import { PhilosophySection } from "@/components/sections/philosophy";
import { SkillsOverviewSection } from "@/components/sections/skills-overview";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

import { analytics } from "@/lib/analytics";

export default function Home() {
  const handleMobileCTA = () => {
    analytics.trackCTAClick("mobile-sticky", "Request Portfolio Walk-through");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded focus:bg-background focus:p-2"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex flex-col gap-20">
        <HeroSection />
        <FeaturedWorkSection />
        <PhilosophySection />
        <SkillsOverviewSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Mobile sticky CTA */}
      <button
        onClick={handleMobileCTA}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-primary px-6 py-3 text-white shadow-lg md:hidden"
      >
        Request Portfolio Walk-through
      </button>
    </div>
  );
}
