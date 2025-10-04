import HeroSection from "@/components/HeroSection";
import BreakthroughsSection from "@/components/BreakthroughsSection";
import FadeInSection from "@/components/FadeInSection";
import dynamic from 'next/dynamic';

// Dynamically import ImpactMetrics with no SSR
const ImpactMetrics = dynamic(
  () => import('@/sections/ImpactMetrics'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactMetrics />
      <FadeInSection>
        <BreakthroughsSection />
      </FadeInSection>
    </>
  );
}