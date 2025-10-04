// src/data/research.ts
export interface Project {
  id: number;
  title: string;
  category: 'Deformable Electronics' | 'Thin Film Mechanics' | 'Polymer Physics' | 'Polymer Characterization';
  imageUrl: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Engineering Deformable Polymeric Electronics',
    category: 'Deformable Electronics',
    // NOTE: .tiff files are not supported on the web. I have used a relevant placeholder.
    imageUrl: 'https://images.unsplash.com/photo-1617862375863-74a4b4c650c8?q=80&w=1935&auto=format&fit=crop',
    description: 'Engineering semiconducting polymers for high deformability and electronic functionality using unique thin film mechanic analysis, targeting the future of wearable electronics.',
  },
  {
    id: 2,
    title: 'Thin Film Mechanic Analysis in Freestanding Environments',
    category: 'Thin Film Mechanics',
    imageUrl: 'https://images.unsplash.com/photo-1628359237748-248924b5d84b?q=80&w=1770&auto=format&fit=crop',
    description: 'Enabling mechanical property analysis of sub-15nm polymers suspended in air or liquid environments to advance designs in deformable electronics.',
  },
  {
    id: 3,
    title: 'Fracture Analysis of Sub-100nm Thin Films',
    category: 'Thin Film Mechanics',
    imageUrl: 'https://images.unsplash.com/photo-1518109673977-95d38a03a763?q=80&w=1770&auto=format&fit=crop',
    description: 'Directly measuring fracture energy for sub-100nm thin films to enable robust design of deformable electronics.',
  },
  {
    id: 4,
    title: 'Understanding Structure and Dynamics of Conjugated Polymers',
    category: 'Polymer Physics',
    imageUrl: 'https://static.wixstatic.com/media/73a988_0ac00b1784f141269a8b139268f868ca~mv2.jpg/v1/fill/w_980,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/73a988_0ac00b1784f141269a8b139268f868ca~mv2.jpg',
    description: 'Developing new insights into the physical properties of conjugated polymers to underpin device stability and performance.',
  },
  {
    id: 5,
    title: 'Chain Conformation Control in Semiconducting Polymers',
    category: 'Polymer Physics',
    imageUrl: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1807&auto=format&fit=crop',
    description: 'Exploring control of chain conformation in polymers to enhance optoelectronic properties, using deuteration and scattering techniques.',
  },
  {
    id: 6,
    title: 'Molecular Level Dynamics of Polymer Chains',
    category: 'Polymer Characterization',
    imageUrl: 'https://images.unsplash.com/photo-1554474689-17c244a0d33e?q=80&w=1770&auto=format&fit=crop',
    description: 'Applying characterization and modeling to understand molecular-level dynamics and chain conformation in semiconducting polymers.',
  },
];