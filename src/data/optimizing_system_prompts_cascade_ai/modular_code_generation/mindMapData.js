import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Modular Code\nGeneration',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Prompting strategies to encourage Cascade AI to produce modular, reusable, and maintainable code structures.',
  },
  {
    id: 'explicit_modularity',
    label: 'Explicit\nModularity',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Instruct the model to write modular code with clear separation of concerns and reusable components.',
  },
  {
    id: 'function_class_decomposition',
    label: 'Function/Class\nDecomposition',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Guide the AI to break down logic into small, single-responsibility functions and classes.',
  },
  {
    id: 'modules_and_packages',
    label: 'Modules and\nPackages',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Encourage organizing code into logical modules or packages, especially in large projects.',
  },
  {
    id: 'design_patterns',
    label: 'Design\nPatterns',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Ask the model to use well-known design patterns like Factory, Strategy, or Observer for structure and reusability.',
  },
  {
    id: 'interface_specifications',
    label: 'Interface\nSpecifications',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Provide or request clear interfaces between components to improve readability and testability.',
  },
  {
    id: 'dependency_injection',
    label: 'Dependency\nInjection',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Prompt the use of dependency injection to pass services or data into modules rather than hardcoding them.',
  },
  {
    id: 'code_examples',
    label: 'Code\nExamples',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Include examples of modular code structures to guide the model’s output.',
  },
  {
    id: 'chain_of_thought_plan',
    label: 'Chain of Thought\nPlanning',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Ask the model to outline the modular structure and plan responsibilities before writing code.',
  },
  // Level 2 Nodes
  {
    id: 'reuse_emphasis',
    label: 'Emphasize\nReusability',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'explicit_modularity',
    definition:
      'Highlight that code should be written once and reused across modules rather than duplicated.',
  },
  {
    id: 'single_responsibility',
    label: 'Single\nResponsibility',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'function_class_decomposition',
    definition:
      'Ensure each function or class focuses on one specific task or concept only.',
  },
  {
    id: 'loose_coupling',
    label: 'Loose\nCoupling',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'interface_specifications',
    definition:
      'Encourage interfaces that reduce tight dependencies and improve flexibility of module interactions.',
  },
  {
    id: 'factory_pattern',
    label: 'Factory\nPattern',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'design_patterns',
    definition:
      'Request use of the Factory pattern to encapsulate object creation in a reusable, centralized way.',
  },
  {
    id: 'strategy_pattern',
    label: 'Strategy\nPattern',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'design_patterns',
    definition:
      'Use the Strategy pattern to allow behavior switching at runtime through interchangeable components.',
  },
]

export const links = [
  { source: 'root', target: 'explicit_modularity' },
  { source: 'root', target: 'function_class_decomposition' },
  { source: 'root', target: 'modules_and_packages' },
  { source: 'root', target: 'design_patterns' },
  { source: 'root', target: 'interface_specifications' },
  { source: 'root', target: 'dependency_injection' },
  { source: 'root', target: 'code_examples' },
  { source: 'root', target: 'chain_of_thought_plan' },
  { source: 'explicit_modularity', target: 'reuse_emphasis' },
  { source: 'function_class_decomposition', target: 'single_responsibility' },
  { source: 'interface_specifications', target: 'loose_coupling' },
  { source: 'design_patterns', target: 'factory_pattern' },
  { source: 'design_patterns', target: 'strategy_pattern' },
]
