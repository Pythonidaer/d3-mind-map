import { COLORS } from '../../../theme/colors';

export const nodes = [
  // Root node
  {
    id: 'root',
    label: 'Functional \n Programming \n in JavaScript',
    definition:
      'A style of programming that emphasizes pure functions, immutability, and declarative code.',
    shape: 'roundRect',
    color: 'root',
  },
  // First-level nodes (direct children of root)
  {
    id: 'immutability',
    label: 'Immutability',
    definition:
      'Data cannot be changed once created; instead, new data is produced for modifications.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'state',
    label: `State \n Management`,
    definition:
      'Manage state by avoiding shared state, using parameters instead of globals, and returning new state from functions.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'functions',
    label: 'Functions',
    definition:
      'Functions are central to functional programming; they can be first-class, pure, higher-order, and composable.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'antipatterns',
    label: 'Anti-Patterns',
    definition:
      'Patterns to avoid: mutability, impure functions, and shared state can lead to bugs and maintenance issues.',
    shape: 'hexagon',
    color: 'lightRed',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    definition:
      'Functional programming improves testability, predictability, modularity, concurrency-friendliness, and readability.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  // Second-level nodes for Immutability
  {
    id: 'objectFreeze',
    label: 'Object.freeze',
    definition: 'Prevents modifications to an object.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'objectAssign',
    label: 'Object.assign',
    definition:
      'Creates a new object by copying properties from source objects.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'spreadOp',
    label: 'Spread Operator',
    definition: 'Copies elements into a new array or object.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'arrayNew',
    label: 'Array Methods \n that return new arrays',
    definition:
      'Methods like map, filter, and reduce that do not mutate the original array.',
    shape: 'rect',
    color: 'mintGreen',
  },
  // Second-level nodes for State
  {
    id: 'avoidShared',
    label: 'Avoid Shared State',
    definition:
      'Prevent multiple parts of your code from modifying the same state concurrently.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'useParams',
    label: 'Use Parameters \n Instead of Globals',
    definition:
      'Pass state as parameters to functions rather than using global variables.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'returnNew',
    label: 'Return New State \n from Functions',
    definition:
      'Functions should return new state rather than modifying existing state.',
    shape: 'rect',
    color: 'mintGreen',
  },
  // Second-level nodes for Functions
  {
    id: 'firstClass',
    label: 'First-Class Functions',
    definition:
      'Functions are treated as first-class citizens and can be passed around as values.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'pureFunctions',
    label: 'Pure Functions',
    definition:
      'Functions that produce the same output for the same input and have no side effects.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'higherOrder',
    label: 'Higher-Order Functions',
    definition:
      'Functions that accept other functions as arguments or return them.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'composition',
    label: 'Function Composition',
    definition: 'Combining simple functions to create more complex ones.',
    shape: 'rect',
    color: 'mintGreen',
  },
  // Third-level node under Pure Functions
  {
    id: 'noSideEffects',
    label: 'No Side Effects',
    definition: 'Pure functions do not affect external state.',
    shape: 'diamond',
    color: 'almostWhiteGreen',
  },
  // Second-level nodes for Anti-Patterns
  {
    id: 'mutability',
    label: 'Mutability',
    definition:
      'Directly modifying objects or arrays leads to unpredictable behavior.',
    shape: 'rect',
    color: 'lighterRed',
  },
  {
    id: 'impureFunctions',
    label: 'Impure Functions',
    definition:
      'Functions that produce side effects or depend on external state.',
    shape: 'rect',
    color: 'lighterRed',
  },
  {
    id: 'sharedState',
    label: 'Shared State',
    definition:
      'Multiple parts of the program modifying the same state can lead to bugs.',
    shape: 'rect',
    color: 'lighterRed',
  },
  // Third-level nodes under Mutability
  {
    id: 'directMutation',
    label: 'Direct Object/\nArray Mutation',
    definition: 'Changing objects or arrays in place.',
    shape: 'diamond',
    color: 'veryLightRed',
  },
  {
    id: 'arrayMutators',
    label: 'Array Methods',
    definition:
      'Using methods that modify the array in place (push, pop, splice, etc.).',
    shape: 'diamond',
    color: 'veryLightRed',
  },
  // Third-level nodes under Impure Functions
  {
    id: 'sideEffects',
    label: 'Side Effects',
    definition:
      'Functions that interact with external systems (I/O, DOM, etc.).',
    shape: 'diamond',
    color: 'veryLightRed',
  },
  {
    id: 'externalDependency',
    label: 'External State \n Dependency',
    definition: 'Functions that rely on or change external state.',
    shape: 'diamond',
    color: 'veryLightRed',
  },
  // Second-level nodes for Benefits
  {
    id: 'testability',
    label: 'Testability',
    definition: 'Easier to test due to predictable outputs.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'predictability',
    label: 'Predictability',
    definition: 'Outputs remain consistent given the same inputs.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'modularity',
    label: 'Modularity',
    definition:
      'Well-defined, independent modules that are easier to maintain.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'concurrency',
    label: 'Concurrency-Friendly',
    definition:
      'Immutable data and pure functions reduce issues in concurrent contexts.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'readability',
    label: 'Readability',
    definition: 'Clear and concise code that is easier to understand.',
    shape: 'rect',
    color: 'mintGreen',
  },
]

export const links = [
  // Connect root to first-level nodes
  { source: 'root', target: 'immutability' },
  { source: 'root', target: 'state' },
  { source: 'root', target: 'functions' },
  { source: 'root', target: 'antipatterns' },
  { source: 'root', target: 'benefits' },
  // Immutability branch
  { source: 'immutability', target: 'objectFreeze' },
  { source: 'immutability', target: 'objectAssign' },
  { source: 'immutability', target: 'spreadOp' },
  { source: 'immutability', target: 'arrayNew' },
  // State branch
  { source: 'state', target: 'avoidShared' },
  { source: 'state', target: 'useParams' },
  { source: 'state', target: 'returnNew' },
  // Functions branch
  { source: 'functions', target: 'firstClass' },
  { source: 'functions', target: 'pureFunctions' },
  { source: 'functions', target: 'higherOrder' },
  { source: 'functions', target: 'composition' },
  // Pure functions third-level child
  { source: 'pureFunctions', target: 'noSideEffects' },
  // Anti-Patterns branch
  { source: 'antipatterns', target: 'mutability' },
  { source: 'antipatterns', target: 'impureFunctions' },
  { source: 'antipatterns', target: 'sharedState' },
  // Mutability third-level children
  { source: 'mutability', target: 'directMutation' },
  { source: 'mutability', target: 'arrayMutators' },
  // Impure Functions third-level children
  { source: 'impureFunctions', target: 'sideEffects' },
  { source: 'impureFunctions', target: 'externalDependency' },
  // Benefits branch
  { source: 'benefits', target: 'testability' },
  { source: 'benefits', target: 'predictability' },
  { source: 'benefits', target: 'modularity' },
  { source: 'benefits', target: 'concurrency' },
  { source: 'benefits', target: 'readability' },
]
