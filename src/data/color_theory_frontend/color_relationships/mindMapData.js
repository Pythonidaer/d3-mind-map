import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Color Relationships\n(Schemes)',
    definition: 'Predefined groupings of hues based on their position on the color wheel, used to create harmony, contrast, or mood in design.',
    shape: 'roundRect',
    color: 'root',
  },

  // Monochromatic
  {
    id: 'monochromatic',
    label: 'Monochromatic\nScheme',
    definition: 'Uses tints, shades, and tones of a single hue. Provides consistency and unity with low contrast.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'mono_strengths',
    label: 'Visual\nCohesion',
    definition: 'Delivers a unified and minimalistic look, often calming and modern.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'mono_limitations',
    label: 'Limited\nContrast',
    definition: 'May struggle to create visual emphasis or draw attention to key UI elements.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Complementary
  {
    id: 'complementary',
    label: 'Complementary\nScheme',
    definition: 'Combines colors directly opposite on the color wheel. Offers maximum contrast and vibrancy.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'complementary_usage',
    label: 'High-Impact\nHighlights',
    definition: 'Ideal for CTAs and focal points that need to pop out visually.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'complementary_risks',
    label: 'Risk of\nClashing',
    definition: 'Overuse or poor balance may result in visual strain or dissonance.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Analogous
  {
    id: 'analogous',
    label: 'Analogous\nScheme',
    definition: 'Uses 2–4 hues adjacent to each other on the wheel. Offers smooth gradients and harmony.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'analogous_mood',
    label: 'Mood-Driven\nDesign',
    definition: 'Evokes a cohesive and emotionally consistent experience. Great for themed interfaces.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'analogous_danger',
    label: 'Risk of\nMonotony',
    definition: 'Needs variation in brightness/saturation to avoid blending elements together too much.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Triadic
  {
    id: 'triadic',
    label: 'Triadic\nScheme',
    definition: 'Uses three hues equally spaced around the wheel (e.g., red-yellow-blue). Balanced and dynamic.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'triadic_energy',
    label: 'Colorful but\nStable',
    definition: 'Maintains high visual interest with built-in balance. Works well with proper contrast control.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'triadic_tip',
    label: 'Dominant vs\nAccents',
    definition: 'Choose one hue as dominant and the others as support to prevent overstimulation.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Split Complementary
  {
    id: 'split_complementary',
    label: 'Split-\nComplementary',
    definition: 'A base color plus the two colors adjacent to its opposite. Offers contrast with less tension.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'split_complementary_balance',
    label: 'Balanced\nContrast',
    definition: 'Good for designs that need variation but with softer interplay than pure complements.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Tetradic (Double Complementary)
  {
    id: 'tetradic',
    label: 'Tetradic\nScheme',
    definition: 'Uses two complementary pairs. Rich and diverse but complex to balance.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'tetradic_potential',
    label: 'Vibrant\nPalettes',
    definition: 'Provides the most color variety for bold and expressive interfaces.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tetradic_warning',
    label: 'Hard to\nBalance',
    definition: 'Requires careful hierarchy and restraint to avoid chaotic results.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Other
  {
    id: 'other_schemes',
    label: 'Other\nSchemes',
    definition: 'Includes square, neutral + accent, and custom hybrid schemes tailored to UX goals.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'neutral_accent',
    label: 'Neutral +\nAccent',
    definition: 'Use muted backgrounds (grays, beige) with a strong accent color for minimal UI.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'square_scheme',
    label: 'Square\nScheme',
    definition: 'Four evenly spaced hues around the wheel. Visually engaging but less intuitive.',
    shape: 'rect',
    color: 'nodePositive2',
  }
];

export const links = [
  { source: 'root', target: 'monochromatic' },
  { source: 'monochromatic', target: 'mono_strengths' },
  { source: 'monochromatic', target: 'mono_limitations' },

  { source: 'root', target: 'complementary' },
  { source: 'complementary', target: 'complementary_usage' },
  { source: 'complementary', target: 'complementary_risks' },

  { source: 'root', target: 'analogous' },
  { source: 'analogous', target: 'analogous_mood' },
  { source: 'analogous', target: 'analogous_danger' },

  { source: 'root', target: 'triadic' },
  { source: 'triadic', target: 'triadic_energy' },
  { source: 'triadic', target: 'triadic_tip' },

  { source: 'root', target: 'split_complementary' },
  { source: 'split_complementary', target: 'split_complementary_balance' },

  { source: 'root', target: 'tetradic' },
  { source: 'tetradic', target: 'tetradic_potential' },
  { source: 'tetradic', target: 'tetradic_warning' },

  { source: 'root', target: 'other_schemes' },
  { source: 'other_schemes', target: 'neutral_accent' },
  { source: 'other_schemes', target: 'square_scheme' }
];
