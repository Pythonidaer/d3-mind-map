import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Data\nVisualization',
    shape: 'roundRect',
    color: 'root',
    definition: 'Graphical representations of information that help users interpret trends, relationships, and insights in an intuitive format.',
  },

  // Level 1
  {
    id: 'chart_types',
    label: 'Chart\nTypes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Foundational formats like bar, line, pie, and area charts for summarizing data patterns.',
  },
  {
    id: 'interactive_graphs',
    label: 'Interactive\nGraphs',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Dynamic visualizations that respond to user input, such as hover, zoom, or filter actions.',
  },
  {
    id: 'timelines_and_maps',
    label: 'Timelines and\nMaps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Visuals showing chronological or geographic information using sliders or spatial markers.',
  },
  {
    id: 'infographics_and_dashboards',
    label: 'Infographics and\nDashboards',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Multi-element data displays that combine visuals, labels, and metrics for quick comprehension.',
  },
  {
    id: 'data_styling',
    label: 'Data\nStyling',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use of color, typography, and layout to enhance data legibility and clarity.',
  },
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Anti-patterns such as misleading scales, cluttered visuals, or poor labeling that reduce understanding.',
  },

  // Chart Types
  {
    id: 'bar_charts',
    label: 'Bar\nCharts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'chart_types',
    definition: 'Used to compare values across categories using horizontal or vertical bars.',
  },
  {
    id: 'line_charts',
    label: 'Line\nCharts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'chart_types',
    definition: 'Displays trends over time by connecting data points with a continuous line.',
  },
  {
    id: 'pie_charts',
    label: 'Pie\nCharts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'chart_types',
    definition: 'Represents part-to-whole relationships with slices of a circular graph.',
  },
  {
    id: 'area_charts',
    label: 'Area\nCharts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'chart_types',
    definition: 'Similar to line charts but filled with color beneath the line to emphasize volume.',
  },

  // Interactive Graphs
  {
    id: 'hover_tooltips',
    label: 'Hover\nTooltips',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactive_graphs',
    definition: 'Displays data details when hovering over a chart element.',
  },
  {
    id: 'zoom_and_pan',
    label: 'Zoom and\nPan',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactive_graphs',
    definition: 'Allows users to explore different data ranges dynamically.',
  },
  {
    id: 'filter_controls',
    label: 'Filter\nControls',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactive_graphs',
    definition: 'Dropdowns, sliders, or toggles that adjust what data is shown.',
  },

  // Timelines and Maps
  {
    id: 'data_timelines',
    label: 'Data\nTimelines',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'timelines_and_maps',
    definition: 'Chronological views that track changes or events over time.',
  },
  {
    id: 'geographic_maps',
    label: 'Geographic\nMaps',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'timelines_and_maps',
    definition: 'Plots spatial data using coordinates, color scales, and location markers.',
  },

  // Infographics and Dashboards
  {
    id: 'kpi_panels',
    label: 'KPI\nPanels',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'infographics_and_dashboards',
    definition: 'Highlight key performance metrics with emphasis on numeric values and context.',
  },
  {
    id: 'data_cards',
    label: 'Data\nCards',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'infographics_and_dashboards',
    definition: 'Small UI components combining icons, values, and short explanations.',
  },
  {
    id: 'composite_dashboards',
    label: 'Composite\nDashboards',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'infographics_and_dashboards',
    definition: 'Combine charts, filters, KPIs, and legends into a single visual layout.',
  },

  // Data Styling
  {
    id: 'color_encoding',
    label: 'Color\nEncoding',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'data_styling',
    definition: 'Uses hue and saturation to represent different values or groupings.',
  },
  {
    id: 'axis_labels',
    label: 'Axis\nLabels',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'data_styling',
    definition: 'Descriptive titles and ticks that clarify what the chart axes represent.',
  },
  {
    id: 'data_legends',
    label: 'Data\nLegends',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'data_styling',
    definition: 'Explains visual encodings and helps decode data meaning.',
  },

  // Cons
  {
    id: 'misleading_scales',
    label: 'Misleading\nScales',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Truncated or non-zero y-axes that exaggerate small changes.',
  },
  {
    id: 'excessive_labels',
    label: 'Excessive\nLabels',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Overcrowded data labels that reduce legibility and clarity.',
  },
  {
    id: 'unlabeled_axes',
    label: 'Unlabeled\nAxes',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Omitting titles, units, or context, making the chart hard to interpret.',
  },
  {
    id: 'visual_noise',
    label: 'Visual\nNoise',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Too many gradients, shadows, or effects that distract from the data itself.',
  }
];

export const links = [
  { source: 'root', target: 'chart_types' },
  { source: 'root', target: 'interactive_graphs' },
  { source: 'root', target: 'timelines_and_maps' },
  { source: 'root', target: 'infographics_and_dashboards' },
  { source: 'root', target: 'data_styling' },
  { source: 'root', target: 'cons' },

  { source: 'chart_types', target: 'bar_charts' },
  { source: 'chart_types', target: 'line_charts' },
  { source: 'chart_types', target: 'pie_charts' },
  { source: 'chart_types', target: 'area_charts' },

  { source: 'interactive_graphs', target: 'hover_tooltips' },
  { source: 'interactive_graphs', target: 'zoom_and_pan' },
  { source: 'interactive_graphs', target: 'filter_controls' },

  { source: 'timelines_and_maps', target: 'data_timelines' },
  { source: 'timelines_and_maps', target: 'geographic_maps' },

  { source: 'infographics_and_dashboards', target: 'kpi_panels' },
  { source: 'infographics_and_dashboards', target: 'data_cards' },
  { source: 'infographics_and_dashboards', target: 'composite_dashboards' },

  { source: 'data_styling', target: 'color_encoding' },
  { source: 'data_styling', target: 'axis_labels' },
  { source: 'data_styling', target: 'data_legends' },

  { source: 'cons', target: 'misleading_scales' },
  { source: 'cons', target: 'excessive_labels' },
  { source: 'cons', target: 'unlabeled_axes' },
  { source: 'cons', target: 'visual_noise' }
];
