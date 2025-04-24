import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Creating & Distributing',
    shape: 'roundRect',
    color: 'root',
    definition:
      'The process of building your own JavaScript framework or library and distributing it via npm.',
  },

  // Top-level
  {
    id: 'create_framework',
    label: 'Creating\na Framework',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Involves designing architecture, API surface, build tools, and lifecycle control for full app scaffolding.',
  },
  {
    id: 'create_library',
    label: 'Creating\na Library',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Focuses on isolated, reusable logic or utilities that solve specific problems.',
  },
  {
    id: 'distribute_npm',
    label: 'Distributing\non npm',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Publishing your package to the npm registry for reuse and sharing by others.',
  },

  // Child nodes for framework
  {
    id: 'framework_architecture',
    label: 'Define\nArchitecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Decide if the framework is MVC, MVVM, component-based, reactive, etc.',
  },
  {
    id: 'framework_lifecycle',
    label: 'Implement\nLifecycle',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Expose hooks and control flow points like init, mount, update, destroy.',
  },
  {
    id: 'framework_cli',
    label: 'Build a CLI',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Provide a command-line interface for generating boilerplate, running dev servers, and building apps.',
  },

  // Child nodes for library
  {
    id: 'utility_focus',
    label: 'Utility\nScope',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Ensure library is focused on a specific domain (e.g., date handling, validation, animation).',
  },
  {
    id: 'no_global_state',
    label: 'Avoid\nGlobal State',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Ensure reusability and testability by avoiding shared state across imports.',
  },

  // Child nodes for npm
  {
    id: 'npm_init',
    label: 'npm init',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use `npm init` to scaffold your project and create a package.json file.',
  },
  {
    id: 'npm_publish',
    label: 'npm publish',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Push your code to the npm registry. Must be logged in and use a unique package name.',
  },
  {
    id: 'semver_docs',
    label: 'Semver\n& Docs',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use semantic versioning and provide documentation (README.md) with examples and usage instructions.',
  },

  // Anti-patterns
  {
    id: 'bad_versioning',
    label: 'Improper\nVersioning',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Skipping semver conventions leads to breaking changes without warning.',
  },
  {
    id: 'no_readme',
    label: 'No\nDocumentation',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Without clear usage instructions, adoption becomes difficult even if the code is good.',
  },
]

export const links = [
  { source: 'root', target: 'create_framework' },
  { source: 'root', target: 'create_library' },
  { source: 'root', target: 'distribute_npm' },

  { source: 'create_framework', target: 'framework_architecture' },
  { source: 'create_framework', target: 'framework_lifecycle' },
  { source: 'create_framework', target: 'framework_cli' },

  { source: 'create_library', target: 'utility_focus' },
  { source: 'create_library', target: 'no_global_state' },

  { source: 'distribute_npm', target: 'npm_init' },
  { source: 'distribute_npm', target: 'npm_publish' },
  { source: 'distribute_npm', target: 'semver_docs' },

  { source: 'root', target: 'bad_versioning' },
  { source: 'root', target: 'no_readme' },
]
