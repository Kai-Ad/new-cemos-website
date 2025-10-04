export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/team', label: 'Team' },
  { href: '/instrumentations', label: 'Instrumentations' },
];

export const impactMetrics = [
  { value: 50, label: 'Publications' },
  { value: 15, label: 'Research Grants' },
  { value: 25, label: 'Active Researchers' },
  { value: 12, label: 'Patents Filed' },
] as const;

export const breakthroughs = [
  {
    id: 'oled-polymer',
    title: 'Self-Assembling Polymer Chains for High-Efficiency OLEDs',
    description: 'A novel methodology for creating molecular chains that self-assemble into ideal structures, boosting OLED efficiency by over 25%.',
    tags: ['OLEDs', 'Polymer Chemistry', 'Nanotechnology'],
    imageUrl: '/images/breakthroughs/oled-polymer.jpg',
    stats: {
      efficiencyGain: '25%',
      patentStatus: 'Patent Pending',
      timeToMarket: '2 years'
    },
    team: ['Dr. Sarah Chen', 'Prof. James Wilson'],
    readMoreUrl: '/research/oled-polymer',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'perovskite',
    title: 'Breakthrough in Perovskite Solar Cell Stability',
    description: 'Our new encapsulation technique has extended the operational lifetime of perovskite cells by 300% under ambient conditions.',
    tags: ['Photovoltaics', 'Perovskite', 'Material Science'],
    imageUrl: '/images/breakthroughs/perovskite.jpg',
    stats: {
      stabilityIncrease: '300%',
      efficiency: '29.8%',
      lifetime: '5+ years'
    },
    team: ['Dr. Michael Chang', 'Dr. Emily Rodriguez'],
    readMoreUrl: '/research/perovskite-stability',
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: 'biosensors',
    title: 'Graphene-Based Biosensors for Real-Time Diagnostics',
    description: 'Developing highly sensitive biosensors capable of detecting specific biomarkers in real-time, opening new doors for medical diagnostics.',
    tags: ['Biosensors', 'Graphene', 'Optoelectronics'],
    imageUrl: '/images/breakthroughs/biosensors.jpg',
    stats: {
      sensitivity: '0.1 pg/mL',
      responseTime: '<1s',
      accuracy: '99.9%'
    },
    team: ['Prof. Lisa Kumar', 'Dr. Robert Martinez'],
    readMoreUrl: '/research/graphene-biosensors',
    color: 'from-emerald-500 to-green-400'
  },
  {
    id: 'quantum-dots',
    title: 'Quantum Dot Display Technology',
    description: 'Revolutionary quantum dot display technology achieving unprecedented color accuracy and energy efficiency in next-generation displays.',
    tags: ['Quantum Dots', 'Displays', 'Color Science'],
    imageUrl: '/images/breakthroughs/quantum-dots.jpg',
    stats: {
      colorGamut: '95% Rec. 2020',
      powerSaving: '40%',
      brightness: '1500 nits'
    },
    team: ['Dr. Alex Wong', 'Dr. Maria Garcia'],
    readMoreUrl: '/research/quantum-displays',
    color: 'from-orange-500 to-yellow-400'
  }
] as const;