// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Typography',
    shape: 'roundRect',
    color: 'root',
    definition: 'Typography defines how text is styled and structured across a design system, influencing readability, hierarchy, and brand identity.'
  },

  // Level 1 Positive
  {
    id: 'type_scale',
    label: 'Type Scale',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'A system of font sizes and line heights that establishes visual hierarchy and consistency.'
  },
  {
    id: 'font_pairings',
    label: 'Font Pairings',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Strategic combinations of typefaces for headers, body, and UI elements to support tone and readability.'
  },
  {
    id: 'readability',
    label: 'Readability',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Adjusting text spacing, line length, and font properties to ensure comfortable reading across devices.'
  },
  {
    id: 'accessibility',
    label: 'Accessibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Ensuring typography is usable by all users, including those with visual impairments, through contrast and sizing guidelines.'
  },

  // Level 2 Positive
  {
    id: 'relative_units',
    label: 'REM & EM Units',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Using scalable relative units ensures accessibility and responsiveness in typography sizing.'
  },
  {
    id: 'hierarchy_levels',
    label: 'Heading Hierarchy',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Defines font sizes for headings (e.g., h1-h6) to reflect content structure and improve scannability.'
  },
  {
    id: 'line_height',
    label: 'Line Height\n& Spacing',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Controls vertical rhythm and improves text legibility by adjusting line spacing.'
  },
  {
    id: 'line_length',
    label: 'Line Length',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Ideal line length (45–75 characters) supports faster reading and better comprehension.'
  },

  // Level 3 Positive
  {
    id: 'tracking_vs_kerning',
    label: 'Tracking vs Kerning',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Tracking adjusts spacing across whole words; kerning adjusts spacing between individual letter pairs.'
  },
  {
    id: 'responsive_typography',
    label: 'Responsive\nTypography',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Uses CSS clamp(), media queries, or fluid scaling to adapt font sizes across devices.'
  },

  // Level 1 Negative
  {
    id: 'typography_antipatterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common typography mistakes that reduce readability, consistency, or accessibility.'
  },

  // Level 2 Negative
  {
    id: 'fixed_pixel_sizes',
    label: 'Fixed Pixel Sizes',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Using fixed px values prevents user zooming and hinders responsive scaling.'
  },
  {
    id: 'inconsistent_fonts',
    label: 'Inconsistent Font Usage',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Using too many fonts without a clear system leads to visual chaos and brand inconsistency.'
  },
  {
    id: 'long_lines',
    label: 'Overly Long\nLine Lengths',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Lines longer than ~80 characters impair readability and user scanning.'
  },
  {
    id: 'low_contrast_text',
    label: 'Low Contrast Text',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Text with insufficient contrast fails accessibility checks and becomes unreadable in bright conditions.'
  }
];

export const links = [
  // Positive links
  { source: 'root', target: 'type_scale' },
  { source: 'root', target: 'font_pairings' },
  { source: 'root', target: 'readability' },
  { source: 'root', target: 'accessibility' },

  { source: 'type_scale', target: 'relative_units' },
  { source: 'type_scale', target: 'hierarchy_levels' },
  { source: 'readability', target: 'line_height' },
  { source: 'readability', target: 'line_length' },

  { source: 'line_length', target: 'tracking_vs_kerning' },
  { source: 'line_length', target: 'responsive_typography' },

  // Negative links
  { source: 'root', target: 'typography_antipatterns' },
  { source: 'typography_antipatterns', target: 'fixed_pixel_sizes' },
  { source: 'typography_antipatterns', target: 'inconsistent_fonts' },
  { source: 'typography_antipatterns', target: 'long_lines' },
  { source: 'typography_antipatterns', target: 'low_contrast_text' }
];
