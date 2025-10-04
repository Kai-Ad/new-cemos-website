// src/components/TeamMemberCard.tsx
import Image from 'next/image';
import { TeamMember } from '@/data/team';

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
}

const TeamMemberCard = ({ member, onClick }: TeamMemberCardProps) => {
  return (
    <button
      onClick={onClick}
      className="text-left group transition-all duration-300"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={member.imageUrl}
          alt={`Headshot of ${member.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
      <p className="text-sm text-light-accent dark:text-dark-accent">{member.title}</p>
    </button>
  );
};

export default TeamMemberCard;