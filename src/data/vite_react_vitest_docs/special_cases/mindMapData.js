import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Special\nDocumentation Scenarios',
    definition:
      'Edge cases and evolving documentation challenges that go beyond typical tutorials and API references, such as AI-generated code, security dependencies, and system boundaries.',
    color: 'root',
    shape: 'roundRect'
  },

  // Documenting Dependencies
  {
    id: 'doc_dependencies',
    label: 'Code\nDependencies',
    definition:
      'Capture the external packages, tools, and versions your project relies on, with rationale and upgrade notes.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'dep_versions',
    label: 'Version &\nUsage Notes',
    definition:
      'List libraries with specific versions and usage rationale, e.g., “Zod v3.20 for runtime schema validation.”',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'dep_reasons',
    label: 'Why Each\nDependency Matters',
    definition:
      'Explain why the tool was chosen over others and what role it plays in the system (build, runtime, dev).',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'dep_impact',
    label: 'Update Risks &\nCompatibility',
    definition:
      'Describe how updates or removals affect other modules and integration points.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // AI-Generated Code
  {
    id: 'ai_code',
    label: 'AI-Generated\nCode',
    definition:
      'Document when and how AI tools were used to assist in writing code, including prompts and human edits.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'ai_origin',
    label: 'Prompt\nDocumentation',
    definition:
      'Save the original AI prompt or summary that generated the code to explain its origin and intent.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'ai_edits',
    label: 'Human\nReview Notes',
    definition:
      'List any corrections, optimizations, or logic changes made after AI generation. Clarify what was kept.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'ai_ethics',
    label: 'Originality &\nLicensing',
    definition:
      'Track any licensing questions, copyright risks, or unclear authorship related to AI output.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Boundary and Limit Scenarios
  {
    id: 'edge_docs',
    label: 'Limitations &\nEdge Cases',
    definition:
      'Clarify boundaries of your system—what it doesn’t support, known issues, and anti-patterns.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'known_issues',
    label: 'Known Bugs &\nConstraints',
    definition:
      'Document intentionally unsolved problems or constraints (e.g., doesn’t work on IE11, requires Node 18).',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'edge_behavior',
    label: 'Document\nUnexpected Behavior',
    definition:
      'Describe what happens in edge cases (e.g., API returns null if schema mismatch). Helps with debugging.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'unsupported',
    label: 'Unsupported\nUse Cases',
    definition:
      'Explicitly list things your library/framework is not built to handle, to prevent confusion or misuse.',
    color: 'nodePositive2',
    shape: 'rect'
  }
];

export const links = [
  { source: 'root', target: 'doc_dependencies' },
  { source: 'doc_dependencies', target: 'dep_versions' },
  { source: 'doc_dependencies', target: 'dep_reasons' },
  { source: 'doc_dependencies', target: 'dep_impact' },

  { source: 'root', target: 'ai_code' },
  { source: 'ai_code', target: 'ai_origin' },
  { source: 'ai_code', target: 'ai_edits' },
  { source: 'ai_code', target: 'ai_ethics' },

  { source: 'root', target: 'edge_docs' },
  { source: 'edge_docs', target: 'known_issues' },
  { source: 'edge_docs', target: 'edge_behavior' },
  { source: 'edge_docs', target: 'unsupported' }
];
