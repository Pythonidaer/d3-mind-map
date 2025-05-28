import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Content\nStrategy',
    definition: 'The planning, development, delivery, and governance of content across platforms to support UX goals.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'content_purpose',
    label: 'Purpose of\nContent Strategy',
    definition: 'Align content with user needs and business goals to improve the overall experience.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'strategy_components',
    label: 'Key\nComponents',
    definition: 'Audience research, voice and tone, content types, delivery, and governance.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'content_process',
    label: 'Strategic\nProcess',
    definition: 'Steps taken to develop, plan, deliver, and maintain meaningful content.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'frontend_role',
    label: 'Frontend\nDeveloper Role',
    definition: 'Frontend developers translate content strategy into accessible, performant user experiences.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'headless_cms',
    label: 'Headless CMS\nArchitecture',
    definition: 'Separates content management from presentation layer for greater flexibility and scalability.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2
  {
    id: 'audience_analysis',
    label: 'Audience\nAnalysis',
    definition: 'Understand users’ content needs, language preferences, and behaviors.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'voice_tone',
    label: 'Voice and\nTone',
    definition: 'Create a consistent, brand-aligned content voice and adjust tone by context.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'content_types',
    label: 'Content\nTypes',
    definition: 'Different formats such as blogs, videos, tooltips, microcopy, FAQs, and case studies.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'content_governance',
    label: 'Governance\n& Workflow',
    definition: 'Establish roles, content audits, versioning, and content lifecycle maintenance.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'content_audit',
    label: 'Content\nAudit',
    definition: 'Inventory and assess all existing content for value, redundancy, or gaps.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'content_mapping',
    label: 'User Journey\nMapping',
    definition: 'Align content to key touchpoints and stages in the user journey.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'frontend_collab',
    label: 'Dev-Content\nCollaboration',
    definition: 'Work closely with content strategists to ensure structure, SEO, and layout are aligned.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'responsive_delivery',
    label: 'Responsive\nDelivery',
    definition: 'Ensure that content adapts to screen size, context, and input mode.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cms_flexibility',
    label: 'CMS\nFlexibility',
    definition: 'Content can be reused across channels via APIs, improving performance and future-proofing.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cms_examples',
    label: 'Popular\nHeadless CMSs',
    definition: 'Contentful, Strapi, Sanity, Hygraph, and Agility CMS offer powerful content APIs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
];

export const links = [
  { source: 'root', target: 'content_purpose' },
  { source: 'root', target: 'strategy_components' },
  { source: 'root', target: 'content_process' },
  { source: 'root', target: 'frontend_role' },
  { source: 'root', target: 'headless_cms' },

  { source: 'strategy_components', target: 'audience_analysis' },
  { source: 'strategy_components', target: 'voice_tone' },
  { source: 'strategy_components', target: 'content_types' },
  { source: 'strategy_components', target: 'content_governance' },

  { source: 'content_process', target: 'content_audit' },
  { source: 'content_process', target: 'content_mapping' },

  { source: 'frontend_role', target: 'frontend_collab' },
  { source: 'frontend_role', target: 'responsive_delivery' },

  { source: 'headless_cms', target: 'cms_flexibility' },
  { source: 'headless_cms', target: 'cms_examples' },
];
