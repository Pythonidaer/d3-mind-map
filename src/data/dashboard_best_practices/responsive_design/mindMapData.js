import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Responsive &\nAdaptive Design',
    definition: 'Designing layouts and components that adjust to screen sizes, device types, and viewing contexts for consistent usability.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1 - Positives
  {
    id: 'fluid_grids',
    label: 'Fluid Grids &\nFlexible Layouts',
    definition: 'Use proportional column systems, percentages, and breakpoints to adapt layout across screens.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'typography_scaling',
    label: 'Typography &\nReadability',
    definition: 'Ensure text remains legible and consistent across viewports using relative units and fluid type.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'media_queries',
    label: 'Media Queries &\nBreakpoints',
    definition: 'Apply different styles based on screen width, orientation, or resolution for adaptive behavior.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'adaptive_components',
    label: 'Component\nAdaptation',
    definition: 'Ensure UI components like navbars, filters, or cards reflow, restack, or re-style at smaller breakpoints.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 1 - Negatives
  {
    id: 'responsive_pitfalls',
    label: 'Responsive\nAnti-Patterns',
    definition: 'Common mistakes that hinder usability across devices or lead to inconsistent layout behaviors.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Children of Fluid Grids
  {
    id: 'css_grid_flexbox',
    label: 'Grid &\nFlexbox Usage',
    definition: 'Use CSS Grid for layout structure and Flexbox for alignment within containers.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'column_stacking',
    label: 'Column\nStacking Logic',
    definition: 'Define how columns stack on tablets or mobile (e.g., 3-column → 1-column stack).',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Typography Scaling
  {
    id: 'clamp_function',
    label: 'CSS clamp()\nfor Font Sizes',
    definition: 'Use `clamp()` to scale font sizes fluidly between min/max values at different breakpoints.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'relative_units',
    label: 'REM/EM\nInstead of PX',
    definition: 'Use relative units for consistent scaling and zoom accessibility.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Media Queries
  {
    id: 'common_breakpoints',
    label: 'Breakpoint\nStandards',
    definition: 'Target widths like 1200px, 991px, 776px, and 479px to cover major device categories.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'orientation_queries',
    label: 'Orientation\nHandling',
    definition: 'Handle portrait vs landscape layouts on mobile tablets or convert multi-column views.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Adaptive Components
  {
    id: 'nav_toggle',
    label: 'Navbar\nTransformation',
    definition: 'Convert horizontal menus to hamburger menus or vertical stacks on smaller screens.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'responsive_cards',
    label: 'Card & Widget\nResizing',
    definition: 'Make cards shrink, reflow, or stack based on screen real estate while maintaining readability.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Anti-Patterns
  {
    id: 'fixed_dimensions',
    label: 'Fixed Widths\nor Heights',
    definition: 'Using hardcoded pixel dimensions breaks layouts on smaller screens or zoomed views.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'hidden_content',
    label: 'Important Info\nHidden on Mobile',
    definition: 'Hiding critical content or interactions instead of responsively reformatting them.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'overflow_issues',
    label: 'Horizontal\nScroll Problems',
    definition: 'Content that doesn’t scale properly, resulting in unintended overflow or scrollbars.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'fluid_grids' },
  { source: 'root', target: 'typography_scaling' },
  { source: 'root', target: 'media_queries' },
  { source: 'root', target: 'adaptive_components' },
  { source: 'root', target: 'responsive_pitfalls' },

  { source: 'fluid_grids', target: 'css_grid_flexbox' },
  { source: 'fluid_grids', target: 'column_stacking' },

  { source: 'typography_scaling', target: 'clamp_function' },
  { source: 'typography_scaling', target: 'relative_units' },

  { source: 'media_queries', target: 'common_breakpoints' },
  { source: 'media_queries', target: 'orientation_queries' },

  { source: 'adaptive_components', target: 'nav_toggle' },
  { source: 'adaptive_components', target: 'responsive_cards' },

  { source: 'responsive_pitfalls', target: 'fixed_dimensions' },
  { source: 'responsive_pitfalls', target: 'hidden_content' },
  { source: 'responsive_pitfalls', target: 'overflow_issues' }
];
