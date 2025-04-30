import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Why Use\nStorybook',
    definition:
      'Key advantages of adopting Storybook for component-driven frontend development.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1: Major benefits
  {
    id: 'prevent_ui_regressions',
    label: 'Prevent UI Regressions',
    definition:
      'Visual testing and snapshot comparisons help catch changes early in development.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'team_collaboration',
    label: 'Team Collaboration',
    definition:
      'Interactive UI library improves communication between devs, designers, and PMs.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'faster_onboarding',
    label: 'Faster Onboarding',
    definition:
      'New team members can explore interactive stories and learn the component API quickly.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'modular_architecture',
    label: 'Modular\nArchitecture',
    definition: 'Encourages building UI as independent, reusable components.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'debugging_testing',
    label: 'Easier Debugging\nand Testing',
    definition:
      'Test props, states, and edge cases in isolation with real-time feedback.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2: Children of Prevent UI Regressions
  {
    id: 'snapshot_testing',
    label: 'Snapshot Testing',
    definition:
      'Compare visual changes across versions with tools like Chromatic.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'confidence_ui_changes',
    label: 'Confidence in UI Changes',
    definition: 'Know when visual updates are intentional or accidental.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2: Children of Team Collaboration
  {
    id: 'shared_reference',
    label: 'Shared Reference Point',
    definition: 'Designers and devs can refer to the same component catalog.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'feedback_loop',
    label: 'Improved Feedback Loop',
    definition: 'Stakeholders can preview and comment on live component demos.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2: Children of Modular Architecture
  {
    id: 'reuse_components',
    label: 'Reusable Components',
    definition: 'Encourages building once and reusing throughout the app.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'clean_codebase',
    label: 'Cleaner Codebase',
    definition:
      'Isolated components reduce interdependencies and side effects.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2: Children of Debugging and Testing
  {
    id: 'interactive_playground',
    label: 'Interactive Playground',
    definition: 'Try out different props, variants, and states in real time.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'edge_case_testing',
    label: 'Edge Case Testing',
    definition:
      'Test how components behave under unexpected or rare conditions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'prevent_ui_regressions' },
  { source: 'root', target: 'team_collaboration' },
  { source: 'root', target: 'faster_onboarding' },
  { source: 'root', target: 'modular_architecture' },
  { source: 'root', target: 'debugging_testing' },

  { source: 'prevent_ui_regressions', target: 'snapshot_testing' },
  { source: 'prevent_ui_regressions', target: 'confidence_ui_changes' },

  { source: 'team_collaboration', target: 'shared_reference' },
  { source: 'team_collaboration', target: 'feedback_loop' },

  { source: 'modular_architecture', target: 'reuse_components' },
  { source: 'modular_architecture', target: 'clean_codebase' },

  { source: 'debugging_testing', target: 'interactive_playground' },
  { source: 'debugging_testing', target: 'edge_case_testing' },
]
