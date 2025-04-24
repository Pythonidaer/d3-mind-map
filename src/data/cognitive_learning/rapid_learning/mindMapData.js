import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Rapid Skill\nAcquisition',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Strategies to learn new skills efficiently by breaking them down, practicing deliberately, and focusing on high-yield subskills.',
  },

  // Positive Level 1
  {
    id: 'defineGoals',
    label: 'Define Clear\nGoals &\n Subskills',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Set specific, actionable learning goals and deconstruct skills into their smallest components.',
  },
  {
    id: 'highImpact',
    label: 'Focus on\nHigh-Impact \nElements',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Use the 80/20 rule to prioritize key subskills or concepts that yield the most benefit.',
  },
  {
    id: 'handsOn',
    label: 'Hands-On\nPractice From\n Day One',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Begin applying the skill early through projects, coding, performance, or direct application.',
  },
  {
    id: 'deliberatePractice',
    label: 'Deliberate\nPractice \n& Feedback',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Practice specific skill elements with tight feedback loops to correct errors and improve performance.',
  },
  {
    id: 'shortBursts',
    label: 'Short,\nFocused \nSessions',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Practice in bursts of 20–60 minutes to maximize focus, reduce fatigue, and build consistency.',
  },
  {
    id: 'prioritizeUnderstanding',
    label: 'Prioritize\nUnderstanding',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Focus on grasping how and why something works rather than just memorizing procedures.',
  },
  {
    id: 'leverageExamples',
    label: 'Leverage\nExamples \n& Mentors',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Study high-quality examples and seek expert guidance or feedback when possible.',
  },

  // Negative Patterns
  {
    id: 'perfectionism',
    label: 'Perfectionism\nat Start',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Waiting until you fully understand a topic before starting leads to procrastination and slower progress.',
  },
  {
    id: 'passiveLearningOnly',
    label: 'Passive\nLearning Only',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Relying solely on reading, watching, or listening without doing leads to poor retention and transfer.',
  },
]

export const links = [
  { source: 'root', target: 'defineGoals' },
  { source: 'root', target: 'highImpact' },
  { source: 'root', target: 'handsOn' },
  { source: 'root', target: 'deliberatePractice' },
  { source: 'root', target: 'shortBursts' },
  { source: 'root', target: 'prioritizeUnderstanding' },
  { source: 'root', target: 'leverageExamples' },

  { source: 'root', target: 'perfectionism' },
  { source: 'root', target: 'passiveLearningOnly' },
]
