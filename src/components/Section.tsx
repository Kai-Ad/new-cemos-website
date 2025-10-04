'use client';

import { motion } from 'framer-motion';

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const Section = ({ children, id, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-16 lg:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} // Start invisible and slightly down
        whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
        transition={{ duration: 0.6, ease: 'easeInOut' }} // Define the animation speed and feel
        viewport={{ once: true }} // Ensures the animation runs only once when it enters the viewport
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;