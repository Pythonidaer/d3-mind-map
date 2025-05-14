import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'D3.js\nOverview',
    shape: 'roundRect',
    color: 'root',
    definition: 'An introduction to D3.js including its purpose, origin, philosophy, and real-world applications.',
  },

  {
    id: 'what_is_d3',
    label: 'What is D3.js?',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'D3 (Data-Driven Documents) is a JavaScript library for binding data to DOM elements to create interactive visualizations.',
  },
  {
    id: 'web_standards',
    label: 'Built on\nWeb Standards',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'what_is_d3',
    definition: 'Uses HTML, SVG, CSS, and JavaScript natively without proprietary formats or plugins.',
  },
  {
    id: 'data_binding',
    label: 'Data-Driven\nDOM Manipulation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'what_is_d3',
    definition: 'Links data directly to elements in the DOM using .data() and update/enter/exit selections.',
  },

  {
    id: 'history',
    label: 'History & Evolution',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Originally created by Mike Bostock and others at Stanford as a successor to Protovis.',
  },
  {
    id: 'key_versions',
    label: 'Key\nVersions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'history',
    definition: 'Highlights major versions (2.0, 3.0, 4.0, 7.9+) and architectural changes like modularization.',
  },

  {
    id: 'purpose',
    label: 'Purpose & Design Goals',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Provides low-level primitives for creating fully customized, data-driven visualizations.',
  },
  {
    id: 'not_a_chart_library',
    label: 'Not a\nChart Library',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'purpose',
    definition: 'Unlike charting libraries, D3 provides building blocks, not prebuilt chart types.',
  },
  {
    id: 'custom_control',
    label: 'Full\nControl',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'purpose',
    definition: 'Every aspect of the visualization can be dynamically controlled via data.',
  },

  {
    id: 'target_audience',
    label: 'Target Audience',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Designed for developers, analysts, data journalists, and researchers needing rich, interactive visualizations.',
  },
  {
    id: 'required_knowledge',
    label: 'Requires Web\nDevelopment Skills',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'target_audience',
    definition: 'Users should understand HTML, CSS, JavaScript, and SVG to use D3 effectively.',
  },

  {
    id: 'use_cases',
    label: 'Use Cases',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Widely used in journalism, business intelligence, academia, software dev, and scientific research.',
  },
  {
    id: 'examples',
    label: 'Examples &\nImpact',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'use_cases',
    definition: 'Used by The New York Times, The Guardian, Netflix, researchers, and dashboard developers.',
  },

  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Challenges or downsides associated with using D3.js.',
  },
  {
    id: 'steep_learning_curve',
    label: 'Steep\nLearning Curve',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Requires significant knowledge of JavaScript, DOM, and SVG; intimidating for beginners.',
  },
  {
    id: 'verbose_code',
    label: 'Verbose &\nBoilerplate',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Compared to chart libraries, creating visualizations with D3 can be more code-intensive.',
  },

  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common mistakes and misuse scenarios when working with D3.js.',
  },
  {
    id: 'forcing_chart_types',
    label: 'Treating D3 as\nChart Library',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Using D3 to reimplement standard charts without customization misses its strengths.',
  },
  {
    id: 'overuse_of_transitions',
    label: 'Overusing\nAnimations',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Excessive or unnecessary transitions can distract rather than clarify.',
  },
];

export const links = [
  { source: 'root', target: 'what_is_d3' },
  { source: 'what_is_d3', target: 'web_standards' },
  { source: 'what_is_d3', target: 'data_binding' },

  { source: 'root', target: 'history' },
  { source: 'history', target: 'key_versions' },

  { source: 'root', target: 'purpose' },
  { source: 'purpose', target: 'not_a_chart_library' },
  { source: 'purpose', target: 'custom_control' },

  { source: 'root', target: 'target_audience' },
  { source: 'target_audience', target: 'required_knowledge' },

  { source: 'root', target: 'use_cases' },
  { source: 'use_cases', target: 'examples' },

  { source: 'root', target: 'cons' },
  { source: 'cons', target: 'steep_learning_curve' },
  { source: 'cons', target: 'verbose_code' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'forcing_chart_types' },
  { source: 'anti_patterns', target: 'overuse_of_transitions' },
];
