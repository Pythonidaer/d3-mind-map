import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Comparison & Trade-Offs',
    shape: 'roundRect',
    color: 'root',
    definition:
      'A high-level comparison of JavaScript frameworks and the trade-offs involved in choosing them.',
  },

  // Top-level trade-off categories
  {
    id: 'performance',
    label: 'Performance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Speed and efficiency of rendering, hydration, and bundling.',
  },
  {
    id: 'learning_curve',
    label: 'Learning Curve',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Ease or difficulty of learning the framework based on syntax and concepts.',
  },
  {
    id: 'ecosystem',
    label: 'Ecosystem \n& Community',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Size, maturity, and available resources of the framework ecosystem.',
  },
  {
    id: 'flexibility',
    label: 'Flexibility \nvs. Convention',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Degree of freedom in architecture vs. enforced patterns and structure.',
  },
  {
    id: 'tooling',
    label: 'Tooling & \nDev Experience',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Availability of CLIs, plugins, and features for debugging, building, and deploying.',
  },
  {
    id: 'scalability',
    label: 'Scalability',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'How well the framework handles growing app size, team size, and complexity.',
  },

  // Negative trade-offs
  {
    id: 'bundle_size',
    label: 'Bundle Size',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Amount of JavaScript needed to ship to the client, impacting load time.',
  },
  {
    id: 'vendor_lock',
    label: 'Vendor Lock-In',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Difficulty switching from a framework due to custom syntax or architecture.',
  },

  // Second-level performance nodes
  {
    id: 'hydration',
    label: 'Hydration \nSpeed',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Time taken to attach client-side interactivity to server-rendered HTML.',
  },
  {
    id: 'ssr_speed',
    label: 'SSR / SSG Speed',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Time to generate and serve server-rendered pages.',
  },

  // Second-level ecosystem nodes
  {
    id: 'third_party_libs',
    label: 'Third-Party \nLibraries',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Available plugins, UI kits, and extensions.',
  },
  {
    id: 'job_market',
    label: 'Job Market \n& Hiring',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Prevalence of framework in job listings and resumes.',
  },

  // Second-level flexibility nodes
  {
    id: 'configurable',
    label: 'Highly Configurable',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Minimal constraints on how to structure or architect an app.',
  },
  {
    id: 'opinionated',
    label: 'Opinionated \nConvention',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Framework dictates patterns to reduce decision fatigue.',
  },

  // Second-level vendor lock-in nodes
  {
    id: 'custom_syntax',
    label: 'Custom Syntax',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Non-standard constructs make migration harder (e.g., JSX, directives).',
  },
  {
    id: 'tight_integration',
    label: 'Tight \nIntegration',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Core framework deeply tied to specific tooling or APIs.',
  },

  // Second-level bundle size mitigation nodes
  {
    id: 'tree_shaking',
    label: 'Tree Shaking',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Removes unused code during bundling to reduce file size.',
  },
  {
    id: 'code_splitting',
    label: 'Code Splitting',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Divides bundles into smaller chunks loaded on demand.',
  },
]

export const links = [
  { source: 'root', target: 'performance' },
  { source: 'root', target: 'learning_curve' },
  { source: 'root', target: 'ecosystem' },
  { source: 'root', target: 'flexibility' },
  { source: 'root', target: 'tooling' },
  { source: 'root', target: 'scalability' },
  { source: 'root', target: 'bundle_size' },
  { source: 'root', target: 'vendor_lock' },

  { source: 'performance', target: 'hydration' },
  { source: 'performance', target: 'ssr_speed' },

  { source: 'ecosystem', target: 'third_party_libs' },
  { source: 'ecosystem', target: 'job_market' },

  { source: 'flexibility', target: 'configurable' },
  { source: 'flexibility', target: 'opinionated' },

  { source: 'vendor_lock', target: 'custom_syntax' },
  { source: 'vendor_lock', target: 'tight_integration' },

  { source: 'bundle_size', target: 'tree_shaking' },
  { source: 'bundle_size', target: 'code_splitting' },
]
