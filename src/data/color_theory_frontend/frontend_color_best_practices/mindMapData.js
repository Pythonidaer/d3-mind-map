import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Frontend Color\nBest Practices',
    definition: 'Guidelines and patterns to ensure consistent, accessible, and scalable color use in frontend development.',
    shape: 'roundRect',
    color: 'root',
  },

  // --- Level 1 ---
  {
    id: 'accessibility',
    label: 'Accessibility\nCompliance',
    definition: 'Ensuring color use meets contrast and usability standards for all users.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'scalability',
    label: 'Scalability\nand Tokens',
    definition: 'Using tokens and systemized naming for large-scale reuse and theme switching.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'design_dev_collab',
    label: 'Design-Dev\nCollaboration',
    definition: 'Ensuring that color decisions are unified across design tools and frontend code.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'responsive_theme',
    label: 'Responsive &\nTheme-Safe Colors',
    definition: 'Using color systems that adapt across light/dark modes and screen sizes.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // --- Level 2: Accessibility
  {
    id: 'wcag_contrast',
    label: 'WCAG\nContrast Ratios',
    definition: 'Use color combinations that meet AA or AAA accessibility thresholds.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'color_not_only',
    label: 'Don’t Rely\non Color Alone',
    definition: 'Always pair color with text, icons, or labels to avoid confusion.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // --- Level 3: Accessibility Examples
  {
    id: 'contrast_testing',
    label: 'Use\nTesting Tools',
    definition: 'Use plugins and analyzers to test color contrast programmatically.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'colorblind_friendly',
    label: 'Colorblind-\nFriendly Palettes',
    definition: 'Use palettes designed for deuteranopia, protanopia, and tritanopia.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // --- Level 2: Scalability
  {
    id: 'semantic_tokens',
    label: 'Semantic\nTokens',
    definition: 'Name colors based on function, not appearance (e.g., success-bg).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'theme_variables',
    label: 'Theme\nVariables',
    definition: 'Define colors as custom properties for dynamic theming.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // --- Level 3: Scalability Deep
  {
    id: 'token_hierarchy',
    label: 'Token\nHierarchy',
    definition: 'Separate core values (blue-500) from purpose-based values (button-primary).',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'design_tokens_sync',
    label: 'Design ↔ Dev\nToken Sync',
    definition: 'Ensure tokens are synced from Figma, Git, or style dictionary to code.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // --- Level 2: Collaboration
  {
    id: 'figma_styles',
    label: 'Figma\nColor Styles',
    definition: 'Use consistent shared styles in Figma to match coded tokens.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'handoff_specs',
    label: 'Color\nHandoff Specs',
    definition: 'Ensure specs include contrast info, states, and background context.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // --- Level 3: Collaboration Deep
  {
    id: 'design_review_process',
    label: 'Color Review\nChecklist',
    definition: 'Ensure designers and developers review color tokens and use together.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'cross_discipline_docs',
    label: 'Shared\nDocumentation',
    definition: 'Host documentation where both design and dev can update tokens.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // --- Level 2: Responsive and Theme-Safe
  {
    id: 'light_dark_tokens',
    label: 'Light/Dark\nToken Maps',
    definition: 'Use aliases to define different values for light and dark themes.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'contextual_colors',
    label: 'Contextual\nColor Variants',
    definition: 'Ensure interactive colors adapt to surfaces and states.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // --- Level 3: Responsive/Theme Safety
  {
    id: 'media_queries_color',
    label: 'Media Queries\nfor Color',
    definition: 'Use `prefers-color-scheme` for adapting themes in CSS.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'state_color_adjustments',
    label: 'State-Based\nOverrides',
    definition: 'Provide hover/active/focus states with contrast-aware colors.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
];

export const links = [
  { source: 'root', target: 'accessibility' },
  { source: 'root', target: 'scalability' },
  { source: 'root', target: 'design_dev_collab' },
  { source: 'root', target: 'responsive_theme' },

  { source: 'accessibility', target: 'wcag_contrast' },
  { source: 'accessibility', target: 'color_not_only' },
  { source: 'wcag_contrast', target: 'contrast_testing' },
  { source: 'color_not_only', target: 'colorblind_friendly' },

  { source: 'scalability', target: 'semantic_tokens' },
  { source: 'scalability', target: 'theme_variables' },
  { source: 'semantic_tokens', target: 'token_hierarchy' },
  { source: 'theme_variables', target: 'design_tokens_sync' },

  { source: 'design_dev_collab', target: 'figma_styles' },
  { source: 'design_dev_collab', target: 'handoff_specs' },
  { source: 'figma_styles', target: 'design_review_process' },
  { source: 'handoff_specs', target: 'cross_discipline_docs' },

  { source: 'responsive_theme', target: 'light_dark_tokens' },
  { source: 'responsive_theme', target: 'contextual_colors' },
  { source: 'light_dark_tokens', target: 'media_queries_color' },
  { source: 'contextual_colors', target: 'state_color_adjustments' },
];
