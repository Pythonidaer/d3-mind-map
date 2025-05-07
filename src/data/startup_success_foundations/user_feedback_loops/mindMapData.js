import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'User Feedback &\nIteration',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Processes for gathering, analyzing, and integrating user feedback into product design and development for continuous improvement.',
  },

  // Positive Node 1s
  {
    id: 'feedback_channels',
    label: 'Feedback\nCollection',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Methods for capturing user insights, including interviews, surveys, in-app prompts, and analytics.',
  },
  {
    id: 'learning_loop',
    label: 'Build-Measure-\nLearn Loop',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Lean Startup cycle used to validate ideas quickly through MVPs and user feedback.',
  },
  {
    id: 'prioritization',
    label: 'Feature\nPrioritization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Frameworks for deciding what feedback to act on, and which features to build next.',
  },
  {
    id: 'iteration',
    label: 'Rapid\nIteration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Quick cycles of product change based on validated learning and evolving user needs.',
  },

  // Positive Node 2s — Feedback Collection
  {
    id: 'interviews',
    label: 'User\nInterviews',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'feedback_channels',
    definition:
      'Qualitative conversations to understand user behavior, pain points, and preferences.',
  },
  {
    id: 'surveys',
    label: 'User\nSurveys',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'feedback_channels',
    definition:
      'Scalable way to gather quantitative feedback across a wider audience.',
  },
  {
    id: 'analytics',
    label: 'Behavioral\nAnalytics',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'feedback_channels',
    definition:
      'Track user clicks, drop-offs, and heatmaps to identify usability issues.',
  },
  {
    id: 'in_app_feedback',
    label: 'In-App\nPrompts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'feedback_channels',
    definition:
      'Small nudges or modals asking for input during usage, often context-aware.',
  },

  // Positive Node 2s — Prioritization
  {
    id: 'ice',
    label: 'ICE\nScoring',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prioritization',
    definition:
      'Ranks features by Impact, Confidence, and Ease. Used to balance ambition with feasibility.',
  },
  {
    id: 'rpr',
    label: 'Reach x Pain x\nResources',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prioritization',
    definition:
      'Prioritization based on how many users are affected, how painful the issue is, and how much effort it takes to solve.',
  },

  // Positive Node 2s — Iteration
  {
    id: 'mvp_updates',
    label: 'MVP-\nDriven Updates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'iteration',
    definition:
      'Each update is framed as a test of a specific assumption or user need, not a final version.',
  },
  {
    id: 'pivot_or_persevere',
    label: 'Pivot or\nPersevere',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'iteration',
    definition:
      'Using validated data to decide whether to double down on a feature/direction or change course.',
  },

  // Negative Node 1
  {
    id: 'anti_patterns',
    label: 'Feedback\nAnti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common mistakes in collecting or reacting to feedback that mislead product development.',
  },

  // Negative Node 2s
  {
    id: 'feature_pollution',
    label: 'Feature\nOverload',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Trying to please everyone by adding too many features, leading to complexity and diluted UX.',
  },
  {
    id: 'biased_data',
    label: 'Biased\nFeedback',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Gathering input only from superfans or team members, skewing product direction.',
  },
  {
    id: 'slow_loops',
    label: 'Slow\nIteration',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Delaying action until perfect clarity instead of shipping small changes to learn quickly.',
  },
]

export const links = [
  { source: 'root', target: 'feedback_channels' },
  { source: 'root', target: 'learning_loop' },
  { source: 'root', target: 'prioritization' },
  { source: 'root', target: 'iteration' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'feedback_channels', target: 'interviews' },
  { source: 'feedback_channels', target: 'surveys' },
  { source: 'feedback_channels', target: 'analytics' },
  { source: 'feedback_channels', target: 'in_app_feedback' },

  { source: 'prioritization', target: 'ice' },
  { source: 'prioritization', target: 'rpr' },

  { source: 'iteration', target: 'mvp_updates' },
  { source: 'iteration', target: 'pivot_or_persevere' },

  { source: 'anti_patterns', target: 'feature_pollution' },
  { source: 'anti_patterns', target: 'biased_data' },
  { source: 'anti_patterns', target: 'slow_loops' },
]
