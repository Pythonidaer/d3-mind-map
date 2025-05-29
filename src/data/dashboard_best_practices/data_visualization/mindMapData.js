import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Data Visualization\nin Dashboards',
    definition: 'Design principles and patterns for presenting job data clearly and meaningfully in dashboards.',
    shape: 'roundRect',
    color: 'root',
  },

  // Positive Level 1
  {
    id: 'chart_types',
    label: 'Chart\nTypes',
    definition: 'Different chart formats to represent comparisons, trends, distributions, and relationships.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'design_principles',
    label: 'Design\nPrinciples',
    definition: 'Guidelines for effective visual communication of aggregated job description data.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'color_usage',
    label: 'Meaningful\nColor Usage',
    definition: 'Use color with purpose to convey status, grouping, or importance, not decoration.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'accessibility',
    label: 'Accessibility\nin Charts',
    definition: 'Ensure visuals are readable and usable for users with visual or cognitive impairments.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Negative Level 1
  {
    id: 'visual_anti_patterns',
    label: 'Anti-Patterns\nin Visualization',
    definition: 'Common visualization mistakes that harm comprehension or mislead users.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Children of Chart Types
  {
    id: 'bar_chart',
    label: 'Bar Chart:\nCategorical Data',
    definition: 'Great for comparing job metrics across categories (e.g., sources, titles).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'line_chart',
    label: 'Line Chart:\nTime Trends',
    definition: 'Effective for showing changes in applications or hiring velocity over time.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'pie_chart',
    label: 'Pie Chart:\nPercent Breakdown',
    definition: 'Use for part-to-whole visuals like job source percentages. Avoid overuse.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'heatmap',
    label: 'Heatmap:\nKeyword Clusters',
    definition: 'Visualize frequency or intensity across two dimensions (e.g., skills vs. jobs).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'scatter_plot',
    label: 'Scatter Plot:\nVariable Relations',
    definition: 'Explore correlations (e.g., salary vs. experience). Add trend lines for clarity.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Design Principles
  {
    id: 'info_density',
    label: 'Clarity Over\nDensity',
    definition: 'Avoid overwhelming the user. Prioritize simplicity, whitespace, and legibility.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'data_ink_ratio',
    label: 'Maximize\nData-Ink Ratio',
    definition: 'Minimize non-data elements. Focus ink on conveying real values.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'progressive_disclosure',
    label: 'Progressive\nDisclosure',
    definition: 'Start with summaries, then allow drill-down for detailed exploration.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Grandchildren of Design Principles
  {
    id: 'info_hierarchy',
    label: 'Information\nHierarchy',
    definition: 'Place primary KPIs prominently. Use scale and contrast to guide attention.',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'widget_layout',
    label: 'Widget\nArrangement',
    definition: 'Arrange cards logically (e.g., summary top-left, filters top-right).',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'visual_priority',
    label: 'Visual\nEmphasis',
    definition: 'Use bold typography or highlight color to emphasize priority data.',
    shape: 'diamond',
    color: 'nodePositive3',
  },

  // Children of Anti-Patterns
  {
    id: '3d_effects',
    label: 'Excessive\n3D Effects',
    definition: 'Distort values and hinder accurate comparison. Avoid them.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'inconsistent_styles',
    label: 'Inconsistent\nVisual Language',
    definition: 'Mixing styles across charts confuses the user and breaks flow.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'axis_misuse',
    label: 'Misleading\nAxes',
    definition: 'Truncated axes or irregular intervals can distort meaning.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'bad_color_schemes',
    label: 'Confusing\nColor Schemes',
    definition: 'Overuse of colors or poor contrast hinders interpretation.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'info_overload',
    label: 'Data\nOverload',
    definition: 'Too many chart elements, labels, or data points distract the user.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Grandchildren of Anti-Patterns
  {
    id: 'truncated_labels',
    label: 'Truncated\nLabels',
    definition: 'When text is cut off or overlapping, it harms understanding.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'unreadable_legends',
    label: 'Unreadable\nLegends',
    definition: 'Legends that are small, cut off, or unclear reduce chart value.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'mixed_units',
    label: 'Inconsistent\nUnits',
    definition: 'Combining dollars, percentages, and counts on one axis misleads users.',
    shape: 'diamond',
    color: 'nodeNegative3',
  }
];

export const links = [
  { source: 'root', target: 'chart_types' },
  { source: 'root', target: 'design_principles' },
  { source: 'root', target: 'color_usage' },
  { source: 'root', target: 'accessibility' },
  { source: 'root', target: 'visual_anti_patterns' },

  { source: 'chart_types', target: 'bar_chart' },
  { source: 'chart_types', target: 'line_chart' },
  { source: 'chart_types', target: 'pie_chart' },
  { source: 'chart_types', target: 'heatmap' },
  { source: 'chart_types', target: 'scatter_plot' },

  { source: 'design_principles', target: 'info_density' },
  { source: 'design_principles', target: 'data_ink_ratio' },
  { source: 'design_principles', target: 'progressive_disclosure' },
  { source: 'progressive_disclosure', target: 'info_hierarchy' },
  { source: 'progressive_disclosure', target: 'widget_layout' },
  { source: 'progressive_disclosure', target: 'visual_priority' },

  { source: 'visual_anti_patterns', target: '3d_effects' },
  { source: 'visual_anti_patterns', target: 'inconsistent_styles' },
  { source: 'visual_anti_patterns', target: 'axis_misuse' },
  { source: 'visual_anti_patterns', target: 'bad_color_schemes' },
  { source: 'visual_anti_patterns', target: 'info_overload' },
  { source: 'info_overload', target: 'truncated_labels' },
  { source: 'info_overload', target: 'unreadable_legends' },
  { source: 'axis_misuse', target: 'mixed_units' }
];
