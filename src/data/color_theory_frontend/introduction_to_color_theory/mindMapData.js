import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Intro to\nColor Theory',
    definition: 'Overview of foundational topics in frontend-focused color theory: perception, usage, psychology, models, accessibility, and more.',
    shape: 'roundRect',
    color: 'root',
  },

  // Thematic Top-Level Nodes
  {
    id: 'fundamentals',
    label: 'Core\nPrinciples',
    definition: 'Basic building blocks including the color wheel, relationships, and tints/shades/tones.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'psychological',
    label: 'Psychology\n& UX Impact',
    definition: 'How color influences emotion, cognition, branding, and cross-cultural experience.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'technical',
    label: 'Color Models\n& Spaces',
    definition: 'The scientific and digital formats behind color representation and manipulation.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'frontend_usage',
    label: 'Frontend\nUsage',
    definition: 'Practical applications of color in UI, accessibility, testing, and visual systems.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Fundamentals - Child Level
  {
    id: 'color_wheel',
    label: 'Color\nWheel',
    definition: 'Primary, secondary, and tertiary colors arranged in circular harmony.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'color_relationships',
    label: 'Color\nRelationships',
    definition: 'Analogous, complementary, triadic, and other visual harmony techniques.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tints_shades_tones',
    label: 'Tints,\nShades, Tones',
    definition: 'Variations made by adding white, black, or gray to pure colors.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Fundamentals - Grandchild Level
  {
    id: 'wheel_structure',
    label: 'Wheel\nStructure',
    definition: 'Understanding radial symmetry and spacing on the wheel.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'relationship_schemes',
    label: 'Scheme\nTypes',
    definition: 'Split-complementary, tetradic, and square schemes for balance and contrast.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'tone_usage',
    label: 'Tone\nApplication',
    definition: 'How tints, shades, and tones affect mood and usability in interfaces.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // Psychological - Child Level
  {
    id: 'color_psychology',
    label: 'Color\nPsychology',
    definition: 'Emotional and behavioral impact of different hues.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'branding_ux',
    label: 'Color in\nBranding & UX',
    definition: 'Establishing identity, tone, and conversions through color.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cultural_context',
    label: 'Cultural\nContext',
    definition: 'Variations in color meanings across cultures and settings.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Psychological - Grandchild Level
  {
    id: 'emotional_triggers',
    label: 'Emotional\nTriggers',
    definition: 'Red = urgency, blue = calm, yellow = optimism, etc.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'cta_design',
    label: 'CTA\nStrategies',
    definition: 'Use color to guide users toward action (e.g., contrast for buttons).',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'color_meanings',
    label: 'Cultural\nMeanings',
    definition: 'White = purity in West, mourning in East; red = danger vs celebration.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // Technical - Child Level
  {
    id: 'hsb_model',
    label: 'HSB\nModel',
    definition: 'Describes color by hue, saturation, and brightness.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'color_spaces',
    label: 'Color\nSpaces',
    definition: 'Standardized color systems like sRGB, Lab, or Display P3.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'conversion',
    label: 'Color\nConversion',
    definition: 'Transforming between HEX, RGB, HSL, and other formats.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Technical - Grandchild Level
  {
    id: 'hsb_vs_rgb',
    label: 'HSB vs\nRGB',
    definition: 'HSB is more human-oriented; RGB is used in hardware and CSS.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'gamut_limits',
    label: 'Gamut\nAwareness',
    definition: 'Recognize which colors fall outside device or print gamuts.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'hex_rgb_hsl',
    label: 'HEX, RGB,\nHSL in CSS',
    definition: 'How to convert and apply color values for the web.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // Frontend - Child Level
  {
    id: 'accessibility',
    label: 'Color &\nAccessibility',
    definition: 'Ensuring legibility, contrast, and inclusive design.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ui_usage',
    label: 'UI\nUsage',
    definition: 'Practical UI applications like status colors and theming.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'evaluation_tools',
    label: 'Tools &\nTesting',
    definition: 'Evaluating and refining color with dev tools and libraries.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Frontend - Grandchild Level
  {
    id: 'contrast_standards',
    label: 'WCAG\nContrast',
    definition: 'Minimum ratios for readable text and elements (e.g., 4.5:1).',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'theme_token_design',
    label: 'Theming &\nTokens',
    definition: 'Design systems use semantic color tokens for dark/light modes.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'tools_libraries',
    label: 'Color\nLibraries',
    definition: 'Contrast checkers, palette generators, and color pickers.',
    shape: 'diamond',
    color: 'nodePositive3',
  }
];

export const links = [
  { source: 'root', target: 'fundamentals' },
  { source: 'root', target: 'psychological' },
  { source: 'root', target: 'technical' },
  { source: 'root', target: 'frontend_usage' },

  // Fundamentals
  { source: 'fundamentals', target: 'color_wheel' },
  { source: 'fundamentals', target: 'color_relationships' },
  { source: 'fundamentals', target: 'tints_shades_tones' },
  { source: 'color_wheel', target: 'wheel_structure' },
  { source: 'color_relationships', target: 'relationship_schemes' },
  { source: 'tints_shades_tones', target: 'tone_usage' },

  // Psychology
  { source: 'psychological', target: 'color_psychology' },
  { source: 'psychological', target: 'branding_ux' },
  { source: 'psychological', target: 'cultural_context' },
  { source: 'color_psychology', target: 'emotional_triggers' },
  { source: 'branding_ux', target: 'cta_design' },
  { source: 'cultural_context', target: 'color_meanings' },

  // Technical
  { source: 'technical', target: 'hsb_model' },
  { source: 'technical', target: 'color_spaces' },
  { source: 'technical', target: 'conversion' },
  { source: 'hsb_model', target: 'hsb_vs_rgb' },
  { source: 'color_spaces', target: 'gamut_limits' },
  { source: 'conversion', target: 'hex_rgb_hsl' },

  // Frontend
  { source: 'frontend_usage', target: 'accessibility' },
  { source: 'frontend_usage', target: 'ui_usage' },
  { source: 'frontend_usage', target: 'evaluation_tools' },
  { source: 'accessibility', target: 'contrast_standards' },
  { source: 'ui_usage', target: 'theme_token_design' },
  { source: 'evaluation_tools', target: 'tools_libraries' }
];
