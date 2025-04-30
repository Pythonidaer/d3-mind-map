import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Typical Workflow\nwith Storybook',
    definition:
      'Step-by-step process for integrating Storybook into daily development, from writing components to deployment.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1: Major steps
  {
    id: 'component_creation',
    label: 'Write Component',
    definition:
      'Build your UI component using your preferred framework like React or Vue.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'add_stories',
    label: 'Add Stories',
    definition:
      'Create .stories.js or .stories.tsx files to define different states for the component.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'use_addons',
    label: 'Use Addons',
    definition:
      'Enhance interactivity, testability, and accessibility with official and custom addons.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'local_dev',
    label: 'Run Locally',
    definition:
      'Launch Storybook locally to test and debug components in isolation.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'build_deploy',
    label: 'Build & Deploy',
    definition:
      'Generate a static Storybook site and deploy it to Netlify, Vercel, or Chromatic.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2: Children of Add Stories
  {
    id: 'args_stories',
    label: 'Use Args Format',
    definition:
      'Write stories using Args to enable real-time control of props.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'csf_structure',
    label: 'Follow CSF Syntax',
    definition:
      'Use Component Story Format to organize stories with default/named exports.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2: Children of Use Addons
  {
    id: 'addons_controls',
    label: 'Controls & Actions',
    definition: 'Add interactivity and track event handlers.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'addons_accessibility',
    label: 'Accessibility Testing',
    definition: 'Use a11y addon to automatically flag WCAG issues.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2: Children of Build & Deploy
  {
    id: 'static_export',
    label: 'Static Build',
    definition: 'Use Storybook CLI to export as static HTML.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'publish_platforms',
    label: 'Publish to Hosting',
    definition: 'Deploy on Netlify, Vercel, GitHub Pages, or Chromatic.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'component_creation' },
  { source: 'root', target: 'add_stories' },
  { source: 'root', target: 'use_addons' },
  { source: 'root', target: 'local_dev' },
  { source: 'root', target: 'build_deploy' },

  { source: 'add_stories', target: 'args_stories' },
  { source: 'add_stories', target: 'csf_structure' },

  { source: 'use_addons', target: 'addons_controls' },
  { source: 'use_addons', target: 'addons_accessibility' },

  { source: 'build_deploy', target: 'static_export' },
  { source: 'build_deploy', target: 'publish_platforms' },
]
