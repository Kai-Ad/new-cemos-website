// src/components/MetricCounter.tsx
"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface MetricCounterProps {
  target: number;
  title: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  index?: number;
}

const MetricCounter = ({ target, title, prefix = "", suffix = "", className, index = 0 }: MetricCounterProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`relative group perspective-1000 ${className}`}
    >
      <div className="relative transform transition-transform duration-500 group-hover:scale-105">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
        
        {/* Content container with glass effect */}
        <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-200/20 dark:border-gray-700/30 shadow-xl">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
            {inView ? (
              <CountUp
                start={0}
                end={target}
                duration={2.5}
                prefix={prefix}
                suffix={suffix}
                enableScrollSpy
                scrollSpyDelay={100}
              />
            ) : (
              `${prefix}0${suffix}`
            )}
          </h3>
          <p className="mt-3 text-sm md:text-base font-medium text-gray-600 dark:text-gray-300">{title}</p>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full blur-sm opacity-60" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-teal-500 rounded-full blur-sm opacity-60" />
        </div>
      </div>
    </motion.div>
  );
};

export default MetricCounter;