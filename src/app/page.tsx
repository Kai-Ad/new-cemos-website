// src/app/page.tsx
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import BreakthroughsSection from "@/components/BreakthroughsSection";
import FadeInSection from "@/components/FadeInSection"; // <-- Import the component

export default function Home() {
  return (
    <>
      <HeroSection />

      <FadeInSection>
        <ImpactSection />
      </FadeInSection>

      <FadeInSection>
        <BreakthroughsSection />
      </FadeInSection>
    </>
  );
}