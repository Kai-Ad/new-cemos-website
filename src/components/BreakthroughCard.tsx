// src/components/BreakthroughCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BreakthroughCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string;
  readMoreUrl: string;
  stats: Record<string, string>;
  team: readonly string[];
  color: string;
}

const BreakthroughCard = ({
  title,
  description,
  tags,
  imageUrl,
  readMoreUrl,
  stats,
  team,
  color
}: BreakthroughCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Tags overlay */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-sm backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 relative">
        {/* Title & Description */}
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3 group-hover:bg-opacity-70 transition-colors">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Research Team</div>
          <div className="flex flex-wrap gap-2">
            {team.map((member) => (
              <span
                key={member}
                className="text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                {member}
              </span>
            ))}
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={readMoreUrl}
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          Learn More
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.span>
        </Link>

        {/* Decorative gradient orbs */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-10 blur-2xl rounded-full -z-10 transform translate-x-1/2 -translate-y-1/2`} />
        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${color} opacity-10 blur-2xl rounded-full -z-10 transform -translate-x-1/2 translate-y-1/2`} />
      </div>
    </motion.div>
  );
};

export default BreakthroughCard;