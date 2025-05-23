import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'WCAG\nConformance Levels',
    definition: 'Describes the three WCAG conformance levels—A, AA, and AAA—along with examples, use cases, and implementation strategies.',
    color: 'root',
    shape: 'roundRect',
  },

  // Level descriptions
  {
    id: 'level_a',
    label: 'Level A\n(Basic)',
    definition: 'Addresses the most fundamental accessibility requirements—essential for basic operability.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'level_aa',
    label: 'Level AA\n(Standard)',
    definition: 'The most widely adopted level; balances impact, feasibility, and legal compliance.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'level_aaa',
    label: 'Level AAA\n(Advanced)',
    definition: 'Provides the highest accessibility for users with severe disabilities but is not always feasible for all content.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },

  // Level A examples
  {
    id: 'a_alt_text',
    label: 'Text\nAlternatives',
    definition: 'Images require alt attributes. Without them, blind users get no information.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'a_keyboard',
    label: 'Keyboard\nAccess',
    definition: 'All functionality must be available via keyboard alone.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'a_title',
    label: 'Page\nTitles',
    definition: 'Each page must have a unique, descriptive <title> element.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Level AA examples
  {
    id: 'aa_contrast',
    label: 'Color\nContrast (4.5:1)',
    definition: 'Text must have adequate contrast against its background to ensure readability.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'aa_resize',
    label: 'Text\nResizing',
    definition: 'Text must be resizable up to 200% without loss of content or functionality.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'aa_focus',
    label: 'Focus\nVisible',
    definition: 'Keyboard focus must be visible and discernible.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Level AAA examples
  {
    id: 'aaa_contrast',
    label: 'High Contrast\n(7:1)',
    definition: 'Text contrast for AAA is stricter—7:1 for normal-sized text.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'aaa_sign_language',
    label: 'Sign Language\nSupport',
    definition: 'Provide sign language interpretation for pre-recorded media.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'aaa_no_timing',
    label: 'No Timing\nDependence',
    definition: 'Eliminate time limits unless essential for the activity.',
    color: 'nodePositive2',
    shape: 'rect',
  },

  // Strategic guidance
  {
    id: 'conformance_strategy',
    label: 'Strategic\nImplementation',
    definition: 'Organizations typically aim for Level AA; AAA is ideal for niche or mission-driven sites.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'audience_needs',
    label: 'Audience\nConsideration',
    definition: 'Conformance level depends on your users—e.g., aging population may require AAA contrast.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'resource_balance',
    label: 'Effort vs\nImpact',
    definition: 'Balance accessibility value with technical and design resources.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'level_a' },
  { source: 'root', target: 'level_aa' },
  { source: 'root', target: 'level_aaa' },
  { source: 'root', target: 'conformance_strategy' },

  { source: 'level_a', target: 'a_alt_text' },
  { source: 'level_a', target: 'a_keyboard' },
  { source: 'level_a', target: 'a_title' },

  { source: 'level_aa', target: 'aa_contrast' },
  { source: 'level_aa', target: 'aa_resize' },
  { source: 'level_aa', target: 'aa_focus' },

  { source: 'level_aaa', target: 'aaa_contrast' },
  { source: 'level_aaa', target: 'aaa_sign_language' },
  { source: 'level_aaa', target: 'aaa_no_timing' },

  { source: 'conformance_strategy', target: 'audience_needs' },
  { source: 'conformance_strategy', target: 'resource_balance' }
];
