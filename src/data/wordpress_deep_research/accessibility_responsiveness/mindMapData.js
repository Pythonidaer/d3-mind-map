import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Accessibility &\nResponsiveness',
    shape: 'roundRect',
    color: 'root',
    definition:
      'The practice of designing WordPress sites that are usable by all people, including those with disabilities, and optimized for display on all screen sizes and devices.',
  },

  // Positive Level 1
  {
    id: 'accessibility_guidelines',
    label: 'Accessibility\nGuidelines',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Standards like WCAG that define how to make websites perceivable, operable, understandable, and robust for people with disabilities.',
  },
  {
    id: 'responsive_design',
    label: 'Responsive\nDesign',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Design approach that ensures websites look and function well across devices using fluid layouts, flexible images, and media queries.',
  },
  {
    id: 'wordpress_support',
    label: 'WordPress\nSupport',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'How WordPress themes, plugins, and core support accessible and responsive best practices out of the box.',
  },

  // Positive Level 2 – Accessibility Guidelines
  {
    id: 'wcag',
    label: 'WCAG\nCompliance',
    parent: 'accessibility_guidelines',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Web Content Accessibility Guidelines define levels (A, AA, AAA) and success criteria for accessible design and development.',
  },
  {
    id: 'semantic_markup',
    label: 'Semantic HTML &\nLandmarks',
    parent: 'accessibility_guidelines',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Using HTML5 semantic elements (e.g., <main>, <nav>, <header>) to improve screen reader navigation and accessibility tree clarity.',
  },
  {
    id: 'keyboard_navigation',
    label: 'Keyboard\nNavigation',
    parent: 'accessibility_guidelines',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'All interactive elements must be operable using only the keyboard (Tab, Enter, Space, etc.) for users who cannot use a mouse.',
  },
  {
    id: 'aria_attributes',
    label: 'ARIA\nAttributes',
    parent: 'accessibility_guidelines',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Accessible Rich Internet Applications (ARIA) attributes describe elements and behaviors to assistive technologies when HTML alone isn’t enough.',
  },

  // Positive Level 2 – Responsive Design
  {
    id: 'media_queries',
    label: 'CSS Media\nQueries',
    parent: 'responsive_design',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'CSS rules that apply styles based on screen size, orientation, or resolution to create adaptable layouts.',
  },
  {
    id: 'mobile_first',
    label: 'Mobile-First\nDesign',
    parent: 'responsive_design',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Designing for small screens first and progressively enhancing layout and features for larger viewports.',
  },
  {
    id: 'flexbox_grid',
    label: 'Flexbox &\nGrid Systems',
    parent: 'responsive_design',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Modern CSS layout techniques used to build responsive interfaces that adapt fluidly to available space.',
  },
  {
    id: 'responsive_images',
    label: 'Responsive\nImages',
    parent: 'responsive_design',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Techniques like `srcset`, `sizes`, and image compression to serve appropriately-sized images for different devices.',
  },

  // Positive Level 2 – WordPress Support
  {
    id: 'theme_support',
    label: 'Theme\nSupport',
    parent: 'wordpress_support',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'WordPress provides accessibility-ready themes and responsive starter themes (e.g. _s, block themes) with built-in support.',
  },
  {
    id: 'plugin_support',
    label: 'Plugin\nSupport',
    parent: 'wordpress_support',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Plugins should follow accessibility best practices for custom UIs and support responsive behavior across screens.',
  },
  {
    id: 'core_features',
    label: 'Core\nFeatures',
    parent: 'wordpress_support',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'WordPress core emphasizes keyboard navigation, semantic markup, and responsive block editor views in recent releases.',
  },

  // Negative
  {
    id: 'cons',
    label: 'Cons',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Drawbacks and common pitfalls when attempting to build accessible and responsive WordPress experiences.',
  },
  {
    id: 'theme_inconsistency',
    label: 'Inconsistent\nTheme Quality',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Many themes marketed as “responsive” or “accessible” lack actual WCAG compliance or have bloated, inflexible CSS.',
  },
  {
    id: 'plugin_violations',
    label: 'Plugin\nAccessibility Issues',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Custom plugin UIs may not follow ARIA or keyboard standards, creating poor experiences for screen reader users.',
  },
  {
    id: 'overcomplication',
    label: 'Overengineered\nResponsiveness',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Heavy reliance on animations, carousels, or JavaScript can backfire on low-end devices or slow connections.',
  },
]

export const links = [
  { source: 'root', target: 'accessibility_guidelines' },
  { source: 'root', target: 'responsive_design' },
  { source: 'root', target: 'wordpress_support' },
  { source: 'root', target: 'cons' },

  { source: 'accessibility_guidelines', target: 'wcag' },
  { source: 'accessibility_guidelines', target: 'semantic_markup' },
  { source: 'accessibility_guidelines', target: 'keyboard_navigation' },
  { source: 'accessibility_guidelines', target: 'aria_attributes' },

  { source: 'responsive_design', target: 'media_queries' },
  { source: 'responsive_design', target: 'mobile_first' },
  { source: 'responsive_design', target: 'flexbox_grid' },
  { source: 'responsive_design', target: 'responsive_images' },

  { source: 'wordpress_support', target: 'theme_support' },
  { source: 'wordpress_support', target: 'plugin_support' },
  { source: 'wordpress_support', target: 'core_features' },

  { source: 'cons', target: 'theme_inconsistency' },
  { source: 'cons', target: 'plugin_violations' },
  { source: 'cons', target: 'overcomplication' },
]
