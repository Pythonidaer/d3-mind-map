const articleData = {
  introduction:
    'Unit testing involves verifying individual units of code (such as functions or classes) in isolation to ensure each behaves correctly. These tests are written and run by developers during development to catch issues early and guarantee that each component works on its own.',

  keyPrinciples: {
    title: 'Key Principles',
    content: [
      'Test **small units in isolation** – each unit test targets the smallest testable piece of the software (e.g. one function or module) and runs it independently.',
      "Use **test doubles** (mocks/stubs) to isolate the code under test from external dependencies (like databases or APIs), ensuring the test focuses on the unit's own logic.",
      'Keep unit tests **fast and numerous** – they should execute in milliseconds and you should have many of them to cover various cases. Fast tests can run on every build or even every save.',
      'Ensure tests are **repeatable and independent** – a unit test should not rely on other tests or shared state. Each test sets up its own context and cleans up after itself.',
      'Write **clear, descriptive test cases** – name tests after the scenario and expected outcome (for example, `calculateTax_whenInputIsNegative_shouldThrowError`) so that failures make it obvious what went wrong.',
    ],
  },

  codeExamples: [
    {
      title: 'Simple Unit Test (Jest)',
      code: `// Function to test
function add(a, b) {
  return a + b;
}

// Unit test for the add function using Jest
test('add() returns sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
});`,
    },
  ],

  benefits: {
    title: 'Benefits',
    content: [
      '**Catches bugs early:** Unit tests often reveal issues at the earliest stage of development, before code is integrated. Fixing a bug where it originates (in a small unit) is cheaper and easier than after it spreads.',
      '**Improves code design:** Writing code with unit testing in mind tends to produce more modular, single-purpose functions. If a piece is hard to unit test, it might be a sign the design can be improved (e.g. splitting a large function), leading to cleaner, more maintainable code.',
      '**Simplifies debugging:** When a unit test fails, you immediately know which component is broken. This pinpointed feedback makes it faster to diagnose and fix the problem.',
      '**Living documentation:** A good suite of unit tests serves as documentation for how the code is supposed to behave. New developers can look at tests to understand usage and expected outcomes.',
      '**Supports refactoring:** With thorough unit test coverage, developers can refactor or improve code with confidence. If changes introduce a bug, unit tests will catch it, acting as a safety net.',
    ],
  },

  cons: {
    title: 'Drawbacks',
    content: [
      '**Limited scope:** Unit tests only verify individual components in isolation. They can’t detect issues that arise from interactions between modules. A system can have 100% passing unit tests and still fail when components are integrated.',
      '**Maintenance overhead:** Unit tests themselves are code that must be maintained. When production code changes (e.g. function signatures or logic), tests may need updating. Writing and updating many tests takes time, though this cost is offset by prevented bugs.',
      "**False sense of security:** It's possible to have a thoroughly unit-tested codebase that still has bugs at higher levels. Solely relying on unit tests can give a false confidence; integration and end-to-end tests are needed to cover gaps.",
      '**Hard to test some code:** Not all code is easily unit-testable. For example, code with heavy UI interactions or complex external integrations can be difficult to simulate in a unit test environment. Such code might need refactoring or higher-level tests.',
      '**Potential for brittleness:** If tests are too tightly coupled to the internal implementation of the code (rather than its public behavior), they may break often during refactoring even if the code’s outward behavior remains correct. This can slow down development if not managed.',
    ],
  },

  antiPatterns: {
    title: 'Anti-Patterns',
    content: [
      '**Over-mocking dependencies:** Using too many mocks or stubs such that tests no longer resemble real usage. For instance, if almost everything is mocked, the test might always pass but the unit could fail in a real environment. Over-mocking leads to brittle tests that may miss integration problems.',
      "**Testing implementation details:** Writing tests that assert internal state changes or private functions rather than the public API. Such tests tend to break with any refactor (even if behavior stays correct) and don’t truly validate the intended outcome. It's better to test outcomes and outputs, not the exact steps to get there.",
      '**Not running tests frequently:** Having unit tests but running them rarely (or ignoring their results) nullifies their purpose. A common anti-pattern is to skip tests that are failing instead of fixing them, which erodes trust in the test suite. Tests should run in CI/CD pipelines and locally during development.',
      '**Testing trivial code:** Writing tests for trivial getters/setters or simple logic that will almost never fail just to hit coverage numbers. This adds maintenance burden without real value. Aim tests at meaningful behavior and edge cases, not 100% lines covered.',
      '**One test per function mentality:** Assuming you must write exactly one test case for every function (regardless of complexity). Instead, write tests per behavior/requirement. Some simple functions might not need a test, while one complex function could require multiple test cases for different scenarios.',
    ],
  },

  conclusion:
    'Unit tests are the foundation of a sound testing strategy. They provide rapid feedback on code correctness at the smallest scale and encourage good design practices. However, unit tests should be complemented with integration and end-to-end tests to ensure the entire application works cohesively. By writing thoughtful unit tests and avoiding common pitfalls, developers can build more robust and maintainable JavaScript code.',
}

export default articleData
