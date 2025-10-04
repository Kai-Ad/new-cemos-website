// src/app/team/page.tsx
"use client"; // This is crucial for using state and event handlers

import { useState } from 'react';
import { TeamMember, teamData } from '@/data/team';
import TeamMemberCard from '@/components/TeamMemberCard';
import TeamModal from '@/components/TeamModal';

export default function TeamPage() {
  // State to keep track of the currently selected member for the modal
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="pt-24 px-6 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-4xl font-bold tracking-heading">Meet the Team</h1>
        <p className="mt-4 max-w-3xl opacity-80">
          Our center is driven by a diverse group of talented researchers and staff, each contributing unique expertise to our collective mission.
        </p>
        
        {/* Grid of Team Members */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16">
          {teamData.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>
      
      {/* The Modal Component */}
      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}