import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Color and Accessibility',
    color: 'root',
    shape: 'roundRect',
    definition: 'The use of color in UI design to ensure content is perceivable, operable, and understandable for users with visual impairments, color blindness, or contrast sensitivity.',
  },

  // Primary Categories
  {
    id: 'contrast',
    label: 'Contrast Ratios',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Color contrast between text and background must meet accessibility standards to remain readable for all users.',
  },
  {
    id: 'color_blindness',
    label: 'Color Blindness\nSupport',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Accommodating users with various types of color vision deficiency through redundancy and thoughtful palette choices.',
  },
  {
    id: 'non_color_cues',
    label: 'Non-Color\nCues',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Using patterns, icons, labels, and other visual indicators in addition to color to communicate meaning.',
  },
  {
    id: 'theme_accessibility',
    label: 'Theme & Mode\nAccessibility',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Ensuring accessibility is preserved across light and dark themes, high contrast mode, and user overrides.',
  },
  {
    id: 'testing_tools',
    label: 'Testing & Tools',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Resources and methods for evaluating color accessibility in interfaces.',
  },
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    color: 'nodeNegative1',
    shape: 'hexagon',
    definition: 'Common mistakes in color usage that lead to poor accessibility and exclusion of users.',
  },

  // Contrast children
  {
    id: 'wcag_requirements',
    label: 'WCAG AA / AAA\nRequirements',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Text and interface elements must meet 4.5:1 or 7:1 contrast ratios depending on size and context.',
  },
  {
    id: 'visual_emphasis',
    label: 'Visual Emphasis\n& Hierarchy',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Using contrast to signal importance without overpowering or distracting users.',
  },

  // Color Blindness children
  {
    id: 'types_of_deficiency',
    label: 'Types of Color\nBlindness',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Deuteranopia, protanopia, tritanopia, and achromatopsia affect perception of color differently.',
  },
  {
    id: 'simulators',
    label: 'Color Blindness\nSimulators',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Tools that emulate color vision deficiencies for testing UI effectiveness.',
  },

  // Non-color cues children
  {
    id: 'icons_and_labels',
    label: 'Icons and\nText Labels',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Always supplement color with icons or descriptive text to reinforce meaning.',
  },
  {
    id: 'shapes_patterns',
    label: 'Shapes and\nPatterns',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Use different shapes, fills, or stroke patterns to distinguish meaning in visualizations.',
  },

  // Theme Accessibility children
  {
    id: 'dark_mode_support',
    label: 'Dark Mode\nSupport',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Designing for high legibility in dark mode, ensuring no contrast is lost.',
  },
  {
    id: 'user_os_settings',
    label: 'User OS-Level\nSettings',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Respecting user preferences such as forced high contrast or inverted color schemes.',
  },

  // Testing & Tools children
  {
    id: 'axe_wave',
    label: 'axe, WAVE,\nLighthouse',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Automated tools that check contrast and color accessibility in UIs.',
  },
  {
    id: 'manual_testing',
    label: 'Manual & Real\nUser Testing',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Testing with real people with disabilities or simulating use with keyboard/screen reader.',
  },

  // Anti-Patterns children
  {
    id: 'low_contrast_text',
    label: 'Low Contrast\nText',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Light gray text on white or dark gray on black creates poor legibility.',
  },
  {
    id: 'color_only_feedback',
    label: 'Color-Only\nFeedback',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Using color alone (like red for error) excludes users who can’t distinguish that color.',
  },
  {
    id: 'inaccessible_themes',
    label: 'Inaccessible\nThemes',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Theme toggles that render colors unreadable or clash with system overrides.',
  },

  // Anti-Patterns grandchildren
  {
    id: 'invisible_focus',
    label: 'Invisible Focus\nIndicators',
    color: 'nodeNegative3',
    shape: 'diamond',
    definition: 'Custom themes that hide or remove focus outlines for keyboard users.',
  },
  {
    id: 'red_green_conflict',
    label: 'Red-Green\nConflict',
    color: 'nodeNegative3',
    shape: 'diamond',
    definition: 'Relying only on red/green for success/error status fails for most colorblind users.',
  },
]

export const links = [
  { source: 'root', target: 'contrast' },
  { source: 'root', target: 'color_blindness' },
  { source: 'root', target: 'non_color_cues' },
  { source: 'root', target: 'theme_accessibility' },
  { source: 'root', target: 'testing_tools' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'contrast', target: 'wcag_requirements' },
  { source: 'contrast', target: 'visual_emphasis' },

  { source: 'color_blindness', target: 'types_of_deficiency' },
  { source: 'color_blindness', target: 'simulators' },

  { source: 'non_color_cues', target: 'icons_and_labels' },
  { source: 'non_color_cues', target: 'shapes_patterns' },

  { source: 'theme_accessibility', target: 'dark_mode_support' },
  { source: 'theme_accessibility', target: 'user_os_settings' },

  { source: 'testing_tools', target: 'axe_wave' },
  { source: 'testing_tools', target: 'manual_testing' },

  { source: 'anti_patterns', target: 'low_contrast_text' },
  { source: 'anti_patterns', target: 'color_only_feedback' },
  { source: 'anti_patterns', target: 'inaccessible_themes' },

  { source: 'color_only_feedback', target: 'red_green_conflict' },
  { source: 'inaccessible_themes', target: 'invisible_focus' },
]
