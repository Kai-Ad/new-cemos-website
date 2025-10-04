// src/data/instruments.ts
export interface Instrument {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export const instrumentsData: Instrument[] = [
  {
    id: 1,
    name: 'Xenocs Xeuss 2.0 X-ray Scattering Instrument',
    imageUrl: 'https://xenocs.com/wp-content/uploads/2020/03/Xeuss-3.0-HR-1-1024x683.jpg',
    description: 'This state-of-the-art X-ray scattering instrument is used for morphology characterization of organic semiconductors and soft matter, enabling broad access to advanced semiconductor analysis.',
    specs: [
      { label: 'Resolution', value: 'High angular resolution' },
      { label: 'Capabilities', value: 'SAXS/WAXS/GISAXS modes' },
      { label: 'Sample Handling', value: 'Vacuum or in-situ' },
      { label: 'Beam Source', value: 'Cu K-alpha X-ray' },
    ],
  },
  {
    id: 2,
    name: 'Synchrotron X-ray Scattering (via Collaborations)',
    imageUrl: 'https://images.unsplash.com/photo-1633613286848-f67234a5d3e0?q=80&w=1770&auto=format&fit=crop',
    description: 'Accessed through partnerships like Lawrence Berkeley National Lab, this tool is used for high-throughput real-time X-ray scattering to study polymer thin films and dynamics.',
    specs: [
      { label: 'Resolution', value: 'Millisecond temporal' },
      { label: 'Capabilities', value: 'Real-time GISAXS' },
      { label: 'Energy Range', value: 'Tunable beamline' },
      { label: 'Sample Throughput', value: 'High' },
    ],
  },
  {
    id: 3,
    name: 'Thin Film Mechanics Testing Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1581093581536-e8c1426615b6?q=80&w=1770&auto=format&fit=crop',
    description: 'Custom and standard equipment for measuring fracture energy and mechanical properties of sub-100nm polymeric films, essential for deformable electronics research.',
    specs: [
      { label: 'Thickness Range', value: 'Sub-15nm to 100nm' },
      { label: 'Environments', value: 'Freestanding or liquid' },
      { label: 'Measurements', value: 'Fracture energy, tensile' },
      { label: 'Precision', value: 'Nanoscale resolution' },
    ],
  },
];