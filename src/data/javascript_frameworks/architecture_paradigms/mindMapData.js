import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Architecture & Paradigms',
    shape: 'roundRect',
    color: 'root',
    definition:
      'The core architectural models and design paradigms that JavaScript frameworks adopt.',
  },

  // Primary architectural models
  {
    id: 'mvc',
    label: 'MVC / MVVM',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Separates data (Model), UI (View), and logic (Controller/ViewModel).',
  },
  {
    id: 'component_based',
    label: 'Component-Based',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Breaks UIs into reusable, isolated pieces of functionality.',
  },
  {
    id: 'declarative',
    label: 'Declarative \nProgramming',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Describes *what* UI should look like for a given state, not how to build it step-by-step.',
  },
  {
    id: 'reactive',
    label: 'Reactive \nProgramming',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Automatically reacts to data changes and propagates updates across the system.',
  },
  {
    id: 'compiled',
    label: 'Compiled \nFrameworks',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Transform components into highly optimized JavaScript at build time.',
  },

  // Anti-patterns / tradeoffs
  {
    id: 'overengineering',
    label: 'Overengineering',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Applying overly complex architectural patterns to simple apps.',
  },
  {
    id: 'state_sync_hell',
    label: 'State \nSync \nHell',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Redundant or out-of-sync state across components and views.',
  },

  // Second-level nodes for Component-Based
  {
    id: 'reusable_ui',
    label: 'Reusable \nUI Components',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Encapsulate logic, markup, and styles for reuse.',
  },
  {
    id: 'composition',
    label: 'Component \nComposition',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Nest smaller components into larger units to build UIs hierarchically.',
  },

  // Second-level for Declarative
  {
    id: 'ui_as_state',
    label: 'UI = f(state)',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'UI output is a pure function of application state.',
  },
  {
    id: 'jsx_templates',
    label: 'JSX / Templates',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use declarative templating to describe output (e.g., JSX, Handlebars, Svelte markup).',
  },

  // Second-level for Reactive
  {
    id: 'signals',
    label: 'Signals / \nObservables',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Track dependencies so that updates can be triggered precisely.',
  },
  {
    id: 'derived_state',
    label: 'Derived State',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'State computed automatically from other reactive values.',
  },

  // Second-level for Compiled
  {
    id: 'build_optimization',
    label: 'Build-Time \nOptimization',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Eliminates dead code, compiles templates, and minimizes runtime logic.',
  },
  {
    id: 'runtime_free',
    label: 'Runtime-Free \nOutput',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Removes framework abstractions, leaving clean JavaScript output.',
  },

  // Second-level for negative nodes
  {
    id: 'premature_scaling',
    label: 'Premature\n Abstractions',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Abstracting features too early leads to complexity and tech debt.',
  },
  {
    id: 'redundant_state',
    label: 'Redundant \nState Sources',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Same data managed in multiple places leads to inconsistencies.',
  },
  {
    id: 'manual_sync',
    label: 'Manual State Syncing',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Developers must write boilerplate to keep state in sync between components.',
  },
]

export const links = [
  { source: 'root', target: 'mvc' },
  { source: 'root', target: 'component_based' },
  { source: 'root', target: 'declarative' },
  { source: 'root', target: 'reactive' },
  { source: 'root', target: 'compiled' },
  { source: 'root', target: 'overengineering' },
  { source: 'root', target: 'state_sync_hell' },

  { source: 'component_based', target: 'reusable_ui' },
  { source: 'component_based', target: 'composition' },

  { source: 'declarative', target: 'ui_as_state' },
  { source: 'declarative', target: 'jsx_templates' },

  { source: 'reactive', target: 'signals' },
  { source: 'reactive', target: 'derived_state' },

  { source: 'compiled', target: 'build_optimization' },
  { source: 'compiled', target: 'runtime_free' },

  { source: 'overengineering', target: 'premature_scaling' },
  { source: 'state_sync_hell', target: 'redundant_state' },
  { source: 'state_sync_hell', target: 'manual_sync' },
]
