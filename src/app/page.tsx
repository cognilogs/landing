import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import DeploymentSection from "@/components/sections/DeploymentSection";
import ConfidenceSection from "@/components/sections/ConfidenceSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import FaqSection from "@/components/sections/FaqSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "cognilogs | Support automation that runs in your network",
  description:
    "Local-first support automation for any ticketing system. cognilogs investigates the ticket, resolves it, or hands over the evidence.",
  path: "/",
});

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
