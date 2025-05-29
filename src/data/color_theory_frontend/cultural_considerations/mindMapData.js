import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Cultural & Contextual\nConsiderations',
    definition: 'How cultural background, geographic location, and real-world context influence color perception and meaning.',
    shape: 'roundRect',
    color: 'root',
  },

  // Primary Branches
  {
    id: 'cultural_differences',
    label: 'Cultural\nDifferences',
    definition: 'Colors are interpreted differently across global cultures, impacting their appropriateness in UI.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'geographic_regional',
    label: 'Geographic &\nRegional Use',
    definition: 'Climate, history, and natural surroundings influence how color is used and received regionally.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'contextual_meaning',
    label: 'Contextual\nMeaning',
    definition: 'Colors change meaning based on industry, platform, time period, or application context.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'misinterpretations',
    label: 'Risks of\nMisinterpretation',
    definition: 'Failing to research cultural or contextual meaning can lead to offense or reduced trust.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Grandchildren - Cultural Differences
  {
    id: 'cultural_red',
    label: 'Red: Danger vs.\nCelebration',
    definition: 'Red signals danger or error in the West, but celebration and luck in China.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cultural_white',
    label: 'White: Purity vs.\nMourning',
    definition: 'White means purity in Western weddings but is a color of mourning in parts of Asia.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cultural_green',
    label: 'Green: Growth vs.\nTaboo',
    definition: 'Green represents growth or safety in many cultures, but can be taboo in others (e.g., infidelity in China).',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Grandchildren - Geographic/Regional
  {
    id: 'regional_climate',
    label: 'Climate &\nLandscape',
    definition: 'Tropical regions may favor vibrant palettes; northern or desert areas may lean neutral or cool.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'regional_history',
    label: 'Historical &\nColonial Influence',
    definition: 'Past colonial relationships, religion, or independence movements may shape palette norms.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Grandchildren - Contextual Meaning
  {
    id: 'industry_color',
    label: 'Industry-Specific\nColor Use',
    definition: 'Medical apps use blue/green for calm; food apps often use red/yellow to stimulate appetite.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'platform_themes',
    label: 'Platform-\nDependent Meaning',
    definition: 'Colors like gray may imply disabled state on web but active on iOS (light mode).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'temporal_context',
    label: 'Era &\nCultural Shift',
    definition: 'Colors fall in/out of fashion over time (e.g., 90s teal vs. today’s muted pastels).',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Grandchildren - Misinterpretation Risks
  {
    id: 'misuse_religion',
    label: 'Religious\nSensitivity',
    definition: 'Certain colors are sacred or forbidden in religious contexts (e.g., saffron in Hinduism).',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'misuse_flags',
    label: 'Resemblance to\nNational Flags',
    definition: 'Combining colors may unintentionally evoke national symbolism, political affiliations, or conflict.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'misuse_memes',
    label: 'Modern\nMemetic Use',
    definition: 'Colors can be co-opted by internet memes, subcultures, or hate groups, changing public perception.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
];

export const links = [
  { source: 'root', target: 'cultural_differences' },
  { source: 'root', target: 'geographic_regional' },
  { source: 'root', target: 'contextual_meaning' },
  { source: 'root', target: 'misinterpretations' },

  { source: 'cultural_differences', target: 'cultural_red' },
  { source: 'cultural_differences', target: 'cultural_white' },
  { source: 'cultural_differences', target: 'cultural_green' },

  { source: 'geographic_regional', target: 'regional_climate' },
  { source: 'geographic_regional', target: 'regional_history' },

  { source: 'contextual_meaning', target: 'industry_color' },
  { source: 'contextual_meaning', target: 'platform_themes' },
  { source: 'contextual_meaning', target: 'temporal_context' },

  { source: 'misinterpretations', target: 'misuse_religion' },
  { source: 'misinterpretations', target: 'misuse_flags' },
  { source: 'misinterpretations', target: 'misuse_memes' },
];
