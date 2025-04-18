import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: "root",
      label: "Async \n JavaScript",
      definition: "Tools and models for handling asynchronous operations in JavaScript — from callbacks to promises and async/await.",
      shape: "roundRect",
      color: 'root',
    },
    {
      id: "callbacks",
      label: "Callbacks",
      definition: "Functions passed as arguments to execute later, after a task completes.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "promises",
      label: "Promises",
      definition: "A modern API for handling asynchronous values, with resolution and rejection states.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "await",
      label: "Await",
      definition: "Simplifies promises with `async/await` syntax, providing synchronous-looking asynchronous code.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "loop",
      label: "Event Loop",
      definition: "Core mechanism that manages JavaScript execution and asynchronous tasks.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "fetch",
      label: "Fetch",
      definition: "API for making network requests. Returns a promise for handling HTTP interactions.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
  
    // Callbacks
    { id: "basicCallback", label: "Basic Callback", definition: "Function passed and called later when work completes.", shape: "rect", color: 'nodePositive2' },
    { id: "errorFirst", label: "Error-First", definition: "Node-style callbacks use (err, result) signature.", shape: "rect", color: 'nodePositive2' },
    { id: "hell", label: "Callback Hell", definition: "Nested callbacks that make code hard to read and maintain.", shape: "rect", color: 'nodeNegative2' },
  
    // Promises
    { id: "createPromise", label: "Creating Promises", definition: "Use new Promise(resolve, reject) to wrap async logic.", shape: "rect", color: 'nodePositive2' },
    { id: "thenCatch", label: ".then/.catch", definition: "Chainable methods for resolving or catching promise outcomes.", shape: "rect", color: 'nodePositive2' },
    { id: "promiseAll", label: "Promise.all()", definition: "Runs multiple promises in parallel and resolves when all complete.", shape: "rect", color: 'nodePositive2' },
  
    // Await
    { id: "asyncFunc", label: "Async Function", definition: "Declares a function that implicitly returns a promise.", shape: "rect", color: 'nodePositive2' },
    { id: "tryCatch", label: "Try/Catch", definition: "Synchronous-style error handling inside async functions.", shape: "rect", color: 'nodePositive2' },
    { id: "parallelAwait", label: "Parallel Await", definition: "Use Promise.all() to run awaits concurrently.", shape: "rect", color: 'nodePositive2' },
  
    // Event Loop
    { id: "callStack", label: "Call Stack", definition: "Holds currently running functions.", shape: "rect", color: 'nodePositive2' },
    { id: "macroMicro", label: "Macro vs Micro Tasks", definition: "Timers vs Promises: processed in different queues.", shape: "rect", color: 'nodePositive2' },
    { id: "starvation", label: "Starvation", definition: "When tasks keep executing before others get a chance.", shape: "rect", color: 'nodeNegative2' },
  
    // Fetch
    { id: "fetchJson", label: "JSON Response", definition: "Use response.json() to parse returned data.", shape: "rect", color: 'nodePositive2' },
    { id: "headers", label: "Headers", definition: "Customize requests with headers for content-type, auth, etc.", shape: "rect", color: 'nodePositive2' },
    { id: "cors", label: "CORS", definition: "Cross-Origin Resource Sharing governs access rules for APIs.", shape: "rect", color: 'nodeNegative2' },
  ];
  
  export const links = [
    { source: "root", target: "callbacks" },
    { source: "root", target: "promises" },
    { source: "root", target: "await" },
    { source: "root", target: "loop" },
    { source: "root", target: "fetch" },
  
    { source: "callbacks", target: "basicCallback" },
    { source: "callbacks", target: "errorFirst" },
    { source: "callbacks", target: "hell" },
  
    { source: "promises", target: "createPromise" },
    { source: "promises", target: "thenCatch" },
    { source: "promises", target: "promiseAll" },
  
    { source: "await", target: "asyncFunc" },
    { source: "await", target: "tryCatch" },
    { source: "await", target: "parallelAwait" },
  
    { source: "loop", target: "callStack" },
    { source: "loop", target: "macroMicro" },
    { source: "loop", target: "starvation" },
  
    { source: "fetch", target: "fetchJson" },
    { source: "fetch", target: "headers" },
    { source: "fetch", target: "cors" },
  ];
  