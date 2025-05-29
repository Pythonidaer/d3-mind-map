import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Foundational UX\nPrinciples',
    definition: 'Core user experience principles to ensure dashboards are intuitive, useful, and usable from first interaction.',
    shape: 'roundRect',
    color: 'root',
  },

  // Positive Level 1
  {
    id: 'info_hierarchy',
    label: 'Information\nHierarchy',
    definition: 'Prioritize key metrics and arrange content so the most important data is seen first.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'clarity_vs_density',
    label: 'Clarity Over\nDensity',
    definition: 'Avoid overwhelming users with too much data at once. Favor breathing room and focus.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'progressive_disclosure',
    label: 'Progressive\nDisclosure',
    definition: 'Reveal additional detail only as needed, keeping interfaces clean while retaining depth.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'consistency',
    label: 'Design\nConsistency',
    definition: 'Ensure UI elements behave and appear uniformly across the dashboard.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Negative Level 1
  {
    id: 'ux_anti_patterns',
    label: 'UX Design\nAnti-Patterns',
    definition: 'Harmful habits that confuse users, increase cognitive load, or reduce trust in the interface.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Children of Information Hierarchy
  {
    id: 'visual_priority',
    label: 'Visual\nPriority',
    definition: 'Use size, color, and position to emphasize primary data and KPIs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'layout_strategies',
    label: 'Layout\nStrategies',
    definition: 'Place important content top-left or central, and group related elements logically.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Clarity Over Density
  {
    id: 'white_space',
    label: 'Whitespace\nand Padding',
    definition: 'Use space intentionally to reduce visual clutter and improve scannability.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'minimal_default_state',
    label: 'Minimal Default\nState',
    definition: 'Limit visible widgets to essentials at load. Let users expand or explore further.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Progressive Disclosure
  {
    id: 'expandable_widgets',
    label: 'Expandable\nWidgets',
    definition: 'Allow users to expand visual summaries into detailed views on demand.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'summary_to_detail',
    label: 'Summary to\nDetail Flow',
    definition: 'Start with high-level KPIs or trends, then offer deep dives through interaction.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Design Consistency
  {
    id: 'style_guide',
    label: 'Dashboard\nStyle Guide',
    definition: 'Maintain uniformity across layout, iconography, typography, and component structure.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'component_behavior',
    label: 'Consistent\nComponent Behavior',
    definition: 'Filters, buttons, and navigation should work the same way throughout.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of UX Anti-Patterns
  {
    id: 'info_overload',
    label: 'Information\nOverload',
    definition: 'Cramming too many metrics or widgets into one screen overwhelms the user.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'inconsistent_ui',
    label: 'Inconsistent\nInteractions',
    definition: 'Changing layouts, labels, or interaction models confuse returning users.',
    shape: 'rect',
    color: 'nodeNegative2',
  },

  // Grandchildren of Anti-Patterns
  {
    id: 'no_focus',
    label: 'No Visual\nFocus',
    definition: 'When everything is the same size or weight, nothing stands out.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'random_layouts',
    label: 'Unstructured\nLayouts',
    definition: 'Poor grouping or unpredictable positioning disrupts comprehension.',
    shape: 'diamond',
    color: 'nodeNegative3',
  }
];

export const links = [
  { source: 'root', target: 'info_hierarchy' },
  { source: 'root', target: 'clarity_vs_density' },
  { source: 'root', target: 'progressive_disclosure' },
  { source: 'root', target: 'consistency' },
  { source: 'root', target: 'ux_anti_patterns' },

  { source: 'info_hierarchy', target: 'visual_priority' },
  { source: 'info_hierarchy', target: 'layout_strategies' },

  { source: 'clarity_vs_density', target: 'white_space' },
  { source: 'clarity_vs_density', target: 'minimal_default_state' },

  { source: 'progressive_disclosure', target: 'expandable_widgets' },
  { source: 'progressive_disclosure', target: 'summary_to_detail' },

  { source: 'consistency', target: 'style_guide' },
  { source: 'consistency', target: 'component_behavior' },

  { source: 'ux_anti_patterns', target: 'info_overload' },
  { source: 'ux_anti_patterns', target: 'inconsistent_ui' },

  { source: 'info_overload', target: 'no_focus' },
  { source: 'inconsistent_ui', target: 'random_layouts' }
];
