import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Visual\nDesign',
    shape: 'roundRect',
    color: 'root',
    definition: 'The aesthetic layer of web design — encompassing color, space, imagery, layout, and mood to shape user perception and brand identity.',
  },

  // Level 1
  {
    id: 'color_and_contrast',
    label: 'Color and\nContrast',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Establishes hierarchy, emotion, accessibility, and branding through hue, saturation, and contrast.',
  },
  {
    id: 'space_and_rhythm',
    label: 'Space and\nRhythm',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use of white space, padding, and alignment to create clarity, focus, and pacing.',
  },
  {
    id: 'backgrounds_and_layers',
    label: 'Backgrounds and\nLayers',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Background visuals, textures, and overlays that add dimension and separation.',
  },
  {
    id: 'illustration_and_imagery',
    label: 'Illustration and\nImagery',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Icons, photos, illustrations, and graphics that convey tone and support content.',
  },
  {
    id: 'structure_and_balance',
    label: 'Structure and\nBalance',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Visual alignment, symmetry, and layout harmony for polished user interfaces.',
  },
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Visual design anti-patterns that confuse, distract, or reduce usability.',
  },

  // Level 2 — Color and Contrast
  {
    id: 'color_palette',
    label: 'Color\nPalette',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'color_and_contrast',
    definition: 'A defined set of brand-aligned primary, secondary, and neutral colors.',
  },
  {
    id: 'accessible_contrast',
    label: 'Accessible\nContrast',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'color_and_contrast',
    definition: 'WCAG-compliant contrast ratios that ensure text and UI readability.',
  },
  {
    id: 'semantic_color_usage',
    label: 'Semantic Color\nUsage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'color_and_contrast',
    definition: 'Using color meaningfully — e.g., red for errors, green for success.',
  },

  // Level 2 — Space and Rhythm
  {
    id: 'white_space',
    label: 'White\nSpace',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'space_and_rhythm',
    definition: 'Intentional empty space to reduce visual noise and support grouping.',
  },
  {
    id: 'padding_and_margin',
    label: 'Padding and\nMargin',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'space_and_rhythm',
    definition: 'Consistent spacing within and around elements to ensure visual rhythm.',
  },
  {
    id: 'vertical_rhythm',
    label: 'Vertical\nRhythm',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'space_and_rhythm',
    definition: 'Aligned vertical spacing between text and sections for flow and scanability.',
  },

  // Level 2 — Backgrounds and Layers
  {
    id: 'solid_backgrounds',
    label: 'Solid\nBackgrounds',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'backgrounds_and_layers',
    definition: 'Single-color backgrounds used for clarity and focus.',
  },
  {
    id: 'gradient_backgrounds',
    label: 'Gradient\nBackgrounds',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'backgrounds_and_layers',
    definition: 'Multi-color fades used to add depth or highlight sections.',
  },
  {
    id: 'background_layers',
    label: 'Background\nLayers',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'backgrounds_and_layers',
    definition: 'Multiple background elements stacked with transparency or blur to create separation.',
  },

  // Level 2 — Illustration and Imagery
  {
    id: 'custom_illustrations',
    label: 'Custom\nIllustrations',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'illustration_and_imagery',
    definition: 'Unique artwork that reflects brand personality and storytelling.',
  },
  {
    id: 'photography_style',
    label: 'Photography\nStyle',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'illustration_and_imagery',
    definition: 'Use of photos with consistent lighting, tone, and composition.',
  },
  {
    id: 'iconography_style',
    label: 'Iconography\nStyle',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'illustration_and_imagery',
    definition: 'Flat, glyph, line, or filled icon styles that match the interface tone.',
  },

  // Level 2 — Structure and Balance
  {
    id: 'layout_grid',
    label: 'Layout\nGrid',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'structure_and_balance',
    definition: 'A consistent column or modular system for aligning content and components.',
  },
  {
    id: 'visual_hierarchy',
    label: 'Visual\nHierarchy',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'structure_and_balance',
    definition: 'Organizing content by importance using size, weight, color, and placement.',
  },
  {
    id: 'alignment_and_symmetry',
    label: 'Alignment and\nSymmetry',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'structure_and_balance',
    definition: 'Precise alignment and balance between UI components to achieve cohesion.',
  },

  // Cons
  {
    id: 'poor_contrast',
    label: 'Poor\nContrast',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Low contrast between elements leads to inaccessible and unreadable interfaces.',
  },
  {
    id: 'inconsistent_spacing',
    label: 'Inconsistent\nSpacing',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Unpredictable padding or margins break rhythm and cause visual clutter.',
  },
  {
    id: 'overuse_of_gradients',
    label: 'Overuse of\nGradients',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Too many gradients or layered effects reduce legibility and create distraction.',
  },
  {
    id: 'clashing_colors',
    label: 'Clashing\nColors',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Colors that conflict visually or emotionally can create user discomfort.',
  },
  {
    id: 'layout_incoherence',
    label: 'Layout\nIncoherence',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Mismatched alignments, sizes, or element spacing make the interface feel chaotic.',
  }
];

export const links = [
  { source: 'root', target: 'color_and_contrast' },
  { source: 'root', target: 'space_and_rhythm' },
  { source: 'root', target: 'backgrounds_and_layers' },
  { source: 'root', target: 'illustration_and_imagery' },
  { source: 'root', target: 'structure_and_balance' },
  { source: 'root', target: 'cons' },

  { source: 'color_and_contrast', target: 'color_palette' },
  { source: 'color_and_contrast', target: 'accessible_contrast' },
  { source: 'color_and_contrast', target: 'semantic_color_usage' },

  { source: 'space_and_rhythm', target: 'white_space' },
  { source: 'space_and_rhythm', target: 'padding_and_margin' },
  { source: 'space_and_rhythm', target: 'vertical_rhythm' },

  { source: 'backgrounds_and_layers', target: 'solid_backgrounds' },
  { source: 'backgrounds_and_layers', target: 'gradient_backgrounds' },
  { source: 'backgrounds_and_layers', target: 'background_layers' },

  { source: 'illustration_and_imagery', target: 'custom_illustrations' },
  { source: 'illustration_and_imagery', target: 'photography_style' },
  { source: 'illustration_and_imagery', target: 'iconography_style' },

  { source: 'structure_and_balance', target: 'layout_grid' },
  { source: 'structure_and_balance', target: 'visual_hierarchy' },
  { source: 'structure_and_balance', target: 'alignment_and_symmetry' },

  { source: 'cons', target: 'poor_contrast' },
  { source: 'cons', target: 'inconsistent_spacing' },
  { source: 'cons', target: 'overuse_of_gradients' },
  { source: 'cons', target: 'clashing_colors' },
  { source: 'cons', target: 'layout_incoherence' }
];
