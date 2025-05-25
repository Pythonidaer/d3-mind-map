import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Foundational\nPrinciples',
    definition:
      'Core best practices for writing clear, consistent, scalable, and maintainable developer documentation in modern frontend projects.',
    color: 'root',
    shape: 'roundRect'
  },

  // Clarity & Conciseness
  {
    id: 'clarity_conciseness',
    label: 'Clarity &\nConciseness',
    definition:
      'Documentation should be understandable at first read, with direct language, specific examples, and minimal jargon.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'seven_cs',
    label: '7 Cs of\nTech Writing',
    definition:
      'A writing framework emphasizing clarity, conciseness, completeness, correctness, coherence, concreteness, and courtesy.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'concrete_examples',
    label: 'Use Concrete\nExamples',
    definition:
      'Illustrate behavior with specific, real-world examples rather than vague or abstract descriptions.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'avoid_jargon',
    label: 'Avoid\nJargon',
    definition:
      'Reduce the use of domain-specific terms unless defined. Favor plain, accessible language where possible.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Structure & Consistency
  {
    id: 'structure_consistency',
    label: 'Structure &\nConsistency',
    definition:
      'Establish shared formatting, naming conventions, templates, and content hierarchy across all docs.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'style_guides',
    label: 'Style\nGuides',
    definition:
      'Define consistent formatting rules for tone, grammar, headings, code blocks, and links.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'doc_templates',
    label: 'Documentation\nTemplates',
    definition:
      'Use repeatable templates for common doc types like README, API reference, PRD, or ADRs.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'hierarchy_headings',
    label: 'Hierarchy &\nHeadings',
    definition:
      'Organize documentation using a clear and logical outline. Leverage H1–H4 headers and content grouping.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Scalable Systems
  {
    id: 'scalable_systems',
    label: 'Scalable\nSystems',
    definition:
      'Design documentation architecture that supports growth through categorization, indexing, and automation.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'toc_search',
    label: 'TOC &\nSearch',
    definition:
      'Provide a table of contents and robust search so users can quickly locate content.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'categorization',
    label: 'Content\nCategorization',
    definition:
      'Group related documentation into folders, sections, and metadata for better organization and UX.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'automated_updates',
    label: 'Automated\nUpdates',
    definition:
      'Use static site generators and CI tools to keep documentation synchronized with the codebase.',
    color: 'nodePositive2',
    shape: 'rect'
  }
];

export const links = [
  { source: 'root', target: 'clarity_conciseness' },
  { source: 'clarity_conciseness', target: 'seven_cs' },
  { source: 'clarity_conciseness', target: 'concrete_examples' },
  { source: 'clarity_conciseness', target: 'avoid_jargon' },

  { source: 'root', target: 'structure_consistency' },
  { source: 'structure_consistency', target: 'style_guides' },
  { source: 'structure_consistency', target: 'doc_templates' },
  { source: 'structure_consistency', target: 'hierarchy_headings' },

  { source: 'root', target: 'scalable_systems' },
  { source: 'scalable_systems', target: 'toc_search' },
  { source: 'scalable_systems', target: 'categorization' },
  { source: 'scalable_systems', target: 'automated_updates' }
];
