import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Cognitive\nPrinciples',
    color: 'root',
    shape: 'roundRect',
    definition: 'Core cognitive science concepts used in UX/UI to optimize mental effort, learning, memory, and user behavior.'
  },

  // Positive Level 1
  {
    id: 'cognitive_load',
    label: 'Cognitive\nLoad Theory',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Understanding and minimizing mental effort required by users to process and interact with interfaces.'
  },
  {
    id: 'mental_models',
    label: 'Mental\nModels',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Internal user assumptions and expectations about how systems work based on past experiences.'
  },
  {
    id: 'memory_models',
    label: 'Memory\nand Recall',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'How short-term and long-term memory impact interface use, learnability, and recognition vs recall.'
  },
  {
    id: 'attention_focus',
    label: 'Attention\nand Focus',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'How users allocate cognitive resources and how interfaces should guide attention to key elements.'
  },

  // Negative Level 1
  {
    id: 'cognitive_pitfalls',
    label: 'Cognitive\nAnti-Patterns',
    color: 'nodeNegative1',
    shape: 'hexagon',
    definition: 'Design patterns that overwhelm, mislead, or confuse users by violating core cognitive principles.'
  },

  // Positive Level 2
  {
    id: 'intrinsic_load',
    label: 'Intrinsic\nLoad',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Complexity inherent to the content or task that can’t be simplified but must be supported.'
  },
  {
    id: 'extraneous_load',
    label: 'Extraneous\nLoad',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Unnecessary mental effort caused by poor UI choices such as clutter or confusing layouts.'
  },
  {
    id: 'germane_load',
    label: 'Germane\nLoad',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Helpful mental effort that contributes to learning or schema formation in a well-designed interface.'
  },
  {
    id: 'model_alignment',
    label: 'Model\nAlignment',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'When system design matches the user’s expectations, enabling faster learning and intuitive use.'
  },
  {
    id: 'conceptual_models',
    label: 'Conceptual\nModels',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'How the system is explained to users via visuals, copy, structure, or metaphors.'
  },
  {
    id: 'recognition_over_recall',
    label: 'Recognition\nvs Recall',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Designing systems where users recognize information (like menu items) instead of recalling it from memory.'
  },
  {
    id: 'chunking',
    label: 'Chunking\nInformation',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Grouping related info into small, manageable units to help short-term memory retention.'
  },
  {
    id: 'visual_cues',
    label: 'Visual\nCues',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Use of color, size, spacing, motion, or contrast to draw user focus and reduce cognitive search cost.'
  },
  {
    id: 'progressive_disclosure',
    label: 'Progressive\nDisclosure',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Showing only necessary information upfront, with more revealed as needed, reducing overload.'
  },

  // Negative Level 2
  {
    id: 'overchoice',
    label: 'Too Many\nChoices',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Providing too many options at once, leading to decision fatigue and reduced user satisfaction.'
  },
  {
    id: 'misaligned_models',
    label: 'Mismatched\nMental Models',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'When system behavior contradicts user expectations, increasing error and frustration.'
  },
  {
    id: 'invisible_state',
    label: 'Invisible\nSystem Status',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Failing to inform users of what’s happening in the system, leading to confusion and lack of trust.'
  }
];

export const links = [
  { source: 'root', target: 'cognitive_load' },
  { source: 'root', target: 'mental_models' },
  { source: 'root', target: 'memory_models' },
  { source: 'root', target: 'attention_focus' },
  { source: 'root', target: 'cognitive_pitfalls' },

  { source: 'cognitive_load', target: 'intrinsic_load' },
  { source: 'cognitive_load', target: 'extraneous_load' },
  { source: 'cognitive_load', target: 'germane_load' },

  { source: 'mental_models', target: 'model_alignment' },
  { source: 'mental_models', target: 'conceptual_models' },

  { source: 'memory_models', target: 'recognition_over_recall' },
  { source: 'memory_models', target: 'chunking' },

  { source: 'attention_focus', target: 'visual_cues' },
  { source: 'attention_focus', target: 'progressive_disclosure' },

  { source: 'cognitive_pitfalls', target: 'overchoice' },
  { source: 'cognitive_pitfalls', target: 'misaligned_models' },
  { source: 'cognitive_pitfalls', target: 'invisible_state' }
];
