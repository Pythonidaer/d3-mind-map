import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Accessibility\nChecklist',
    definition: 'A practical, categorized summary of essential accessibility requirements—focused on WCAG Level AA, with key Level A and AAA examples.',
    color: 'root',
    shape: 'roundRect',
  },

  // Level 1 categories
  {
    id: 'page_structure',
    label: 'Page Structure\n& Semantics',
    definition: 'Ensure content structure is logical and navigable with semantic HTML and proper language settings.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'text_alternatives',
    label: 'Text Alternatives',
    definition: 'Provide alt text, captions, and transcripts for non-text content.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'keyboard_access',
    label: 'Keyboard\nAccessibility',
    definition: 'Ensure all functionality is accessible using only a keyboard, with clear focus indicators.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'visual_design',
    label: 'Visual Design\n& Contrast',
    definition: 'Ensure adequate color contrast, resizable text, and non-reliance on color alone.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'forms',
    label: 'Forms\n& Errors',
    definition: 'Ensure form controls have labels, clear instructions, and accessible error handling.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'navigation',
    label: 'Navigation\n& Interaction',
    definition: 'Ensure consistent navigation, meaningful links, and accessible controls.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'robustness',
    label: 'Code\nRobustness',
    definition: 'Use valid markup and ensure assistive technologies can interpret roles, names, and states.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'aaa_enhancements',
    label: 'Nice-to-Haves\n(AAA Enhancements)',
    definition: 'Advanced improvements like 7:1 contrast, sign language, and text presentation controls.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },

  // Level 2 example children
  {
    id: 'unique_titles',
    label: 'Unique Page\nTitles',
    definition: 'Every page should have a descriptive <title> element.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'heading_structure',
    label: 'Heading\nStructure',
    definition: 'Use &lt;h1&gt; to &lt;h6&gt; in order, with only one &lt;h1&gt; per page.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'skip_links',
    label: 'Skip Links',
    definition: 'Provide links to skip repetitive blocks (e.g., navigation).',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'alt_text',
    label: 'Alt Text for\nImages',
    definition: 'All informative images must include meaningful alt text; decorative images use alt="".',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'keyboard_focus',
    label: 'Visible\nFocus Style',
    definition: 'Ensure focus indicator is visible and high-contrast.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'color_contrast',
    label: 'Text\nContrast',
    definition: 'Ensure 4.5:1 contrast ratio for normal text, 3:1 for large text.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'labelled_forms',
    label: 'Labelled\nForm Fields',
    definition: 'Use <label for=""> elements to programmatically link form labels.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'error_handling',
    label: 'Clear\nError Feedback',
    definition: 'Indicate input errors clearly with helpful suggestions when possible.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'valid_html',
    label: 'Valid\nHTML Code',
    definition: 'Use semantic, standards-compliant HTML without syntax errors.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'status_messages',
    label: 'Announced\nStatus Messages',
    definition: 'Status updates should be announced without requiring focus.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'high_contrast',
    label: '7:1 Contrast\n(AAA)',
    definition: 'Enhanced contrast for readability, especially for users with low vision.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'abbreviation_help',
    label: 'Abbreviation\nExpansion',
    definition: 'AAA guideline recommending a method for defining abbreviations.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'page_structure' },
  { source: 'root', target: 'text_alternatives' },
  { source: 'root', target: 'keyboard_access' },
  { source: 'root', target: 'visual_design' },
  { source: 'root', target: 'forms' },
  { source: 'root', target: 'navigation' },
  { source: 'root', target: 'robustness' },
  { source: 'root', target: 'aaa_enhancements' },

  { source: 'page_structure', target: 'unique_titles' },
  { source: 'page_structure', target: 'heading_structure' },
  { source: 'page_structure', target: 'skip_links' },

  { source: 'text_alternatives', target: 'alt_text' },
  { source: 'keyboard_access', target: 'keyboard_focus' },
  { source: 'visual_design', target: 'color_contrast' },

  { source: 'forms', target: 'labelled_forms' },
  { source: 'forms', target: 'error_handling' },

  { source: 'robustness', target: 'valid_html' },
  { source: 'robustness', target: 'status_messages' },

  { source: 'aaa_enhancements', target: 'high_contrast' },
  { source: 'aaa_enhancements', target: 'abbreviation_help' }
];
