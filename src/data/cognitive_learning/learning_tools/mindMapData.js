import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Learning\nTools',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Software, systems, and physical tools that support memory retention, skill development, and effective learning processes.',
  },

  // Positive Level 1 Nodes
  {
    id: 'spacedApps',
    label: 'Spaced\nRepetition Apps',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Flashcard tools like Anki or Quizlet that implement spaced review algorithms for long-term retention.',
  },
  {
    id: 'mindMapping',
    label: 'Mind Mapping &\nVisualization',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Tools like FreeMind or Obsidian for organizing knowledge visually and encoding connections spatially.',
  },
  {
    id: 'practicePlatforms',
    label: 'Programming\nPractice Platforms',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Sites like Codewars, LeetCode, or Exercism that reinforce memory through interactive problem-solving.',
  },
  {
    id: 'noteTools',
    label: 'Note-Taking &\nKnowledge \nManagement',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Digital notebooks like Notion, Obsidian, and OneNote for capturing, linking, and resurfacing concepts contextually.',
  },
  {
    id: 'performanceApps',
    label: 'Line Memorization &\nPerformance Apps',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Apps like ColdRead and LineLearner for rehearsing scripts, speeches, or dialogue interactively.',
  },
  {
    id: 'focusTools',
    label: 'Focus &\nDistraction Blockers',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Pomodoro timers, site blockers, and habit trackers that help maintain deep focus and session regularity.',
  },

  // Anti-Patterns
  {
    id: 'toolOverload',
    label: 'Tool\nOverload',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Using too many tools without consistency or purpose can fragment learning and reduce retention.',
  },
  {
    id: 'toolWithoutStrategy',
    label: 'Tools Without\nStrategy',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Using apps passively or without integrating learning techniques undermines their potential effectiveness.',
  },
]

export const links = [
  { source: 'root', target: 'spacedApps' },
  { source: 'root', target: 'mindMapping' },
  { source: 'root', target: 'practicePlatforms' },
  { source: 'root', target: 'noteTools' },
  { source: 'root', target: 'performanceApps' },
  { source: 'root', target: 'focusTools' },

  { source: 'root', target: 'toolOverload' },
  { source: 'root', target: 'toolWithoutStrategy' },
]
