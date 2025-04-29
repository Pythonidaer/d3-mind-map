import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Harnessing\nDevTools',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Apply Chrome DevTools across specific workflows like testing, debugging, performance optimization, accessibility, and advanced inspections.',
  },

  // Level 1
  {
    id: 'testing_strategies',
    label: 'Testing\nStrategies',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Use DevTools for functional testing, API validation, and regression flows.',
  },
  {
    id: 'debugging_workflows',
    label: 'Debugging\nWorkflows',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Trace bugs through breakpoints, console outputs, DOM inspection, and call stacks.',
  },
  {
    id: 'performance_optimization',
    label: 'Performance\nOptimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Analyze and fix loading, scripting, rendering, and memory performance issues.',
  },
  {
    id: 'improving_accessibility',
    label: 'Improving\nAccessibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Audit and repair accessibility gaps using DevTools insights and Lighthouse.',
  },
  {
    id: 'fine_tuning_styles',
    label: 'Fine-Tuning\nStyles',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Use Elements and Computed panes to perfect CSS layout, appearance, and responsiveness.',
  },
  {
    id: 'advanced_features',
    label: 'Exploring\nAdvanced Features',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Leverage lesser-known panels like Coverage, Changes, Animations, Sensors, and Experiments.',
  },

  // Level 2 under Testing Strategies
  {
    id: 'dom_and_css_testing',
    label: 'DOM and\nCSS Testing',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Inspect and manipulate DOM structure and CSS for functional or visual testing.',
  },
  {
    id: 'network_api_testing',
    label: 'Network/API\nTesting',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Verify API requests and responses using Network and Console tabs.',
  },
  {
    id: 'regression_testing',
    label: 'Regression\nTesting',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use Recorder and manual inspections to validate UI consistency across builds.',
  },

  // Level 2 under Debugging Workflows
  {
    id: 'javascript_debugging',
    label: 'JavaScript\nDebugging',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Set breakpoints, step through code, and inspect variable scopes in Sources.',
  },
  {
    id: 'dom_mutation_debugging',
    label: 'DOM Mutation\nDebugging',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use DOM breakpoints and event listeners to catch dynamic content updates.',
  },

  // Level 2 under Performance Optimization
  {
    id: 'runtime_performance',
    label: 'Runtime\nPerformance',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use Performance tab to trace long tasks, scripting bottlenecks, and rendering costs.',
  },
  {
    id: 'network_performance',
    label: 'Network\nPerformance',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Analyze slow requests, optimize asset delivery, and monitor caching.',
  },
  {
    id: 'memory_optimization',
    label: 'Memory\nOptimization',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Profile heap snapshots and allocation timelines to detect leaks.',
  },

  // Level 2 under Improving Accessibility
  {
    id: 'aria_and_roles',
    label: 'ARIA and\nRoles',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Inspect ARIA attributes and verify element roles for screen readers.',
  },
  {
    id: 'color_contrast',
    label: 'Color\nContrast',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Check text/background contrast to ensure readability and accessibility compliance.',
  },

  // Level 2 under Fine-Tuning Styles
  {
    id: 'live_editing_css',
    label: 'Live Editing\nCSS',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Edit CSS styles in real-time to experiment with layout and appearance changes.',
  },
  {
    id: 'computed_styles_inspection',
    label: 'Computed\nStyles Inspection',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'See the final rendered CSS values including inherited and overridden rules.',
  },

  // Level 2 under Exploring Advanced Features
  {
    id: 'coverage_analysis',
    label: 'Coverage\nAnalysis',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Identify unused CSS and JavaScript to reduce bundle sizes.',
  },
  {
    id: 'animations_debugging',
    label: 'Animations\nDebugging',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Inspect and fine-tune CSS and JavaScript animations frame-by-frame.',
  },
  {
    id: 'sensor_emulation',
    label: 'Sensor\nEmulation',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Simulate device features like geolocation and device orientation.',
  },
  {
    id: 'experiments_features',
    label: 'Experiments\nFeatures',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Test bleeding-edge DevTools features not yet in stable release.',
  },
]

export const links = [
  { source: 'root', target: 'testing_strategies' },
  { source: 'root', target: 'debugging_workflows' },
  { source: 'root', target: 'performance_optimization' },
  { source: 'root', target: 'improving_accessibility' },
  { source: 'root', target: 'fine_tuning_styles' },
  { source: 'root', target: 'advanced_features' },

  // Testing Strategies breakdown
  { source: 'testing_strategies', target: 'dom_and_css_testing' },
  { source: 'testing_strategies', target: 'network_api_testing' },
  { source: 'testing_strategies', target: 'regression_testing' },

  // Debugging Workflows breakdown
  { source: 'debugging_workflows', target: 'javascript_debugging' },
  { source: 'debugging_workflows', target: 'dom_mutation_debugging' },

  // Performance Optimization breakdown
  { source: 'performance_optimization', target: 'runtime_performance' },
  { source: 'performance_optimization', target: 'network_performance' },
  { source: 'performance_optimization', target: 'memory_optimization' },

  // Improving Accessibility breakdown
  { source: 'improving_accessibility', target: 'aria_and_roles' },
  { source: 'improving_accessibility', target: 'color_contrast' },

  // Fine-Tuning Styles breakdown
  { source: 'fine_tuning_styles', target: 'live_editing_css' },
  { source: 'fine_tuning_styles', target: 'computed_styles_inspection' },

  // Advanced Features breakdown
  { source: 'advanced_features', target: 'coverage_analysis' },
  { source: 'advanced_features', target: 'animations_debugging' },
  { source: 'advanced_features', target: 'sensor_emulation' },
  { source: 'advanced_features', target: 'experiments_features' },
]
