import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Prototyping\n& Wireframing',
    shape: 'roundRect',
    color: 'root',
    definition: 'The process of planning, sketching, and testing interactive experiences before full development.'
  },

  // Positive Level 1
  {
    id: 'types_of_wireframes',
    label: 'Types of\nWireframes',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Different levels of fidelity used to represent design ideas, structure, and content hierarchy.'
  },
  {
    id: 'types_of_prototypes',
    label: 'Types of\nPrototypes',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Varieties of interactive simulations used to test functionality, flows, and UX logic.'
  },
  {
    id: 'tools_and_platforms',
    label: 'Tools &\nPlatforms',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Software used to create, collaborate, and iterate on wireframes and prototypes.'
  },
  {
    id: 'team_workflows',
    label: 'Team\nWorkflows',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Collaborative processes for integrating wireframes and prototypes across teams and phases.'
  },
  {
    id: 'testing_and_validation',
    label: 'Testing &\nValidation',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Techniques for gathering feedback on wireframes or prototypes to refine user experience.'
  },

  // Positive Level 2 (children)
  {
    id: 'low_fidelity',
    label: 'Low-Fidelity\nWireframes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Simple sketches or grayscale mockups showing layout without final content or branding.'
  },
  {
    id: 'mid_fidelity',
    label: 'Mid-Fidelity\nWireframes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'More refined layouts including real copy, interface hierarchy, and early interactivity.'
  },
  {
    id: 'high_fidelity',
    label: 'High-Fidelity\nWireframes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pixel-perfect representations of screens with real data, branding, and typography.'
  },
  {
    id: 'click_through_prototypes',
    label: 'Click-Through\nPrototypes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Linked screens simulating user flow with limited logic, used for basic usability testing.'
  },
  {
    id: 'interactive_prototypes',
    label: 'Interactive\nPrototypes',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Functional prototypes with conditional logic, dynamic states, and transitions.'
  },
  {
    id: 'fidelity_levels',
    label: 'Fidelity\nContinuum',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'The spectrum from low to high fidelity used strategically across design phases.'
  },
  {
    id: 'figma_tools',
    label: 'Figma &\nVariants',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Popular tools like Figma, Adobe XD, Sketch, or Axure used for design and interactivity.'
  },
  {
    id: 'design_handoff',
    label: 'Design-to-Dev\nHandoff',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Process for preparing and exporting assets, specs, and behavior to developers.'
  },
  {
    id: 'usability_tests',
    label: 'Usability\nTests',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Sessions where real users interact with prototypes to uncover friction and confusion.'
  },
  {
    id: 'a_b_testing',
    label: 'A/B or\nPreference Testing',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Comparative tests to validate design decisions between two or more interface versions.'
  },

  // Negative Level 1
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Tradeoffs or limitations in using wireframes and prototypes during design.'
  },
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes that harm the effectiveness or clarity of wireframes or prototypes.'
  },

  // Negative Level 2
  {
    id: 'false_validation',
    label: 'False Sense\nof Validation',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Believing a prototype’s success guarantees production success, ignoring edge cases.'
  },
  {
    id: 'fidelity_trap',
    label: 'Fidelity\nTrap',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Spending too much time polishing visuals instead of validating user flow or function.'
  },
  {
    id: 'confusing_clients',
    label: 'Confusing\nStakeholders',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'When stakeholders interpret wireframes as final designs and critique details prematurely.'
  },
  {
    id: 'click_dummy_risks',
    label: 'Unclear\nInteraction States',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Static prototypes that don’t convey error states or dynamic behavior may mislead testing.'
  }
];

export const links = [
  { source: 'root', target: 'types_of_wireframes' },
  { source: 'root', target: 'types_of_prototypes' },
  { source: 'root', target: 'tools_and_platforms' },
  { source: 'root', target: 'team_workflows' },
  { source: 'root', target: 'testing_and_validation' },

  { source: 'types_of_wireframes', target: 'low_fidelity' },
  { source: 'types_of_wireframes', target: 'mid_fidelity' },
  { source: 'types_of_wireframes', target: 'high_fidelity' },

  { source: 'types_of_prototypes', target: 'click_through_prototypes' },
  { source: 'types_of_prototypes', target: 'interactive_prototypes' },
  { source: 'types_of_prototypes', target: 'fidelity_levels' },

  { source: 'tools_and_platforms', target: 'figma_tools' },

  { source: 'team_workflows', target: 'design_handoff' },

  { source: 'testing_and_validation', target: 'usability_tests' },
  { source: 'testing_and_validation', target: 'a_b_testing' },

  { source: 'root', target: 'cons' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'cons', target: 'false_validation' },
  { source: 'cons', target: 'fidelity_trap' },

  { source: 'anti_patterns', target: 'confusing_clients' },
  { source: 'anti_patterns', target: 'click_dummy_risks' }
];
