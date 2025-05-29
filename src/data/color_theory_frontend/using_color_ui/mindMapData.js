import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Using Color in\nUI Design',
    definition: 'Application of color theory in user interface design to enhance usability, guide attention, create hierarchy, and align with brand identity.',
    shape: 'roundRect',
    color: 'root',
  },

  // Visual Hierarchy
  {
    id: 'visual_hierarchy',
    label: 'Visual\nHierarchy',
    definition: 'Use of color to distinguish importance, create flow, and establish UI structure.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'primary_actions',
    label: 'Primary\nActions',
    definition: 'High-contrast or branded colors are used to make buttons and main CTAs stand out.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'secondary_elements',
    label: 'Secondary\nElements',
    definition: 'Muted or neutral tones indicate less emphasis (e.g., secondary buttons, hints).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'text_hierarchy',
    label: 'Text\nHierarchy',
    definition: 'Use of color shades to separate headings, body text, links, and metadata.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Functional Feedback
  {
    id: 'functional_feedback',
    label: 'Functional\nFeedback',
    definition: 'Color used to convey states such as success, warning, or error to the user.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'status_colors',
    label: 'Status\nColors',
    definition: 'Red for errors, yellow for warnings, green for success, blue for info—common patterns across UIs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'disabled_states',
    label: 'Disabled\nStates',
    definition: 'Faded or desaturated colors to communicate inactivity or unavailability.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'hover_focus',
    label: 'Hover/\nFocus States',
    definition: 'Use of color changes to signify interactivity and keyboard navigation.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Branding & Theming
  {
    id: 'branding_theming',
    label: 'Branding &\nTheming',
    definition: 'Color as a tool for brand expression and emotional tone across a UI system.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'brand_palettes',
    label: 'Brand\nPalettes',
    definition: 'Defined color tokens that align with a company’s visual identity.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'light_dark_modes',
    label: 'Light & Dark\nModes',
    definition: 'Color adaptations to ensure usability across bright and low-light environments.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'theming_systems',
    label: 'Theming\nSystems',
    definition: 'Design tokens and CSS variables that allow UI personalization and flexible branding.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Anti-patterns
  {
    id: 'color_misuse',
    label: 'Color\nAnti-Patterns',
    definition: 'Common pitfalls and misuses of color in UI that harm usability or accessibility.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'too_many_colors',
    label: 'Too Many\nColors',
    definition: 'Using an overwhelming palette without hierarchy leads to confusion and fatigue.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'bad_contrast',
    label: 'Low Contrast\nCombinations',
    definition: 'Colors that fail WCAG standards or are unreadable across screen types.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'color_as_only_signal',
    label: 'Color as Sole\nIndicator',
    definition: 'Using only color to convey meaning (e.g., red vs green) is exclusionary for colorblind users.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'visual_hierarchy' },
  { source: 'root', target: 'functional_feedback' },
  { source: 'root', target: 'branding_theming' },
  { source: 'root', target: 'color_misuse' },

  { source: 'visual_hierarchy', target: 'primary_actions' },
  { source: 'visual_hierarchy', target: 'secondary_elements' },
  { source: 'visual_hierarchy', target: 'text_hierarchy' },

  { source: 'functional_feedback', target: 'status_colors' },
  { source: 'functional_feedback', target: 'disabled_states' },
  { source: 'functional_feedback', target: 'hover_focus' },

  { source: 'branding_theming', target: 'brand_palettes' },
  { source: 'branding_theming', target: 'light_dark_modes' },
  { source: 'branding_theming', target: 'theming_systems' },

  { source: 'color_misuse', target: 'too_many_colors' },
  { source: 'color_misuse', target: 'bad_contrast' },
  { source: 'color_misuse', target: 'color_as_only_signal' },
];
