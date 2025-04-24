import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Study Schedule\nOptimization',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Evidence-based strategies for scheduling study sessions to maximize focus, retention, and long-term memory consolidation.',
  },

  // Positive Level 1 Nodes
  {
    id: 'distributedPractice',
    label: 'Distributed\nPractice',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Spreading study sessions over time to enhance memory retention and reduce forgetting.',
  },
  {
    id: 'pomodoro',
    label: 'Pomodoro &\nTimed Sessions',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Using short bursts of focused work (e.g. 25 minutes) followed by brief breaks to maintain attention.',
  },
  {
    id: 'reviewIntervals',
    label: 'Spaced\nReview Intervals',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Scheduling reviews of material at increasing time intervals to optimize recall and reduce cognitive overload.',
  },
  {
    id: 'dailyMicroStudy',
    label: 'Daily\nMicro-Study',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Brief daily sessions (15–30 min) that maintain memory freshness and lower the threshold to start.',
  },
  {
    id: 'sleepAndRecovery',
    label: 'Sleep &\nRecovery',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Integrating adequate sleep and recovery into the schedule to support memory consolidation.',
  },
  {
    id: 'incubation',
    label: 'Incubation &\nBreak Gaps',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Using rest between study bouts or between learning and testing to allow subconscious processing and insight.',
  },
  {
    id: 'sessionPlanning',
    label: 'Weekly\nPlanning & Tracking',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Allocating time across topics each week to manage cognitive load and ensure systematic progress.',
  },

  // Anti-patterns
  {
    id: 'cramming',
    label: 'Cramming\nSessions',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Massed, last-minute study marathons that yield poor retention and higher stress.',
  },
  {
    id: 'noBreaks',
    label: 'No Scheduled\nBreaks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Skipping rest periods leads to fatigue, distraction, and cognitive decline during study.',
  },
  {
    id: 'rigidScheduling',
    label: 'Rigid\nScheduling',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Over-planning without accounting for flexibility, energy levels, or unforeseen interruptions.',
  },
]

export const links = [
  { source: 'root', target: 'distributedPractice' },
  { source: 'root', target: 'pomodoro' },
  { source: 'root', target: 'reviewIntervals' },
  { source: 'root', target: 'dailyMicroStudy' },
  { source: 'root', target: 'sleepAndRecovery' },
  { source: 'root', target: 'incubation' },
  { source: 'root', target: 'sessionPlanning' },

  { source: 'root', target: 'cramming' },
  { source: 'root', target: 'noBreaks' },
  { source: 'root', target: 'rigidScheduling' },
]
