import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'JavaScript\nParadigms',
    shape: 'roundRect',
    color: 'root',
    definition: 'Overview of all JavaScript features categorized by programming paradigm: Functional, Declarative, OOP, Procedural, and Imperative.',
  },

  // Paradigm categories
  {
    id: 'functional',
    label: 'Functional',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Uses pure functions, immutability, and composition. Avoids shared state and side effects.',
  },
  {
    id: 'declarative',
    label: 'Declarative',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Expresses logic without explicit control flow. Describes what should happen, not how.',
  },
  {
    id: 'oop',
    label: 'OOP',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Object-Oriented Programming. Models programs as interacting objects with state and behavior.',
  },
  {
    id: 'procedural',
    label: 'Procedural',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Uses sequences of statements and procedures to structure programs.',
  },
  {
    id: 'imperative',
    label: 'Imperative',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Explicit control over state changes and operations. Focuses on how things are done.',
  },

  // Functional children
  {
    id: 'pure_functions',
    label: 'Pure\nFunctions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'functional',
    definition: 'Functions with no side effects that return the same output for the same input.',
  },
  {
    id: 'immutability_const',
    label: 'Immutability\n(const)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'functional',
    definition: '`const` declarations support immutability and are favored in functional style.',
  },
  {
    id: 'higher_order',
    label: 'Higher-Order\nFunctions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'functional',
    definition: 'Functions that take other functions as arguments or return them.',
  },
  {
    id: 'map_filter_reduce',
    label: 'map/filter/\nreduce',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'higher_order',
    definition: 'Array methods that enable declarative iteration and transformation.',
  },

  // Declarative children
  {
    id: 'expression_based',
    label: 'Expression-Based\nCode',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'declarative',
    definition: 'Prefers expressions over statements for conciseness and composability.',
  },
  {
    id: 'ternary_usage',
    label: 'Ternary\nOperator',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'expression_based',
    definition: 'Conditional expression (`cond ? a : b`) that fits into a functional or declarative pipeline.',
  },
  {
    id: 'array_methods',
    label: 'Array\nMethods',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'declarative',
    definition: '`map`, `filter`, and `reduce` used declaratively to express transformations.',
  },
  {
    id: 'promises_then',
    label: 'Promise\n.then()',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'declarative',
    definition: 'Chaining logic in a readable, declarative manner for asynchronous flows.',
  },

  // OOP children
  {
    id: 'classes',
    label: 'Classes\n(ES6)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'oop',
    definition: 'Modern class syntax for defining constructors, methods, and inheritance.',
  },
  {
    id: 'prototypes',
    label: 'Prototype-\nBased OOP',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'oop',
    definition: 'Original object system using prototypes and delegation.',
  },
  {
    id: 'object_properties',
    label: 'Object\nProperties',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'oop',
    definition: 'Instance fields and methods as part of an object’s encapsulated state.',
  },
  {
    id: 'new_instance',
    label: '`new` Keyword\n(Instances)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'oop',
    definition: 'Creates an instance from a constructor or class. Used in object-oriented instantiation.',
  },
  {
    id: 'instanceof_operator',
    label: '`instanceof`\nOperator',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'oop',
    definition: 'Checks if an object inherits from a class or prototype in its chain.',
  },

  // Procedural children
  {
    id: 'function_procedures',
    label: 'Function\nProcedures',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'procedural',
    definition: 'Functions used to define sequences of actions or side-effecting procedures.',
  },
  {
    id: 'variable_steps',
    label: 'Step-by-Step\nVariables',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'procedural',
    definition: '`let`/`var` used for mutable program state, changing line by line.',
  },
  {
    id: 'loops',
    label: 'Imperative\nLoops',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'procedural',
    definition: '`for`, `while`, and `do…while` control flow loops represent sequential steps.',
  },
  {
    id: 'switch_statement',
    label: 'switch\nStatement',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'procedural',
    definition: 'Multi-branch conditional logic using case-based control flow.',
  },
  {
    id: 'if_else_structure',
    label: 'if/else if/\nelse Structure',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'procedural',
    definition: 'Standard conditional flow control with multiple branches.',
  },
  {
    id: 'try_catch',
    label: 'try/catch\nBlocks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'procedural',
    definition: 'Encapsulates logic that may throw, with recovery logic after failure.',
  },
  {
    id: 'throw_statement',
    label: '`throw`\nStatement',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'procedural',
    definition: 'Manually throws an exception to be caught or to terminate execution.',
  },

  // Imperative children
  {
    id: 'dom_manipulation',
    label: 'DOM\nManipulation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'imperative',
    definition: 'Direct manipulation of the DOM with `document` or `element` methods.',
  },
  {
    id: 'event_listeners',
    label: 'Event\nListeners',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'imperative',
    definition: 'Registering callbacks for events like `click`, `submit`, etc. with side effects.',
  },
  {
    id: 'state_mutation',
    label: 'State\nMutation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'imperative',
    definition: 'Changing the state of variables, objects, or arrays explicitly.',
  },
  {
    id: 'async_await',
    label: 'Async/\nAwait',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'imperative',
    definition: 'Suspends execution at `await` points. Looks synchronous but hides promise resolution.',
  },
  {
    id: 'for_each',
    label: 'forEach\nMethod',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'imperative',
    definition: 'Array iteration method that executes a callback for each element. Commonly used with side effects.',
  },
  {
    id: 'error_object_instantiation',
    label: '`new Error()`\nObject',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'imperative',
    definition: 'Creates an error object to be thrown, logged, or passed through code.',
  },
  {
    id: 'typeof_operator',
    label: '`typeof`\nOperator',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'imperative',
    definition: 'Returns a string indicating the type of a variable or expression.',
  },
  {
    id: 'in_operator',
    label: '`in`\nOperator',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'imperative',
    definition: 'Checks whether a property exists in an object or its prototype chain.',
  },
]

