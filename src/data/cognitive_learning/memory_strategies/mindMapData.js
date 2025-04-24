import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Memory Strategies',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Neuroscience-backed techniques to enhance memory retention, recall, and learning efficiency.',
  },

  // Positive Level 1 Nodes
  {
    id: 'activeRecall',
    label: 'Active\nRecall',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Deliberately retrieving information from memory, strengthening long-term retention.',
  },
  {
    id: 'spacedRepetition',
    label: 'Spaced\nRepetition',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Reviewing information at strategic intervals to reinforce memory and counter forgetting.',
  },
  {
    id: 'chunking',
    label: 'Chunking',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Organizing related bits of information into larger, meaningful units to reduce cognitive load.',
  },
  {
    id: 'elaborativeRehearsal',
    label: 'Elaborative\nRehearsal',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Linking new information to existing knowledge or context to enhance encoding.',
  },
  {
    id: 'mnemonics',
    label: 'Mnemonics',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Memory aids using patterns like acronyms or rhymes to enhance recall.',
  },
  {
    id: 'memoryPalace',
    label: 'Memory\nPalace',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Using vivid mental imagery and spatial locations to store and retrieve information in sequence.',
  },
  {
    id: 'dualCoding',
    label: 'Dual\nCoding',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Combining visual and verbal formats to encode memory through multiple cognitive channels.',
  },

  // Negative Nodes (Anti-Patterns)
  {
    id: 'cramming',
    label: 'Cramming',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Massed study sessions that may work short-term but result in poor long-term retention.',
  },
  {
    id: 'passiveReview',
    label: 'Passive\nReview',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Rereading or highlighting without testing memory recall—leads to illusion of competence.',
  },
  {
    id: 'overusedMnemonics',
    label: 'Overused\nMnemonics',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Relying on mnemonics for all content, risking superficial understanding without context.',
  },
]

export const links = [
  { source: 'root', target: 'activeRecall' },
  { source: 'root', target: 'spacedRepetition' },
  { source: 'root', target: 'chunking' },
  { source: 'root', target: 'elaborativeRehearsal' },
  { source: 'root', target: 'mnemonics' },
  { source: 'root', target: 'memoryPalace' },
  { source: 'root', target: 'dualCoding' },

  { source: 'root', target: 'cramming' },
  { source: 'root', target: 'passiveReview' },
  { source: 'root', target: 'overusedMnemonics' },
]
