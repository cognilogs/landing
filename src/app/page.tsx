import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import DeploymentSection from "@/components/sections/DeploymentSection";
import ConfidenceSection from "@/components/sections/ConfidenceSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FaqSection from "@/components/sections/FaqSection";
import WaitlistSection from "@/components/sections/WaitlistSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <OutcomesSection />
      <DeploymentSection />
      <ConfidenceSection />
      <FaqSection />
      <WaitlistSection />
    </>
  );
}
