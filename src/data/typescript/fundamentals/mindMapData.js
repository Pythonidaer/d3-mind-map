// mindMapData.js
import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'TS\nFundamentals',
    definition: 'Core features of TypeScript that extend JavaScript',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'static-typing',
    label: 'Static\nTyping',
    definition: 'Optional type annotations and compile-time type checking',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'basic-syntax',
    label: 'Basic\nSyntax',
    definition: 'Familiar JS constructs extended with type syntax',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'classes-oop',
    label: 'Classes &\nOOP',
    definition: 'Class-based inheritance, access modifiers, and interfaces',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'enums',
    label: 'Enums',
    definition: 'Named constants for improved readability',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'generics',
    label: 'Generics',
    definition: 'Reusable components with type parameters',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'decorators',
    label: 'Decorators',
    definition: 'Meta-programming via @expression syntax',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'modules-namespaces',
    label: 'Modules &\nNamespaces',
    definition: 'Code organization via ES modules or TS namespaces',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'control-flow',
    label: 'Control\nFlow Analysis',
    definition: 'Type inference and narrowing through program logic',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'syntactic-sugar',
    label: 'Syntactic\nSugar',
    definition: 'Concise syntax like arrow functions and template literals',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'benefits-pros',
    label: 'Benefits/\nPros',
    definition: 'Advantages of TypeScript fundamentals',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'cons',
    label: 'Cons',
    definition: 'Drawbacks to consider when using TypeScript fundamentals',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'anti-patterns',
    label: 'Anti-\nPatterns',
    definition: 'Common mistakes to avoid',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Level 2 Expansions
  {
    id: 'explicit_annotations',
    label: 'Explicit\nAnnotations',
    definition: 'Specify types explicitly with colon syntax',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'type_inference',
    label: 'Type\nInference',
    definition: 'Compiler deduces types from contextual usage',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'generic_functions',
    label: 'Generic\nFunctions',
    definition: 'Functions parameterized by types',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'generic_classes',
    label: 'Generic\nClasses',
    definition: 'Classes parameterized by type variables',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 3 Expansions
  {
    id: 'contextual_typing',
    label: 'Contextual\nTyping',
    definition: 'Type inference based on expression context',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'generic_constraints',
    label: 'Generic\nConstraints',
    definition: 'Use extends to restrict generic types',
    shape: 'diamond',
    color: 'nodePositive3',
  },
]

export const links = [
  // Core concepts
  { source: 'root', target: 'static-typing' },
  { source: 'root', target: 'basic-syntax' },
  { source: 'root', target: 'classes-oop' },
  { source: 'root', target: 'enums' },
  { source: 'root', target: 'generics' },
  { source: 'root', target: 'decorators' },
  { source: 'root', target: 'modules-namespaces' },
  { source: 'root', target: 'control-flow' },
  { source: 'root', target: 'syntactic-sugar' },

  // Benefits, Cons, Anti-Patterns
  { source: 'root', target: 'benefits-pros' },
  { source: 'root', target: 'cons' },
  { source: 'root', target: 'anti-patterns' },

  // Level 2 links
  { source: 'static-typing', target: 'explicit_annotations' },
  { source: 'static-typing', target: 'type_inference' },
  { source: 'generics', target: 'generic_functions' },
  { source: 'generics', target: 'generic_classes' },

  // Level 3 links
  { source: 'type_inference', target: 'contextual_typing' },
  { source: 'generic_functions', target: 'generic_constraints' },
]

export default { nodes, links }
