import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SignalPreviewCard from "@/components/SignalPreviewCard";
import WhyWeBuiltThis from "@/components/WhyWeBuiltThis";
import PricingTeaser from "@/components/PricingTeaser";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <SignalPreviewCard />
      <WhyWeBuiltThis />
      <PricingTeaser />
      <Faq />
      <FinalCta />
    </>
  );
}
