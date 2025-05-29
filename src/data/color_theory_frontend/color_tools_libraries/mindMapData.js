import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Color Tools\nand Libraries',
    definition: 'Software tools, libraries, and resources that assist in color manipulation, visualization, accessibility, and conversion for frontend development.',
    shape: 'roundRect',
    color: 'root',
  },

  // Libraries for Developers
  {
    id: 'dev_libraries',
    label: 'Libraries for\nDevelopers',
    definition: 'JavaScript libraries for converting, analyzing, and managing colors programmatically.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'chroma_js',
    label: 'Chroma.js',
    definition: 'A lightweight JavaScript library for color manipulation, blending, interpolation, and conversion.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'color_js',
    label: 'color.js',
    definition: 'Modern, W3C-supported library for color conversions and perceptual operations (supports gamut, LCH, LAB, contrast, etc.).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'd3_color',
    label: 'D3-color',
    definition: 'Part of the D3.js suite, useful for data-driven color interpolation and perceptual transitions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'culori',
    label: 'Culori',
    definition: 'A highly precise and flexible color library for functional manipulation of various color spaces.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Design Tools
  {
    id: 'design_tools',
    label: 'Designer &\nUI Tools',
    definition: 'Tools used by designers and developers to explore, test, and extract color palettes visually.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'coolors',
    label: 'Coolors',
    definition: 'Online palette generator with export features for HEX, RGB, CSS variables, and more.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'khroma_ai',
    label: 'Khroma AI',
    definition: 'AI-powered tool that learns your preferences to generate unique palettes based on input training.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'colorhunt',
    label: 'ColorHunt',
    definition: 'Curated palette repository ideal for visual inspiration and theme planning.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'happy_hues',
    label: 'Happy Hues',
    definition: 'Color system preview site with real UI examples and contrast-ready palettes.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Accessibility Tools
  {
    id: 'accessibility_tools',
    label: 'Accessibility\nCheckers',
    definition: 'Color-related accessibility tools that test for contrast ratios, blindness simulation, or WCAG compliance.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'who_can_use',
    label: 'Who Can Use',
    definition: 'Visual simulator for how users with vision impairments perceive contrast between color pairs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tanaguru',
    label: 'Tanaguru Contrast-Finder',
    definition: 'Suggests accessible alternatives for poor contrast pairs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'color_contrast_checker',
    label: 'WebAIM Color\nContrast Checker',
    definition: 'Simple but essential tool for verifying WCAG 2.0/2.1 contrast compliance.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Pitfalls
  {
    id: 'tool_pitfalls',
    label: 'Tool & Library\nPitfalls',
    definition: 'Issues or limitations when relying too heavily on external tools or libraries for color decisions.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'over_reliance',
    label: 'Over-Reliance\non Tools',
    definition: 'Using tools without understanding color theory may result in poor or inaccessible choices.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'inconsistent_outputs',
    label: 'Inconsistent\nOutputs',
    definition: 'Different tools may interpret LAB/LCH or HSL slightly differently due to internal math or gamma handling.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'not_design_tested',
    label: 'Not Design-\nSystem-Aware',
    definition: 'Many palette tools don’t account for real-world UI needs like hover states or text legibility in context.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'dev_libraries' },
  { source: 'root', target: 'design_tools' },
  { source: 'root', target: 'accessibility_tools' },
  { source: 'root', target: 'tool_pitfalls' },

  { source: 'dev_libraries', target: 'chroma_js' },
  { source: 'dev_libraries', target: 'color_js' },
  { source: 'dev_libraries', target: 'd3_color' },
  { source: 'dev_libraries', target: 'culori' },

  { source: 'design_tools', target: 'coolors' },
  { source: 'design_tools', target: 'khroma_ai' },
  { source: 'design_tools', target: 'colorhunt' },
  { source: 'design_tools', target: 'happy_hues' },

  { source: 'accessibility_tools', target: 'who_can_use' },
  { source: 'accessibility_tools', target: 'tanaguru' },
  { source: 'accessibility_tools', target: 'color_contrast_checker' },

  { source: 'tool_pitfalls', target: 'over_reliance' },
  { source: 'tool_pitfalls', target: 'inconsistent_outputs' },
  { source: 'tool_pitfalls', target: 'not_design_tested' },
];