export const links = [
  // Paradigm roots
  { source: 'root', target: 'functional' },
  { source: 'root', target: 'declarative' },
  { source: 'root', target: 'oop' },
  { source: 'root', target: 'procedural' },
  { source: 'root', target: 'imperative' },

  // Functional
  { source: 'functional', target: 'pure_functions' },
  { source: 'functional', target: 'immutability_const' },
  { source: 'functional', target: 'higher_order' },
  { source: 'higher_order', target: 'map_filter_reduce' },

  // Declarative
  { source: 'declarative', target: 'expression_based' },
  { source: 'expression_based', target: 'ternary_usage' },
  { source: 'declarative', target: 'array_methods' },
  { source: 'declarative', target: 'promises_then' },

  // OOP
  { source: 'oop', target: 'classes' },
  { source: 'oop', target: 'prototypes' },
  { source: 'oop', target: 'object_properties' },
  { source: 'oop', target: 'new_instance' },
  { source: 'oop', target: 'instanceof_operator' },

  // Procedural
  { source: 'procedural', target: 'function_procedures' },
  { source: 'procedural', target: 'variable_steps' },
  { source: 'procedural', target: 'loops' },
  { source: 'procedural', target: 'switch_statement' },
  { source: 'procedural', target: 'if_else_structure' },
  { source: 'procedural', target: 'try_catch' },
  { source: 'procedural', target: 'throw_statement' },

  // Imperative
  { source: 'imperative', target: 'dom_manipulation' },
  { source: 'imperative', target: 'event_listeners' },
  { source: 'imperative', target: 'state_mutation' },
  { source: 'imperative', target: 'async_await' },
  { source: 'imperative', target: 'for_each' },
  { source: 'imperative', target: 'error_object_instantiation' },
  { source: 'imperative', target: 'typeof_operator' },
  { source: 'imperative', target: 'in_operator' },
]
