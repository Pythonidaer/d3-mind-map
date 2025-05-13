import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Leveraging\nFigma Prototypes',
    shape: 'roundRect',
    color: 'root',
    definition: 'Features for building and testing interactive prototypes in Figma.',
  },

  // Positive Level 1
  {
    id: 'prototype_flows',
    label: 'Prototype\nFlows',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Define navigation paths and entry points to simulate user journeys.',
  },
  {
    id: 'prototype_triggers',
    label: 'Triggers\n& Actions',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Events that initiate interactions, like taps, hovers, or swipes.',
  },
  {
    id: 'prototype_animations',
    label: 'Animations\n& Transitions',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Visual effects that provide feedback between frames.',
  },
  {
    id: 'interactive_playground',
    label: 'Interactive\nPlayground',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Built-in preview and sharing tools for testing prototypes.',
  },

  // Positive Level 2 elaborations
  // Prototype Flows children
  {
    id: 'flow_startpoints',
    label: 'Start\nPoints',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prototype_flows',
    definition: 'Designate entry frames that kick off the user flow.',
  },
  {
    id: 'flow_transitions',
    label: 'Frame\nConnections',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prototype_flows',
    definition: 'Link frames to represent navigation and screen changes.',
  },

  // Triggers & Actions children
  {
    id: 'tap_hover',
    label: 'Tap/\nHover',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prototype_triggers',
    definition: 'Use click or hover triggers to show next screen or overlay.',
  },
  {
    id: 'drag_swipe',
    label: 'Drag/\nSwipe',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prototype_triggers',
    definition: 'Implement drag or swipe gestures for carousels and panels.',
  },

  // Animations & Transitions children
  {
    id: 'instant_dissolve',
    label: 'Instant\nSwitch',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prototype_animations',
    definition: 'Navigate frames without any animation for immediate feedback.',
  },
  {
    id: 'smart_animate',
    label: 'Smart\nAnimate',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'prototype_animations',
    definition: 'Interpolate changes (position, size, opacity) for smooth transitions.',
  },

  // Interactive Playground children
  {
    id: 'preview_mode',
    label: 'Preview\nMode',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactive_playground',
    definition: 'Test the prototype in Figma’s built-in player with device frames.',
  },
  {
    id: 'share_links',
    label: 'Share\nLinks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactive_playground',
    definition: 'Generate URLs to invite stakeholders for live prototype review.',
  },

  // Negative Level 1 (anti-patterns)
  {
    id: 'ignoring_prototypes',
    label: 'Ignoring\nPrototypes',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Skipping prototype creation leads to unclear interactions.',
  },
  {
    id: 'broken_flows',
    label: 'Broken\nFlows',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Incomplete or incorrect links disrupt user journeys.',
  },
  {
    id: 'janky_transitions',
    label: 'Janky\nTransitions',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Inconsistent animations cause confusion and performance concerns.',
  },
  {
    id: 'no_preview_testing',
    label: 'No Preview\nTesting',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Not previewing prototypes results in missed usability issues.',
  },

  // Negative Level 2 elaborations
  {
    id: 'no_user_testing',
    label: 'No\nUser Testing',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_prototypes',
    definition: 'Lack of prototype testing means no real-user feedback is gathered.',
  },
  {
    id: 'miscommunication',
    label: 'Miscommunication',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_prototypes',
    definition: 'Without a live prototype, teams misunderstand intended behaviors.',
  },

  {
    id: 'dead_ends',
    label: 'Dead\nEnds',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'broken_flows',
    definition: 'Flows that lack outgoing links leave users stuck on screens.',
  },
  {
    id: 'loop_issues',
    label: 'Loop\nIssues',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'broken_flows',
    definition: 'Incorrect links can cause prototypes to loop indefinitely.',
  },

  {
    id: 'laggy_animations',
    label: 'Laggy\nAnimations',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'janky_transitions',
    definition: 'Excessive or complex animations slow down prototype playback.',
  },
  {
    id: 'inconsistent_timing',
    label: 'Inconsistent\nTiming',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'janky_transitions',
    definition: 'Uneven easing or durations feel unprofessional and distracting.',
  },

  {
    id: 'no_device_testing',
    label: 'No Device\nTesting',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'no_preview_testing',
    definition: 'Failing to test in device frames hides responsive or UI glitches.',
  },
  {
    id: 'outdated_links',
    label: 'Outdated\nLinks',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'no_preview_testing',
    definition: 'Sharing old prototype versions leads to feedback on stale designs.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'prototype_flows' },
  { source: 'root', target: 'prototype_triggers' },
  { source: 'root', target: 'prototype_animations' },
  { source: 'root', target: 'interactive_playground' },

  // Positive Level 1 → Level 2 elaborations
  { source: 'prototype_flows', target: 'flow_startpoints' },
  { source: 'prototype_flows', target: 'flow_transitions' },

  { source: 'prototype_triggers', target: 'tap_hover' },
  { source: 'prototype_triggers', target: 'drag_swipe' },

  { source: 'prototype_animations', target: 'instant_dissolve' },
  { source: 'prototype_animations', target: 'smart_animate' },

  { source: 'interactive_playground', target: 'preview_mode' },
  { source: 'interactive_playground', target: 'share_links' },

  // Root → Negative Level 1
  { source: 'root', target: 'ignoring_prototypes' },
  { source: 'root', target: 'broken_flows' },
  { source: 'root', target: 'janky_transitions' },
  { source: 'root', target: 'no_preview_testing' },

  // Negative Level 1 → Level 2 elaborations
  { source: 'ignoring_prototypes', target: 'no_user_testing' },
  { source: 'ignoring_prototypes', target: 'miscommunication' },

  { source: 'broken_flows', target: 'dead_ends' },
  { source: 'broken_flows', target: 'loop_issues' },

  { source: 'janky_transitions', target: 'laggy_animations' },
  { source: 'janky_transitions', target: 'inconsistent_timing' },

  { source: 'no_preview_testing', target: 'no_device_testing' },
  { source: 'no_preview_testing', target: 'outdated_links' }
];
