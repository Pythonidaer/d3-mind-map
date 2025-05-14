import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'D3.js\nCore Concepts',
    shape: 'roundRect',
    color: 'root',
    definition: 'Fundamental principles and technical patterns that define how D3.js works at a low level.',
  },

  {
    id: 'data_binding',
    label: 'Data Binding',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The process of attaching data to DOM elements, forming the foundation of D3’s declarative rendering.',
  },
  {
    id: 'enter_update_exit',
    label: 'Enter-Update-Exit\nPattern',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'data_binding',
    definition: 'Manages how new, existing, and outdated elements are handled during data changes.',
  },
  {
    id: 'key_function',
    label: 'Key Function',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'data_binding',
    definition: 'Used to track elements between data updates and ensure stable joins using identity rather than index.',
  },

  {
    id: 'selections',
    label: 'Selections',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'D3’s method for querying and operating on DOM elements using CSS-like syntax.',
  },
  {
    id: 'chaining',
    label: 'Method Chaining',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'selections',
    definition: 'Enables fluent, concise transformations on selections by chaining multiple operators.',
  },
  {
    id: 'modification',
    label: 'DOM\nModification',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'selections',
    definition: 'Operators like .attr(), .style(), and .text() modify elements based on bound data.',
  },

  {
    id: 'scales',
    label: 'Scales',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Functions that map data values to visual values (like pixels or colors).',
  },
  {
    id: 'linear_log',
    label: 'Linear / Log\nScales',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'scales',
    definition: 'Translate numerical data into ranges like position or opacity, using linear, log, or other scale types.',
  },
  {
    id: 'ordinal_band',
    label: 'Ordinal / Band\nScales',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'scales',
    definition: 'Used for categorical data — e.g., placing bars along a discrete axis.',
  },

  {
    id: 'transitions',
    label: 'Transitions',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Animate visual changes smoothly by interpolating attributes and styles over time.',
  },
  {
    id: 'timing_control',
    label: 'Duration &\nDelays',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'transitions',
    definition: 'Transitions can be configured to occur after a delay or last a specific duration.',
  },
  {
    id: 'easing',
    label: 'Easing\nFunctions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'transitions',
    definition: 'Control the acceleration pattern of transitions (e.g., easeLinear, easeBounce).',
  },

  {
    id: 'modularity',
    label: 'Modular Architecture',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Since v4, D3 is split into standalone packages, so you only import what you need.',
  },
  {
    id: 'packages',
    label: 'Key Modules',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'modularity',
    definition: 'Examples include d3-selection, d3-scale, d3-shape, d3-array, d3-geo, and d3-transition.',
  },

  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common mistakes or misunderstandings of D3 core patterns.',
  },
  {
    id: 'ignoring_exit',
    label: 'Ignoring Exit\nSelection',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Not removing obsolete DOM elements leads to visual artifacts or memory leaks.',
  },
  {
    id: 'no_key_function',
    label: 'Skipping Key\nFunction',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Failing to use keys with .data() causes incorrect matching between old and new elements.',
  },
];

export const links = [
  { source: 'root', target: 'data_binding' },
  { source: 'data_binding', target: 'enter_update_exit' },
  { source: 'data_binding', target: 'key_function' },

  { source: 'root', target: 'selections' },
  { source: 'selections', target: 'chaining' },
  { source: 'selections', target: 'modification' },

  { source: 'root', target: 'scales' },
  { source: 'scales', target: 'linear_log' },
  { source: 'scales', target: 'ordinal_band' },

  { source: 'root', target: 'transitions' },
  { source: 'transitions', target: 'timing_control' },
  { source: 'transitions', target: 'easing' },

  { source: 'root', target: 'modularity' },
  { source: 'modularity', target: 'packages' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'ignoring_exit' },
  { source: 'anti_patterns', target: 'no_key_function' },
];
