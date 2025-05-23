import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Testing & Evaluation\nStrategies',
    definition: 'A hybrid approach using automated tools, manual techniques, and user testing is essential for verifying accessibility.',
    color: 'root',
    shape: 'roundRect',
  },

  // Level 1
  {
    id: 'hybrid_approach',
    label: 'Hybrid\nTesting Approach',
    definition: 'Combines automation, manual review, and user testing to detect both technical and experiential barriers.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'automated_testing',
    label: 'Automated\nTesting Tools',
    definition: 'Quickly detect codified accessibility issues at scale but require manual verification.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'manual_testing',
    label: 'Manual\nTesting Techniques',
    definition: 'Evaluates human-judgment criteria like alt text quality, language clarity, and navigation order.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'user_testing',
    label: 'User Testing\nwith Disabilities',
    definition: 'Reveals real-world usability issues and confirms assistive technology compatibility.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'wcag_em',
    label: 'WCAG\nEvaluation Methodology',
    definition: 'A W3C-defined process for consistent, comprehensive accessibility audits.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },

  // Level 2: Automated Testing
  {
    id: 'axe',
    label: 'Axe\n(Deque)',
    definition: 'Developer-friendly tools with CI/CD integration and Shadow DOM support.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wave',
    label: 'WAVE\n(WebAIM)',
    definition: 'Visual page overlays for spotting issues, best used in browsers.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'lighthouse',
    label: 'Lighthouse\n(Google)',
    definition: 'Integrated in Chrome DevTools; useful for snapshots but limited rule depth.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Level 2: Manual Testing
  {
    id: 'keyboard_testing',
    label: 'Keyboard-Only\nNavigation',
    definition: 'Test every element using only the Tab, Enter, and Escape keys.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'screen_reader_testing',
    label: 'Screen Reader\nReview',
    definition: 'Use NVDA, VoiceOver, or JAWS to verify semantic flow and dynamic announcements.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'contrast_checking',
    label: 'Contrast\nTesting',
    definition: 'Manually verify color contrast with eyedropper or extension tools.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'zoom_reflow_testing',
    label: 'Zoom &\nReflow Tests',
    definition: 'Ensure content reflows properly at 200–400% zoom without horizontal scroll.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'html_inspection',
    label: 'HTML & ARIA\nInspection',
    definition: 'Review underlying markup and ARIA attributes for semantic and structural correctness.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Level 2: User Testing
  {
    id: 'usability_feedback',
    label: 'Usability\nFeedback',
    definition: 'Observe how disabled users interact with real-world tasks using their tools.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'assistive_tech_variety',
    label: 'Assistive Tech\nCoverage',
    definition: 'Test with screen readers, switch devices, magnifiers, voice control, etc.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'low_sample_validity',
    label: 'Small\nSample Value',
    definition: 'Even 3–5 users uncover most critical issues—especially if tested iteratively.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Level 2: WCAG-EM
  {
    id: 'wcag_em_scope',
    label: 'Define\nEvaluation Scope',
    definition: 'Identify URLs, platforms, and assistive tech support expectations before testing.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wcag_em_sampling',
    label: 'Select\nRepresentative Sample',
    definition: 'Choose common and process-critical pages to audit (e.g., homepage, checkout).',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wcag_em_audit',
    label: 'Audit Sample\nAgainst WCAG',
    definition: 'Manually verify conformance for each success criterion in selected pages.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wcag_em_report',
    label: 'Report\nFindings & Gaps',
    definition: 'Document nonconformities, impact, and remediation strategies in a formal audit report.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'hybrid_approach' },
  { source: 'root', target: 'automated_testing' },
  { source: 'root', target: 'manual_testing' },
  { source: 'root', target: 'user_testing' },
  { source: 'root', target: 'wcag_em' },

  { source: 'automated_testing', target: 'axe' },
  { source: 'automated_testing', target: 'wave' },
  { source: 'automated_testing', target: 'lighthouse' },

  { source: 'manual_testing', target: 'keyboard_testing' },
  { source: 'manual_testing', target: 'screen_reader_testing' },
  { source: 'manual_testing', target: 'contrast_checking' },
  { source: 'manual_testing', target: 'zoom_reflow_testing' },
  { source: 'manual_testing', target: 'html_inspection' },

  { source: 'user_testing', target: 'usability_feedback' },
  { source: 'user_testing', target: 'assistive_tech_variety' },
  { source: 'user_testing', target: 'low_sample_validity' },

  { source: 'wcag_em', target: 'wcag_em_scope' },
  { source: 'wcag_em', target: 'wcag_em_sampling' },
  { source: 'wcag_em', target: 'wcag_em_audit' },
  { source: 'wcag_em', target: 'wcag_em_report' }
];
