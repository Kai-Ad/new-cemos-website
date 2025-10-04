// src/app/instrumentations/page.tsx
import { instrumentsData } from "@/data/instruments";
import InstrumentCard from "@/components/InstrumentCard";
import FadeInSection from "@/components/FadeInSection";

export default function InstrumentationsPage() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-heading">State-of-the-Art Facilities</h1>
        <p className="mt-4 max-w-3xl mx-auto opacity-80">
          We utilize a suite of advanced instruments to fabricate, characterize, and test novel materials and devices, enabling groundbreaking research.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {instrumentsData.map(instrument => (
          <FadeInSection key={instrument.id}>
            <InstrumentCard instrument={instrument} />
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}