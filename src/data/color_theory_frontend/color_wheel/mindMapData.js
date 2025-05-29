import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'The\nColor Wheel',
    definition: 'A circular diagram representing color relationships. Helps visualize how hues interact and combine in theory and design.',
    shape: 'roundRect',
    color: 'root',
  },

  // Primary Colors
  {
    id: 'primary_colors',
    label: 'Primary\nColors',
    definition: 'Colors that cannot be made by mixing others. The foundation of all other hues.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'traditional_primaries',
    label: 'Traditional:\nRed, Blue, Yellow',
    definition: 'Used in classical art and pigment mixing. Forms the basis of most color wheels in design.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'digital_primaries',
    label: 'Digital:\nRed, Green, Blue',
    definition: 'Additive primaries used in screen-based RGB systems. Combine to create white light.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Secondary Colors
  {
    id: 'secondary_colors',
    label: 'Secondary\nColors',
    definition: 'Created by mixing two primary colors. Located between primaries on the wheel.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'orange_green_purple',
    label: 'Orange,\nGreen, Purple',
    definition: 'Orange (red + yellow), Green (blue + yellow), Purple (red + blue). Key secondary hues.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Tertiary Colors
  {
    id: 'tertiary_colors',
    label: 'Tertiary\nColors',
    definition: 'Created by mixing a primary with an adjacent secondary. Forms nuanced hues.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'examples_tertiary',
    label: 'Examples:\nRed-Orange, Blue-Green',
    definition: 'Red-Orange, Yellow-Green, Blue-Violet, etc. Positioned between primary and secondary hues.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'smooth_transitions',
    label: 'Smooth Hue\nTransitions',
    definition: 'Tertiary colors allow gradual transitions and refined palettes for modern design.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Visual Uses
  {
    id: 'visual_uses',
    label: 'Uses in\nDesign',
    definition: 'Color wheel helps identify contrast, harmony, and emotional tone when selecting palettes.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'harmony_insight',
    label: 'Harmony and\nContrast',
    definition: 'Enables designers to identify complementary, analogous, or triadic schemes easily.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'interactive_tools',
    label: 'Design Tools\nand Apps',
    definition: 'Modern color pickers (Adobe Color, Coolors) use the wheel to help create palettes interactively.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'screen_vs_print',
    label: 'Screen vs\nPrint Contexts',
    definition: 'Color wheels adapt to additive (RGB) or subtractive (CMY) models depending on the medium.',
    shape: 'rect',
    color: 'nodePositive2',
  }
];

export const links = [
  { source: 'root', target: 'primary_colors' },
  { source: 'primary_colors', target: 'traditional_primaries' },
  { source: 'primary_colors', target: 'digital_primaries' },

  { source: 'root', target: 'secondary_colors' },
  { source: 'secondary_colors', target: 'orange_green_purple' },

  { source: 'root', target: 'tertiary_colors' },
  { source: 'tertiary_colors', target: 'examples_tertiary' },
  { source: 'tertiary_colors', target: 'smooth_transitions' },

  { source: 'root', target: 'visual_uses' },
  { source: 'visual_uses', target: 'harmony_insight' },
  { source: 'visual_uses', target: 'interactive_tools' },
  { source: 'visual_uses', target: 'screen_vs_print' }
];
