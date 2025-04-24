import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Evidence-Based\nStrategies',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Cognitive science-backed learning techniques proven to improve memory retention, comprehension, and skill acquisition.',
  },

  // Positive Level 1 Nodes
  {
    id: 'retrievalPractice',
    label: 'Retrieval\nPractice',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'The deliberate act of recalling information from memory, which strengthens neural pathways and enhances retention.',
  },
  {
    id: 'spacedRepetition',
    label: 'Spaced\nRepetition',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Reviewing material at increasing intervals over time to reduce forgetting and promote long-term memory formation.',
  },
  {
    id: 'interleaving',
    label: 'Interleaving\nPractice',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Mixing related topics or problem types during practice to enhance discrimination and flexible application of knowledge.',
  },
  {
    id: 'elaboration',
    label: 'Elaboration &\nWhy-Questions',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Explaining concepts in your own words and connecting them to what you already know, improving comprehension and recall.',
  },
  {
    id: 'dualCoding',
    label: 'Dual Coding\n(Visual + Verbal)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Combining visuals with words to engage multiple brain pathways and enhance learning through redundancy.',
  },
  {
    id: 'concreteExamples',
    label: 'Concrete\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Using specific, real-world scenarios to ground abstract ideas and facilitate application and understanding.',
  },
  {
    id: 'metacognition',
    label: 'Metacognition &\nReflection',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Thinking about your own thinking—monitoring comprehension and adjusting strategies based on self-awareness.',
  },

  // Anti-Patterns
  {
    id: 'passiveReview',
    label: 'Passive\nReview',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Mindlessly re-reading or watching content without testing or engaging actively with it, leading to shallow retention.',
  },
  {
    id: 'overconfidence',
    label: 'Illusion of\nMastery',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Mistaking familiarity with material for actual understanding or skill, often caused by surface-level review habits.',
  },
]

export const links = [
  { source: 'root', target: 'retrievalPractice' },
  { source: 'root', target: 'spacedRepetition' },
  { source: 'root', target: 'interleaving' },
  { source: 'root', target: 'elaboration' },
  { source: 'root', target: 'dualCoding' },
  { source: 'root', target: 'concreteExamples' },
  { source: 'root', target: 'metacognition' },

  { source: 'root', target: 'passiveReview' },
  { source: 'root', target: 'overconfidence' },
]
