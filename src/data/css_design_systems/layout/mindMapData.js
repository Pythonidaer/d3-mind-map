// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Layout Strategies',
    shape: 'roundRect',
    color: 'root',
    definition: 'Layout strategies determine how content is structured, aligned, and spaced across a user interface using CSS tools like Flexbox and Grid.'
  },

  // Level 1 Positive
  {
    id: 'flexbox',
    label: 'Flexbox',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'A one-dimensional layout system ideal for aligning and distributing space within components in a single direction (row or column).'
  },
  {
    id: 'grid',
    label: 'CSS Grid',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'A two-dimensional layout system for building responsive and complex layouts using rows and columns.'
  },
  {
    id: 'media_queries',
    label: 'Media Queries',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Allow conditional styling based on screen size, resolution, orientation, or other device properties.'
  },
  {
    id: 'reusable_layouts',
    label: 'Reusable \n Layout Patterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Common layout templates (e.g., 2-column, card grid, responsive sidebar) that are modular and repeatable across the system.'
  },

  // Level 2 Positive
  {
    id: 'flexbox_alignment',
    label: 'Alignment & Gaps',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Flexbox excels at aligning content and managing spacing using properties like `gap`, `justify-content`, and `align-items`.'
  },
  {
    id: 'grid_template_areas',
    label: 'Template Areas & Auto-Placement',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Grid enables naming layout zones and letting the browser auto-place items into rows and columns.'
  },
  {
    id: 'breakpoints',
    label: 'Custom\nBreakpoints',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Define screen width thresholds to change layouts progressively — e.g., mobile-first, tablet, desktop.'
  },

  // Level 3 Positive
  {
    id: 'layout_utilities',
    label: 'Utility-First\nSpacing',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Utility classes like Tailwind’s `gap-x-4`, `px-8`, `grid-cols-3` make layout consistent and fast to implement.'
  },
  {
    id: 'responsive_grid',
    label: 'Responsive Grid\nPatterns',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Grid templates that adapt based on content or screen size using `auto-fit`, `minmax`, or media queries.'
  },

  // Level 1 Negative
  {
    id: 'layout_antipatterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common layout pitfalls that reduce maintainability, accessibility, or responsiveness.'
  },

  // Level 2 Negative
  {
    id: 'hardcoded_spacing',
    label: 'Hardcoded Margins\n& Padding',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Fixed spacing (e.g., `margin: 40px`) breaks layouts on small screens and reduces reusability.'
  },
  {
    id: 'nesting_layouts',
    label: 'Excessive Nesting',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Deeply nested flex or grid containers complicate maintenance and layout predictability.'
  },
  {
    id: 'no_mobile_first',
    label: 'Not Mobile-First',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Ignoring smaller screens in base styles results in poor UX for the majority of mobile-first users.'
  }
];

export const links = [
  // Positive links
  { source: 'root', target: 'flexbox' },
  { source: 'root', target: 'grid' },
  { source: 'root', target: 'media_queries' },
  { source: 'root', target: 'reusable_layouts' },

  { source: 'flexbox', target: 'flexbox_alignment' },
  { source: 'grid', target: 'grid_template_areas' },
  { source: 'media_queries', target: 'breakpoints' },

  { source: 'grid_template_areas', target: 'responsive_grid' },
  { source: 'flexbox_alignment', target: 'layout_utilities' },

  // Negative links
  { source: 'root', target: 'layout_antipatterns' },
  { source: 'layout_antipatterns', target: 'hardcoded_spacing' },
  { source: 'layout_antipatterns', target: 'nesting_layouts' },
  { source: 'layout_antipatterns', target: 'no_mobile_first' }
];
