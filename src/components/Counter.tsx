'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatter?: (value: number) => string;
}

const Counter = ({ 
  to, 
  duration = 2, 
  prefix = '', 
  suffix = '+',
  formatter = (v: number) => v.toLocaleString()
}: CounterProps) => {
  const controls = useAnimation();
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Smooth easing function for natural counting feel
  const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

  useEffect(() => {
    let startTimestamp: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = Math.round(easedProgress * to);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, to, duration]);

  const digitVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className="relative inline-flex items-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl" />
      
      {/* Prefix */}
      {prefix && (
        <motion.span
          variants={digitVariants}
          transition={{ duration: 0.4 }}
          className="mr-1"
        >
          {prefix}
        </motion.span>
      )}

      {/* Animated number */}
      <AnimatePresence mode="popLayout">
        {formatter(displayValue).split('').map((digit, index) => (
          <motion.span
            key={`${index}-${digit}`}
            variants={digitVariants}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="relative inline-block"
          >
            {digit}
          </motion.span>
        ))}
      </AnimatePresence>

      {/* Suffix with floating animation */}
      {suffix && (
        <motion.span
          variants={digitVariants}
          initial={{ y: 0 }}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="ml-1"
        >
          {suffix}
        </motion.span>
      )}
    </motion.div>
  );
};

export default Counter;