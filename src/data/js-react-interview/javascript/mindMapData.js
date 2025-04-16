import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: 'root',
      label: 'JavaScript \n Fundamentals',
      definition: 'Core concepts, syntax, and features of JavaScript, the programming language of the web. Includes data structures, functions, async handling, and DOM manipulation.',
      shape: 'roundRect',
      color: COLORS.root,
    },
    {
      id: 'dataStructures',
      label: 'Data Structures',
      definition: 'Built-in JavaScript structures such as arrays, objects, sets, and maps for storing and managing data.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'coreConcepts',
      label: 'Core Concepts',
      definition: 'Foundational behaviors of JavaScript including scope, hoisting, closures, and the "this" keyword.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'functions',
      label: 'Functions',
      definition: 'JavaScript functions, arrow functions, first-class functions, and functional programming basics.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'asyncJS',
      label: 'Asynchronous \n JavaScript',
      definition: 'Promises, async/await syntax, and handling asynchronous operations and fetch calls.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'arrayMethods',
      label: 'Array Methods',
      definition: 'Higher-order methods like map, filter, reduce, forEach, and find for working with arrays.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'destructuring',
      label: 'Destructuring \n & Spread/Rest',
      definition: 'Destructuring assignment and spread/rest operators for concise object and array handling.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'syntaxFeatures',
      label: 'Syntax Features',
      definition: 'Common JavaScript syntax features that improve readability and utility in modern codebases.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'domEvents',
      label: 'DOM & Events',
      definition: 'Interacting with the Document Object Model and handling user events in the browser.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'errorHandling',
      label: 'Error Handling',
      definition: 'try/catch blocks, error propagation, and graceful degradation strategies.',
      shape: 'ellipse',
      color: COLORS.veryLightGreen,
    },
    {
      id: 'cons',
      label: 'Cons',
      definition: 'Downsides of using JavaScript including weak typing, older browser inconsistencies, and readability challenges.',
      shape: 'hexagon',
      color: COLORS.lightRed,
    },
    {
      id: 'antiPatterns',
      label: 'Anti-Patterns',
      definition: 'Common mistakes in JavaScript such as polluting global scope, deep nesting, and mutable shared state.',
      shape: 'hexagon',
      color: COLORS.lightRed,
    },
  
    // Core Concepts
    { id: 'scopeClosure', label: 'Scope & Closures', definition: 'Inner functions accessing outer variables even after outer scope has returned.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'hoisting', label: 'Hoisting', definition: 'JavaScript hoists variable and function declarations to the top of their scope.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'thisKeyword', label: '"this" Keyword', definition: 'Dynamic context-based keyword referring to different objects depending on usage.', shape: 'rect', color: COLORS.mintGreen, },
  
    // Functions
    { id: 'arrowFunctions', label: 'Arrow Functions', definition: 'Short syntax, lexically binds `this`, and cannot be used as constructors.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'callbackFunctions', label: 'Callback Functions', definition: 'Functions passed as arguments and executed later.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'iife', label: 'IIFE', definition: 'Immediately Invoked Function Expression for self-running logic.', shape: 'rect', color: COLORS.mintGreen, },
  
    // Async JS
    { id: 'promises', label: 'Promises', definition: 'Object representing eventual success or failure of async operation.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'asyncAwait', label: 'Async/Await', definition: 'Syntactic sugar over Promises to write cleaner asynchronous code.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'fetchAPI', label: 'Fetch API', definition: 'Web API to make network requests and work with responses.', shape: 'rect', color: COLORS.mintGreen, },
  
    // Array Methods
    { id: 'map', label: 'map()', definition: 'Transforms each element of an array.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'filter', label: 'filter()', definition: 'Filters array elements based on a condition.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'reduce', label: 'reduce()', definition: 'Combines all elements of an array into a single result.', shape: 'rect', color: COLORS.mintGreen, },
  
    // Destructuring
    { id: 'objectDestructuring', label: 'Object Destructuring', definition: 'Unpack values from objects.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'arrayDestructuring', label: 'Array Destructuring', definition: 'Unpack values from arrays.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'spread', label: 'Spread Operator', definition: 'Expands array or object elements.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'rest', label: 'Rest Operator', definition: 'Collects remaining elements into an array.', shape: 'rect', color: COLORS.mintGreen, },
  
    // Syntax Features
    { id: 'templateLiterals', label: 'Template Literals', definition: 'Backtick strings that support embedded expressions via ${}.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'ternaryOperators', label: 'Ternary Operators', definition: 'Shorthand if/else expressions using condition ? trueVal : falseVal.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'modules', label: 'ES Modules', definition: 'Module system for exporting and importing values between files.', shape: 'rect', color: COLORS.mintGreen, },
  
    // Error Handling
    { id: 'tryCatch', label: 'try/catch', definition: 'Standard block for catching synchronous errors.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'gracefulDegradation', label: 'Graceful Degradation', definition: 'Fallbacks or alternative flows when errors occur.', shape: 'rect', color: COLORS.mintGreen, },
    { id: 'asyncErrorHandling', label: 'Async Error Handling', definition: 'Handling errors in async/await with try/catch.', shape: 'rect', color: COLORS.mintGreen, },
  
    // Cons
    { id: 'noTypeSafety', label: 'No Type Safety', definition: 'JS allows implicit coercion and lacks type enforcement.', shape: 'rect', color: COLORS.lighterRed, },
    { id: 'browserInconsistencies', label: 'Browser Inconsistencies', definition: 'Different behavior across environments, especially legacy.', shape: 'rect', color: COLORS.lighterRed, },
    { id: 'debugging', label: 'Debugging Difficulty', definition: 'Lack of strict typing and loose syntax can make bugs harder to find.', shape: 'rect', color: COLORS.lighterRed, },
  
    // Anti-Patterns
    { id: 'globalScopePollution', label: 'Global Scope Pollution', definition: 'Attaching variables to window/global leads to conflicts.', shape: 'rect', color: COLORS.lighterRed, },
    { id: 'deepNesting', label: 'Deep Nesting', definition: 'Too many nested functions or logic harms readability.', shape: 'rect', color: COLORS.lighterRed, },
    { id: 'sharedStateMutation', label: 'Shared State Mutation', definition: 'Direct changes to shared objects cause unpredictable behavior.', shape: 'rect', color: COLORS.lighterRed, },
    { id: 'missingErrorHandling', label: 'Missing Error Handling', definition: 'Omitting catch blocks or fallback logic.', shape: 'rect', color: COLORS.lighterRed, }
  ];
  
  export const links = [
    { source: 'root', target: 'dataStructures' },
    { source: 'root', target: 'coreConcepts' },
    { source: 'root', target: 'functions' },
    { source: 'root', target: 'asyncJS' },
    { source: 'root', target: 'arrayMethods' },
    { source: 'root', target: 'destructuring' },
    { source: 'root', target: 'syntaxFeatures' },
    { source: 'root', target: 'domEvents' },
    { source: 'root', target: 'errorHandling' },
    { source: 'root', target: 'cons' },
    { source: 'root', target: 'antiPatterns' },
  
    { source: 'coreConcepts', target: 'scopeClosure' },
    { source: 'coreConcepts', target: 'hoisting' },
    { source: 'coreConcepts', target: 'thisKeyword' },
  
    { source: 'functions', target: 'arrowFunctions' },
    { source: 'functions', target: 'callbackFunctions' },
    { source: 'functions', target: 'iife' },
  
    { source: 'asyncJS', target: 'promises' },
    { source: 'asyncJS', target: 'asyncAwait' },
    { source: 'asyncJS', target: 'fetchAPI' },
  
    { source: 'arrayMethods', target: 'map' },
    { source: 'arrayMethods', target: 'filter' },
    { source: 'arrayMethods', target: 'reduce' },
  
    { source: 'destructuring', target: 'objectDestructuring' },
    { source: 'destructuring', target: 'arrayDestructuring' },
    { source: 'destructuring', target: 'spread' },
    { source: 'destructuring', target: 'rest' },
  
    { source: 'syntaxFeatures', target: 'templateLiterals' },
    { source: 'syntaxFeatures', target: 'ternaryOperators' },
    { source: 'syntaxFeatures', target: 'modules' },
  
    { source: 'errorHandling', target: 'tryCatch' },
    { source: 'errorHandling', target: 'gracefulDegradation' },
    { source: 'errorHandling', target: 'asyncErrorHandling' },
  
    { source: 'cons', target: 'noTypeSafety' },
    { source: 'cons', target: 'browserInconsistencies' },
    { source: 'cons', target: 'debugging' },
  
    { source: 'antiPatterns', target: 'globalScopePollution' },
    { source: 'antiPatterns', target: 'deepNesting' },
    { source: 'antiPatterns', target: 'sharedStateMutation' },
    { source: 'antiPatterns', target: 'missingErrorHandling' }
  ];
  