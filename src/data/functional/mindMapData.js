// src/functional/mindMapData.js
// -- Color Sequence
// 0. Root: 37474F
// 1. Very light green -- #98EE99
// 2. Mint green -- #B9F6CA
// 3. Almost white green -- #E8F5E9
// 4. Light red -- #FF8A80
// 5. Lighter red -- #FFB3B3
// 6. Very light red -- #FFE0E0

export const nodes = [
  // Root node
  {
    id: "root",
    label: "Functional \n Programming \n in JavaScript",
    definition:
      "A style of programming that emphasizes pure functions, immutability, and declarative code.",
    shape: "roundRect",
    color: "#37474F",
  },
  // First-level nodes (direct children of root)
  {
    id: "immutability",
    label: "Immutability",
    definition:
      "Data cannot be changed once created; instead, new data is produced for modifications.",
    shape: "hexagon",
    shape: "ellipse",
    color: "#98EE99",
  },
  {
    id: "state",
    label: `State in \n Functional Programming`,
    definition:
      "Manage state by avoiding shared state, using parameters instead of globals, and returning new state from functions.",
    shape: "ellipse",
    color: "#98EE99",
  },
  {
    id: "functions",
    label: "Functions",
    definition:
      "Functions are central to functional programming; they can be first-class, pure, higher-order, and composable.",
    shape: "ellipse",
    color: "#98EE99",
  },
  {
    id: "antipatterns",
    label: "Anti-Patterns",
    definition:
      "Patterns to avoid: mutability, impure functions, and shared state can lead to bugs and maintenance issues.",
    shape: "hexagon",
    color: "#FF8A80",
  },
  {
    id: "benefits",
    label: "Benefits",
    definition:
      "Functional programming improves testability, predictability, modularity, concurrency-friendliness, and readability.",
    shape: "ellipse",
    color: "#98EE99",
  },
  // Second-level nodes for Immutability
  {
    id: "objectFreeze",
    label: "Object.freeze",
    definition: "Prevents modifications to an object.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "objectAssign",
    label: "Object.assign",
    definition:
      "Creates a new object by copying properties from source objects.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "spreadOp",
    label: "Spread Operator",
    definition: "Copies elements into a new array or object.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "arrayNew",
    label: "Array Methods \n that return new arrays",
    definition:
      "Methods like map, filter, and reduce that do not mutate the original array.",
    shape: "rect",
    color: "#B9F6CA",
  },
  // Second-level nodes for State
  {
    id: "avoidShared",
    label: "Avoid Shared State",
    definition:
      "Prevent multiple parts of your code from modifying the same state concurrently.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "useParams",
    label: "Use Parameters \n Instead of Globals",
    definition:
      "Pass state as parameters to functions rather than using global variables.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "returnNew",
    label: "Return New State \n from Functions",
    definition:
      "Functions should return new state rather than modifying existing state.",
    shape: "rect",
    color: "#B9F6CA",
  },
  // Second-level nodes for Functions
  {
    id: "firstClass",
    label: "First-Class Functions",
    definition:
      "Functions are treated as first-class citizens and can be passed around as values.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "pureFunctions",
    label: "Pure Functions",
    definition:
      "Functions that produce the same output for the same input and have no side effects.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "higherOrder",
    label: "Higher-Order Functions",
    definition:
      "Functions that accept other functions as arguments or return them.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "composition",
    label: "Function Composition",
    definition: "Combining simple functions to create more complex ones.",
    shape: "rect",
    color: "#B9F6CA",
  },
  // Third-level node under Pure Functions
  {
    id: "noSideEffects",
    label: "No Side Effects",
    definition: "Pure functions do not affect external state.",
    shape: "diamond",
    color: "#E8F5E9",
  },
  // Second-level nodes for Anti-Patterns
  {
    id: "mutability",
    label: "Mutability",
    definition:
      "Directly modifying objects or arrays leads to unpredictable behavior.",
    shape: "rect",
    color: "#FFB3B3",
  },
  {
    id: "impureFunctions",
    label: "Impure Functions",
    definition:
      "Functions that produce side effects or depend on external state.",
    shape: "rect",
    color: "#FFB3B3",
  },
  {
    id: "sharedState",
    label: "Shared State",
    definition:
      "Multiple parts of the program modifying the same state can lead to bugs.",
    shape: "rect",
    color: "#FFB3B3",
  },
  // Third-level nodes under Mutability
  {
    id: "directMutation",
    label: "Direct Object/Array Mutation",
    definition: "Changing objects or arrays in place.",
    shape: "diamond",
    color: "#FFE0E0",
  },
  {
    id: "arrayMutators",
    label: "Array Methods",
    definition:
      "Using methods that modify the array in place (push, pop, splice, etc.).",
    shape: "diamond",
    color: "#FFE0E0",
  },
  // Third-level nodes under Impure Functions
  {
    id: "sideEffects",
    label: "Side Effects",
    definition:
      "Functions that interact with external systems (I/O, DOM, etc.).",
    shape: "diamond",
    color: "#FFE0E0",
  },
  {
    id: "externalDependency",
    label: "External State Dependency",
    definition: "Functions that rely on or change external state.",
    shape: "diamond",
    color: "#FFE0E0",
  },
  // Second-level nodes for Benefits
  {
    id: "testability",
    label: "Testability",
    definition: "Easier to test due to predictable outputs.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "predictability",
    label: "Predictability",
    definition: "Outputs remain consistent given the same inputs.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "modularity",
    label: "Modularity",
    definition:
      "Well-defined, independent modules that are easier to maintain.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "concurrency",
    label: "Concurrency-Friendly",
    definition:
      "Immutable data and pure functions reduce issues in concurrent contexts.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "readability",
    label: "Readability",
    definition: "Clear and concise code that is easier to understand.",
    shape: "rect",
    color: "#B9F6CA",
  },
];

export const links = [
  // Connect root to first-level nodes
  { source: "root", target: "immutability" },
  { source: "root", target: "state" },
  { source: "root", target: "functions" },
  { source: "root", target: "antipatterns" },
  { source: "root", target: "benefits" },
  // Immutability branch
  { source: "immutability", target: "objectFreeze" },
  { source: "immutability", target: "objectAssign" },
  { source: "immutability", target: "spreadOp" },
  { source: "immutability", target: "arrayNew" },
  // State branch
  { source: "state", target: "avoidShared" },
  { source: "state", target: "useParams" },
  { source: "state", target: "returnNew" },
  // Functions branch
  { source: "functions", target: "firstClass" },
  { source: "functions", target: "pureFunctions" },
  { source: "functions", target: "higherOrder" },
  { source: "functions", target: "composition" },
  // Pure functions third-level child
  { source: "pureFunctions", target: "noSideEffects" },
  // Anti-Patterns branch
  { source: "antipatterns", target: "mutability" },
  { source: "antipatterns", target: "impureFunctions" },
  { source: "antipatterns", target: "sharedState" },
  // Mutability third-level children
  { source: "mutability", target: "directMutation" },
  { source: "mutability", target: "arrayMutators" },
  // Impure Functions third-level children
  { source: "impureFunctions", target: "sideEffects" },
  { source: "impureFunctions", target: "externalDependency" },
  // Benefits branch
  { source: "benefits", target: "testability" },
  { source: "benefits", target: "predictability" },
  { source: "benefits", target: "modularity" },
  { source: "benefits", target: "concurrency" },
  { source: "benefits", target: "readability" },
];
