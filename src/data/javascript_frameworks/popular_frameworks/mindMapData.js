import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Popular Frameworks',
    shape: 'roundRect',
    color: 'root',
    definition:
      'A comparison of widely-used JavaScript frameworks, their paradigms, strengths, and shortcomings.',
  },
  // First-level frameworks
  {
    id: 'react',
    label: 'React.js',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'UI library focused on component architecture, JSX, and virtual DOM. Maintained by Meta.',
  },
  {
    id: 'vue',
    label: 'Vue.js',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Progressive framework with reactive bindings, single-file components, and HTML-based templates.',
  },
  {
    id: 'angular',
    label: 'Angular',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Full-featured TypeScript framework by Google using MVVM and two-way binding.',
  },
  {
    id: 'svelte',
    label: 'Svelte',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Compiler framework that outputs optimized vanilla JS at build time with no virtual DOM.',
  },
  {
    id: 'ember',
    label: 'Ember.js',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Convention-over-configuration framework with strong tooling and MVVM architecture.',
  },
  {
    id: 'solid',
    label: 'SolidJS',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Fine-grained reactivity framework that updates the real DOM directly with JSX support.',
  },

  // React children
  {
    id: 'react_virtual_dom',
    label: 'Virtual DOM',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Efficiently diffs changes to avoid full DOM updates.',
  },
  {
    id: 'react_jsx_hooks',
    label: 'JSX + Hooks',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Combines HTML-like syntax with composable stateful logic.',
  },

  // Vue children
  {
    id: 'vue_sfc',
    label: 'Single-File Components',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Combines template, script, and style in a single .vue file.',
  },
  {
    id: 'vue_reactivity',
    label: 'Reactivity System',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Automatically updates DOM when underlying data changes.',
  },

  // Angular children
  {
    id: 'angular_di',
    label: 'Dependency Injection',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Injects shared services into components for modularity.',
  },
  {
    id: 'angular_aot',
    label: 'AOT Compilation',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Compiles templates and code during build time for faster rendering.',
  },

  // Svelte children
  {
    id: 'svelte_compile',
    label: 'Compile-Time Optimization',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Generates minimal JS code, reducing runtime overhead.',
  },
  {
    id: 'svelte_scoped_styles',
    label: 'Scoped Styles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Styles are scoped to components, preventing conflicts.',
  },

  // Ember children
  {
    id: 'ember_cli',
    label: 'Ember CLI',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Powerful CLI that standardizes builds, testing, and scaffolding.',
  },
  {
    id: 'ember_handlebars',
    label: 'Handlebars Templates',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Uses Handlebars as its declarative templating engine.',
  },

  // Solid children
  {
    id: 'solid_signals',
    label: 'Signals Reactivity',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Tracks dependencies at fine-grained level for precise updates.',
  },
  {
    id: 'solid_jsx',
    label: 'JSX with Real DOM',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Renders JSX directly to the real DOM with no diffing overhead.',
  },
]

export const links = [
  { source: 'root', target: 'react' },
  { source: 'root', target: 'vue' },
  { source: 'root', target: 'angular' },
  { source: 'root', target: 'svelte' },
  { source: 'root', target: 'ember' },
  { source: 'root', target: 'solid' },

  { source: 'react', target: 'react_virtual_dom' },
  { source: 'react', target: 'react_jsx_hooks' },

  { source: 'vue', target: 'vue_sfc' },
  { source: 'vue', target: 'vue_reactivity' },

  { source: 'angular', target: 'angular_di' },
  { source: 'angular', target: 'angular_aot' },

  { source: 'svelte', target: 'svelte_compile' },
  { source: 'svelte', target: 'svelte_scoped_styles' },

  { source: 'ember', target: 'ember_cli' },
  { source: 'ember', target: 'ember_handlebars' },

  { source: 'solid', target: 'solid_signals' },
  { source: 'solid', target: 'solid_jsx' },
]
