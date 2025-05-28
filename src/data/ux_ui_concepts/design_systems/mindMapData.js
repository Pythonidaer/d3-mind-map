import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Design Systems',
    definition: 'A design system is a complete set of standards, reusable components, and documentation guiding the design and development of products across platforms.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1 Positive Nodes
  {
    id: 'foundations',
    label: 'Design\nFoundations',
    definition: 'The core principles and visual language—typography, color, spacing, layout, grid, and icons—that form the base of a design system.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'components',
    label: 'Reusable\nComponents',
    definition: 'UI building blocks like buttons, inputs, modals, and cards that follow consistent styling and behavior.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'tokens',
    label: 'Design\nTokens',
    definition: 'Named values for spacing, typography, color, etc., used to ensure consistency across platforms.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'tooling',
    label: 'Tooling\n& Automation',
    definition: 'Infrastructure like component libraries, version control, CI/CD integration, and theming engines.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'governance',
    label: 'Governance\n& Adoption',
    definition: 'Policies, contribution models, and documentation strategies to maintain and scale the system.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2
  {
    id: 'typography',
    label: 'Typography',
    definition: 'Font stacks, sizes, weights, and line heights standardized across breakpoints and use cases.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'spacing',
    label: 'Spacing\n& Layout',
    definition: 'Standardized spacing scale (e.g., 4/8/16px) and layout grids to ensure alignment and rhythm.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'color_palette',
    label: 'Color\nSystem',
    definition: 'Defined color variables including base hues, functional colors, semantic variants, and dark/light modes.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'accessibility',
    label: 'Accessibility\nStandards',
    definition: 'Inclusive color contrast, keyboard support, focus management, and ARIA best practices built into the system.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'iconography',
    label: 'Icon\nLibrary',
    definition: 'System-wide icon styles with consistent stroke, sizing, and semantic meaning.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  {
    id: 'atoms',
    label: 'Atoms',
    definition: 'Smallest components like labels, buttons, and inputs that are combined into larger molecules.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'molecules',
    label: 'Molecules\n& Organisms',
    definition: 'Complex UI components built from atoms, like forms, modals, and navigation.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'storybook',
    label: 'Storybook\nDocs',
    definition: 'Interactive documentation tools like Storybook to showcase and test components in isolation.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  {
    id: 'versioning',
    label: 'Versioning\n& Updates',
    definition: 'Semantic versioning, changelogs, and upgrade strategies to track and distribute changes to components.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'multi_brand',
    label: 'Multi-brand\nSupport',
    definition: 'Support for white-label or multi-theme brands through token overrides and theme layers.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Negative Nodes
  {
    id: 'cons',
    label: 'Cons',
    definition: 'Challenges and drawbacks to implementing or maintaining a design system.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'anti_patterns',
    label: 'Anti-\nPatterns',
    definition: 'Common pitfalls or misapplications of design systems that cause fragmentation, bloat, or rigid UX.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Sub-cons
  {
    id: 'rigidity',
    label: 'Design\nRigidity',
    definition: 'Overly strict systems can limit creativity, block experimentation, or frustrate designers.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'duplicate_systems',
    label: 'Fragmented\nSystems',
    definition: 'Multiple conflicting systems created across departments due to lack of alignment or documentation.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'token_overhead',
    label: 'Token\nOverhead',
    definition: 'Too many tokens with unclear purpose or naming can create more confusion than consistency.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'inflexible_components',
    label: 'Inflexible\nComponents',
    definition: 'Overabstracted components that don’t support necessary customization for product-specific UX.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
];

export const links = [
  { source: 'root', target: 'foundations' },
  { source: 'root', target: 'components' },
  { source: 'root', target: 'tokens' },
  { source: 'root', target: 'tooling' },
  { source: 'root', target: 'governance' },
  { source: 'root', target: 'cons' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'foundations', target: 'typography' },
  { source: 'foundations', target: 'spacing' },
  { source: 'foundations', target: 'color_palette' },
  { source: 'foundations', target: 'iconography' },
  { source: 'foundations', target: 'accessibility' },

  { source: 'components', target: 'atoms' },
  { source: 'components', target: 'molecules' },

  { source: 'tooling', target: 'storybook' },
  { source: 'tooling', target: 'versioning' },
  { source: 'tooling', target: 'multi_brand' },

  { source: 'cons', target: 'rigidity' },
  { source: 'cons', target: 'duplicate_systems' },
  { source: 'anti_patterns', target: 'token_overhead' },
  { source: 'anti_patterns', target: 'inflexible_components' },
];
