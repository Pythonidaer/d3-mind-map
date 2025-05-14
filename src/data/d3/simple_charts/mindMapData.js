import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Building\nSimple Charts',
    shape: 'roundRect',
    color: 'root',
    definition: 'Step-by-step process for constructing basic visualizations like bar, line, pie, and scatter charts using D3.',
  },

  {
    id: 'setup',
    label: 'Chart Setup',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Every chart begins with defining the SVG canvas, dimensions, and margins.',
  },
  {
    id: 'svg_margins',
    label: 'SVG &\nMargins',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'setup',
    definition: 'Use a margin convention to reserve space for axes and labels.',
  },
  {
    id: 'data_loading',
    label: 'Load &\nProcess Data',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'setup',
    definition: 'Import CSV/JSON or inline arrays; clean and convert values for scale compatibility.',
  },

  {
    id: 'scales_axes',
    label: 'Scales & Axes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Map data values to visual dimensions and construct reference guides.',
  },
  {
    id: 'x_y_scales',
    label: 'Create X/Y\nScales',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'scales_axes',
    definition: 'Use d3.scaleLinear, scaleTime, or scaleBand to convert data ranges to pixel values.',
  },
  {
    id: 'axes_generation',
    label: 'Generate\nAxes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'scales_axes',
    definition: 'Create bottom and left axes with d3.axisBottom/Left; apply to groups inside SVG.',
  },

  {
    id: 'bar_chart',
    label: 'Bar Chart\nSteps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Step-by-step construction of a categorical bar chart with scaleBand and rects.',
  },
  {
    id: 'bars',
    label: 'Append\nBars',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'bar_chart',
    definition: 'Bind data, use enter() to append rects with x, y, width, and height attributes.',
  },

  {
    id: 'line_chart',
    label: 'Line Chart\nSteps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use d3.line to plot continuous or time-based data as a path.',
  },
  {
    id: 'generate_path',
    label: 'Generate Line\nPath',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'line_chart',
    definition: 'Use d3.line() with accessors to compute d attribute for SVG path.',
  },
  {
    id: 'curve_types',
    label: 'Add\nCurve Type',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'line_chart',
    definition: 'Use d3.curveLinear, curveBasis, or others to modify line smoothing.',
  },

  {
    id: 'pie_chart',
    label: 'Pie Chart\nSteps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use d3.pie and d3.arc to convert values into angular segments.',
  },
  {
    id: 'generate_arcs',
    label: 'Generate Pie\nSlices',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pie_chart',
    definition: 'Apply d3.arc() to create path elements from pie layout data.',
  },

  {
    id: 'scatter_plot',
    label: 'Scatter Plot\nSteps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Position data points using x/y coordinates and scaleLinear.',
  },
  {
    id: 'plot_points',
    label: 'Plot Data\nPoints',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'scatter_plot',
    definition: 'Use circles positioned via cx/cy from scaled data values.',
  },

  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common mistakes when constructing basic charts in D3.',
  },
  {
    id: 'no_margins',
    label: 'Ignoring\nMargins',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Skipping margin convention leads to clipped or misaligned visuals.',
  },
  {
    id: 'poor_labels',
    label: 'Missing or\nUnclear Labels',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Forgetting to add axis labels or chart titles reduces interpretability.',
  },
];

export const links = [
  { source: 'root', target: 'setup' },
  { source: 'setup', target: 'svg_margins' },
  { source: 'setup', target: 'data_loading' },

  { source: 'root', target: 'scales_axes' },
  { source: 'scales_axes', target: 'x_y_scales' },
  { source: 'scales_axes', target: 'axes_generation' },

  { source: 'root', target: 'bar_chart' },
  { source: 'bar_chart', target: 'bars' },

  { source: 'root', target: 'line_chart' },
  { source: 'line_chart', target: 'generate_path' },
  { source: 'line_chart', target: 'curve_types' },

  { source: 'root', target: 'pie_chart' },
  { source: 'pie_chart', target: 'generate_arcs' },

  { source: 'root', target: 'scatter_plot' },
  { source: 'scatter_plot', target: 'plot_points' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'no_margins' },
  { source: 'anti_patterns', target: 'poor_labels' },
];
