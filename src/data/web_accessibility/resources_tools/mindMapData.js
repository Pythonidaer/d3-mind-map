import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Accessibility\nResources & Tools',
    definition: 'Essential documentation, tools, and communities that support accessible design, development, and evaluation.',
    color: 'root',
    shape: 'roundRect',
  },

  // Level 1
  {
    id: 'w3c_wai',
    label: 'W3C Web\nAccessibility Initiative',
    definition: 'The official source for WCAG, ARIA, and accessibility standards from the W3C.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'mdn_docs',
    label: 'MDN Web\nDocs',
    definition: 'Developer-focused documentation on accessible HTML, CSS, JS, and ARIA best practices.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'webaim',
    label: 'WebAIM',
    definition: 'Utah State’s nonprofit hub for accessibility tutorials, tools, and training.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'a11y_project',
    label: 'The A11Y\nProject',
    definition: 'A community-driven collection of accessibility resources, tools, and checklists.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },

  // W3C WAI resources
  {
    id: 'wai_wcag',
    label: 'WCAG\nDocs',
    definition: 'The Web Content Accessibility Guidelines and associated versions (2.0, 2.1, 2.2, 3.0).',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wai_understanding',
    label: 'Understanding\nWCAG',
    definition: 'In-depth explanations of each success criterion, with intent, examples, and techniques.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wai_quickref',
    label: 'Quick Reference\nChecklist',
    definition: 'Filterable checklist of WCAG criteria with links to how-to guidance.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wai_aria',
    label: 'ARIA\nAuthoring Guide',
    definition: 'Standards and patterns for Accessible Rich Internet Applications.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'wai_easy_checks',
    label: 'Easy\nAccessibility Checks',
    definition: 'Non-technical checklist for beginners to perform simple accessibility audits.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // MDN resources
  {
    id: 'mdn_html',
    label: 'Accessible\nHTML Guides',
    definition: 'Guidance on semantic elements, landmarks, roles, and accessibility patterns.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'mdn_aria',
    label: 'ARIA\nUsage Examples',
    definition: 'Best practices and use cases for applying ARIA roles, states, and properties.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // WebAIM resources
  {
    id: 'webaim_wave',
    label: 'WAVE\nTool',
    definition: 'Browser-based evaluation tool for visualizing and debugging accessibility issues.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'webaim_contrast',
    label: 'Contrast\nChecker',
    definition: 'Tool for testing text and UI contrast ratios for WCAG compliance.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'webaim_checklist',
    label: 'WCAG\nChecklist',
    definition: 'Simplified breakdown of WCAG success criteria for practical implementation.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'webaim_training',
    label: 'Training &\nConsulting',
    definition: 'Workshops, audits, and certifications for organizations aiming to improve accessibility.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // A11Y Project resources
  {
    id: 'a11y_checklist',
    label: 'A11Y Project\nChecklist',
    definition: 'Practical checklist based on WCAG A/AA, useful for audits and QA.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'a11y_articles',
    label: 'Articles,\nVideos, & Talks',
    definition: 'Blog posts, learning videos, and recorded workshops from accessibility professionals.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'a11y_tools',
    label: 'Curated\nTools List',
    definition: 'Collection of browser extensions, linters, testing services, and screen reader resources.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'w3c_wai' },
  { source: 'root', target: 'mdn_docs' },
  { source: 'root', target: 'webaim' },
  { source: 'root', target: 'a11y_project' },

  { source: 'w3c_wai', target: 'wai_wcag' },
  { source: 'w3c_wai', target: 'wai_understanding' },
  { source: 'w3c_wai', target: 'wai_quickref' },
  { source: 'w3c_wai', target: 'wai_aria' },
  { source: 'w3c_wai', target: 'wai_easy_checks' },

  { source: 'mdn_docs', target: 'mdn_html' },
  { source: 'mdn_docs', target: 'mdn_aria' },

  { source: 'webaim', target: 'webaim_wave' },
  { source: 'webaim', target: 'webaim_contrast' },
  { source: 'webaim', target: 'webaim_checklist' },
  { source: 'webaim', target: 'webaim_training' },

  { source: 'a11y_project', target: 'a11y_checklist' },
  { source: 'a11y_project', target: 'a11y_articles' },
  { source: 'a11y_project', target: 'a11y_tools' }
];
