import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Testing Metrics',
    shape: 'roundRect',
    color: 'root',
    definition: 'Key quantitative indicators that assess the effectiveness, coverage, and quality of software testing processes.',
  },

  // Positive Nodes Level 1
  {
    id: 'test_coverage',
    label: 'Test Coverage',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Measures the percentage of code, branches, or paths that are executed during testing.',
  },
  {
    id: 'defect_metrics',
    label: 'Defect Metrics',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Tracks discovered bugs, their severity, density, and fix rate to assess code quality.',
  },
  {
    id: 'test_effectiveness',
    label: 'Test Effectiveness',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Evaluates how well the tests identify real issues before release.',
  },
  {
    id: 'test_execution',
    label: 'Test Execution\nPerformance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Time and efficiency with which test suites run during CI/CD or manual test sessions.',
  },
  {
    id: 'maintenance_metrics',
    label: 'Maintenance Metrics',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'How maintainable and stable the test suite is over time.',
  },

  // Positive Nodes Level 2
  {
    id: 'line_coverage',
    label: 'Line Coverage',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Percentage of source lines executed during tests.',
  },
  {
    id: 'branch_coverage',
    label: 'Branch Coverage',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Percentage of code branches (if/else/switch) tested.',
  },
  {
    id: 'defect_density',
    label: 'Defect Density',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Number of bugs per unit of code, such as per 1,000 lines.',
  },
  {
    id: 'mean_time_to_detect',
    label: 'Mean Time to Detect',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Average time between writing a bug and discovering it in tests.',
  },
  {
    id: 'false_positive_rate',
    label: 'False Positive Rate',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Percentage of test failures that are not actual bugs.',
  },
  {
    id: 'test_stability',
    label: 'Test Stability',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'How often tests produce flaky, inconsistent, or non-deterministic results.',
  },
  {
    id: 'execution_time',
    label: 'Execution Time',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Time taken to complete the full or partial test suite.',
  },

  // Negative Nodes Level 1
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Challenges or limitations of relying on testing metrics without proper context or balance.',
  },

  // Negative Nodes Level 2
  {
    id: 'over_optimization',
    label: 'Over-Optimization\nof Coverage',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Chasing 100% coverage can lead to bloated or trivial tests with little value.',
  },
  {
    id: 'vanity_metrics',
    label: 'Vanity Metrics',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Metrics that look impressive but don’t correlate with real quality (e.g., coverage % with no bug detection).',
  },
  {
    id: 'ignored_flakiness',
    label: 'Ignored Flakiness',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Failing to address flaky tests leads to reduced trust in test results.',
  },
  {
    id: 'metric_blindness',
    label: 'Metric Blindness',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Over-reliance on numbers without user or dev experience context leads to misleading quality assessments.',
  },
];

export const links = [
  { source: 'root', target: 'test_coverage' },
  { source: 'root', target: 'defect_metrics' },
  { source: 'root', target: 'test_effectiveness' },
  { source: 'root', target: 'test_execution' },
  { source: 'root', target: 'maintenance_metrics' },

  { source: 'test_coverage', target: 'line_coverage' },
  { source: 'test_coverage', target: 'branch_coverage' },

  { source: 'defect_metrics', target: 'defect_density' },
  { source: 'defect_metrics', target: 'mean_time_to_detect' },

  { source: 'test_effectiveness', target: 'false_positive_rate' },

  { source: 'test_execution', target: 'execution_time' },
  { source: 'maintenance_metrics', target: 'test_stability' },

  { source: 'root', target: 'cons' },
  { source: 'cons', target: 'over_optimization' },
  { source: 'cons', target: 'vanity_metrics' },
  { source: 'cons', target: 'ignored_flakiness' },
  { source: 'cons', target: 'metric_blindness' },
];
