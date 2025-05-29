import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Testing &\nQuality',
    definition: 'Ensuring software reliability, performance, and maintainability through automated and manual validation methods.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1 Positive
  {
    id: 'types_of_testing',
    label: 'Types of\nTesting',
    definition: 'Different forms of testing used at various layers of the software stack to validate behavior.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'quality_metrics',
    label: 'Quality\nMetrics',
    definition: 'Quantitative indicators that help evaluate code quality, coverage, and stability.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'test_strategy',
    label: 'Testing\nStrategy',
    definition: 'A plan that outlines what to test, how often, with what tools, and by whom.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ci_cd_testing',
    label: 'CI/CD\nIntegration',
    definition: 'Automating testing within continuous integration pipelines to catch regressions early.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2 - Types of Testing
  {
    id: 'unit_testing',
    label: 'Unit\nTesting',
    definition: 'Testing individual functions, components, or modules in isolation.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'integration_testing',
    label: 'Integration\nTesting',
    definition: 'Testing how different parts of the system work together as a group.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'e2e_testing',
    label: 'End-to-End\n(E2E)',
    definition: 'Simulating real user behavior across the full application to verify workflows.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'accessibility_testing',
    label: 'Accessibility\nTesting',
    definition: 'Verifying your app is usable by people with disabilities, using tools like axe or Lighthouse.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Quality Metrics
  {
    id: 'test_coverage',
    label: 'Test\nCoverage',
    definition: 'The percentage of your codebase exercised by automated tests.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'code_quality',
    label: 'Code\nQuality',
    definition: 'Assessing code based on complexity, duplication, maintainability, and linter rules.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'defect_rate',
    label: 'Bug &\nDefect Rate',
    definition: 'Tracking the frequency and severity of bugs after release or during QA.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Test Strategy
  {
    id: 'test_pyramid',
    label: 'Testing\nPyramid',
    definition: 'A best practice that recommends more unit tests, fewer integration, and even fewer E2E tests.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'mocking',
    label: 'Mocking &\nStubbing',
    definition: 'Faking APIs or services to isolate tests and improve reliability and speed.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'testing_tools',
    label: 'Tools &\nFrameworks',
    definition: 'Popular testing tools like Vitest, Jest, Cypress, and Testing Library.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - CI/CD Testing
  {
    id: 'test_automation',
    label: 'Test\nAutomation',
    definition: 'Running tests automatically on commit, pull request, or deployment.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'visual_regression',
    label: 'Visual\nRegression',
    definition: 'Detecting unintended visual changes using screenshots or diff tools.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Cons
  {
    id: 'testing_cons',
    label: 'Cons',
    definition: 'Common drawbacks and challenges of maintaining a robust testing strategy.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'slow_tests',
    label: 'Slow or\nFlaky Tests',
    definition: 'Tests that take too long or fail unpredictably can block CI pipelines.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'maintenance_cost',
    label: 'Test\nMaintenance',
    definition: 'Tests often need to be updated with each feature refactor or UI change.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'false_confidence',
    label: 'False\nConfidence',
    definition: 'Passing tests don’t guarantee full correctness—untested edge cases still slip through.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'types_of_testing' },
  { source: 'root', target: 'quality_metrics' },
  { source: 'root', target: 'test_strategy' },
  { source: 'root', target: 'ci_cd_testing' },
  { source: 'root', target: 'testing_cons' },

  { source: 'types_of_testing', target: 'unit_testing' },
  { source: 'types_of_testing', target: 'integration_testing' },
  { source: 'types_of_testing', target: 'e2e_testing' },
  { source: 'types_of_testing', target: 'accessibility_testing' },

  { source: 'quality_metrics', target: 'test_coverage' },
  { source: 'quality_metrics', target: 'code_quality' },
  { source: 'quality_metrics', target: 'defect_rate' },

  { source: 'test_strategy', target: 'test_pyramid' },
  { source: 'test_strategy', target: 'mocking' },
  { source: 'test_strategy', target: 'testing_tools' },

  { source: 'ci_cd_testing', target: 'test_automation' },
  { source: 'ci_cd_testing', target: 'visual_regression' },

  { source: 'testing_cons', target: 'slow_tests' },
  { source: 'testing_cons', target: 'maintenance_cost' },
  { source: 'testing_cons', target: 'false_confidence' }
];
