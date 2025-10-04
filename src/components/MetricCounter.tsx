// src/components/MetricCounter.tsx
"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface MetricCounterProps {
  target: number;
  title: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const MetricCounter = ({ target, title, prefix = "", suffix = "", className }: MetricCounterProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <h3 className="text-4xl md:text-5xl font-bold text-light-accent dark:text-dark-accent">
        {inView ? (
          <CountUp
            start={0}
            end={target}
            duration={2.5}
            prefix={prefix}
            suffix={suffix}
          />
        ) : (
          `${prefix}0${suffix}` // Show 0 until it's in view
        )}
      </h3>
      <p className="mt-2 text-sm md:text-base opacity-80">{title}</p>
    </div>
  );
};

export default MetricCounter;