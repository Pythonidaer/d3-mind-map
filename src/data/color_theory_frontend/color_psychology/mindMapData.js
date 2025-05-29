import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Color Psychology',
    definition: 'The study of how colors influence human perception, emotion, and behavior in design contexts.',
    shape: 'roundRect',
    color: 'root',
  },

  // Warm Colors
  {
    id: 'warm_colors',
    label: 'Warm Colors',
    definition: 'Reds, oranges, and yellows evoke energy, urgency, and warmth.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'red_psychology',
    label: 'Red',
    definition: 'Stimulates passion, urgency, power, or danger; commonly used in alerts and CTA buttons.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'orange_psychology',
    label: 'Orange',
    definition: 'Encourages enthusiasm and action; often used for friendliness and optimism.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'yellow_psychology',
    label: 'Yellow',
    definition: 'Elicits joy and attention; useful for highlights, warnings, or branding playfulness.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Cool Colors
  {
    id: 'cool_colors',
    label: 'Cool Colors',
    definition: 'Blues, greens, and purples convey calm, trust, and stability.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'blue_psychology',
    label: 'Blue',
    definition: 'Promotes trust, reliability, and professionalism; heavily used in tech and finance.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'green_psychology',
    label: 'Green',
    definition: 'Represents growth, nature, and balance; used in wellness, sustainability, and finance.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'purple_psychology',
    label: 'Purple',
    definition: 'Conveys luxury, creativity, or mystery depending on saturation and context.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Neutral Colors
  {
    id: 'neutral_colors',
    label: 'Neutral Colors',
    definition: 'Blacks, grays, and whites support balance, legibility, and minimalism.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'black_psychology',
    label: 'Black',
    definition: 'Denotes elegance, authority, or sophistication; often used in luxury or modern themes.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'white_psychology',
    label: 'White',
    definition: 'Represents clarity, cleanliness, and openness; dominant in minimal and UX-focused design.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'gray_psychology',
    label: 'Gray',
    definition: 'Signifies neutrality, professionalism, or aging; frequently used in structure and backgrounds.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Cultural & Contextual Variation
  {
    id: 'contextual_variation',
    label: 'Cultural & Contextual\nVariation',
    definition: 'Color meaning is not universal; context and culture heavily affect interpretation.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'red_variants',
    label: 'Red: Love or Warning?',
    definition: 'Red may symbolize romance in Western cultures, but luck in Chinese traditions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'white_variants',
    label: 'White: Purity or Death?',
    definition: 'White may indicate weddings and peace in the West, but mourning in some Asian cultures.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Cons
  {
    id: 'cons',
    label: 'Cons',
    definition: 'Potential issues with relying too heavily on color psychology without testing.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'color_bias',
    label: 'Bias & Assumptions',
    definition: 'Assuming universal emotion responses to color ignores accessibility and diversity.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'overbranding',
    label: 'Over-relying on Color',
    definition: 'Using color as the sole cue (e.g. red = error) without iconography or text can confuse users.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'conflicting_signals',
    label: 'Conflicting Color Signals',
    definition: 'Using contradictory color schemes (e.g., red and green next to each other) may confuse or reduce impact.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Anti-Patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    definition: 'Poor practices that undermine the intended psychological effect of colors.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'ignoring_context',
    label: 'Ignoring Context',
    definition: 'Using emotion-heavy colors like red or yellow without considering app tone, content, or audience.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'poor_contrast',
    label: 'Poor Contrast Choices',
    definition: 'Selecting colors based on feeling without testing readability and contrast across themes.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'random_palette',
    label: 'Unstructured Color\nSystems',
    definition: 'Applying psychological colors without semantic tokens leads to inconsistencies and UX confusion.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
]

export const links = [
  { source: 'root', target: 'warm_colors' },
  { source: 'warm_colors', target: 'red_psychology' },
  { source: 'warm_colors', target: 'orange_psychology' },
  { source: 'warm_colors', target: 'yellow_psychology' },

  { source: 'root', target: 'cool_colors' },
  { source: 'cool_colors', target: 'blue_psychology' },
  { source: 'cool_colors', target: 'green_psychology' },
  { source: 'cool_colors', target: 'purple_psychology' },

  { source: 'root', target: 'neutral_colors' },
  { source: 'neutral_colors', target: 'black_psychology' },
  { source: 'neutral_colors', target: 'white_psychology' },
  { source: 'neutral_colors', target: 'gray_psychology' },

  { source: 'root', target: 'contextual_variation' },
  { source: 'contextual_variation', target: 'red_variants' },
  { source: 'contextual_variation', target: 'white_variants' },

  { source: 'root', target: 'cons' },
  { source: 'cons', target: 'color_bias' },
  { source: 'cons', target: 'overbranding' },
  { source: 'cons', target: 'conflicting_signals' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'ignoring_context' },
  { source: 'anti_patterns', target: 'poor_contrast' },
  { source: 'anti_patterns', target: 'random_palette' },
]
