import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'WCAG Evaluation\nMethodology (WCAG-EM)',
    definition: 'A structured, W3C-recommended process for evaluating website accessibility conformance against WCAG.',
    color: 'root',
    shape: 'roundRect',
  },

  // Step 1
  {
    id: 'step_scope',
    label: 'Step 1:\nDefine Scope',
    definition: 'Establish what will be evaluated: website areas, technologies, versions, and conformance target.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'scope_uris',
    label: 'URIs &\nPlatforms',
    definition: 'Specify web pages, mobile versions, embedded content, and third-party services to include.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'scope_support',
    label: 'Technology\nSupport Baseline',
    definition: 'Define browsers and assistive technologies users are expected to use successfully.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'scope_conformance',
    label: 'Target\nConformance Level',
    definition: 'Select the WCAG version and level (e.g., 2.2 Level AA) to evaluate against.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Step 2
  {
    id: 'step_explore',
    label: 'Step 2:\nExplore Website',
    definition: 'Identify content types, functionality, layout templates, and key workflows.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'explore_templates',
    label: 'Templates &\nComponents',
    definition: 'Catalog shared layouts, UI components, and page types.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'explore_processes',
    label: 'Processes &\nFeatures',
    definition: 'Identify interactions like login, checkout, search, or registration.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Step 3
  {
    id: 'step_sample',
    label: 'Step 3:\nSelect Sample',
    definition: 'Choose a mix of structured, random, and process-specific pages to audit.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'sample_structured',
    label: 'Structured\nSample',
    definition: 'Pages that represent key templates, home, about, contact, etc.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'sample_random',
    label: 'Random\nSample',
    definition: 'Unbiased selection to capture edge cases or hidden issues.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'sample_process',
    label: 'Process\nFlows',
    definition: 'All steps of user workflows like booking, submitting, or purchasing.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Step 4
  {
    id: 'step_audit',
    label: 'Step 4:\nAudit Sample',
    definition: 'Evaluate each selected page against WCAG success criteria.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'audit_conformance',
    label: 'Evaluate\nSuccess Criteria',
    definition: 'Verify conformance using manual, automated, and hybrid techniques.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'audit_versions',
    label: 'Check\nMultiple Versions',
    definition: 'Audit mobile, desktop, and alternate-language versions if in scope.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Step 5
  {
    id: 'step_report',
    label: 'Step 5:\nReport Findings',
    definition: 'Summarize results, identify failures, and provide remediation advice.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'report_results',
    label: 'Findings &\nViolations',
    definition: 'Document each failure with severity, criteria, and affected pages.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'report_statement',
    label: 'Conformance\nStatement',
    definition: 'Optional summary asserting the level and scope of conformance achieved.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'step_scope' },
  { source: 'step_scope', target: 'scope_uris' },
  { source: 'step_scope', target: 'scope_support' },
  { source: 'step_scope', target: 'scope_conformance' },

  { source: 'root', target: 'step_explore' },
  { source: 'step_explore', target: 'explore_templates' },
  { source: 'step_explore', target: 'explore_processes' },

  { source: 'root', target: 'step_sample' },
  { source: 'step_sample', target: 'sample_structured' },
  { source: 'step_sample', target: 'sample_random' },
  { source: 'step_sample', target: 'sample_process' },

  { source: 'root', target: 'step_audit' },
  { source: 'step_audit', target: 'audit_conformance' },
  { source: 'step_audit', target: 'audit_versions' },

  { source: 'root', target: 'step_report' },
  { source: 'step_report', target: 'report_results' },
  { source: 'step_report', target: 'report_statement' }
];
