// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Responsiveness',
    shape: 'roundRect',
    color: 'root',
    definition: 'Responsiveness ensures that a web interface adapts smoothly across different screen sizes, orientations, and devices using flexible layouts, scalable units, and conditional styling.'
  },

  // Level 1 Positive
  {
    id: 'media_queries',
    label: 'Media Queries',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Enable conditional styling based on screen width, resolution, or orientation using @media rules.'
  },
  {
    id: 'breakpoints',
    label: 'Breakpoints',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Thresholds in screen size where layout or styling changes to preserve usability and design intent.'
  },
  {
    id: 'mobile_first',
    label: 'Mobile-First\nApproach',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Start with base styles for small screens and scale up using min-width media queries.'
  },
  {
    id: 'fluid_units',
    label: 'Fluid Units',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Use relative units (%, rem, vw, vh, clamp) to ensure flexible sizing that adjusts to screen dimensions.'
  },

  // Level 2 Positive
  {
    id: 'content_driven_breakpoints',
    label: 'Content-Driven\nBreakpoints',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Define breakpoints based on layout/content needs rather than specific devices.'
  },
  {
    id: 'scalable_typography',
    label: 'Scalable\nTypography',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use clamp() and relative units for type that adapts smoothly across screen sizes.'
  },
  {
    id: 'responsive_components',
    label: 'Responsive\nComponents',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Design individual UI components to resize, reflow, or restyle based on container or viewport size.'
  },

  // Level 3 Positive
  {
    id: 'clamp_example',
    label: 'Clamp()\nStrategy',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'CSS clamp() allows font and layout values to scale between a minimum and maximum across screen sizes.'
  },
  {
    id: 'container_queries',
    label: 'Container Queries',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Apply styles based on the size of a component’s container instead of the viewport.'
  },

  // Level 1 Negative
  {
    id: 'responsive_antipatterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes that hinder responsive behavior or degrade user experience on certain devices.'
  },

  // Level 2 Negative
  {
    id: 'desktop_first',
    label: 'Desktop-First\nLayout',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Designing for large screens first and then retrofitting small screen styles leads to poor mobile UX.'
  },
  {
    id: 'fixed_widths',
    label: 'Fixed Widths',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Hardcoded widths (e.g., 1024px) reduce layout flexibility and cause overflow issues on smaller devices.'
  },
  {
    id: 'missing_viewport',
    label: 'Missing Viewport\nMeta Tag',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Without a viewport meta tag, mobile browsers won’t scale the layout correctly, breaking responsiveness.'
  }
];

export const links = [
  { source: 'root', target: 'media_queries' },
  { source: 'root', target: 'breakpoints' },
  { source: 'root', target: 'mobile_first' },
  { source: 'root', target: 'fluid_units' },

  { source: 'breakpoints', target: 'content_driven_breakpoints' },
  { source: 'fluid_units', target: 'scalable_typography' },
  { source: 'media_queries', target: 'responsive_components' },

  { source: 'scalable_typography', target: 'clamp_example' },
  { source: 'responsive_components', target: 'container_queries' },

  { source: 'root', target: 'responsive_antipatterns' },
  { source: 'responsive_antipatterns', target: 'desktop_first' },
  { source: 'responsive_antipatterns', target: 'fixed_widths' },
  { source: 'responsive_antipatterns', target: 'missing_viewport' }
];
