import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'D3.js\nBest Practices',
    shape: 'roundRect',
    color: 'root',
    definition: 'Guidelines for writing efficient, maintainable, and user-friendly D3 visualizations.',
  },

  {
    id: 'structure',
    label: 'Code\nStructure',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Organize rendering, layout, and interaction logic into clean, reusable modules.',
  },
  {
    id: 'separation_of_concerns',
    label: 'Separate Logic\n& Rendering',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'structure',
    definition: 'Split data processing, DOM manipulation, and event handling into distinct functions.',
  },
  {
    id: 'use_functions',
    label: 'Use\nHelper Functions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'structure',
    definition: 'Extract scales, axes, and drawing logic into parameterized functions for reuse.',
  },

  {
    id: 'performance',
    label: 'Performance',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Avoid rendering bottlenecks and minimize redraw costs for complex datasets.',
  },
  {
    id: 'avoid_redundant_selects',
    label: 'Avoid Redundant\nSelections',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'performance',
    definition: 'Chain D3 calls and reuse selections instead of querying the DOM repeatedly.',
  },
  {
    id: 'limit_elements',
    label: 'Limit SVG\nElements',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'performance',
    definition: 'Reduce element count for large datasets or switch to Canvas/WebGL.',
  },

  {
    id: 'interactivity',
    label: 'Interactivity\nDesign',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Design interactions that enhance—not overwhelm—user experience.',
  },
  {
    id: 'event_delegation',
    label: 'Event\nDelegation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactivity',
    definition: 'Use a parent container to handle events when possible, reducing per-element listeners.',
  },
  {
    id: 'accessible_tooltips',
    label: 'Accessible\nTooltips',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactivity',
    definition: 'Ensure keyboard/screen reader access, position tooltips smartly, and avoid occlusion.',
  },

  {
    id: 'responsiveness',
    label: 'Responsiveness',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Make charts adaptable to different screen sizes and containers.',
  },
  {
    id: 'viewbox_scaling',
    label: 'SVG\nViewBox',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'responsiveness',
    definition: 'Use viewBox + preserveAspectRatio for scalable, responsive SVG containers.',
  },
  {
    id: 'resize_handler',
    label: 'Window\nResize Handling',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'responsiveness',
    definition: 'Redraw or resize chart elements based on container dimensions or window events.',
  },

  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common pitfalls that lead to slow, brittle, or confusing D3 codebases.',
  },
  {
    id: 'mixed_versions',
    label: 'Mixing D3\nVersions',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Avoid loading mismatched modules (e.g., d3-array@1 with d3-scale@4). Use consistent versions.',
  },
  {
    id: 'direct_dom_manip',
    label: 'Manual DOM\nManipulation',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Don’t use native DOM API (e.g., document.createElement) alongside D3 without reason.',
  },
];

export const links = [
  { source: 'root', target: 'structure' },
  { source: 'structure', target: 'separation_of_concerns' },
  { source: 'structure', target: 'use_functions' },

  { source: 'root', target: 'performance' },
  { source: 'performance', target: 'avoid_redundant_selects' },
  { source: 'performance', target: 'limit_elements' },

  { source: 'root', target: 'interactivity' },
  { source: 'interactivity', target: 'event_delegation' },
  { source: 'interactivity', target: 'accessible_tooltips' },

  { source: 'root', target: 'responsiveness' },
  { source: 'responsiveness', target: 'viewbox_scaling' },
  { source: 'responsiveness', target: 'resize_handler' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'mixed_versions' },
  { source: 'anti_patterns', target: 'direct_dom_manip' },
];
