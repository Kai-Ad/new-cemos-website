// src/components/ImpactSection.tsx
import MetricCounter from "./MetricCounter";

const ImpactSection = () => {
  return (
    <section className="py-20 bg-light-content dark:bg-dark-content">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Impact at a Glance</h2>
          <p className="mt-4 max-w-2xl mx-auto opacity-80">
            Driving innovation and excellence in the field of polymer electronics.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCounter target={208} title="Scholarly Works" />
          <MetricCounter target={37} prefix="$" suffix="M" title="In Funding" />
          <MetricCounter target={160} suffix="+" title="Students & Post-docs Trained" />
          <MetricCounter target={2} title="Patents Issued" />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;