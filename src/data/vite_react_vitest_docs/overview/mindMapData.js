import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Vite + React + Vitest\nDocumentation Overview',
    definition:
      'High-level summary of best practices, tooling, and strategies for developer documentation in modern frontend projects using Vite, React, and Vitest.',
    color: 'root',
    shape: 'roundRect'
  },

  // Foundational Principles
  {
    id: 'principles',
    label: 'Foundational\nPrinciples',
    definition: 'Core best practices for writing clear, consistent, and scalable documentation.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'clarity_conciseness',
    label: 'Clarity &\nConciseness',
    definition: 'Write in plain language using the "7 Cs of Technical Writing" to improve comprehension.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'structure_consistency',
    label: 'Structure &\nConsistency',
    definition: 'Use a shared style guide, templates, and logical hierarchy across all documentation.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'scalable_systems',
    label: 'Scalable\nSystems',
    definition: 'Design documentation to grow with the project using categories, automation, and search.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Project Maintainability
  {
    id: 'maintainability',
    label: 'Project\nMaintainability',
    definition: 'Documentation strategies for long-term sustainability, especially for small teams or solo devs.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'solo_strategies',
    label: 'Solo Dev\nApproaches',
    definition: 'Use Markdown in-repo, storytelling code, and modular components for clarity and ease.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'design_rationale',
    label: 'Design\nRationale',
    definition: 'Explain architectural choices using ADRs or inline documentation to provide decision context.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'dependencies_intent',
    label: 'Code Intent &\nDependencies',
    definition: 'Document code behavior, modifiability, and all library dependencies clearly.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Documentation Types
  {
    id: 'doc_types',
    label: 'Documentation\nTypes',
    definition: 'Different forms of documentation tailored for various audiences and use cases.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'readme_guides',
    label: 'README &\nQuick Start',
    definition: 'Introductory files with setup instructions, usage, and links to deeper docs.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'api_reference',
    label: 'API-Level\nDocs',
    definition: 'Detailed guides on functions, endpoints, parameters, and error handling.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'user_guides',
    label: 'User-Facing\nTutorials',
    definition: 'Step-by-step how-to content and FAQs for developers using your library or framework.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'prds_rfcs',
    label: 'PRDs &\nRFCs',
    definition: 'High-level project planning and feature proposal documents to explain the "why".',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Automation
  {
    id: 'automation',
    label: 'Automation\nStrategies',
    definition: 'Tools and techniques to automatically generate or enhance documentation.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'jsdoc_typedoc',
    label: 'JSDoc &\nTypedoc',
    definition: 'Use comments to generate human-readable, navigable documentation from code.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'tests_docs',
    label: 'Tests as\nDocs',
    definition: 'Vitest-based unit tests can serve as live specifications for code behavior.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'ai_assistance',
    label: 'AI-Powered\nDocs',
    definition: 'Use AI tools to assist in generating and formatting context-aware documentation.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Tooling Comparison
  {
    id: 'platforms',
    label: 'Tooling\nComparisons',
    definition: 'Analysis of leading documentation platforms by use case and features.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'docusaurus',
    label: 'Docusaurus',
    definition: 'Best for structured developer docs; supports versioning and React-based theming.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'docz',
    label: 'Docz',
    definition: 'Great for documenting component libraries; less actively maintained today.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'vitepress',
    label: 'VitePress',
    definition: 'Fast, minimal, Vue-native docs generator with potential React integration.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'storybook',
    label: 'Storybook',
    definition: 'Ideal for documenting React components interactively in isolation.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Sustaining Docs Culture
  {
    id: 'sustaining',
    label: 'Sustaining\nDocs Culture',
    definition: 'How to maintain documentation quality and engagement over time.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'docs_as_code',
    label: '"Docs as Code"',
    definition: 'Version-controlled Markdown files written and reviewed like software.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'ownership_reviews',
    label: 'Ownership &\nReview Cycles',
    definition: 'Assign sections to contributors and review documentation during code review.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'ci_feedback',
    label: 'CI/CD &\nFeedback Loops',
    definition: 'Auto-deploy docs and gather user metrics to evolve documentation continuously.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Special Cases
  {
    id: 'special_cases',
    label: 'Special\nCases',
    definition: 'Handling documentation for complex areas like AI and dependency tracking.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'dependencies',
    label: 'Dependencies &\nLicenses',
    definition: 'Track versions, risks, and purpose of libraries and APIs used.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'ai_generated_code',
    label: 'AI-Generated\nCode',
    definition: 'Document the origin and logic of any code written or assisted by AI.',
    color: 'nodePositive2',
    shape: 'rect'
  }
];

export const links = [
  { source: 'root', target: 'principles' },
  { source: 'principles', target: 'clarity_conciseness' },
  { source: 'principles', target: 'structure_consistency' },
  { source: 'principles', target: 'scalable_systems' },

  { source: 'root', target: 'maintainability' },
  { source: 'maintainability', target: 'solo_strategies' },
  { source: 'maintainability', target: 'design_rationale' },
  { source: 'maintainability', target: 'dependencies_intent' },

  { source: 'root', target: 'doc_types' },
  { source: 'doc_types', target: 'readme_guides' },
  { source: 'doc_types', target: 'api_reference' },
  { source: 'doc_types', target: 'user_guides' },
  { source: 'doc_types', target: 'prds_rfcs' },

  { source: 'root', target: 'automation' },
  { source: 'automation', target: 'jsdoc_typedoc' },
  { source: 'automation', target: 'tests_docs' },
  { source: 'automation', target: 'ai_assistance' },

  { source: 'root', target: 'platforms' },
  { source: 'platforms', target: 'docusaurus' },
  { source: 'platforms', target: 'docz' },
  { source: 'platforms', target: 'vitepress' },
  { source: 'platforms', target: 'storybook' },

  { source: 'root', target: 'sustaining' },
  { source: 'sustaining', target: 'docs_as_code' },
  { source: 'sustaining', target: 'ownership_reviews' },
  { source: 'sustaining', target: 'ci_feedback' },

  { source: 'root', target: 'special_cases' },
  { source: 'special_cases', target: 'dependencies' },
  { source: 'special_cases', target: 'ai_generated_code' }
];
