export const nodes = [
    {
      id: "root",
      label: "Async \n JavaScript",
      definition: "Tools and models for handling asynchronous operations in JavaScript — from callbacks to promises and async/await.",
      shape: "roundRect",
      color: "#37474F",
    },
    {
      id: "callbacks",
      label: "Callbacks",
      definition: "Functions passed as arguments to execute later, after a task completes.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "promises",
      label: "Promises",
      definition: "A modern API for handling asynchronous values, with resolution and rejection states.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "await",
      label: "Await",
      definition: "Simplifies promises with `async/await` syntax, providing synchronous-looking asynchronous code.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "loop",
      label: "Event Loop",
      definition: "Core mechanism that manages JavaScript execution and asynchronous tasks.",
      shape: "ellipse",
      color: "#98EE99",
    },
    {
      id: "fetch",
      label: "Fetch",
      definition: "API for making network requests. Returns a promise for handling HTTP interactions.",
      shape: "ellipse",
      color: "#98EE99",
    },
  
    // Callbacks
    { id: "basicCallback", label: "Basic Callback", definition: "Function passed and called later when work completes.", shape: "rect", color: "#B9F6CA" },
    { id: "errorFirst", label: "Error-First", definition: "Node-style callbacks use (err, result) signature.", shape: "rect", color: "#B9F6CA" },
    { id: "hell", label: "Callback Hell", definition: "Nested callbacks that make code hard to read and maintain.", shape: "rect", color: "#FFB3B3" },
  
    // Promises
    { id: "createPromise", label: "Creating Promises", definition: "Use new Promise(resolve, reject) to wrap async logic.", shape: "rect", color: "#B9F6CA" },
    { id: "thenCatch", label: ".then/.catch", definition: "Chainable methods for resolving or catching promise outcomes.", shape: "rect", color: "#B9F6CA" },
    { id: "promiseAll", label: "Promise.all()", definition: "Runs multiple promises in parallel and resolves when all complete.", shape: "rect", color: "#B9F6CA" },
  
    // Await
    { id: "asyncFunc", label: "Async Function", definition: "Declares a function that implicitly returns a promise.", shape: "rect", color: "#B9F6CA" },
    { id: "tryCatch", label: "Try/Catch", definition: "Synchronous-style error handling inside async functions.", shape: "rect", color: "#B9F6CA" },
    { id: "parallelAwait", label: "Parallel Await", definition: "Use Promise.all() to run awaits concurrently.", shape: "rect", color: "#B9F6CA" },
  
    // Event Loop
    { id: "callStack", label: "Call Stack", definition: "Holds currently running functions.", shape: "rect", color: "#B9F6CA" },
    { id: "macroMicro", label: "Macro vs Micro Tasks", definition: "Timers vs Promises: processed in different queues.", shape: "rect", color: "#B9F6CA" },
    { id: "starvation", label: "Starvation", definition: "When tasks keep executing before others get a chance.", shape: "rect", color: "#FFB3B3" },
  
    // Fetch
    { id: "fetchJson", label: "JSON Response", definition: "Use response.json() to parse returned data.", shape: "rect", color: "#B9F6CA" },
    { id: "headers", label: "Headers", definition: "Customize requests with headers for content-type, auth, etc.", shape: "rect", color: "#B9F6CA" },
    { id: "cors", label: "CORS", definition: "Cross-Origin Resource Sharing governs access rules for APIs.", shape: "rect", color: "#FFB3B3" },
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
  