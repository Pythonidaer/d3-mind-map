import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Primary Use Cases\nof Storybook',
    definition:
      'Key scenarios where Storybook enhances frontend development: isolated component building, documentation, visual testing, and interactive demos.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1 use cases
  {
    id: 'isolation',
    label: 'Component\nDevelopment in Isolation',
    definition:
      'Build and test components independently of app logic, APIs, or routing.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'documentation',
    label: 'UI Documentation',
    definition:
      'Auto-generates interactive documentation from stories to act as a living style guide.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'visual_testing',
    label: 'Visual Testing',
    definition:
      'Capture and compare component snapshots to catch unintended UI changes.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'interactive_demos',
    label: 'Interactive\nComponent Demos',
    definition:
      'Create real-time editable playgrounds to showcase component functionality.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2 - Isolation
  {
    id: 'isolation_props_state',
    label: 'Real-Time Props & State Testing',
    definition: 'Adjust args and observe behavior in a sandboxed UI.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'isolation_setup',
    label: 'Minimal Setup Needed',
    definition:
      'Create .stories.js files to quickly begin isolated development.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Documentation
  {
    id: 'docs_mdx',
    label: 'MDX & Docs Addon',
    definition: 'Write rich, structured documentation with Markdown + JSX.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'docs_team_sharing',
    label: 'Cross-Team Reference',
    definition:
      'Enable designers, PMs, and devs to explore components in one place.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Visual Testing
  {
    id: 'visual_regression',
    label: 'Visual\nRegression Testing',
    definition: 'Compare rendered components across versions using snapshots.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'visual_tools',
    label: 'Integrates with\nChromatic, Percy, Applitools',
    definition:
      'Supports popular testing tools for snapshot diffing and UI validation.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Interactive Demos
  {
    id: 'demos_args_controls',
    label: 'Editable Props via Args & Controls',
    definition: 'Allow users to change props live in the Storybook UI.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'demos_flows',
    label: 'Simulate Flows with Interactions Addon',
    definition: 'Test user behavior using play functions inside stories.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'isolation' },
  { source: 'root', target: 'documentation' },
  { source: 'root', target: 'visual_testing' },
  { source: 'root', target: 'interactive_demos' },

  { source: 'isolation', target: 'isolation_props_state' },
  { source: 'isolation', target: 'isolation_setup' },

  { source: 'documentation', target: 'docs_mdx' },
  { source: 'documentation', target: 'docs_team_sharing' },

  { source: 'visual_testing', target: 'visual_regression' },
  { source: 'visual_testing', target: 'visual_tools' },

  { source: 'interactive_demos', target: 'demos_args_controls' },
  { source: 'interactive_demos', target: 'demos_flows' },
]
