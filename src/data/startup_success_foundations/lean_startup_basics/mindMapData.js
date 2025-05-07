import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Lean Startup\nBasics',
    shape: 'roundRect',
    color: 'root',
    definition:
      'A structured methodology for launching startups under uncertainty, emphasizing validated learning, iterative development, and MVP testing.',
  },

  // Positive Node 1s
  {
    id: 'principles',
    label: 'Core\nPrinciples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'The five foundational ideas that drive the Lean Startup approach: Entrepreneurs are everywhere, management, validated learning, innovation accounting, and Build-Measure-Learn.',
  },
  {
    id: 'mvp',
    label: 'Minimum\nViable Product',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'The simplest version of a product that allows maximum learning with the least effort, used to validate core assumptions early.',
  },
  {
    id: 'build_measure_learn',
    label: 'Build-\nMeasure-Learn',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'The Lean Startup’s feedback loop used to test hypotheses quickly, gather data, and decide whether to pivot or persevere.',
  },
  {
    id: 'innovation_accounting',
    label: 'Innovation\nAccounting',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A method for tracking a startup’s progress in learning and experimentation rather than relying solely on traditional business metrics.',
  },

  // Positive Node 2s (under Core Principles)
  {
    id: 'entrepreneurs_everywhere',
    label: 'Entrepreneurs\nEverywhere',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'principles',
    definition:
      'Anyone creating a product under uncertain conditions can be an entrepreneur, not limited to Silicon Valley or tech-only contexts.',
  },
  {
    id: 'entrepreneurship_is_management',
    label: 'Entrepreneurship\nis Management',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'principles',
    definition:
      'Startups require a new style of management tailored for rapid learning and constant change.',
  },
  {
    id: 'validated_learning',
    label: 'Validated\nLearning',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'principles',
    definition:
      'A scientific approach to discovering what customers actually want by testing assumptions through real-world feedback.',
  },

  // Positive Node 2s (under MVP)
  {
    id: 'early_validation',
    label: 'Early\nValidation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'mvp',
    definition:
      'Used to test key business hypotheses and reduce the risk of building unwanted features.',
  },
  {
    id: 'low_risk_testing',
    label: 'Low-Risk\nTesting',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'mvp',
    definition:
      'MVPs allow learning without investing in full-scale development, saving time and capital.',
  },

  // Negative Node 1s
  {
    id: 'pitfalls',
    label: 'Common\nPitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Mistakes and anti-patterns that derail Lean Startup implementation, like ignoring validation or misusing MVPs.',
  },

  // Negative Node 2s
  {
    id: 'building_without_demand',
    label: 'Building Without\nMarket Demand',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'pitfalls',
    definition:
      'Developing a full product without confirming that users actually need or want it.',
  },
  {
    id: 'feature_overload',
    label: 'Overbuilding\nFeatures',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'pitfalls',
    definition:
      'Treating the MVP like a feature-rich release, which defeats its purpose and delays feedback.',
  },
  {
    id: 'ignoring_data',
    label: 'Ignoring\nFeedback',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'pitfalls',
    definition:
      'Failing to adapt based on what users are telling you, either through data or direct feedback.',
  },
]

export const links = [
  { source: 'root', target: 'principles' },
  { source: 'root', target: 'mvp' },
  { source: 'root', target: 'build_measure_learn' },
  { source: 'root', target: 'innovation_accounting' },
  { source: 'root', target: 'pitfalls' },

  { source: 'principles', target: 'entrepreneurs_everywhere' },
  { source: 'principles', target: 'entrepreneurship_is_management' },
  { source: 'principles', target: 'validated_learning' },

  { source: 'mvp', target: 'early_validation' },
  { source: 'mvp', target: 'low_risk_testing' },

  { source: 'pitfalls', target: 'building_without_demand' },
  { source: 'pitfalls', target: 'feature_overload' },
  { source: 'pitfalls', target: 'ignoring_data' },
]
