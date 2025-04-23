// mindMapData.js
import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Advanced\nFeatures',
    definition:
      'Sophisticated TypeScript capabilities for scalable and expressive typing',
    shape: 'roundRect',
    color: 'root',
  },

  {
    id: 'interfaces_type_aliases',
    label: 'Interfaces &\nType Aliases',
    definition:
      'Define object shapes and type compositions with interfaces or aliases',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'oop_features',
    label: 'OOP\nClass Features',
    definition:
      'Advanced class capabilities: abstract classes, accessors, readonly, static members',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'function_overloading',
    label: 'Function\nOverloading',
    definition:
      'Multiple function signatures to support varied argument types and return values',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'generics_constraints',
    label: 'Generics &\nConstraints',
    definition:
      'Reusable types with constraints to enforce structure on generic parameters',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'const_enums',
    label: 'Const\nEnums',
    definition:
      'Compile-time inlined enums for performance and reduced bundle size',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'decorators',
    label: 'Decorators',
    definition:
      'Meta-programming annotations for class and member enhancements',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'conditional_mapped',
    label: 'Conditional &\nMapped Types',
    definition:
      'Dynamic type transformations based on conditions and mapping over properties',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'utility_types',
    label: 'Utility\nTypes',
    definition:
      'Built-in types for common transformations: Partial, Pick, Omit, Readonly, etc.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2 nodes
  {
    id: 'union_vs_intersection',
    label: 'Union vs\nIntersection',
    definition:
      'Unions allow one of several types; intersections combine multiple types',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'readonly_static',
    label: 'Readonly &\nStatic',
    definition:
      'Use readonly properties and static members to protect data and define class-level behavior',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'generic_reuse',
    label: 'Reusable\nGenerics',
    definition:
      'Define type-safe, reusable functions and components using generics',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'decorator_types',
    label: 'Decorator\nTypes',
    definition:
      'Class, method, and property decorators for runtime enhancements',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'conditional_extends',
    label: 'Conditional\nExtends',
    definition:
      'Use conditional logic to assign types based on structure or inheritance',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'mapped_optional',
    label: 'Mapped with\nModifiers',
    definition: 'Make fields optional or readonly when mapping types',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 3 nodes
  {
    id: 'flattened_aliases',
    label: 'Flattened\nAliases',
    definition: 'Type aliases allow deeply composed types and reuse',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'abstract_interfaces',
    label: 'Abstract +\nInterface',
    definition:
      'Combine abstract classes and interfaces to enforce flexible contracts',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'extends_boundaries',
    label: 'Generic\nBoundaries',
    definition: 'Limit generic types to a range of allowed structures',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'transform_types',
    label: 'Keyof &\nTransform',
    definition:
      'Use keyof and indexed access to iterate over and transform types',
    shape: 'diamond',
    color: 'nodePositive3',
  },
]

export const links = [
  { source: 'root', target: 'interfaces_type_aliases' },
  { source: 'root', target: 'oop_features' },
  { source: 'root', target: 'function_overloading' },
  { source: 'root', target: 'generics_constraints' },
  { source: 'root', target: 'const_enums' },
  { source: 'root', target: 'decorators' },
  { source: 'root', target: 'conditional_mapped' },
  { source: 'root', target: 'utility_types' },

  { source: 'interfaces_type_aliases', target: 'union_vs_intersection' },
  { source: 'interfaces_type_aliases', target: 'flattened_aliases' },
  { source: 'oop_features', target: 'readonly_static' },
  { source: 'oop_features', target: 'abstract_interfaces' },
  { source: 'generics_constraints', target: 'generic_reuse' },
  { source: 'generics_constraints', target: 'extends_boundaries' },
  { source: 'decorators', target: 'decorator_types' },
  { source: 'conditional_mapped', target: 'conditional_extends' },
  { source: 'conditional_mapped', target: 'mapped_optional' },
  { source: 'utility_types', target: 'transform_types' },
]

export default { nodes, links }
