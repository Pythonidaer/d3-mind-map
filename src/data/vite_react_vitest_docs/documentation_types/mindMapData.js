import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Documentation\nTypes & Purpose',
    definition:
      'Breakdown of common types of developer documentation and their intended use cases, audiences, and structure.',
    color: 'root',
    shape: 'roundRect'
  },

  // README-Level Docs
  {
    id: 'readme_docs',
    label: 'README &\nQuick Start',
    definition:
      'Entry-point documentation that introduces a project and provides basic setup, usage, and contact information.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'readme_basics',
    label: 'Setup &\nInstallation',
    definition:
      'Instructions on how to install, run, and test the project locally, including dependencies and environment setup.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'readme_scope',
    label: 'Project Scope &\nGoals',
    definition:
      'What the project does, who it’s for, and what problems it solves. Sets context and boundaries.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'readme_maintenance',
    label: 'Maintainers &\nSupport',
    definition:
      'Contact info, contribution links, bug reporting guidelines, and known issues.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // API-Level Docs
  {
    id: 'api_docs',
    label: 'API-Level\nDocumentation',
    definition:
      'Reference material for developers using your system or library. Explains inputs, outputs, structures, and errors.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'api_endpoints',
    label: 'Endpoints &\nFunctions',
    definition:
      'Descriptions of methods, endpoints, parameters, return values, and authentication requirements.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'api_examples',
    label: 'Code\nExamples',
    definition:
      'Practical usage examples in one or more languages, demonstrating real-world integrations.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'api_errors',
    label: 'Errors &\nEdge Cases',
    definition:
      'Document expected failures, error codes, and how to handle unusual or invalid inputs.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // User-Facing Docs
  {
    id: 'user_docs',
    label: 'User-Facing\nTutorials',
    definition:
      'Step-by-step instructions and guides aimed at developers using your library, framework, or app.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'user_tasks',
    label: 'Task-Based\nWalkthroughs',
    definition:
      'Guides that walk the user through specific goals, such as setting up auth or deploying to production.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'user_faq',
    label: 'FAQs &\nTroubleshooting',
    definition:
      'Answers to common issues or edge cases developers might encounter during use.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'user_onboarding',
    label: 'Onboarding &\nDeveloper Journey',
    definition:
      'Help new developers ramp up with curated paths through docs, starting from beginner to advanced topics.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Strategic Docs
  {
    id: 'strategic_docs',
    label: 'PRDs &\nRFCs',
    definition:
      'High-level planning documents that communicate product intent, scope, and reasoning to both technical and non-technical stakeholders.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'prd_content',
    label: 'Product\nRequirements',
    definition:
      'Define business goals, user stories, constraints, and acceptance criteria.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'rfc_proposals',
    label: 'Feature\nProposals',
    definition:
      'Request for Comments (RFCs) explain design decisions, gather team feedback, and log long-term trade-offs.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'strategic_review',
    label: 'Cross-Team\nCommunication',
    definition:
      'Acts as a shared reference for engineers, PMs, and leadership to align on direction and implementation.',
    color: 'nodePositive2',
    shape: 'rect'
  }
];

export const links = [
  { source: 'root', target: 'readme_docs' },
  { source: 'readme_docs', target: 'readme_basics' },
  { source: 'readme_docs', target: 'readme_scope' },
  { source: 'readme_docs', target: 'readme_maintenance' },

  { source: 'root', target: 'api_docs' },
  { source: 'api_docs', target: 'api_endpoints' },
  { source: 'api_docs', target: 'api_examples' },
  { source: 'api_docs', target: 'api_errors' },

  { source: 'root', target: 'user_docs' },
  { source: 'user_docs', target: 'user_tasks' },
  { source: 'user_docs', target: 'user_faq' },
  { source: 'user_docs', target: 'user_onboarding' },

  { source: 'root', target: 'strategic_docs' },
  { source: 'strategic_docs', target: 'prd_content' },
  { source: 'strategic_docs', target: 'rfc_proposals' },
  { source: 'strategic_docs', target: 'strategic_review' }
];
