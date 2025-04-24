import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Performance\nMemorization',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Cognitive and behavioral techniques to memorize and deliver scripts, sets, or speeches confidently and fluently under performance conditions.',
  },

  // Positive Level 1
  {
    id: 'chunking',
    label: 'Chunking the\nMaterial',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Dividing material into meaningful sections or beats to reduce memory load and aid rehearsal.',
  },
  {
    id: 'spacedRehearsal',
    label: 'Spaced\nRehearsal',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Practicing segments over intervals to enhance retention and prevent burnout.',
  },
  {
    id: 'visualization',
    label: 'Visualization &\nMemory Cues',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Attaching vivid mental images or symbolic triggers to key lines or transitions.',
  },
  {
    id: 'memoryPalace',
    label: 'Memory Palace\nTechnique',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Mapping performance chunks to physical locations in a familiar place to create spatial memory triggers.',
  },
  {
    id: 'fullRehearsal',
    label: 'Out-Loud &\nFull-Body\n Rehearsal',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Rehearsing aloud with gestures and blocking to engage auditory and muscle memory.',
  },
  {
    id: 'elaborativeRehearsal',
    label: 'Elaborative\nRehearsal',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Understanding and connecting meaning and emotion to lines for deeper retention.',
  },
  {
    id: 'simulation',
    label: 'Simulation &\nStress Testing',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Rehearsing in realistic performance conditions to reinforce contextual memory.',
  },

  // Anti-patterns
  {
    id: 'silentReading',
    label: 'Silent\nReading Only',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Reading scripts in silence without vocal or physical rehearsal reduces recall reliability.',
  },
  {
    id: 'cramming',
    label: 'Cramming the\nNight Before',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Mass rehearsal in one session weakens recall and increases anxiety.',
  },
  {
    id: 'linearMemorization',
    label: 'Linear\nMemorization Only',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Memorizing word-for-word without structure increases vulnerability to forgetting transitions.',
  },
]

export const links = [
  { source: 'root', target: 'chunking' },
  { source: 'root', target: 'spacedRehearsal' },
  { source: 'root', target: 'visualization' },
  { source: 'root', target: 'memoryPalace' },
  { source: 'root', target: 'fullRehearsal' },
  { source: 'root', target: 'elaborativeRehearsal' },
  { source: 'root', target: 'simulation' },

  { source: 'root', target: 'silentReading' },
  { source: 'root', target: 'cramming' },
  { source: 'root', target: 'linearMemorization' },
]
