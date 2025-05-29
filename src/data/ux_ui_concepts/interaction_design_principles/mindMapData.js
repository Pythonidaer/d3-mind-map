import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Interaction\nDesign Principles',
    definition: 'Guidelines and mental models for creating meaningful, usable, and intuitive user interactions.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'five_dimensions',
    label: '5 Dimensions\nof IxD',
    definition: 'Core dimensions that define interaction design: words, visuals, physical objects, time, and behavior.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'interaction_goals',
    label: 'Goals of\nInteraction Design',
    definition: 'Ensure that the product is usable, learnable, effective, and emotionally resonant.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'principles_usability',
    label: 'Usability\nPrinciples',
    definition: 'Heuristics and rules of thumb that guide user-centered design decisions.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'principles_feedback',
    label: 'Feedback\n& Response',
    definition: 'The system must provide timely, informative responses to user actions.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'principles_consistency',
    label: 'Consistency\n& Standards',
    definition: 'Elements should behave and appear in familiar ways across the interface.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'principles_affordance',
    label: 'Affordance\n& Signifiers',
    definition: 'Elements should visually indicate how they can be used (e.g., clickable buttons).',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2s
  {
    id: 'dimension_words',
    label: 'Words',
    definition: 'Microcopy, labels, and calls-to-action that guide and inform the user.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dimension_visuals',
    label: 'Visual\nRepresentations',
    definition: 'Icons, images, and graphic elements that support interaction.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dimension_physical',
    label: 'Physical\nObjects',
    definition: 'Devices, hardware, and input mechanisms (e.g., touchscreen vs. mouse).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dimension_time',
    label: 'Time',
    definition: 'Changes over time such as animations, progress indicators, and transitions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dimension_behavior',
    label: 'Behavior',
    definition: 'The logic, flow, and system responses behind user actions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'feedback_loading',
    label: 'Loading\nIndicators',
    definition: 'Communicate that a process is occurring after user input.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'feedback_confirmation',
    label: 'Action\nConfirmation',
    definition: 'Provide feedback to confirm an action has occurred (e.g., "Saved!").',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'consistency_ui',
    label: 'UI\nConsistency',
    definition: 'Uniform placement, styling, and behavior of components.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'consistency_patterns',
    label: 'Design\nPatterns',
    definition: 'Reuse proven interaction models to improve predictability.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'affordance_buttons',
    label: 'Button\nAffordance',
    definition: 'Buttons should look clickable with shadows, borders, or hover states.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'affordance_inputs',
    label: 'Input\nSignifiers',
    definition: 'Input fields should clearly signal where data is expected.',
    shape: 'rect',
    color: 'nodePositive2',
  },
];

export const links = [
  { source: 'root', target: 'five_dimensions' },
  { source: 'root', target: 'interaction_goals' },
  { source: 'root', target: 'principles_usability' },
  { source: 'root', target: 'principles_feedback' },
  { source: 'root', target: 'principles_consistency' },
  { source: 'root', target: 'principles_affordance' },

  { source: 'five_dimensions', target: 'dimension_words' },
  { source: 'five_dimensions', target: 'dimension_visuals' },
  { source: 'five_dimensions', target: 'dimension_physical' },
  { source: 'five_dimensions', target: 'dimension_time' },
  { source: 'five_dimensions', target: 'dimension_behavior' },

  { source: 'principles_feedback', target: 'feedback_loading' },
  { source: 'principles_feedback', target: 'feedback_confirmation' },

  { source: 'principles_consistency', target: 'consistency_ui' },
  { source: 'principles_consistency', target: 'consistency_patterns' },

  { source: 'principles_affordance', target: 'affordance_buttons' },
  { source: 'principles_affordance', target: 'affordance_inputs' },
];
