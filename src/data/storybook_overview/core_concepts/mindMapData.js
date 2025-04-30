import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Core Concepts\nof Storybook',
    definition:
      'Foundational elements that define how Storybook works: Stories, CSF, Args, and Addons.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'stories',
    label: 'Stories',
    definition:
      'UI component examples in specific states used for development, testing, and documentation.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'csf',
    label: 'Component\nStory Format (CSF)',
    definition:
      'A standard format for writing stories using ES6 modules; supports reusability and tooling integration.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'args',
    label: 'Args',
    definition:
      'Dynamic inputs that control how components render in Storybook; enable interactivity via UI Controls.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'addons',
    label: 'Addons',
    definition:
      'Plugins that extend Storybook’s functionality with features like controls, docs, accessibility, and more.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Children of Stories
  {
    id: 'stories_variations',
    label: 'Component Variations',
    definition:
      'Each story shows a component in a specific state, like disabled or loading.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'stories_usage',
    label: 'Multi-purpose Use',
    definition:
      'Used for development, debugging, visual testing, and documentation.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of CSF
  {
    id: 'csf_structure',
    label: 'File Structure',
    definition:
      'Default export for metadata, named exports for individual stories.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'csf_csf3',
    label: 'CSF3 Features',
    definition:
      'Spreadable story objects, default render functions for concise syntax.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Args
  {
    id: 'args_controls',
    label: 'Controls Addon',
    definition:
      'Generates UI inputs to modify Args like text, color, and boolean switches.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'args_levels',
    label: 'Args Scope',
    definition:
      'Args can be set at story, component, or global level for flexibility.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Addons
  {
    id: 'addons_ui',
    label: 'UI Addons',
    definition:
      'Visual tools like Controls, Docs, Accessibility, and Viewport.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'addons_extensibility',
    label: 'Custom Addons',
    definition:
      'Teams can build their own addons for custom workflows or integrations.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'stories' },
  { source: 'root', target: 'csf' },
  { source: 'root', target: 'args' },
  { source: 'root', target: 'addons' },

  { source: 'stories', target: 'stories_variations' },
  { source: 'stories', target: 'stories_usage' },

  { source: 'csf', target: 'csf_structure' },
  { source: 'csf', target: 'csf_csf3' },

  { source: 'args', target: 'args_controls' },
  { source: 'args', target: 'args_levels' },

  { source: 'addons', target: 'addons_ui' },
  { source: 'addons', target: 'addons_extensibility' },
]
