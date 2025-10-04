// src/data/team.ts
export interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  researchInterests: string[];
  googleScholar: string;
  linkedin?: string; // Optional linkedin link
}

// Function to create a placeholder avatar URL
const createAvatarUrl = (name: string) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  return `https://ui-avatars.com/api/?name=${initials}&background=172A45&color=E6F1FF&size=300`;
};

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Xiaodan Gu',
    title: 'Nina Bell Suggs Associate Professor and Center Leader',
    imageUrl: 'https://static.wixstatic.com/media/73a988_2a98f7e224e7436ca6ef16629a7d3639~mv2.jpg/v1/fill/w_440,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4565.jpg',
    bio: 'Xiaodan Gu is the Nina Bell Suggs endowed associate professor of Polymer Science and Engineering at The University of Southern Mississippi. Since 2017, he has led research at USM focusing on the physics and morphology of conjugated polymers, with applications in organic electronics, wearable devices, and sustainable energy. His work has earned him the NSF CAREER Award, DOE Early Career Research Award, and the Presidential Early Career Award for Scientists and Engineers (PECASE) in 2025.',
    researchInterests: ['Polymer physics', 'Organic electronics', 'X-ray and neutron scattering', 'High-throughput materials discovery', 'Deformable semiconductors'],
    googleScholar: 'https://scholar.google.com/citations?user=c5Q09BMAAAAJ&hl=en',
  },
  {
    id: 2,
    name: 'Sarah Morgan',
    title: 'Professor',
    imageUrl: createAvatarUrl('Sarah Morgan'),
    bio: 'Sarah Morgan is a professor in the School of Polymer Science and Engineering at The University of Southern Mississippi, collaborating on CEMOs projects. Her expertise lies in polymer surfaces, interfaces, and nanocomposites, contributing to the center\'s mission in advancing organic electronics and materials characterization.',
    researchInterests: ['Polymer composites', 'Surface chemistry', 'Bio-inspired materials', 'Polymer processing', 'Sustainable polymers'],
    googleScholar: 'https://scholar.google.com/citations?user=9d3w6pUAAAAJ&hl=en',
  },
  {
    id: 3,
    name: 'Derek Patton',
    title: 'Professor',
    imageUrl: createAvatarUrl('Derek Patton'),
    bio: 'Derek Patton is a professor and Director of the School of Polymer Science and Engineering at The University of Southern Mississippi. He contributes to CEMOs as a co-principal investigator on projects like data-driven membrane discovery, focusing on polymer synthesis and surface modification for energy applications.',
    researchInterests: ['Polymer synthesis', 'Surface modification', 'Click chemistry', 'Biomaterials', 'Energy materials'],
    googleScholar: 'https://scholar.google.com/citations?user=8k9zE5YAAAAJ&hl=en',
  },
  {
    id: 4,
    name: 'Graham Collier',
    title: 'Assistant Professor',
    imageUrl: createAvatarUrl('Graham Collier'),
    bio: 'Graham Collier is an assistant professor in the School of Polymer Science and Engineering at The University of Southern Mississippi. His work supports CEMOs research in conjugated polymers and organic electronics, with emphasis on synthetic design for optoelectronic devices.',
    researchInterests: ['Conjugated polymer synthesis', 'Optoelectronic materials', 'Organic semiconductors', 'Solar cells', 'Structure-property relationships'],
    googleScholar: 'https://scholar.google.com/citations?user=3p7h3tAAAAAJ&hl=en',
  },
  {
    id: 5,
    name: 'Song Guo',
    title: 'Professor',
    imageUrl: createAvatarUrl('Song Guo'),
    bio: 'Song Guo is a professor in the School of Mathematics and Natural Sciences at The University of Southern Mississippi. He collaborates with CEMOs on chemistry-related aspects of polymer electronics, with research cited over 961 times focusing on chemical processes and materials.',
    researchInterests: ['Organic chemistry', 'Biochemical materials', 'Polymer functionalization', 'Deuteration chemistry', 'Scattering techniques'],
    googleScholar: 'https://scholar.google.com/citations?user=2Z0q3zQAAAAJ&hl=en',
  },
  {
    id: 6,
    name: 'Tristan Clemons',
    title: 'Assistant Professor',
    imageUrl: createAvatarUrl('Tristan Clemons'),
    bio: 'Tristan Clemons is an assistant professor in the School of Polymer Science and Engineering at The University of Southern Mississippi. His contributions to CEMOs include research on soft matter and bioelectronics, aligning with the center\'s focus on deformable materials and devices.',
    researchInterests: ['Soft matter physics', 'Bioelectronics', 'Peptide-based materials', 'Self-assembly', 'Tissue engineering'],
    googleScholar: 'https://scholar.google.com/citations?user=2N7k5zAAAAAJ&hl=en',
  },
  {
    id: 7,
    name: 'Alex Flynt',
    title: 'Professor',
    imageUrl: createAvatarUrl('Alex Flynt'),
    bio: 'Alex Flynt is a professor in the Center for Molecular and Cellular Biosciences at The University of Southern Mississippi. He supports CEMOs through genetics and microscopy techniques, using eukaryotic cell culture and advanced imaging for materials research.',
    researchInterests: ['RNA biology', 'Genetics', 'Advanced microscopy', 'Cell culture', 'Molecular biosciences'],
    googleScholar: 'https://scholar.google.com/citations?user=sEsQ_BsAAAAJ&hl=en',
  },
  {
    id: 8,
    name: 'Boran Ma',
    title: 'Assistant Professor',
    imageUrl: createAvatarUrl('Boran Ma'),
    bio: 'Boran Ma is an assistant professor in the School of Polymer Science and Engineering at The University ofSouthern Mississippi. His work in CEMOs involves polymer dynamics and membrane technologies, contributing to high-throughput discovery for energy applications.',
    researchInterests: ['Polymer membranes', 'Molecular dynamics', 'Computational materials science', 'Energy storage', 'Carbon capture'],
    googleScholar: 'https://scholar.google.com/citations?user=3zY0zYQAAAAJ&hl=en',
  },
];