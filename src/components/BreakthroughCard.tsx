// src/components/BreakthroughCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BreakthroughCardProps {
  type: "News" | "Research Highlight";
  title: string;
  description: string;
  link: string;
}

const BreakthroughCard = ({ type, title, description, link }: BreakthroughCardProps) => {
  return (
    // The wrapping Link makes the entire card clickable
    <Link href={link} className="block group">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-light-content dark:bg-dark-content h-full p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-light-accent dark:text-dark-accent">
            {type}
          </span>
          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-transform duration-300 group-hover:rotate-45" />
        </div>
        <h3 className="text-xl font-bold mb-2 flex-grow">{title}</h3>
        <p className="text-sm opacity-70">{description}</p>
        <span className="text-sm font-semibold text-light-accent dark:text-dark-accent mt-4 self-start">
          Read More →
        </span>
      </motion.div>
    </Link>
  );
};

export default BreakthroughCard;