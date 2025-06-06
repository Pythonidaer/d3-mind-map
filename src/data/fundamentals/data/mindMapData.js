import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: "root",
      label: "JavaScript \n Data",
      definition: "Core structures and patterns for working with data in JavaScript: objects, arrays, and built-in types.",
      shape: "roundRect",
      color: 'root',
    },
    {
      id: "objects",
      label: "Objects",
      definition: "Key-value data structures representing entities, supporting dynamic property access.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "arrays",
      label: "Arrays",
      definition: "Ordered collections of data with built-in iteration and transformation methods.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "types",
      label: "Types",
      definition: "Native classes like Date, RegExp, Set, Map, and Math utilities.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "patterns",
      label: "Patterns",
      definition: "ES6 syntax for accessing, transforming, and combining data structures.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "design",
      label: "Design",
      definition: "Reusable, maintainable approaches to organizing and manipulating data.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
  
    // Objects
    { id: "literal", label: "Literal Syntax", definition: "Create an object using curly braces.", shape: "rect", color: 'nodePositive2' },
    { id: "access", label: "Access & Modify", definition: "Dot or bracket notation to get/set properties.", shape: "rect", color: 'nodePositive2' },
    { id: "methods", label: "Object Methods", definition: "Attach functions to objects to act as methods.", shape: "rect", color: 'nodePositive2' },
    { id: "proto", label: "Prototype", definition: "Shared method lookup and inheritance via prototype chain.", shape: "rect", color: 'nodePositive2' },
  
    // Arrays
    { id: "map", label: "map()", definition: "Transforms array by applying a function to each element.", shape: "rect", color: 'nodePositive2' },
    { id: "filter", label: "filter()", definition: "Filters elements based on a condition.", shape: "rect", color: 'nodePositive2' },
    { id: "reduce", label: "reduce()", definition: "Reduces array to a single value.", shape: "rect", color: 'nodePositive2' },
    { id: "slice", label: "slice()", definition: "Returns a shallow copy of part of an array.", shape: "rect", color: 'nodePositive2' },
  
    // Types
    { id: "date", label: "Date", definition: "Handles time and date operations.", shape: "rect", color: 'nodePositive2' },
    { id: "math", label: "Math", definition: "Math operations like random, round, floor, pow, etc.", shape: "rect", color: 'nodePositive2' },
    { id: "regex", label: "RegExp", definition: "Pattern matching using regular expressions.", shape: "rect", color: 'nodePositive2' },
    { id: "setMap", label: "Set & Map", definition: "Collections with unique values and key-value pairs.", shape: "rect", color: 'nodePositive2' },
  
    // Patterns
    { id: "destructure", label: "Destructuring", definition: "Extract values from arrays/objects into variables.", shape: "rect", color: 'nodePositive2' },
    { id: "spread", label: "Spread Operator", definition: "Expand arrays/objects into elements/properties.", shape: "rect", color: 'nodePositive2' },
    { id: "rest", label: "Rest Parameters", definition: "Group remaining arguments into a single parameter.", shape: "rect", color: 'nodePositive2' },
  
    // Design
    { id: "factory", label: "Factory Function", definition: "Function that returns a new object.", shape: "rect", color: 'nodePositive2' },
    { id: "constructor", label: "Constructor", definition: "Function used with `new` to instantiate objects.", shape: "rect", color: 'nodePositive2' },
    { id: "immutability", label: "Immutability", definition: "Avoiding mutation in data for safe reuse.", shape: "rect", color: 'nodePositive2' },
  ];
  
  export const links = [
    { source: "root", target: "objects" },
    { source: "root", target: "arrays" },
    { source: "root", target: "types" },
    { source: "root", target: "patterns" },
    { source: "root", target: "design" },
  
    { source: "objects", target: "literal" },
    { source: "objects", target: "access" },
    { source: "objects", target: "methods" },
    { source: "objects", target: "proto" },
  
    { source: "arrays", target: "map" },
    { source: "arrays", target: "filter" },
    { source: "arrays", target: "reduce" },
    { source: "arrays", target: "slice" },
  
    { source: "types", target: "date" },
    { source: "types", target: "math" },
    { source: "types", target: "regex" },
    { source: "types", target: "setMap" },
  
    { source: "patterns", target: "destructure" },
    { source: "patterns", target: "spread" },
    { source: "patterns", target: "rest" },
  
    { source: "design", target: "factory" },
    { source: "design", target: "constructor" },
    { source: "design", target: "immutability" },
  ];
  