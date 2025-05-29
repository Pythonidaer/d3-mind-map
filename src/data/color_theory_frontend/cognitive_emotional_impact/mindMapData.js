import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Cognitive & Emotional\nImpact of Color',
    definition: 'Explores how color influences cognition, perception, memory, and emotional responses in users.',
    shape: 'roundRect',
    color: 'root',
  },

  // Emotional Influence
  {
    id: 'emotional_influence',
    label: 'Emotional\nInfluence',
    definition: 'Colors can elicit strong emotional reactions—calm, urgency, trust, or excitement.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'warm_colors',
    label: 'Warm Colors',
    definition: 'Reds, oranges, and yellows evoke energy, passion, urgency, and warmth.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cool_colors',
    label: 'Cool Colors',
    definition: 'Blues, purples, and greens convey calmness, stability, and professionalism.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'neutral_colors',
    label: 'Neutral Colors',
    definition: 'Grays, whites, and blacks suggest balance, simplicity, or sophistication.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Cognitive Load & Processing
  {
    id: 'cognitive_processing',
    label: 'Cognitive\nProcessing',
    definition: 'Color impacts how quickly users recognize, learn, and remember content.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'attention_guidance',
    label: 'Guides\nAttention',
    definition: 'Bright or contrasting colors draw user focus to key elements or actions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'memory_association',
    label: 'Memory\nAssociation',
    definition: 'Specific colors can help users remember key content or steps in a process.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'semantic_color_roles',
    label: 'Semantic\nRoles',
    definition: 'Using consistent color meanings (red=error, green=success) reduces mental load.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Psychological Associations
  {
    id: 'psychological_associations',
    label: 'Psychological\nAssociations',
    definition: 'Cultural and experiential links shape how users interpret color emotionally.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'color_symbolism',
    label: 'Color\nSymbolism',
    definition: 'Red may symbolize danger or love; blue may represent trust or sadness depending on context.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'contextual_meaning',
    label: 'Contextual\nMeaning',
    definition: 'The same color can mean different things in UI versus branding versus physical environments.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'personal_experience',
    label: 'Personal\nExperience',
    definition: 'User’s background or memories affect emotional responses to color.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Anti-patterns
  {
    id: 'emotional_misuse',
    label: 'Anti-Patterns in\nEmotional Color Use',
    definition: 'Poor color decisions can mislead users or evoke unintended emotional responses.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'overstimulating_colors',
    label: 'Overstimulating\nPalettes',
    definition: 'Too many bright or saturated colors can cause user fatigue or anxiety.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'misleading_color_meaning',
    label: 'Misleading\nColor Meaning',
    definition: 'Using red for success or green for error breaks expectations and causes confusion.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'inconsistent_emotion',
    label: 'Inconsistent\nEmotional Tone',
    definition: 'Mixing conflicting emotional cues (e.g., playful and serious) weakens clarity.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
];

export const links = [
  { source: 'root', target: 'emotional_influence' },
  { source: 'root', target: 'cognitive_processing' },
  { source: 'root', target: 'psychological_associations' },
  { source: 'root', target: 'emotional_misuse' },

  { source: 'emotional_influence', target: 'warm_colors' },
  { source: 'emotional_influence', target: 'cool_colors' },
  { source: 'emotional_influence', target: 'neutral_colors' },

  { source: 'cognitive_processing', target: 'attention_guidance' },
  { source: 'cognitive_processing', target: 'memory_association' },
  { source: 'cognitive_processing', target: 'semantic_color_roles' },

  { source: 'psychological_associations', target: 'color_symbolism' },
  { source: 'psychological_associations', target: 'contextual_meaning' },
  { source: 'psychological_associations', target: 'personal_experience' },

  { source: 'emotional_misuse', target: 'overstimulating_colors' },
  { source: 'emotional_misuse', target: 'misleading_color_meaning' },
  { source: 'emotional_misuse', target: 'inconsistent_emotion' },
];
