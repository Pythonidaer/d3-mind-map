import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Interactive\nElements',
    shape: 'roundRect',
    color: 'root',
    definition: 'Components users directly interact with to trigger actions, provide input, receive feedback, or navigate the interface.',
  },

  // Level 1
  {
    id: 'form_inputs',
    label: 'Form\nInputs',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Fields and controls that allow users to input, submit, or edit data.',
  },
  {
    id: 'buttons_and_ctas',
    label: 'Buttons and\nCTAs',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Clickable elements that initiate actions or redirect users to important destinations.',
  },
  {
    id: 'feedback_and_status',
    label: 'Feedback and\nStatus',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'UI elements that inform users of system states, actions, or processes.',
  },
  {
    id: 'overlays_and_modals',
    label: 'Overlays and\nModals',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Interface layers that capture focus for notifications, forms, or deeper interaction.',
  },
  {
    id: 'tooltips_and_popovers',
    label: 'Tooltips and\nPopovers',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Small UI elements offering contextual help or details when hovering or focusing.',
  },
  {
    id: 'interactive_maps',
    label: 'Interactive\nMaps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Geographic or data maps that respond to user input and reveal location-based data.',
  },
  {
    id: 'transitions_and_animations',
    label: 'Transitions and\nAnimations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Motion elements that improve UX by reinforcing actions and guiding user attention.',
  },
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Anti-patterns or risks that emerge from misused interactivity or overdesign.',
  },

  // Form Inputs
  {
    id: 'text_fields',
    label: 'Text\nFields',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_inputs',
    definition: 'Input boxes for short or long text, often with validation and placeholder hints.',
  },
  {
    id: 'checkboxes_radios',
    label: 'Checkboxes and\nRadio Buttons',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_inputs',
    definition: 'Binary and grouped inputs for selecting one or multiple options.',
  },
  {
    id: 'dropdowns_and_selects',
    label: 'Dropdowns and\nSelects',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_inputs',
    definition: 'Menus that present multiple choices with a compact interface.',
  },
  {
    id: 'file_uploads',
    label: 'File\nUploads',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_inputs',
    definition: 'Inputs for submitting user files such as images, documents, or data.',
  },

  // Buttons and CTAs
  {
    id: 'primary_buttons',
    label: 'Primary\nButtons',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'buttons_and_ctas',
    definition: 'Main action buttons styled for prominence (e.g., “Submit”, “Next”).',
  },
  {
    id: 'secondary_buttons',
    label: 'Secondary\nButtons',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'buttons_and_ctas',
    definition: 'Less prominent or neutral actions (e.g., “Cancel”, “Back”).',
  },
  {
    id: 'icon_buttons',
    label: 'Icon\nButtons',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'buttons_and_ctas',
    definition: 'Compact buttons represented by an icon, often for utility functions.',
  },

  // Feedback and Status
  {
    id: 'loading_indicators',
    label: 'Loading\nIndicators',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'feedback_and_status',
    definition: 'Spinners, bars, or text showing that a process is in progress.',
  },
  {
    id: 'success_and_errors',
    label: 'Success and\nErrors',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'feedback_and_status',
    definition: 'Visual and textual signals confirming completion or failure of actions.',
  },
  {
    id: 'progress_bars',
    label: 'Progress\nBars',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'feedback_and_status',
    definition: 'Visual representation of how far a process or form has advanced.',
  },

  // Overlays and Modals
  {
    id: 'modal_windows',
    label: 'Modal\nWindows',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'overlays_and_modals',
    definition: 'Overlay dialogs used to capture attention and input without navigating away.',
  },
  {
    id: 'drawers_and_sidepanels',
    label: 'Drawers and\nSide Panels',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'overlays_and_modals',
    definition: 'Off-canvas panels that slide in with navigation, tools, or multi-step content.',
  },

  // Tooltips and Popovers
  {
    id: 'tooltips',
    label: 'Tooltips',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tooltips_and_popovers',
    definition: 'Small contextual labels appearing on hover or focus for brief info.',
  },
  {
    id: 'popovers',
    label: 'Popovers',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tooltips_and_popovers',
    definition: 'Expanded overlays showing more detailed contextual content or UI.',
  },

  // Interactive Maps
  {
    id: 'map_markers',
    label: 'Map\nMarkers',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactive_maps',
    definition: 'Points on a map representing data or locations.',
  },
  {
    id: 'map_filters',
    label: 'Map\nFilters',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'interactive_maps',
    definition: 'User-controlled filters that update map display based on attributes.',
  },

  // Transitions and Animations
  {
    id: 'hover_states',
    label: 'Hover\nStates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'transitions_and_animations',
    definition: 'Visual feedback when hovering over interactive elements.',
  },
  {
    id: 'entrance_animations',
    label: 'Entrance\nAnimations',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'transitions_and_animations',
    definition: 'Fade-in, slide-in, or scale-in effects to draw attention as elements load.',
  },
  {
    id: 'micro_interactions',
    label: 'Micro-\nInteractions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'transitions_and_animations',
    definition: 'Small animations or changes that respond to user actions and reinforce results.',
  },

  // Cons
  {
    id: 'too_many_modals',
    label: 'Too Many\nModals',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Stacking or overusing modals leads to poor navigation and context loss.',
  },
  {
    id: 'ambiguous_icons',
    label: 'Ambiguous\nIcons',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Icon-only UIs without labels confuse users and impair discoverability.',
  },
  {
    id: 'lack_of_feedback',
    label: 'Lack of\nFeedback',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Not informing users of success, errors, or in-progress states causes frustration.',
  },
  {
    id: 'excessive_animations',
    label: 'Excessive\nAnimations',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Overuse of transitions and motion can distract and degrade performance.',
  }
];

