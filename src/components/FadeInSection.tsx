// src/components/FadeInSection.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInSection = ({ children, className }: FadeInSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will only trigger once
    threshold: 0.1,    // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Trigger the animation a little sooner
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;