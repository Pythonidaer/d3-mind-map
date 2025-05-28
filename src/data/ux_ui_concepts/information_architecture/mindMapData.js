import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Information\nArchitecture',
    definition: 'The structural design of content to support findability, usability, and growth within digital products.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'ia_purpose',
    label: 'Purpose\nof IA',
    definition: 'Organize and structure content to help users find what they need with minimal effort.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ia_vs_ux',
    label: 'IA vs.\nUX',
    definition: 'IA focuses on organizing content; UX focuses on how users feel and interact with it.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ia_process',
    label: 'IA\nProcess',
    definition: 'Steps involved in designing effective content architecture.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ia_components',
    label: 'Core\nComponents',
    definition: 'The three main parts of IA: organization systems, labeling systems, and navigation systems.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ia_principles',
    label: 'IA\nPrinciples',
    definition: 'Key ideas for reducing cognitive load and guiding users effectively.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ia_outputs',
    label: 'Outputs &\nTools',
    definition: 'Includes sitemaps, taxonomies, and visualization tools that document IA structure.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2s
  {
    id: 'ia_research',
    label: 'User &\nContent Research',
    definition: 'Understand user needs and content scope before structuring IA.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ia_inventory',
    label: 'Content\nInventory',
    definition: 'List and analyze all existing content to identify gaps and redundancies.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ia_grouping',
    label: 'Grouping &\nLabeling',
    definition: 'Organize content into logical categories with clear, intuitive labels.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ia_navigation',
    label: 'Navigation\nDesign',
    definition: 'Create user-friendly structures for browsing and finding content.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'principle_objects',
    label: 'Principle of\nObjects',
    definition: 'Treat content as dynamic, living entities with lifecycles and attributes.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'principle_choices',
    label: 'Principle of\nChoices',
    definition: 'Limit visible options to prevent overwhelming users.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'principle_growth',
    label: 'Principle of\nGrowth',
    definition: 'Design IA with future content scaling in mind.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'sitemaps',
    label: 'Sitemaps',
    definition: 'Visual representations of a website’s hierarchical page structure.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'taxonomies',
    label: 'Taxonomies',
    definition: 'Conceptual classification systems used to organize content categories and metadata.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 3s
  {
    id: 'card_sorting',
    label: 'Card\nSorting',
    definition: 'A method to test how users group and label content.',
    shape: 'diamond',
    color: 'nodePositive2',
  },
  {
    id: 'tree_testing',
    label: 'Tree\nTesting',
    definition: 'Tests how easily users can find information in a proposed IA structure.',
    shape: 'diamond',
    color: 'nodePositive2',
  },
  {
    id: 'dynamic_sitemaps',
    label: 'Dynamic\nSitemaps',
    definition: 'Auto-updating visual maps that reflect changes in website content.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'taxonomy_governance',
    label: 'Governance\n& Maintenance',
    definition: 'Ongoing planning to keep taxonomies accurate, flexible, and scalable.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
];

export const links = [
  { source: 'root', target: 'ia_purpose' },
  { source: 'root', target: 'ia_vs_ux' },
  { source: 'root', target: 'ia_process' },
  { source: 'root', target: 'ia_components' },
  { source: 'root', target: 'ia_principles' },
  { source: 'root', target: 'ia_outputs' },

  { source: 'ia_process', target: 'ia_research' },
  { source: 'ia_process', target: 'ia_inventory' },
  { source: 'ia_process', target: 'ia_grouping' },
  { source: 'ia_process', target: 'ia_navigation' },

  { source: 'ia_principles', target: 'principle_objects' },
  { source: 'ia_principles', target: 'principle_choices' },
  { source: 'ia_principles', target: 'principle_growth' },

  { source: 'ia_outputs', target: 'sitemaps' },
  { source: 'ia_outputs', target: 'taxonomies' },

  { source: 'ia_components', target: 'card_sorting' },
  { source: 'ia_components', target: 'tree_testing' },
  { source: 'sitemaps', target: 'dynamic_sitemaps' },
  { source: 'taxonomies', target: 'taxonomy_governance' },
];
