import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Dashboard\nBest Practices',
    definition: 'Cross-cutting best practices to ensure your dashboard is usable, performant, maintainable, and user-focused.',
    shape: 'roundRect',
    color: 'root',
  },

  // Positive Level 1
  {
    id: 'ux_principles',
    label: 'UX Design\nPrinciples',
    definition: 'Ensure clarity, consistency, and hierarchy across all dashboard views and components.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'data_visualization',
    label: 'Effective Data\nVisualization',
    definition: 'Use clear, accurate, and accessible visuals to communicate insights meaningfully.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'technical_foundations',
    label: 'Technical\nFoundations',
    definition: 'Build with scalable, fast, and well-tested technologies that support MVP and beyond.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'resilience_feedback',
    label: 'Resilience &\nFeedback',
    definition: 'Design for reliability, error handling, and tight feedback loops with users.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Negative Level 1
  {
    id: 'common_anti_patterns',
    label: 'Common\nAnti-Patterns',
    definition: 'Widespread design and engineering habits that reduce dashboard quality.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Children of UX Design
  {
    id: 'visual_hierarchy',
    label: 'Visual\nHierarchy',
    definition: 'Make key metrics immediately visible using layout, color, and size.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'mobile_responsiveness',
    label: 'Mobile-First\nResponsiveness',
    definition: 'Optimize layout and interaction for smaller screens from the start.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'progressive_disclosure',
    label: 'Progressive\nDisclosure',
    definition: 'Start with summaries, and allow deeper drill-downs on user demand.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Data Visualization
  {
    id: 'correct_chart_types',
    label: 'Correct\nChart Types',
    definition: 'Use the right visual structure for comparisons, trends, correlations, or proportions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'accessibility_compliance',
    label: 'Accessibility:\nColors & Text',
    definition: 'Use contrast, alt text, and readable labels for inclusive visualization.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Technical Foundations
  {
    id: 'modular_components',
    label: 'Modular\nComponent Design',
    definition: 'Break UI into reusable, independently testable pieces.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'performance_budget',
    label: 'Performance\nOptimization',
    definition: 'Use lazy loading, debounced input, and efficient re-renders.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'responsive_layout',
    label: 'Responsive\nLayout Systems',
    definition: 'Use grid and flexbox systems to adapt layout dynamically.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Resilience & Feedback
  {
    id: 'error_handling',
    label: 'Clear\nError Messaging',
    definition: 'Show user-friendly messages and allow recovery from upload or form failures.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'user_feedback_channels',
    label: 'In-App\nFeedback Mechanisms',
    definition: 'Let users report issues, give ratings, or suggest improvements easily.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'session_monitoring',
    label: 'Session &\nError Monitoring',
    definition: 'Log sessions and exceptions to identify friction or crashes.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Anti-Patterns
  {
    id: 'overstuffed_ui',
    label: 'Overloaded\nInterfaces',
    definition: 'Trying to show too much at once creates cognitive overload.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'uncaught_uploads',
    label: 'Silent Upload\nFailures',
    definition: 'When file uploads fail without feedback, users lose trust.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'misleading_charts',
    label: 'Misleading\nVisualizations',
    definition: 'Wrong chart types, broken scales, or unclear legends confuse users.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'ux_principles' },
  { source: 'root', target: 'data_visualization' },
  { source: 'root', target: 'technical_foundations' },
  { source: 'root', target: 'resilience_feedback' },
  { source: 'root', target: 'common_anti_patterns' },

  { source: 'ux_principles', target: 'visual_hierarchy' },
  { source: 'ux_principles', target: 'mobile_responsiveness' },
  { source: 'ux_principles', target: 'progressive_disclosure' },

  { source: 'data_visualization', target: 'correct_chart_types' },
  { source: 'data_visualization', target: 'accessibility_compliance' },

  { source: 'technical_foundations', target: 'modular_components' },
  { source: 'technical_foundations', target: 'performance_budget' },
  { source: 'technical_foundations', target: 'responsive_layout' },

  { source: 'resilience_feedback', target: 'error_handling' },
  { source: 'resilience_feedback', target: 'user_feedback_channels' },
  { source: 'resilience_feedback', target: 'session_monitoring' },

  { source: 'common_anti_patterns', target: 'overstuffed_ui' },
  { source: 'common_anti_patterns', target: 'uncaught_uploads' },
  { source: 'common_anti_patterns', target: 'misleading_charts' }
];
