// src/components/TeamModal.tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Book } from 'lucide-react';
import Image from 'next/image';
import { TeamMember } from '@/data/team';

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamModal = ({ member, onClose }: TeamModalProps) => {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            className="relative bg-light-background dark:bg-dark-content max-w-3xl w-full rounded-lg shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              <X size={24} />
            </button>
            <div className="grid md:grid-cols-3">
              <div className="relative md:col-span-1 h-64 md:h-full w-full">
                <Image
                  src={member.imageUrl}
                  alt={`Headshot of ${member.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h2 className="text-3xl font-bold">{member.name}</h2>
                <p className="text-lg text-light-accent dark:text-dark-accent mt-1">{member.title}</p>
                <div className="flex space-x-4 mt-4">
                  <a href={member.linkedin} className="hover:opacity-80 transition-opacity"><Linkedin /></a>
                  <a href={member.googleScholar} className="hover:opacity-80 transition-opacity"><Book /></a>
                </div>
                <p className="mt-6 text-sm opacity-90">{member.bio}</p>
                <h4 className="font-semibold mt-6 mb-2">Research Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {member.researchInterests.map(interest => (
                    <span key={interest} className="text-xs bg-light-content dark:bg-dark-background px-2 py-1 rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;