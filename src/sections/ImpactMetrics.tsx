'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Section from '@/components/Section';
import Counter from '@/components/Counter';
import { ArrowUpRight, Brain, Lightbulb, Users, Award } from 'lucide-react';

const metrics = [
  {
    icon: Brain,
    value: 50,
    label: 'Publications',
    description: 'Research papers in top-tier journals',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lightbulb,
    value: 15,
    label: 'Research Grants',
    prefix: '$',
    suffix: 'M',
    description: 'In secured research funding',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    value: 25,
    label: 'Active Researchers',
    description: 'Leading scientists and engineers',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Award,
    value: 12,
    label: 'Patents Filed',
    description: 'Breakthrough technologies',
    color: 'from-emerald-500 to-green-500'
  }
];

const ImpactMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <Section className="relative py-24 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(66, 153, 225, 0.1) 0%, transparent 50%)",
            opacity,
            scale
          }}
        />
        <motion.div
          className="absolute w-full h-full"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            opacity: 0.5
          }}
        />
      </div>

      <motion.div
        ref={containerRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Impact by the Numbers
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Pioneering breakthroughs in optoelectronics research and development
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl dark:shadow-gray-800/30">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`mb-4 bg-gradient-to-br ${metric.color} p-3 rounded-xl inline-block`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Counter */}
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    <Counter 
                      to={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </div>

                  {/* Label and Description */}
                  <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
                    {metric.label}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {metric.description}
                  </p>

                  {/* Hover effect corner decoration */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="/research"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Our Research
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
    </Section>
  );
};

export default ImpactMetrics;