import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Modular\nDesign',
    definition: 'A software architecture strategy that emphasizes dividing functionality into interchangeable, reusable, and self-contained modules or components.',
    shape: 'roundRect',
    color: 'root',
  },

  // Positive Nodes
  {
    id: 'componentization',
    label: 'Component-\nBased',
    definition: 'Breaking UI into discrete, reusable units that encapsulate logic, structure, and style.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'separation_of_concerns',
    label: 'Separation of\nConcerns',
    definition: 'Each module addresses a single responsibility (e.g., display, logic, state).',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'scalability',
    label: 'Scalability &\nMaintainability',
    definition: 'Modular design supports growth and easier refactoring.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'extensibility',
    label: 'Extensibility &\nReusability',
    definition: 'Modules can be reused across views, products, or platforms with minimal change.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Componentization Children
  {
    id: 'atomic_design',
    label: 'Atomic\nDesign',
    definition: 'A methodology dividing UI into atoms, molecules, organisms, templates, and pages.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'slot_patterns',
    label: 'Slot &\nComposition',
    definition: 'Patterns like children-as-function or slot props allow flexible content injection.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'presentational_vs_container',
    label: 'Presentational vs\nContainer',
    definition: 'Separating pure visual components from stateful or connected ones.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Separation of Concerns Children
  {
    id: 'logic_separation',
    label: 'Logic\nSeparation',
    definition: 'Extracting business logic into hooks, services, or utility files.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'layout_vs_content',
    label: 'Layout vs\nContent',
    definition: 'Organizing layout wrappers separately from content blocks or sections.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Scalability Children
  {
    id: 'directory_structure',
    label: 'Project\nStructure',
    definition: 'Organizing code by feature, domain, or slice for long-term scalability.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dependency_injection',
    label: 'Decoupled\nDependencies',
    definition: 'Reducing tight coupling through patterns like dependency injection or inversion of control.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Extensibility Children
  {
    id: 'shared_library',
    label: 'Component\nLibraries',
    definition: 'Creating shared libraries for design systems, widgets, or dashboard tools.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'plugin_architecture',
    label: 'Plugin-\nLike Modules',
    definition: 'Allowing isolated modules to be plugged in without affecting the core.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Cons
  {
    id: 'modular_cons',
    label: 'Cons',
    definition: 'Drawbacks and risks associated with modular design.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'overengineering',
    label: 'Over-\nEngineering',
    definition: 'Too much abstraction for simple use cases can slow teams down.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'fragmentation',
    label: 'Fragmentation &\nInconsistency',
    definition: 'Without standards, modules may diverge in style, naming, and behavior.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'onboarding_cost',
    label: 'High\nOnboarding Cost',
    definition: 'New developers may struggle to understand structure and flows across many modules.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'componentization' },
  { source: 'root', target: 'separation_of_concerns' },
  { source: 'root', target: 'scalability' },
  { source: 'root', target: 'extensibility' },
  { source: 'root', target: 'modular_cons' },

  { source: 'componentization', target: 'atomic_design' },
  { source: 'componentization', target: 'slot_patterns' },
  { source: 'componentization', target: 'presentational_vs_container' },

  { source: 'separation_of_concerns', target: 'logic_separation' },
  { source: 'separation_of_concerns', target: 'layout_vs_content' },

  { source: 'scalability', target: 'directory_structure' },
  { source: 'scalability', target: 'dependency_injection' },

  { source: 'extensibility', target: 'shared_library' },
  { source: 'extensibility', target: 'plugin_architecture' },

  { source: 'modular_cons', target: 'overengineering' },
  { source: 'modular_cons', target: 'fragmentation' },
  { source: 'modular_cons', target: 'onboarding_cost' }
];
