import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Lighthouse\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Run automated audits for performance, accessibility, best practices, SEO, and PWA compliance.',
  },

  // Level 1
  {
    id: 'running_audits',
    label: 'Running\nAudits',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Configure and execute audits for specific categories like Performance or Accessibility.',
  },
  {
    id: 'interpreting_reports',
    label: 'Interpreting\nReports',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Analyze scores, passed/failed audits, and actionable recommendations.',
  },
  {
    id: 'audit_categories',
    label: 'Audit\nCategories',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Understand what each Lighthouse audit category measures and why it matters.',
  },
  {
    id: 'continuous_improvement',
    label: 'Continuous\nImprovement',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Use Lighthouse routinely to benchmark progress and integrate into development workflows.',
  },

  // Level 2 under Running Audits
  {
    id: 'device_simulation',
    label: 'Device\nSimulation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Simulate mobile vs. desktop performance during audits.',
  },
  {
    id: 'network_throttling',
    label: 'Network\nThrottling',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Apply different network speeds (e.g., 3G, 4G) during audit runs.',
  },
  {
    id: 'cpu_throttling',
    label: 'CPU\nThrottling',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Throttle CPU to emulate slower devices and get realistic performance metrics.',
  },

  // Level 2 under Interpreting Reports
  {
    id: 'score_breakdown',
    label: 'Score\nBreakdown',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Understand how weighted scores contribute to each category rating.',
  },
  {
    id: 'opportunity_insights',
    label: 'Opportunities\n& Diagnostics',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Identify areas for improvement and understand estimated savings.',
  },

  // Level 2 under Audit Categories
  {
    id: 'performance_audits',
    label: 'Performance\nAudits',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Metrics like FCP, LCP, CLS, TBT, and Speed Index that measure speed and responsiveness.',
  },
  {
    id: 'accessibility_audits',
    label: 'Accessibility\nAudits',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Tests ensuring content is usable by people with disabilities.',
  },
  {
    id: 'best_practices_audits',
    label: 'Best\nPractices Audits',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Security, modern web standards, and efficient resource usage.',
  },
  {
    id: 'seo_audits',
    label: 'SEO\nAudits',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Optimizations to improve search engine discoverability.',
  },
  {
    id: 'pwa_audits',
    label: 'PWA\nAudits',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Checks for installability, offline functionality, and app-like behavior.',
  },

  // Level 2 under Continuous Improvement
  {
    id: 'tracking_progress',
    label: 'Tracking\nProgress',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Record audit results over time to measure improvements.',
  },
  {
    id: 'ci_integration',
    label: 'CI/CD\nIntegration',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Automate Lighthouse audits in build pipelines to catch regressions early.',
  },
]

export const links = [
  { source: 'root', target: 'running_audits' },
  { source: 'root', target: 'interpreting_reports' },
  { source: 'root', target: 'audit_categories' },
  { source: 'root', target: 'continuous_improvement' },

  // Running Audits breakdown
  { source: 'running_audits', target: 'device_simulation' },
  { source: 'running_audits', target: 'network_throttling' },
  { source: 'running_audits', target: 'cpu_throttling' },

  // Interpreting Reports breakdown
  { source: 'interpreting_reports', target: 'score_breakdown' },
  { source: 'interpreting_reports', target: 'opportunity_insights' },

  // Audit Categories breakdown
  { source: 'audit_categories', target: 'performance_audits' },
  { source: 'audit_categories', target: 'accessibility_audits' },
  { source: 'audit_categories', target: 'best_practices_audits' },
  { source: 'audit_categories', target: 'seo_audits' },
  { source: 'audit_categories', target: 'pwa_audits' },

  // Continuous Improvement breakdown
  { source: 'continuous_improvement', target: 'tracking_progress' },
  { source: 'continuous_improvement', target: 'ci_integration' },
]
