"use client";

import { motion } from "framer-motion";
import MetricCounter from "./MetricCounter";
import { ArrowRight, Target, Book, Users, Award } from "lucide-react";

const metrics = [
  { icon: Book, target: 208, title: "Scholarly Works", color: "from-blue-500 to-cyan-500" },
  { icon: Target, target: 37, prefix: "$", suffix: "M", title: "In Funding", color: "from-purple-500 to-pink-500" },
  { icon: Users, target: 160, suffix: "+", title: "Students & Post-docs", color: "from-orange-500 to-red-500" },
  { icon: Award, target: 2, title: "Patents Issued", color: "from-green-500 to-emerald-500" }
];

const ImpactSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 relative"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-6">
              Impact at a Glance
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering breakthroughs and fostering innovation in polymer electronics, 
              setting new standards in research and development.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={metric.title} className="relative">
              {/* Connecting lines between metrics */}
              {index < metrics.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700" />
              )}
              <MetricCounter
                target={metric.target}
                title={metric.title}
                prefix={metric.prefix}
                suffix={metric.suffix}
                index={index}
                className="h-full"
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/research"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-400 rounded-xl hover:from-blue-700 hover:to-teal-500 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
          >
            Explore Our Research
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default ImpactSection;