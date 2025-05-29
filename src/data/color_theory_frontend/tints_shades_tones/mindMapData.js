import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Tints, Shades,\nand Tones',
    definition: 'Modifications of a base hue by adding white (tint), black (shade), or gray (tone) to change lightness, depth, or mood.',
    shape: 'roundRect',
    color: 'root',
  },

  // Tints
  {
    id: 'tints',
    label: 'Tints',
    definition: 'Created by adding white to a hue, making it lighter and often softer or more pastel.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'light_themes',
    label: 'Light UI Themes',
    definition: 'Tints are often used in light themes to maintain harmony and readability without harsh contrast.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'pastel_palettes',
    label: 'Pastel Palettes',
    definition: 'Pastel tones from tints evoke gentleness, creativity, or calm, suitable for health, education, or lifestyle UIs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tint_example',
    label: 'Tint in CSS:\nHSL or Opacity',
    definition: 'Use hsl() with higher lightness or rgba() with transparency over white to simulate tints.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // Shades
  {
    id: 'shades',
    label: 'Shades',
    definition: 'Created by adding black to a hue, making it darker and often more dramatic or authoritative.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'dark_themes',
    label: 'Dark UI Themes',
    definition: 'Shades are core to dark mode designs and help structure visual hierarchy with depth.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'emphasis_elements',
    label: 'Emphasis & Depth',
    definition: 'Darkened versions of brand colors are used for hover states, callouts, or modals.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'shade_example',
    label: 'Shade in CSS:\nHSL or Alpha Layer',
    definition: 'Lower the HSL lightness or apply black with low opacity using a layered pseudo-element.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // Tones
  {
    id: 'tones',
    label: 'Tones',
    definition: 'Created by adding gray to a hue, reducing saturation and making it more muted and professional.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'neutral_balancing',
    label: 'Neutral UI Balance',
    definition: 'Tones help harmonize bright palettes and work well in corporate and enterprise interfaces.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'desaturate_highlights',
    label: 'Desaturation\nfor Highlights',
    definition: 'Tone down strong colors for secondary buttons, subtle backgrounds, or muted alerts.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tone_example',
    label: 'Tone via HSL:\nLower Saturation',
    definition: 'Decrease the saturation in HSL color values to create a muted tone without changing hue or lightness.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // Cons
  {
    id: 'cons',
    label: 'Cons',
    definition: 'Drawbacks and misuses of tints, shades, and tones in design systems.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'overuse_of_tints',
    label: 'Overuse of Tints',
    definition: 'Using too many tints can result in washed-out UIs lacking visual clarity or hierarchy.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'insufficient_shade_contrast',
    label: 'Poor Shade Contrast',
    definition: 'Dark shades with low contrast may fail WCAG accessibility checks in dark mode.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'muddy_tones',
    label: 'Muddy Tone Effects',
    definition: 'Too much desaturation can make colors indistinct or visually bland, especially in data visualizations.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Anti-patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    definition: 'Incorrect or unstrategic usage of tints, shades, and tones that harm UX or readability.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'no_color_roles',
    label: 'No Color Roles',
    definition: 'Using multiple shades/tints/tones arbitrarily instead of assigning semantic meaning (e.g., primary, secondary).',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'manual_color_adjustment',
    label: 'Manual Mixing',
    definition: 'Hardcoding colors instead of using utility functions or design tokens breaks maintainability.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'visual_inconsistency',
    label: 'Inconsistent\nLightness/Saturation',
    definition: 'Mixing tints/shades/tones without consistent spacing can make interfaces feel chaotic or unstable.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
]

export const links = [
  { source: 'root', target: 'tints' },
  { source: 'root', target: 'shades' },
  { source: 'root', target: 'tones' },

  { source: 'tints', target: 'light_themes' },
  { source: 'tints', target: 'pastel_palettes' },
  { source: 'pastel_palettes', target: 'tint_example' },

  { source: 'shades', target: 'dark_themes' },
  { source: 'shades', target: 'emphasis_elements' },
  { source: 'emphasis_elements', target: 'shade_example' },

  { source: 'tones', target: 'neutral_balancing' },
  { source: 'tones', target: 'desaturate_highlights' },
  { source: 'desaturate_highlights', target: 'tone_example' },

  { source: 'root', target: 'cons' },
  { source: 'cons', target: 'overuse_of_tints' },
  { source: 'cons', target: 'insufficient_shade_contrast' },
  { source: 'cons', target: 'muddy_tones' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'no_color_roles' },
  { source: 'anti_patterns', target: 'manual_color_adjustment' },
  { source: 'anti_patterns', target: 'visual_inconsistency' },
]
