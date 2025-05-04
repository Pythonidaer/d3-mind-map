// mindMapData.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'SOLID Principles',
    definition: 'Five design principles to make software designs more understandable, flexible, and maintainable.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'srp',
    label: 'Single Responsibility\nPrinciple',
    definition: 'A class or module should have only one reason to change, meaning it has only one responsibility.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ocp',
    label: 'Open/Closed\nPrinciple',
    definition: 'Software entities should be open for extension but closed for modification.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'lsp',
    label: 'Liskov Substitution\nPrinciple',
    definition: 'Subtypes must be substitutable for their base types without altering correct behavior.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'isp',
    label: 'Interface Segregation\nPrinciple',
    definition: 'Clients should not be forced to depend on interfaces they do not use.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'dip',
    label: 'Dependency Inversion\nPrinciple',
    definition: 'High-level modules should not depend on low-level modules; both should depend on abstractions.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // SRP children
  {
    id: 'srpResponsibility',
    label: 'Responsibility',
    definition: 'Focus each class or module on one well-defined task.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'srpReasonsToChange',
    label: 'Reasons to Change',
    definition: 'A single responsibility implies a single reason for the module to change.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'srpExampleSplit',
    label: 'Example Split',
    definition: 'Separate validation, data access, and UI rendering into distinct modules.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'srpBenefits',
    label: 'Benefits',
    definition: 'Improves readability, testability, and reduces ripple effects when requirements change.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // OCP children
  {
    id: 'ocpExtension',
    label: 'Extension',
    definition: 'Add new behavior without altering existing code.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ocpAvoidModification',
    label: 'Avoid Modification',
    definition: 'Existing code remains untouched, reducing risk of bugs.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ocpStrategies',
    label: 'Common Strategies',
    definition: 'Use interfaces, abstract classes, or dependency injection to allow extension.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ocpExamples',
    label: 'Examples',
    definition: 'Instead of modifying a payment processor, add new classes for PayPal or Stripe.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // LSP children
  {
    id: 'lspSubstitution',
    label: 'Substitution',
    definition: 'Replace a base class with a subclass without breaking the program.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'lspContract',
    label: 'Behavioral Contracts',
    definition: 'Subclasses must honor the expected behavior and contracts of the parent class.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'lspViolations',
    label: 'Common Violations',
    definition: 'Overriding methods to throw errors or break assumptions about return values.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'lspExample',
    label: 'Example',
    definition: '`Rectangle` vs `Square` with setters that break expected geometry behavior.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // ISP children
  {
    id: 'ispSegregation',
    label: 'Segregation',
    definition: 'Split large interfaces into smaller, more specific ones.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ispFatInterfaces',
    label: 'Fat Interfaces',
    definition: 'Interfaces that contain methods not relevant to all implementers.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ispSplitInterfaces',
    label: 'Split Interfaces',
    definition: 'Create focused contracts like `IPrinter` and `IScanner` instead of one large `IMachine`.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'ispExample',
    label: 'Example',
    definition: 'A printer class shouldn’t implement scanning or faxing methods it doesn’t use.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // DIP children
  {
    id: 'dipAbstraction',
    label: 'Abstractions First',
    definition: 'Depend on interfaces or abstract classes instead of concrete implementations.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dipHighLow',
    label: 'High vs Low-Level',
    definition: 'High-level policy shouldn’t depend on low-level details like file systems.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dipInjection',
    label: 'Dependency Injection',
    definition: 'Pass dependencies via constructors or factories instead of creating them inside classes.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'dipExample',
    label: 'Example',
    definition: 'A service should use a `DatabaseInterface` rather than instantiate `MySQLDatabase` directly.',
    shape: 'rect',
    color: 'nodePositive2',
  },
];

export const links = [
  { source: 'root', target: 'srp' },
  { source: 'root', target: 'ocp' },
  { source: 'root', target: 'lsp' },
  { source: 'root', target: 'isp' },
  { source: 'root', target: 'dip' },

  { source: 'srp', target: 'srpResponsibility' },
  { source: 'srp', target: 'srpReasonsToChange' },
  { source: 'srp', target: 'srpExampleSplit' },
  { source: 'srp', target: 'srpBenefits' },

  { source: 'ocp', target: 'ocpExtension' },
  { source: 'ocp', target: 'ocpAvoidModification' },
  { source: 'ocp', target: 'ocpStrategies' },
  { source: 'ocp', target: 'ocpExamples' },

  { source: 'lsp', target: 'lspSubstitution' },
  { source: 'lsp', target: 'lspContract' },
  { source: 'lsp', target: 'lspViolations' },
  { source: 'lsp', target: 'lspExample' },

  { source: 'isp', target: 'ispSegregation' },
  { source: 'isp', target: 'ispFatInterfaces' },
  { source: 'isp', target: 'ispSplitInterfaces' },
  { source: 'isp', target: 'ispExample' },

  { source: 'dip', target: 'dipAbstraction' },
  { source: 'dip', target: 'dipHighLow' },
  { source: 'dip', target: 'dipInjection' },
  { source: 'dip', target: 'dipExample' },
];