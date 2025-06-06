import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Writing\nTestable Code',
    definition:
      'Designing and structuring code to make it easy to test with automated tests.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'principles',
    label: 'Principles',
    definition: 'Key design principles that improve testability.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'singleResponsibility',
    label: 'Single Responsibility',
    definition:
      'Each module or function should do one thing. This simplifies testing by isolating behavior.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'looseCoupling',
    label: 'Loose Coupling',
    definition:
      'Minimize dependencies between components. Use interfaces or DI to test components independently.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'highCohesion',
    label: 'High Cohesion',
    definition:
      'Keep related logic together. Focused modules make setup and assertions easier in tests.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'pureFunctions',
    label: 'Pure Functions',
    definition:
      'Write side-effect-free logic when possible. These are easiest to test — inputs in, outputs out.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dependencyInjection',
    label: 'Dependency Injection',
    definition:
      'Pass dependencies instead of instantiating them. Enables mocking or stubbing in tests.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'strategies',
    label: 'Strategies',
    definition: 'Techniques and patterns to achieve testable code.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ioc',
    label: 'Inversion of Control',
    definition:
      'Let higher-level code control lower-level logic (e.g., provide a logger, not instantiate one).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'avoidGlobal',
    label: 'Avoid Global State',
    definition:
      'Global state makes test isolation hard. Prefer local or injected state.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'interfaces',
    label: 'Use Interfaces / Abstraction',
    definition:
      'Depend on abstractions so real implementations can be swapped with mocks.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'modular',
    label: 'Modularize Code',
    definition:
      'Split operations into small functions or modules that are easier to isolate and test.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'sideEffects',
    label: 'Controlled Side Effects',
    definition:
      'Encapsulate I/O or network logic in thin layers. Keep business logic pure.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'antiPatterns',
    label: 'Anti-Patterns',
    definition: 'Common patterns that make code hard to test.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'workInConstructor',
    label: 'Work in Constructors',
    definition:
      'Avoid heavy logic or external calls in constructors. They hinder instantiation during tests.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'hardCodedDeps',
    label: 'Hard-Coded \n Dependencies',
    definition:
      'Avoid creating objects directly in business logic. Use injection instead.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'brittleGlobals',
    label: 'Brittle Global State',
    definition:
      'Global config/state causes flaky tests depending on execution order.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'tooManyResponsibilities',
    label: 'Too Many \n Responsibilities',
    definition:
      'Break large classes/functions into smaller pieces to avoid bloated test setups.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'hiddenDeps',
    label: 'Hidden \n Dependencies',
    definition:
      'Code that reads files, fetches data, or mutates state silently is hard to test. Make it explicit.',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  {
    id: 'bestPractices',
    label: 'Best Practices',
    definition: 'Practical tips for writing testable code.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'favorComposition',
    label: 'Favor Composition over Inheritance',
    definition:
      'Composition allows replacing collaborators easily. Inheritance often increases test friction.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'seams',
    label: 'Seams for Testing',
    definition:
      'Design code to allow behavior injection (e.g., wrap Date.now in a function you can override).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'testFeedback',
    label: 'Use Test Feedback',
    definition:
      'If something is hard to test, take it as a code smell and refactor.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'layeredArch',
    label: 'Example: Layered Architecture',
    definition:
      'Split code into UI, service, and data layers. Each can be tested independently.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tooling',
    label: 'Tooling Help',
    definition:
      'Tools like linters, TypeScript, and DI frameworks can help enforce testable code.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'principles' },
  { source: 'principles', target: 'singleResponsibility' },
  { source: 'principles', target: 'looseCoupling' },
  { source: 'principles', target: 'highCohesion' },
  { source: 'principles', target: 'pureFunctions' },
  { source: 'principles', target: 'dependencyInjection' },

  { source: 'root', target: 'strategies' },
  { source: 'strategies', target: 'ioc' },
  { source: 'strategies', target: 'avoidGlobal' },
  { source: 'strategies', target: 'interfaces' },
  { source: 'strategies', target: 'modular' },
  { source: 'strategies', target: 'sideEffects' },

  { source: 'root', target: 'antiPatterns' },
  { source: 'antiPatterns', target: 'workInConstructor' },
  { source: 'antiPatterns', target: 'hardCodedDeps' },
  { source: 'antiPatterns', target: 'brittleGlobals' },
  { source: 'antiPatterns', target: 'tooManyResponsibilities' },
  { source: 'antiPatterns', target: 'hiddenDeps' },

  { source: 'root', target: 'bestPractices' },
  { source: 'bestPractices', target: 'favorComposition' },
  { source: 'bestPractices', target: 'seams' },
  { source: 'bestPractices', target: 'testFeedback' },
  { source: 'bestPractices', target: 'layeredArch' },
  { source: 'bestPractices', target: 'tooling' },
]
