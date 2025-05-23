import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Ethical, Legal &\nBusiness Case',
    definition: 'Why accessibility matters: ethical inclusion, legal compliance, business growth, and societal impact.',
    color: 'root',
    shape: 'roundRect',
  },

  // Level 1
  {
    id: 'ethical',
    label: 'Ethical\nImperative',
    definition: 'Accessibility is a human right that supports inclusion, autonomy, and dignity.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'legal',
    label: 'Legal\nRequirements',
    definition: 'Laws and policies mandate digital accessibility in many countries and sectors.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'business',
    label: 'Business\nAdvantages',
    definition: 'Accessible websites reach more users, improve SEO, and reduce financial risk.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'societal',
    label: 'Societal\nBenefits',
    definition: 'Web accessibility reduces exclusion and helps bridge the digital divide.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },

  // Level 2: Ethical
  {
    id: 'crpd_rights',
    label: 'CRPD &\nHuman Rights',
    definition: 'The UN Convention affirms access to digital information as a human right.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'dignity_autonomy',
    label: 'Dignity &\nAutonomy',
    definition: 'Accessible sites let people navigate, communicate, and work independently.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Level 2: Legal
  {
    id: 'ada_us',
    label: 'ADA &\nU.S. Laws',
    definition: 'The Americans with Disabilities Act applies to web content via recent court rulings.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wcag_compliance',
    label: 'WCAG as\nLegal Standard',
    definition: 'Many global regulations reference WCAG Level AA as the benchmark for compliance.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Level 2: Business
  {
    id: 'market_reach',
    label: 'Expanded\nMarket Reach',
    definition: 'Accessible sites serve 1.3B+ disabled users globally with significant spending power.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'seo_synergy',
    label: 'SEO\nBenefits',
    definition: 'Accessibility practices like semantic HTML and captions improve search indexing.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'risk_avoidance',
    label: 'Avoid\nLegal Risk',
    definition: 'Failing to meet accessibility standards can result in lawsuits and reputational damage.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'ux_gain',
    label: 'Improved\nUser Experience',
    definition: 'Features like captions, focus outlines, and simpler layouts benefit everyone.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Level 2: Societal
  {
    id: 'rural_access',
    label: 'Rural &\nGlobal Access',
    definition: 'Accessible design supports users in rural areas, low-bandwidth zones, and underserved regions.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'digital_equity',
    label: 'Digital\nEquity',
    definition: 'Accessibility helps bridge the digital divide, promoting fairness across society.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'ethical' },
  { source: 'root', target: 'legal' },
  { source: 'root', target: 'business' },
  { source: 'root', target: 'societal' },

  { source: 'ethical', target: 'crpd_rights' },
  { source: 'ethical', target: 'dignity_autonomy' },

  { source: 'legal', target: 'ada_us' },
  { source: 'legal', target: 'wcag_compliance' },

  { source: 'business', target: 'market_reach' },
  { source: 'business', target: 'seo_synergy' },
  { source: 'business', target: 'risk_avoidance' },
  { source: 'business', target: 'ux_gain' },

  { source: 'societal', target: 'rural_access' },
  { source: 'societal', target: 'digital_equity' }
];
