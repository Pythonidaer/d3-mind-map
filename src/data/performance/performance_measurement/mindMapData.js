import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Performance\nMeasurement Tools',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Tools and techniques for identifying, profiling, and validating frontend and backend performance across development and production environments.',
  },

  // Level 1 - Categories
  {
    id: 'browser_tools',
    label: 'Browser\nDevTools',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Built-in developer tools (like Chrome DevTools) used to measure network timing, rendering stages, memory, and paint activity.',
    parent: 'root',
  },
  {
    id: 'audit_tools',
    label: 'Automated\nAudit Tools',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Tools that scan a webpage and generate reports on performance, accessibility, SEO, and best practices.',
    parent: 'root',
  },
  {
    id: 'rum_tools',
    label: 'Real User\nMonitoring (RUM)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Tools that measure performance from actual users in the field, offering real-world metrics like load time and errors.',
    parent: 'root',
  },

  // Level 2 - Browser Tools
  {
    id: 'network_tab',
    label: 'Network\nTab',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Waterfall view of all requests, showing load times, blocking, and resource prioritization.',
    parent: 'browser_tools',
  },
  {
    id: 'performance_tab',
    label: 'Performance\nTab',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Captures and visualizes the rendering pipeline (parse, layout, paint, scripting) to detect jank.',
    parent: 'browser_tools',
  },

  // Level 2 - Audit Tools
  {
    id: 'lighthouse',
    label: 'Lighthouse\nReports',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Generates detailed scores and diagnostics for performance, SEO, accessibility, and best practices.',
    parent: 'audit_tools',
  },
  {
    id: 'webpagetest',
    label: 'WebPageTest\nFilmstrips',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Cloud-based tool showing page load progress with visual snapshots and advanced waterfall data.',
    parent: 'audit_tools',
  },

  // Level 2 - RUM Tools
  {
    id: 'new_relic',
    label: 'New Relic\nRUM',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Monitors actual user experience across frontend/backend, with dashboards for load time, transactions, and errors.',
    parent: 'rum_tools',
  },
  {
    id: 'datadog',
    label: 'Datadog\nMonitoring',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Observability platform capturing logs, metrics, and traces from real users and infrastructure.',
    parent: 'rum_tools',
  },

  // Level 1 - Negative
  {
    id: 'tool_misuse',
    label: 'Misuse of\nMetrics',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Focusing only on synthetic scores without validating against real user performance or business goals.',
    parent: 'root',
  },

  // Level 2 - Negative Patterns
  {
    id: 'lab_only_focus',
    label: 'Lab-Only\nFocus',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Over-relying on Lighthouse or local tools without accounting for diverse user conditions or actual runtime issues.',
    parent: 'tool_misuse',
  },
  {
    id: 'over_optimizing',
    label: 'Over-Optimizing\nScores',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Chasing perfect scores while neglecting usability, readability, or maintainability.',
    parent: 'tool_misuse',
  },
];

export const links = [
  { source: 'root', target: 'browser_tools' },
  { source: 'root', target: 'audit_tools' },
  { source: 'root', target: 'rum_tools' },
  { source: 'root', target: 'tool_misuse' },

  { source: 'browser_tools', target: 'network_tab' },
  { source: 'browser_tools', target: 'performance_tab' },

  { source: 'audit_tools', target: 'lighthouse' },
  { source: 'audit_tools', target: 'webpagetest' },

  { source: 'rum_tools', target: 'new_relic' },
  { source: 'rum_tools', target: 'datadog' },

  { source: 'tool_misuse', target: 'lab_only_focus' },
  { source: 'tool_misuse', target: 'over_optimizing' },
];