export const links = [
  { source: 'root', target: 'form_inputs' },
  { source: 'root', target: 'buttons_and_ctas' },
  { source: 'root', target: 'feedback_and_status' },
  { source: 'root', target: 'overlays_and_modals' },
  { source: 'root', target: 'tooltips_and_popovers' },
  { source: 'root', target: 'interactive_maps' },
  { source: 'root', target: 'transitions_and_animations' },
  { source: 'root', target: 'cons' },

  { source: 'form_inputs', target: 'text_fields' },
  { source: 'form_inputs', target: 'checkboxes_radios' },
  { source: 'form_inputs', target: 'dropdowns_and_selects' },
  { source: 'form_inputs', target: 'file_uploads' },

  { source: 'buttons_and_ctas', target: 'primary_buttons' },
  { source: 'buttons_and_ctas', target: 'secondary_buttons' },
  { source: 'buttons_and_ctas', target: 'icon_buttons' },

  { source: 'feedback_and_status', target: 'loading_indicators' },
  { source: 'feedback_and_status', target: 'success_and_errors' },
  { source: 'feedback_and_status', target: 'progress_bars' },

  { source: 'overlays_and_modals', target: 'modal_windows' },
  { source: 'overlays_and_modals', target: 'drawers_and_sidepanels' },

  { source: 'tooltips_and_popovers', target: 'tooltips' },
  { source: 'tooltips_and_popovers', target: 'popovers' },

  { source: 'interactive_maps', target: 'map_markers' },
  { source: 'interactive_maps', target: 'map_filters' },

  { source: 'transitions_and_animations', target: 'hover_states' },
  { source: 'transitions_and_animations', target: 'entrance_animations' },
  { source: 'transitions_and_animations', target: 'micro_interactions' },

  { source: 'cons', target: 'too_many_modals' },
  { source: 'cons', target: 'ambiguous_icons' },
  { source: 'cons', target: 'lack_of_feedback' },
  { source: 'cons', target: 'excessive_animations' }
];
