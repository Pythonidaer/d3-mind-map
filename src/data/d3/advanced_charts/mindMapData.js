import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'D3.js\nAdvanced Techniques',
    shape: 'roundRect',
    color: 'root',
    definition: 'More complex patterns, layouts, and interactive techniques supported by D3 for sophisticated visualizations.',
  },

  {
    id: 'maps',
    label: 'Geographic\nVisualizations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Render projections, topologies, and overlays using d3-geo and topojson for mapping tasks.',
  },
  {
    id: 'geojson_topojson',
    label: 'GeoJSON/\nTopoJSON Support',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'maps',
    definition: 'D3 parses and visualizes geographic boundary data using geoPath and projections.',
  },
  {
    id: 'projections',
    label: 'Map\nProjections',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'maps',
    definition: 'Transform longitude/latitude into 2D space with projections like Mercator, Albers, and Orthographic.',
  },

  {
    id: 'treemaps',
    label: 'Treemap Layouts',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use hierarchical data to compute and render nested rectangles sized by value.',
  },
  {
    id: 'hierarchy_data',
    label: 'Hierarchical\nData Structure',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'treemaps',
    definition: 'Use d3.hierarchy() to convert nested JSON into a node tree with summed values.',
  },
  {
    id: 'rect_generation',
    label: 'Treemap\nRectangles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'treemaps',
    definition: 'Use d3.treemap() to compute dimensions and positions for nested rectangles.',
  },

  {
    id: 'networks',
    label: 'Network\nDiagrams',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Render nodes and links dynamically using d3-force and SVG layout patterns.',
  },
  {
    id: 'simulation_forces',
    label: 'Force\nSimulation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'networks',
    definition: 'Configure repulsion, link distance, centering, and collision forces with d3-force.',
  },
  {
    id: 'drag_behavior',
    label: 'Draggable\nNodes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'networks',
    definition: 'Enable interaction by attaching d3.drag() to update node positions in real time.',
  },

  {
    id: 'radial_hierarchy',
    label: 'Radial &\nCluster Layouts',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use d3.tree() and d3.cluster() to lay out hierarchical data in circular or compact formats.',
  },
  {
    id: 'polar_coords',
    label: 'Polar\nConversion',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'radial_hierarchy',
    definition: 'Transform Cartesian node positions into angles/radii for radial layouts.',
  },

  {
    id: 'interactivity',
    label: 'Transitions &\nInteractivity',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Enhance visual storytelling with animations and user-driven exploration.',
  },
  {
    id: 'hover_events',
    label: 'Mouse &\nHover Events',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactivity',
    definition: 'Use .on() to handle tooltip reveals, highlighting, filtering, and dynamic updates.',
  },
  {
    id: 'transitions',
    label: 'Smooth\nTransitions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactivity',
    definition: 'Use d3.transition() to interpolate changes in DOM elements over time.',
  },

  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Missteps that complicate or degrade performance of advanced D3 visualizations.',
  },
  {
    id: 'too_many_elements',
    label: 'Overloading the\nDOM',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Rendering thousands of SVG nodes leads to poor performance. Use Canvas or simplify.',
  },
  {
    id: 'complex_code',
    label: 'Tangled\nCode Structure',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Mixing layout, interactivity, and styling in one function reduces maintainability.',
  },
];

export const links = [
  { source: 'root', target: 'maps' },
  { source: 'maps', target: 'geojson_topojson' },
  { source: 'maps', target: 'projections' },

  { source: 'root', target: 'treemaps' },
  { source: 'treemaps', target: 'hierarchy_data' },
  { source: 'treemaps', target: 'rect_generation' },

  { source: 'root', target: 'networks' },
  { source: 'networks', target: 'simulation_forces' },
  { source: 'networks', target: 'drag_behavior' },

  { source: 'root', target: 'radial_hierarchy' },
  { source: 'radial_hierarchy', target: 'polar_coords' },

  { source: 'root', target: 'interactivity' },
  { source: 'interactivity', target: 'hover_events' },
  { source: 'interactivity', target: 'transitions' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'too_many_elements' },
  { source: 'anti_patterns', target: 'complex_code' },
];
