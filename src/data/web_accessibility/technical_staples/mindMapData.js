import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Technical Staples\nof Web Accessibility',
    definition: 'Key coding and interface practices that ensure your website meets accessibility guidelines, especially WCAG Level AA.',
    color: 'root',
    shape: 'roundRect',
  },

  // Level 1 categories
  {
    id: 'semantic_html',
    label: 'Semantic HTML',
    definition: 'Use correct HTML elements for structure and meaning to support assistive technologies.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'text_alternatives',
    label: 'Text Alternatives',
    definition: 'Provide alt text, transcripts, and captions for images and multimedia content.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'keyboard_navigation',
    label: 'Keyboard\nNavigation',
    definition: 'Ensure full functionality using only a keyboard, with clear focus indication.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'color_contrast',
    label: 'Color &\nContrast',
    definition: 'Maintain sufficient contrast ratios and avoid using color as the only indicator.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'accessible_forms',
    label: 'Accessible Forms',
    definition: 'Provide labeled inputs, clear instructions, and accessible error handling.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'aria_usage',
    label: 'ARIA Usage',
    definition: 'Use ARIA roles and properties appropriately, only when native HTML falls short.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'responsive_zoom',
    label: 'Zoom,\nResize, Reflow',
    definition: 'Support responsive layouts and text zoom without breaking structure or hiding content.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'multimedia_accessibility',
    label: 'Multimedia\nAccessibility',
    definition: 'Include captions, audio descriptions, and transcripts for audio/video content.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'page_structure',
    label: 'Page Structure\n& Skip Links',
    definition: 'Use headings, landmarks, and skip links to organize content and aid navigation.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },

  // Level 2 examples per category
  {
    id: 'html_headings',
    label: 'Heading\nHierarchy',
    definition: 'Use <h1>–<h6> to convey structure and enable assistive navigation.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'html_landmarks',
    label: 'Landmark\nRoles',
    definition: 'Use <main>, <nav>, <header>, etc., to define regions of the page.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'alt_images',
    label: 'Alt Text for\nImages',
    definition: 'Every meaningful image must include descriptive alt text.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'video_captions',
    label: 'Captions &\nTranscripts',
    definition: 'Video content must include captions and/or text alternatives.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'focus_visible',
    label: 'Visible\nFocus Styles',
    definition: 'Keyboard focus must always be clearly visible, using custom styling if needed.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'contrast_min',
    label: 'Minimum\nContrast',
    definition: 'Text and interface elements must meet 4.5:1 or 3:1 contrast thresholds.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'label_inputs',
    label: 'Labeled\nInputs',
    definition: 'Use <label for="..."> elements to identify every input control.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'aria_responsibility',
    label: 'Responsible\nARIA Use',
    definition: 'Only use ARIA when semantic HTML cannot achieve the same function.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'zoom_reflow',
    label: 'Responsive\nReflow',
    definition: 'Content must work at 400% zoom and reflow to a single column on mobile.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'skip_navigation',
    label: 'Skip\nNavigation',
    definition: 'Add a "skip to main content" link for keyboard users to bypass repeated blocks.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'semantic_html' },
  { source: 'root', target: 'text_alternatives' },
  { source: 'root', target: 'keyboard_navigation' },
  { source: 'root', target: 'color_contrast' },
  { source: 'root', target: 'accessible_forms' },
  { source: 'root', target: 'aria_usage' },
  { source: 'root', target: 'responsive_zoom' },
  { source: 'root', target: 'multimedia_accessibility' },
  { source: 'root', target: 'page_structure' },

  { source: 'semantic_html', target: 'html_headings' },
  { source: 'semantic_html', target: 'html_landmarks' },

  { source: 'text_alternatives', target: 'alt_images' },
  { source: 'multimedia_accessibility', target: 'video_captions' },

  { source: 'keyboard_navigation', target: 'focus_visible' },

  { source: 'color_contrast', target: 'contrast_min' },

  { source: 'accessible_forms', target: 'label_inputs' },

  { source: 'aria_usage', target: 'aria_responsibility' },

  { source: 'responsive_zoom', target: 'zoom_reflow' },

  { source: 'page_structure', target: 'skip_navigation' }
];
