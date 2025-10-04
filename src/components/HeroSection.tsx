// src/components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import HeroAnimation from "./HeroAnimation";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroAnimation />
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-heading">
          Pioneering the Future of
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-heading text-light-accent dark:text-dark-accent mt-2">
          Polymer Electronics
        </h2>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          Advancing science and engineering at the intersection of materials chemistry, physics, and device engineering.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;