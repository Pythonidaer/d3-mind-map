import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Color in Branding\n& UX',
    color: 'root',
    shape: 'roundRect',
    definition: 'How color choices influence brand identity, user trust, perception, and usability in interface design.',
  },

  // Primary Categories
  {
    id: 'brand_identity',
    label: 'Brand Identity',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Using color to visually reinforce brand personality, values, and memorability.',
  },
  {
    id: 'user_emotion',
    label: 'User Emotion\n& Trust',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'How color schemes can evoke emotion and build user confidence in a product.',
  },
  {
    id: 'interaction_design',
    label: 'Interaction Design',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Color usage for buttons, states, and interactive elements in UI workflows.',
  },
  {
    id: 'consistency_accessibility',
    label: 'Consistency &\nAccessibility',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Ensuring color choices support accessible contrast and visual consistency across platforms.',
  },
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    color: 'nodeNegative1',
    shape: 'hexagon',
    definition: 'Common pitfalls and mistakes in branding and UX color usage.',
  },

  // Brand Identity children
  {
    id: 'logo_color',
    label: 'Logo Color\nStrategy',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Using specific colors in logos to symbolize brand tone and industry.',
  },
  {
    id: 'color_guidelines',
    label: 'Color Guidelines\n& Style Tokens',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Documented rules and variables to maintain brand color usage in code and design.',
  },

  // User Emotion children
  {
    id: 'emotional_alignment',
    label: 'Emotional\nAlignment',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Mapping colors to feelings that align with user expectations and product tone.',
  },
  {
    id: 'perceived_trust',
    label: 'Perceived Trust\n& Safety',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Using calm, trustworthy colors to signal reliability and security.',
  },

  // Interaction Design children
  {
    id: 'cta_colors',
    label: 'CTA & Action\nColor Patterns',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Using color to guide primary/secondary actions and visual priority.',
  },
  {
    id: 'state_indicators',
    label: 'State Indicators\nand Feedback',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Colors for hover, active, disabled, loading, error, and success states.',
  },

  // Consistency & Accessibility children
  {
    id: 'contrast_ratios',
    label: 'WCAG Contrast\nRatios',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Ensuring text and UI elements meet accessibility contrast standards.',
  },
  {
    id: 'dark_light_themes',
    label: 'Dark & Light\nTheme Consistency',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Maintaining visual meaning across theme modes.',
  },

  // Anti-pattern children
  {
    id: 'too_many_colors',
    label: 'Too Many\nColors',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Using an excessive number of brand or UI colors without purpose.',
  },
  {
    id: 'color_only_meaning',
    label: 'Color as Sole\nMeaning',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Using color alone to convey status or action without text/icon backup.',
  },
  {
    id: 'poor_brand_fit',
    label: 'Poor Brand Fit',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Color choices that do not reflect the values or market of the brand.',
  },

  // Anti-pattern grandchildren
  {
    id: 'branding_confusion',
    label: 'Branding\nConfusion',
    color: 'nodeNegative3',
    shape: 'diamond',
    definition: 'Inconsistent or conflicting color use across brand properties.',
  },
  {
    id: 'bad_theme_switching',
    label: 'Bad Theme\nSwitching',
    color: 'nodeNegative3',
    shape: 'diamond',
    definition: 'Poorly implemented theme toggles that reverse meanings or harm contrast.',
  },
]

export const links = [
  { source: 'root', target: 'brand_identity' },
  { source: 'root', target: 'user_emotion' },
  { source: 'root', target: 'interaction_design' },
  { source: 'root', target: 'consistency_accessibility' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'brand_identity', target: 'logo_color' },
  { source: 'brand_identity', target: 'color_guidelines' },

  { source: 'user_emotion', target: 'emotional_alignment' },
  { source: 'user_emotion', target: 'perceived_trust' },

  { source: 'interaction_design', target: 'cta_colors' },
  { source: 'interaction_design', target: 'state_indicators' },

  { source: 'consistency_accessibility', target: 'contrast_ratios' },
  { source: 'consistency_accessibility', target: 'dark_light_themes' },

  { source: 'anti_patterns', target: 'too_many_colors' },
  { source: 'anti_patterns', target: 'color_only_meaning' },
  { source: 'anti_patterns', target: 'poor_brand_fit' },

  { source: 'poor_brand_fit', target: 'branding_confusion' },
  { source: 'dark_light_themes', target: 'bad_theme_switching' },
]
