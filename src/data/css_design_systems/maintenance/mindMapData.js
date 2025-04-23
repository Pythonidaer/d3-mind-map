// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Maintenance & Governance',
    shape: 'roundRect',
    color: 'root',
    definition: 'The processes and practices that ensure a CSS Design System remains consistent, up-to-date, and scalable as teams and products evolve.'
  },

  // Level 1 Positive
  {
    id: 'version_control',
    label: 'Version Control',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Use tools like Git to manage changes, track updates, and release controlled versions of the design system.'
  },
  {
    id: 'documentation_updates',
    label: 'Documentation\nUpdates',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Maintain clear and current usage guidelines, examples, and rationale for each component and style token.'
  },
  {
    id: 'regular_audits',
    label: 'System Audits',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Review the design system periodically to find inconsistencies, deprecated styles, or accessibility issues.'
  },
  {
    id: 'collaborative_workflow',
    label: 'Collaboration &\nGovernance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Set up processes for proposing, reviewing, and approving changes across teams (e.g., with design reviews or RFCs).'
  },

  // Level 2 Positive
  {
    id: 'semantic_versioning',
    label: 'Semantic Versioning',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use major.minor.patch to release updates and signal breaking changes, improvements, and fixes.'
  },
  {
    id: 'living_docs',
    label: 'Living Documentation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Docs that are automatically updated or tightly coupled to source code (e.g., Storybook, Markdown in repo).'
  },
  {
    id: 'accessibility_testing',
    label: 'Accessibility\nChecks',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Manual and automated testing (contrast, keyboard nav, screen readers) to ensure usability for all.'
  },
  {
    id: 'issue_triage',
    label: 'Issue Triage\n& Backlog Grooming',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Review reported bugs or requests and prioritize updates in alignment with product goals.'
  },

  // Level 3 Positive
  {
    id: 'design_tokens_change_log',
    label: 'Token Change\nLogs',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Track when and why a design token was updated to help teams adapt and avoid regressions.'
  },
  {
    id: 'rfc_process',
    label: 'RFC Process',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'A formal proposal process for major changes that invites discussion and cross-functional approval.'
  },

  // Level 1 Negative
  {
    id: 'maintenance_antipatterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes in managing a design system that lead to bloat, confusion, or inconsistent UX.'
  },

  // Level 2 Negative
  {
    id: 'stale_docs',
    label: 'Outdated Documentation',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Guides that no longer match actual styles or code create confusion and adoption barriers.'
  },
  {
    id: 'manual_updates_only',
    label: 'Manual-Only\nUpdates',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Relying solely on manual changes increases risk of missed updates or inconsistencies.'
  },
  {
    id: 'no_ownership',
    label: 'No Ownership\nor Review Process',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Without clear maintainers or review procedures, the system drifts and becomes difficult to trust.'
  }
];

export const links = [
  // Positive
  { source: 'root', target: 'version_control' },
  { source: 'root', target: 'documentation_updates' },
  { source: 'root', target: 'regular_audits' },
  { source: 'root', target: 'collaborative_workflow' },

  { source: 'version_control', target: 'semantic_versioning' },
  { source: 'documentation_updates', target: 'living_docs' },
  { source: 'regular_audits', target: 'accessibility_testing' },
  { source: 'collaborative_workflow', target: 'issue_triage' },

  { source: 'documentation_updates', target: 'design_tokens_change_log' },
  { source: 'collaborative_workflow', target: 'rfc_process' },

  // Negative
  { source: 'root', target: 'maintenance_antipatterns' },
  { source: 'maintenance_antipatterns', target: 'stale_docs' },
  { source: 'maintenance_antipatterns', target: 'manual_updates_only' },
  { source: 'maintenance_antipatterns', target: 'no_ownership' }
];
