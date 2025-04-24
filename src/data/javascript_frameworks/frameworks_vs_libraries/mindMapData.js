import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Frameworks vs. Libraries',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Key differences in control, scope, architecture, and purpose between JavaScript frameworks and libraries.',
  },

  // Core differences
  {
    id: 'inversion_control',
    label: 'Inversion\nof Control',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Frameworks call your code (e.g., lifecycle methods); libraries are manually invoked by your code.',
  },
  {
    id: 'scope',
    label: 'Scope\n& Size',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Frameworks provide a complete development structure; libraries are focused tools for narrow tasks.',
  },
  {
    id: 'architecture',
    label: 'Architecture\nEnforcement',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Frameworks impose app structure and design rules; libraries leave architecture decisions to the developer.',
  },
  {
    id: 'purpose',
    label: 'Primary\nUse Case',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Frameworks help build full applications; libraries help solve specific problems or provide enhancements.',
  },

  // Framework examples (nodePositive1 — ellipse)
  {
    id: 'framework_examples',
    label: 'Popular\nFrameworks',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Examples: Angular, Vue, React, SvelteKit, Next.js, Nuxt.js, Ember.js, SolidJS, Qwik, Backbone.js. These manage routing, state, build process, and lifecycle hooks.',
  },

  // Library examples (nodePositive1 — ellipse)
  {
    id: 'library_examples',
    label: 'Popular\nLibraries',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Examples: Lodash, Axios, Chart.js, Moment.js, D3.js, jQuery, Zod, Immer, Day.js, RxJS. These offer functionality like API calls, utilities, animation, or state handling without full app structure.',
  },

  // Anti-patterns / confusions
  {
    id: 'framework_wraps_libs',
    label: 'Framework\nWraps Libraries',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Many frameworks internally use libraries (e.g., Vue uses Rollup/Vite, Angular uses RxJS), blurring the lines between them.',
  },
  {
    id: 'overuse_libraries',
    label: 'Library\nOveruse',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Excessive library imports lead to large bundle sizes, duplicated logic, and conflicting versions.',
  },

  // Negative node elaborations
  {
    id: 'conflicting_versions',
    label: 'Version\nConflicts',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Different libraries may depend on incompatible versions of the same package, causing integration errors.',
  },
  {
    id: 'bundle_bloat',
    label: 'Bundle\nBloat',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Unneeded or overlapping libraries add to overall JS payload and increase load time.',
  },
]

export const links = [
  { source: 'root', target: 'inversion_control' },
  { source: 'root', target: 'scope' },
  { source: 'root', target: 'architecture' },
  { source: 'root', target: 'purpose' },

  { source: 'root', target: 'framework_examples' },
  { source: 'root', target: 'library_examples' },

  { source: 'root', target: 'framework_wraps_libs' },
  { source: 'root', target: 'overuse_libraries' },

  { source: 'overuse_libraries', target: 'bundle_bloat' },
  { source: 'overuse_libraries', target: 'conflicting_versions' },
]
