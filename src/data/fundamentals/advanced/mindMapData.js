export const nodes = [
    {
      id: "root",
      label: "Advanced \n JavaScript",
      definition: "Deep JavaScript concepts that power performance, architecture, maintainability, and advanced coding patterns.",
      shape: "roundRect",
      color: "#37474F",
    },
    {
      id: "modules",
      label: "Modules",
      definition: "ES6 module system for organizing, importing, and exporting code across files.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "classes",
      label: "Classes",
      definition: "ES6 syntax for creating reusable objects and inheritance with `class`, `constructor`, and `extends`.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "funcs",
      label: "Functional",
      definition: "Advanced functional programming techniques: immutability, composition, currying, and pure functions.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "performance",
      label: "Performance",
      definition: "Optimizing execution speed, memory usage, and UI responsiveness.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "quality",
      label: "Quality",
      definition: "Best practices for writing maintainable, testable, and clean JavaScript.",
      shape: "ellipse",
      color: "#98EE99",
    },
  
    // Modules
    { id: "importExport", label: "Import/Export", definition: "Use `import` and `export` to share functionality across files.", shape: "rect", color: "#B9F6CA" },
    { id: "defaultNamed", label: "Default vs Named", definition: "Default exports export one value; named exports allow multiple.", shape: "rect", color: "#B9F6CA" },
    { id: "dynamicImport", label: "Dynamic Imports", definition: "Load modules conditionally with `import()`.", shape: "rect", color: "#B9F6CA" },
  
    // Classes
    { id: "constructor", label: "Constructor", definition: "Method called when a new object is instantiated from a class.", shape: "rect", color: "#B9F6CA" },
    { id: "inheritance", label: "Inheritance", definition: "Use `extends` and `super` to reuse behavior across classes.", shape: "rect", color: "#B9F6CA" },
    { id: "private", label: "Private Fields", definition: "Use `#` to mark fields as private within a class.", shape: "rect", color: "#B9F6CA" },
  
    // Functional
    { id: "pure", label: "Pure Functions", definition: "Always return the same result given the same input, with no side effects.", shape: "rect", color: "#B9F6CA" },
    { id: "compose", label: "Composition", definition: "Combine small functions to create complex behavior.", shape: "rect", color: "#B9F6CA" },
    { id: "currying", label: "Currying", definition: "Convert a function with multiple arguments into chained functions.", shape: "rect", color: "#B9F6CA" },
  
    // Performance
    { id: "memory", label: "Memory Management", definition: "Understanding how the JS engine handles allocation and GC.", shape: "rect", color: "#B9F6CA" },
    { id: "reflow", label: "Reflows & Repaints", definition: "Minimize expensive DOM operations.", shape: "rect", color: "#B9F6CA" },
    { id: "lazyLoading", label: "Lazy Loading", definition: "Load resources only when needed to improve performance.", shape: "rect", color: "#B9F6CA" },
  
    // Quality
    { id: "cleanCode", label: "Clean Code", definition: "Readable, self-documenting code with meaningful names and structure.", shape: "rect", color: "#B9F6CA" },
    { id: "linting", label: "Linting", definition: "Static analysis tools like ESLint to catch issues early.", shape: "rect", color: "#B9F6CA" },
    { id: "defensive", label: "Defensive Coding", definition: "Write code that safely handles unexpected inputs and failures.", shape: "rect", color: "#B9F6CA" },
  ];
  
  export const links = [
    { source: "root", target: "modules" },
    { source: "root", target: "classes" },
    { source: "root", target: "funcs" },
    { source: "root", target: "performance" },
    { source: "root", target: "quality" },
  
    { source: "modules", target: "importExport" },
    { source: "modules", target: "defaultNamed" },
    { source: "modules", target: "dynamicImport" },
  
    { source: "classes", target: "constructor" },
    { source: "classes", target: "inheritance" },
    { source: "classes", target: "private" },
  
    { source: "funcs", target: "pure" },
    { source: "funcs", target: "compose" },
    { source: "funcs", target: "currying" },
  
    { source: "performance", target: "memory" },
    { source: "performance", target: "reflow" },
    { source: "performance", target: "lazyLoading" },
  
    { source: "quality", target: "cleanCode" },
    { source: "quality", target: "linting" },
    { source: "quality", target: "defensive" },
  ];
  