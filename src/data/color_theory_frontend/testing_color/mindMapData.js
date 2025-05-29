import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Testing & Evaluating\nColor in UI',
    definition: 'Processes and tools used to assess color accessibility, consistency, legibility, and effectiveness across UI designs.',
    shape: 'roundRect',
    color: 'root',
  },

  // Accessibility Testing
  {
    id: 'accessibility_testing',
    label: 'Accessibility\nTesting',
    definition: 'Ensuring color contrast and usage meets WCAG standards and includes all users.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'contrast_checkers',
    label: 'Contrast\nCheckers',
    definition: 'Tools that assess text/background contrast ratios based on WCAG levels.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'colorblind_simulators',
    label: 'Colorblind\nSimulators',
    definition: 'Tools that simulate how designs appear to users with various color vision deficiencies.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'color_as_cue',
    label: 'Color as\nOnly Cue',
    definition: 'Tests ensure color is not the sole indicator for critical information.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Visual Consistency
  {
    id: 'visual_consistency',
    label: 'Visual\nConsistency',
    definition: 'Verifies consistent application of brand and theme colors across views and components.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'token_testing',
    label: 'Token\nValidation',
    definition: 'Ensures design tokens match design system expectations across breakpoints and themes.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'component_theme_tests',
    label: 'Component\nTheming Tests',
    definition: 'Evaluates how UI components adapt color across light/dark and brand themes.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // User Perception
  {
    id: 'user_perception',
    label: 'User\nPerception',
    definition: 'Evaluates how color choices affect user emotional response, clarity, and usability.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'a_b_testing',
    label: 'A/B Testing\nColor Variants',
    definition: 'Compare color variants for effectiveness (e.g., CTA click-through rates).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'usability_sessions',
    label: 'Usability\nSessions',
    definition: 'Observe users interacting with color-driven feedback and hierarchies.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Anti-Patterns
  {
    id: 'testing_missteps',
    label: 'Testing\nAnti-Patterns',
    definition: 'Flawed assumptions or incomplete testing methods in color evaluation.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'ignoring_real_devices',
    label: 'Ignoring\nDevice Differences',
    definition: 'Failure to test across varied displays, brightness, and ambient lighting conditions.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'no_manual_verification',
    label: 'No Manual\nVerification',
    definition: 'Over-reliance on automated tools without human review of actual context.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'overlooking_context',
    label: 'Overlooking\nContext',
    definition: 'Testing colors in isolation rather than within surrounding UI environments.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'accessibility_testing' },
  { source: 'root', target: 'visual_consistency' },
  { source: 'root', target: 'user_perception' },
  { source: 'root', target: 'testing_missteps' },

  { source: 'accessibility_testing', target: 'contrast_checkers' },
  { source: 'accessibility_testing', target: 'colorblind_simulators' },
  { source: 'accessibility_testing', target: 'color_as_cue' },

  { source: 'visual_consistency', target: 'token_testing' },
  { source: 'visual_consistency', target: 'component_theme_tests' },

  { source: 'user_perception', target: 'a_b_testing' },
  { source: 'user_perception', target: 'usability_sessions' },

  { source: 'testing_missteps', target: 'ignoring_real_devices' },
  { source: 'testing_missteps', target: 'no_manual_verification' },
  { source: 'testing_missteps', target: 'overlooking_context' },
];
