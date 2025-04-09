// src/data/testing/testable_code/articleData.js

const articleData = {
  introduction: "Writing testable code means structuring your software so that it can be easily and reliably tested by automated tests. Testable code tends to be modular, loosely coupled, and has minimal side effects, allowing tests to execute pieces in isolation. By designing code with testability in mind, you not only make it easier to write tests, but you often end up with cleaner and more maintainable architecture as well.",
  
  keyPrinciples: {
    title: "Key Principles",
    content: [
      "**Separation of concerns:** A primary principle for testability is to give each piece of code a single responsibility. When a function or class focuses on one task, it's straightforward to write a test for that task. If code does too many things, tests become complicated (setting up more state, asserting multiple outcomes). High cohesion and low coupling make it easier to isolate and verify behavior.",
      "**Dependency injection:** Instead of hard-coding dependencies inside a function, accept them from the outside (as parameters or constructor arguments). For example, if a module needs a database, design it to accept a `db` object rather than directly calling a global. In tests, you can pass a fake or in-memory DB.",
      "**Avoid global state and singletons:** Global state hides dependencies and couples tests together. One test might inadvertently affect another. Instead, pass needed context explicitly. If you must use global state (e.g., `process.env`), encapsulate access and allow overrides.",
      "**Pure functions and side-effect isolation:** Write pure functions for core logic — same input, same output, no external state. For code with side effects (e.g., API calls), isolate that logic. Test pure logic separately and cover I/O in integration tests.",
      "**Modularity and small units:** Break problems into smaller units (functions, classes, modules). Smaller units are easier to test. Large functions require more setup and validation. If a function is hard to test, it may be doing too much."
    ]
  },

  codeExamples: [
    {
      title: "Before and After: Dependency Injection",
      code: `// Hard-coded dependency (difficult to test)
function fetchUsersCount() {
  const db = require('DB'); // hard-coded database import
  const result = db.query('SELECT count(*) FROM users');
  return result[0];
}

// Improved: dependency injection
function fetchUsersCount(db) {
  const result = db.query('SELECT count(*) FROM users');
  return result[0];
}

// In production, call with real db
const count = fetchUsersCount(realDbClient);

// In tests, use a fake or stub
const fakeDb = { query: (sql) => [42] };
console.assert(fetchUsersCount(fakeDb) === 42);`
    }
  ],

  benefits: {
    title: "Benefits",
    content: [
      "**Easier to write tests:** Testable code is straightforward to write and maintain tests for. It avoids excessive setup or workarounds.",
      "**Higher code quality:** Testable code tends to follow good design principles like modularity and single responsibility.",
      "**Fewer bugs through earlier detection:** Since tests are easier to write, more bugs get caught early during development.",
      "**Facilitates refactoring and updates:** With good test coverage on modular code, you can safely refactor with confidence.",
      "**Better collaboration and onboarding:** Clear, testable code acts as documentation and enables new developers to quickly understand behavior."
    ]
  },

  cons: {
    title: "Drawbacks",
    content: [
      "**Potential for over-engineering:** You may add unnecessary abstraction or indirection if taken too far.",
      "**More upfront design effort:** Writing testable code may slow initial development slightly as you consider structure and boundaries.",
      "**Need for discipline and skill:** Developers must understand patterns like dependency injection and know how to use test doubles effectively.",
      "**Sometimes perceived as boilerplate:** Injecting dependencies through many layers or setting up interfaces can feel verbose without tooling support.",
      "**Balancing design priorities:** Testability should be balanced with performance and simplicity. In rare cases, simpler or faster code may be less testable."
    ]
  },

  antiPatterns: {
    title: "Anti-Patterns",
    content: [
      "**Doing work in constructors or static init:** Avoid performing I/O or business logic in constructors. Keep them light for test setup.",
      "**Tight coupling (no seams):** Directly instantiating services (`new SomeService()`) or importing them prevents substitution in tests. Use factories or inject dependencies.",
      "**Shared mutable state:** Global state and singletons are difficult to reset and isolate in tests. Prefer local, injectable state.",
      "**Exposing internals for testing:** Don’t make private/internal logic public just for testing. Instead, refactor complex logic into separate, testable modules.",
      "**Magic and hidden time dependencies:** Direct use of `Date.now()` or `Math.random()` introduces unpredictability. Abstract them for controlled testing."
    ]
  },

  conclusion: "By proactively writing testable code, developers set themselves up for success. This might mean using dependency injection, avoiding monolithic logic, and organizing around small, isolated units. The resulting architecture is often cleaner, more maintainable, and easier to extend. While it can take forethought and discipline, the long-term benefits to development speed and software reliability are substantial."
};

export default articleData;
