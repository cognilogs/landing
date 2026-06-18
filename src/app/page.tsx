import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesGridSection from "@/components/sections/FeaturesGridSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-center text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Integrates with your stack
          </p>
          <Marquee />
        </div>
      </section>
      <FeaturesGridSection />
      <TestimonialsSection />
      <WaitlistSection />
    </>
  );
}
