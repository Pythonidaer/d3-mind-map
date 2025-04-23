// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'CSS Libraries',
    shape: 'roundRect',
    color: 'root',
    definition: 'CSS libraries provide pre-built styling and layout utilities or components to speed up development and enforce consistency across UI projects.'
  },

  // Level 1 Positive
  {
    id: 'utility_first',
    label: 'Utility-First\nFrameworks',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Provide small, single-purpose classes (e.g., Tailwind) for fast, consistent UI building.'
  },
  {
    id: 'component_based',
    label: 'Component-Based\nFrameworks',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Offer pre-designed UI components with styling and interactivity (e.g., Bootstrap, Flowbite).'
  },
  {
    id: 'minimalist',
    label: 'Minimalist &\nSemantic Libraries',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Favor minimal classes or classless styling tied to semantic HTML (e.g., Pico, MVP.css).'
  },

  // Level 2 Positive
  {
    id: 'tailwind',
    label: 'Tailwind CSS',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Highly customizable utility-first framework with responsive variants and JIT compilation.'
  },
  {
    id: 'bootstrap',
    label: 'Bootstrap',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Popular component-based framework with grid system, utilities, and JS plugins.'
  },
  {
    id: 'pico',
    label: 'Pico CSS',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Minimalist, semantic-first framework that styles elements without class names.'
  },

  // Level 3 Positive
  {
    id: 'tailwind_plugins',
    label: 'Tailwind Plugins',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Ecosystem of plugin-based utilities like Flowbite or Headless UI for extending Tailwind.'
  },
  {
    id: 'bootstrap_theming',
    label: 'Bootstrap\nTheming',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Customize Bootstrap using Sass variables, component overrides, or dark mode support.'
  },
  {
    id: 'semantic_override',
    label: 'Classless\nOverrides',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Style semantic HTML using CSS variables without utility classes.'
  },

  // Level 1 Negative
  {
    id: 'library_antipatterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Pitfalls when using CSS libraries that reduce flexibility or result in bloated, inconsistent designs.'
  },

  // Level 2 Negative
  {
    id: 'overriding_defaults',
    label: 'Overriding Defaults\nExcessively',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Fighting a library’s design system by rewriting too many default styles reduces its value.'
  },
  {
    id: 'mixing_frameworks',
    label: 'Mixing Multiple\nCSS Libraries',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Combining multiple libraries like Tailwind and Bootstrap leads to style conflicts and poor maintainability.'
  },
  {
    id: 'unused_styles',
    label: 'Unused CSS\nBloat',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Including full CSS frameworks without purging unused styles leads to large file sizes and slower performance.'
  }
];

export const links = [
  // Positive links
  { source: 'root', target: 'utility_first' },
  { source: 'root', target: 'component_based' },
  { source: 'root', target: 'minimalist' },

  { source: 'utility_first', target: 'tailwind' },
  { source: 'component_based', target: 'bootstrap' },
  { source: 'minimalist', target: 'pico' },

  { source: 'tailwind', target: 'tailwind_plugins' },
  { source: 'bootstrap', target: 'bootstrap_theming' },
  { source: 'pico', target: 'semantic_override' },

  // Negative links
  { source: 'root', target: 'library_antipatterns' },
  { source: 'library_antipatterns', target: 'overriding_defaults' },
  { source: 'library_antipatterns', target: 'mixing_frameworks' },
  { source: 'library_antipatterns', target: 'unused_styles' }
];
