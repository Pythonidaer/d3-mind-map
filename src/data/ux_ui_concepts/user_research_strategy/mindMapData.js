import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'User Research\nand Strategy',
    definition: 'The practice of understanding user behaviors, needs, goals, and context to guide design decisions.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'types_of_research',
    label: 'Types of\nUX Research',
    definition: 'Different approaches used to study user behavior, motivation, and satisfaction.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'research_methods',
    label: 'Research\nMethods',
    definition: 'Common tools and techniques used to gather user data, both qualitative and quantitative.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'personas',
    label: 'User\nPersonas',
    definition: 'Fictional yet research-based representations of target users that guide design choices.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'user_journeys_flows',
    label: 'Journeys &\nUser Flows',
    definition: 'Visual tools that map users’ experience over time and within a specific product path.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'competitive_analysis',
    label: 'Competitive\nAnalysis',
    definition: 'Evaluating competing products to identify strengths, weaknesses, and opportunities.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2s
  {
    id: 'attitudinal_behavioral',
    label: 'Attitudinal vs.\nBehavioral',
    definition: 'Listening to what users say (attitudinal) versus observing what they do (behavioral).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'moderated_unmoderated',
    label: 'Moderated vs.\nUnmoderated',
    definition: 'Whether the research is facilitated in real-time or completed independently by users.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'qual_vs_quant',
    label: 'Qualitative vs.\nQuantitative',
    definition: 'Qualitative explores “why” through depth; quantitative measures “how much” or “how many.”',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'interviews',
    label: 'User\nInterviews',
    definition: 'One-on-one conversations used to explore user motivations, needs, and perceptions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'usability_tests',
    label: 'Usability\nTesting',
    definition: 'Observe users trying to complete tasks to identify friction or confusion.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'surveys',
    label: 'UX\nSurveys',
    definition: 'Collect structured data from many users to identify trends and opinions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'persona_elements',
    label: 'Persona\nAttributes',
    definition: 'Goals, pain points, demographics, motivations, workflows, and context.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'persona_types',
    label: 'Types of\nPersonas',
    definition: 'Lightweight (proto), qualitative, and statistical/mixed-method personas.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'journey_maps',
    label: 'User\nJourney Maps',
    definition: 'Broad visualizations of user experiences across multiple touchpoints.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'user_flows',
    label: 'Task-Based\nUser Flows',
    definition: 'Step-by-step diagrams of how users complete a single goal in the product.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'research_benefits',
    label: 'Benefits of\nUser Research',
    definition: 'Validates decisions, reduces risk, and cultivates empathy and insight.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'research_process',
    label: 'Research\nProcess',
    definition: 'Define goals, choose methods, recruit users, analyze results, share findings.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 3s
  {
    id: 'participatory_design',
    label: 'Participatory\nDesign',
    definition: 'Includes users as co-designers in shaping features and interfaces.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'diary_studies',
    label: 'Diary\nStudies',
    definition: 'Participants record thoughts and interactions over time, revealing habits and patterns.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'contextual_inquiry',
    label: 'Contextual\nInquiry',
    definition: 'Observe and interview users in their natural environment to uncover real-world needs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ab_testing',
    label: 'A/B\nTesting',
    definition: 'Test multiple versions of a design to determine which performs better.',
    shape: 'rect',
    color: 'nodePositive2',
  },
];

export const links = [
  { source: 'root', target: 'types_of_research' },
  { source: 'root', target: 'research_methods' },
  { source: 'root', target: 'personas' },
  { source: 'root', target: 'user_journeys_flows' },
  { source: 'root', target: 'competitive_analysis' },

  { source: 'types_of_research', target: 'attitudinal_behavioral' },
  { source: 'types_of_research', target: 'moderated_unmoderated' },
  { source: 'types_of_research', target: 'qual_vs_quant' },

  { source: 'research_methods', target: 'interviews' },
  { source: 'research_methods', target: 'usability_tests' },
  { source: 'research_methods', target: 'surveys' },
  { source: 'research_methods', target: 'ab_testing' },
  { source: 'research_methods', target: 'diary_studies' },
  { source: 'research_methods', target: 'contextual_inquiry' },
  { source: 'research_methods', target: 'participatory_design' },

  { source: 'personas', target: 'persona_elements' },
  { source: 'personas', target: 'persona_types' },

  { source: 'user_journeys_flows', target: 'journey_maps' },
  { source: 'user_journeys_flows', target: 'user_flows' },

  { source: 'root', target: 'research_benefits' },
  { source: 'root', target: 'research_process' },
];
