// src/core/mindMapData.js
// -- Color Sequence
// 0. Root: #37474F
// 1. Very light green -- #98EE99
// 2. Mint green -- #B9F6CA
// 3. Almost white green -- #E8F5E9
// 4. Light red -- #FF8A80
// 5. Lighter red -- #FFB3B3
// 6. Very light red -- #FFE0E0

export const nodes = [
    {
      id: "root",
      label: "JavaScript \n Core",
      definition: "The essential building blocks of JavaScript: syntax, flow, functions, and execution context.",
      shape: "roundRect",
      color: "#37474F",
    },
    {
      id: "syntax",
      label: "Syntax",
      definition: "The basic structure and rules that define valid JavaScript code.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "logic",
      label: "Logic",
      definition: "Control flow tools such as conditionals, loops, and branching statements.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "functions",
      label: "Functions",
      definition: "Blocks of code designed to perform a particular task, essential to JavaScript.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "scope",
      label: "Scope",
      definition: "Controls the accessibility of variables in different parts of your code.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "context",
      label: "Context",
      definition: "Refers to the value of `this` in different scenarios and how functions are executed.",
      shape: "ellipse",
      color: "#98EE99",
    },
  
    // --- Syntax Subnodes ---
    {
      id: "variables",
      label: "Variables",
      definition: "Declare data containers using let, const, and var.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "types",
      label: "Types",
      definition: "Primitive data types like string, number, boolean, null, undefined, symbol, and bigint.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "operators",
      label: "Operators",
      definition: "Arithmetic, comparison, assignment, and logical operations.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "coercion",
      label: "Coercion",
      definition: "Automatic or implicit conversion between types.",
      shape: "rect",
      color: "#B9F6CA",
    },
  
    // --- Logic Subnodes ---
    {
      id: "conditionals",
      label: "Conditionals",
      definition: "Decision-making using if/else, switch, and ternary.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "loops",
      label: "Loops",
      definition: "Repeat operations using for, while, and do...while.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "loopControl",
      label: "Loop Control",
      definition: "Control flow inside loops with break and continue.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "errorHandling",
      label: "Error Handling",
      definition: "Manage exceptions with try, catch, finally, and throw.",
      shape: "rect",
      color: "#B9F6CA",
    },
  
    // --- Functions Subnodes ---
    {
      id: "declaration",
      label: "Declaration",
      definition: "Functions can be declared or expressed (anonymous, arrow, etc.).",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "parameters",
      label: "Parameters",
      definition: "Support default values, rest parameters, and destructuring.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "returning",
      label: "Return Values",
      definition: "Functions can return any value or nothing (undefined).",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "closures",
      label: "Closures",
      definition: "Functions that retain access to outer variables even after execution context ends.",
      shape: "rect",
      color: "#B9F6CA",
    },
  
    // --- Scope Subnodes ---
    {
      id: "lexical",
      label: "Lexical Scope",
      definition: "Scope is defined by location in the source code.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "blockScope",
      label: "Block Scope",
      definition: "`let` and `const` are limited to the block they are defined in.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "globalScope",
      label: "Global Scope",
      definition: "Variables defined outside any function or block.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "hoisting",
      label: "Hoisting",
      definition: "Variables and functions are moved to the top of their scope before execution.",
      shape: "rect",
      color: "#B9F6CA",
    },
  
    // --- Context Subnodes ---
    {
      id: "thisGlobal",
      label: "`this` in Global",
      definition: "`this` refers to window (or global object) in non-strict mode.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "thisFunc",
      label: "`this` in Functions",
      definition: "`this` is dynamic and depends on how the function is called.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "arrowContext",
      label: "Arrow Functions",
      definition: "Arrow functions do not bind their own `this`, using the outer context instead.",
      shape: "rect",
      color: "#B9F6CA",
    },
    {
      id: "bindCallApply",
      label: "bind/call/apply",
      definition: "Explicitly control function context using these methods.",
      shape: "rect",
      color: "#B9F6CA",
    },
  ];
  
  export const links = [
    // Root links
    { source: "root", target: "syntax" },
    { source: "root", target: "logic" },
    { source: "root", target: "functions" },
    { source: "root", target: "scope" },
    { source: "root", target: "context" },
  
    // Syntax
    { source: "syntax", target: "variables" },
    { source: "syntax", target: "types" },
    { source: "syntax", target: "operators" },
    { source: "syntax", target: "coercion" },
  
    // Logic
    { source: "logic", target: "conditionals" },
    { source: "logic", target: "loops" },
    { source: "logic", target: "loopControl" },
    { source: "logic", target: "errorHandling" },
  
    // Functions
    { source: "functions", target: "declaration" },
    { source: "functions", target: "parameters" },
    { source: "functions", target: "returning" },
    { source: "functions", target: "closures" },
  
    // Scope
    { source: "scope", target: "lexical" },
    { source: "scope", target: "blockScope" },
    { source: "scope", target: "globalScope" },
    { source: "scope", target: "hoisting" },
  
    // Context
    { source: "context", target: "thisGlobal" },
    { source: "context", target: "thisFunc" },
    { source: "context", target: "arrowContext" },
    { source: "context", target: "bindCallApply" },
  ];
  