import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Usability and Accessibility',
    shape: 'roundRect',
    color: 'root',
    definition: 'Design practices ensuring interfaces are effective, efficient, satisfying, and usable by all people, including those with disabilities.'
  },

  // Usability Branch
  {
    id: 'usability',
    label: 'Usability',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The degree to which a product can be used efficiently, effectively, and satisfactorily by specified users.'
  },
  {
    id: 'learnability',
    label: 'Learnability',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'How easily users can understand and begin using an interface on first contact.'
  },
  {
    id: 'efficiency',
    label: 'Efficiency',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'How quickly users can perform tasks once they are familiar with the interface.'
  },
  {
    id: 'error_prevention',
    label: 'Error\nPrevention',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Design strategies that minimize the chance of user errors and make them easy to recover from.'
  },
  {
    id: 'satisfaction',
    label: 'User\nSatisfaction',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'The emotional response users have to the interface, including comfort, trust, and delight.'
  },

  // Accessibility Branch
  {
    id: 'accessibility',
    label: 'Accessibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The practice of making digital content and interfaces usable by people with a wide range of abilities and disabilities.'
  },
  {
    id: 'wcag_guidelines',
    label: 'WCAG\nGuidelines',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'The Web Content Accessibility Guidelines, a global standard for accessible digital experiences.'
  },
  {
    id: 'semantic_html',
    label: 'Semantic HTML',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Using HTML tags properly to convey document structure and improve accessibility.'
  },
  {
    id: 'keyboard_navigation',
    label: 'Keyboard\nNavigation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Ensuring all interface functions are usable without a mouse, via keyboard-only input.'
  },
  {
    id: 'screen_reader_support',
    label: 'Screen Reader\nSupport',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Implementing ARIA roles, labels, and focus states to allow assistive technologies to interpret UI content.'
  },

  // Overlap Branch
  {
    id: 'usability_accessibility_overlap',
    label: 'Shared\nPrinciples',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Areas where usability and accessibility reinforce each other, such as clarity, affordance, and navigation.'
  },
  {
    id: 'clear_affordances',
    label: 'Clear\nAffordances',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Visual cues that signal how UI elements can be interacted with.'
  },
  {
    id: 'consistent_navigation',
    label: 'Consistent\nNavigation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Standardized menus and layout patterns that support predictable user behavior.'
  },
  {
    id: 'feedback_mechanisms',
    label: 'Feedback\nMechanisms',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Providing users with confirmation, alerts, and responses to their actions.'
  },

  // Cons
  {
    id: 'usability_cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Challenges or limitations in implementing usability and accessibility standards effectively.'
  },
  {
    id: 'testing_costs',
    label: 'Testing\nTime/Cost',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Thorough usability and accessibility testing requires time, budget, and representative users.'
  },
  {
    id: 'design_tradeoffs',
    label: 'Design\nTradeoffs',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Accessibility requirements may sometimes constrain aesthetic or animation choices.'
  },
  {
    id: 'retrofit_difficulty',
    label: 'Retrofitting\nLegacy UI',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Adding accessibility to existing systems can be time-consuming and complex.'
  }
];

export const links = [
  { source: 'root', target: 'usability' },
  { source: 'usability', target: 'learnability' },
  { source: 'usability', target: 'efficiency' },
  { source: 'usability', target: 'error_prevention' },
  { source: 'usability', target: 'satisfaction' },

  { source: 'root', target: 'accessibility' },
  { source: 'accessibility', target: 'wcag_guidelines' },
  { source: 'accessibility', target: 'semantic_html' },
  { source: 'accessibility', target: 'keyboard_navigation' },
  { source: 'accessibility', target: 'screen_reader_support' },

  { source: 'root', target: 'usability_accessibility_overlap' },
  { source: 'usability_accessibility_overlap', target: 'clear_affordances' },
  { source: 'usability_accessibility_overlap', target: 'consistent_navigation' },
  { source: 'usability_accessibility_overlap', target: 'feedback_mechanisms' },

  { source: 'root', target: 'usability_cons' },
  { source: 'usability_cons', target: 'testing_costs' },
  { source: 'usability_cons', target: 'design_tradeoffs' },
  { source: 'usability_cons', target: 'retrofit_difficulty' }
];
