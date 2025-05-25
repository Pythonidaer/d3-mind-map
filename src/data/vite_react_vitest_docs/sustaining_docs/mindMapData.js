import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Sustaining\nDocumentation',
    definition:
      'Practices that ensure documentation remains accurate, useful, and up-to-date as the codebase evolves over time.',
    color: 'root',
    shape: 'roundRect'
  },

  // Docs as Code
  {
    id: 'docs_as_code',
    label: 'Docs as\nCode',
    definition:
      'Treat documentation as part of your codebase using version control, pull requests, and automation.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'markdown_storage',
    label: 'Markdown in\nVersion Control',
    definition:
      'Store documentation as Markdown files within the repo. Enables change tracking, peer review, and synchronization with code.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'linters_checkers',
    label: 'Linters &\nFormatting Checks',
    definition:
      'Use Markdown linters, spellcheckers, and CI rules to enforce style consistency and prevent broken links.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'automation_ci',
    label: 'CI/CD\nAutomation',
    definition:
      'Automate documentation builds, previews, and deployments as part of your continuous integration pipeline.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Ownership & Contributions
  {
    id: 'ownership_contrib',
    label: 'Ownership &\nContribution',
    definition:
      'Assign ownership and create clear guidelines to manage documentation quality and encourage contributions.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'contrib_guide',
    label: 'Contribution\nGuidelines',
    definition:
      'Write a CONTRIBUTING.md that defines how to submit edits, follow the style guide, and open documentation PRs.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'doc_ownership',
    label: 'Assign\nDoc Owners',
    definition:
      'Designate team members as maintainers of specific doc sections (e.g., API docs, onboarding, deployment guides).',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'review_process',
    label: 'Review &\nApproval Workflow',
    definition:
      'Require peer review for documentation changes via pull requests or merge approvals. Promotes accuracy.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Feedback & Improvement
  {
    id: 'feedback_loops',
    label: 'Feedback &\nImprovement',
    definition:
      'Gather usage metrics and direct developer feedback to improve documentation coverage and usefulness.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'analytics',
    label: 'Page Views &\nSearch Logs',
    definition:
      'Use analytics tools to track popular pages, time on page, and failed searches to guide updates.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'feedback_widgets',
    label: 'User\nFeedback Forms',
    definition:
      'Embed widgets like “Was this helpful?” to collect qualitative feedback at the point of use.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'docs_review_cycle',
    label: 'Scheduled\nReviews',
    definition:
      'Schedule quarterly or release-based audits to catch outdated instructions or missing topics.',
    color: 'nodePositive2',
    shape: 'rect'
  }
];

export const links = [
  { source: 'root', target: 'docs_as_code' },
  { source: 'docs_as_code', target: 'markdown_storage' },
  { source: 'docs_as_code', target: 'linters_checkers' },
  { source: 'docs_as_code', target: 'automation_ci' },

  { source: 'root', target: 'ownership_contrib' },
  { source: 'ownership_contrib', target: 'contrib_guide' },
  { source: 'ownership_contrib', target: 'doc_ownership' },
  { source: 'ownership_contrib', target: 'review_process' },

  { source: 'root', target: 'feedback_loops' },
  { source: 'feedback_loops', target: 'analytics' },
  { source: 'feedback_loops', target: 'feedback_widgets' },
  { source: 'feedback_loops', target: 'docs_review_cycle' }
];
