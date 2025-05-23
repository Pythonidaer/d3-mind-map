import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'WCAG Standards\n& POUR Principles',
    definition: 'Explores the structure, versions, and philosophy behind the Web Content Accessibility Guidelines (WCAG), including the core POUR principles: Perceivable, Operable, Understandable, and Robust.',
    color: 'root',
    shape: 'roundRect',
  },

  // WCAG Structure and Versions
  {
    id: 'wcag_structure',
    label: 'WCAG Structure',
    definition: 'WCAG is built on Principles → Guidelines → Success Criteria (Levels A, AA, AAA).',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'wcag_versions',
    label: 'WCAG Versions',
    definition: 'WCAG 1.0 (1999), 2.0 (2008), 2.1 (2018), 2.2 (2023), and the draft of 3.0 (under development).',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'wcag_2x_shift',
    label: 'Shift to\nPrinciples-Based Model',
    definition: 'WCAG 2.0+ focuses on enduring principles instead of specific technologies like HTML.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wcag_conformance',
    label: 'Conformance Levels:\nA / AA / AAA',
    definition: 'WCAG success criteria are testable and grouped into three levels of strictness. AA is the most common standard.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // POUR Principles
  {
    id: 'pour_principles',
    label: 'POUR\nPrinciples',
    definition: 'Four foundational principles of accessibility: Perceivable, Operable, Understandable, Robust.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'perceivable',
    label: 'Perceivable',
    definition: 'Information must be presented in ways that users can perceive with at least one sense.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'operable',
    label: 'Operable',
    definition: 'User interface components and navigation must be operable by all input methods.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'understandable',
    label: 'Understandable',
    definition: 'Content and interface behavior must be understandable by all users.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'robust',
    label: 'Robust',
    definition: 'Content must be usable by a wide variety of user agents, including assistive tech.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Subnodes of POUR (Examples & Barriers)
  {
    id: 'perceivable_issues',
    label: 'Common\nPerceivable Issues',
    definition: 'Missing alt text, poor color contrast, videos without captions.',
    color: 'nodePositive3',
    shape: 'diamond',
  },
  {
    id: 'operable_issues',
    label: 'Common\nOperable\nIssues',
    definition: 'No keyboard access, short time limits, content causing seizures.',
    color: 'nodePositive3',
    shape: 'diamond',
  },
  {
    id: 'understandable_issues',
    label: 'Common\nUnderstandable\nIssues',
    definition: 'Confusing navigation, inconsistent UI, vague form errors.',
    color: 'nodePositive3',
    shape: 'diamond',
  },
  {
    id: 'robust_issues',
    label: 'Common\nRobustness Issues',
    definition: 'Improper HTML, broken ARIA, missing role/state/label on controls.',
    color: 'nodePositive3',
    shape: 'diamond',
  }
];

export const links = [
  { source: 'root', target: 'wcag_structure' },
  { source: 'root', target: 'wcag_versions' },
  { source: 'wcag_versions', target: 'wcag_2x_shift' },
  { source: 'wcag_structure', target: 'wcag_conformance' },

  { source: 'root', target: 'pour_principles' },
  { source: 'pour_principles', target: 'perceivable' },
  { source: 'pour_principles', target: 'operable' },
  { source: 'pour_principles', target: 'understandable' },
  { source: 'pour_principles', target: 'robust' },

  { source: 'perceivable', target: 'perceivable_issues' },
  { source: 'operable', target: 'operable_issues' },
  { source: 'understandable', target: 'understandable_issues' },
  { source: 'robust', target: 'robust_issues' }
];
