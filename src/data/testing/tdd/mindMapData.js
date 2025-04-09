export const nodes = [
  {
    id: "root",
    label: "Test-Driven\nDevelopment",
    definition: "A development process where tests are written before code, guiding software design.",
    shape: "roundRect",
    color: "#37474F"
  },
  {
    id: "cycle",
    label: "Red-Green-Refactor",
    definition: "The TDD cycle: write a failing test (red), make it pass (green), then refactor.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "red",
    label: "Red: Write Test First",
    definition: "Start by writing a test for a new function or feature. It should fail since the code isn’t written yet.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "green",
    label: "Green: Make Test Pass",
    definition: "Write the minimum code necessary to pass the test. Don’t overshoot — just get to green.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "refactor",
    label: "Refactor: Improve Code",
    definition: "Clean up the code, optimize, remove duplication, while keeping tests passing.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "principles",
    label: "Principles",
    definition: "Core ideas behind TDD.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "testFirst",
    label: "Test First, Code Second",
    definition: "Always write a test for new functionality before writing the implementation code.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "oneTest",
    label: "One Test at a Time",
    definition: "Focus on one test scenario at a time. Only move to a new test once the current one is passing and refactored.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "minimal",
    label: "Minimal Implementation",
    definition: "Implement just enough to satisfy the test. Prevents over-engineering.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "frequentRefactor",
    label: "Frequent Refactoring",
    definition: "Continuous cleanup is integral. The refactor step ensures high code quality.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "benefits",
    label: "Benefits",
    definition: "Advantages of TDD approach.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "looseCoupling",
    label: "Better Design (Looser Coupling)",
    definition: "Designs tend to be modular and testable due to enforced separation of concerns.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "regression",
    label: "Comprehensive Regression Suite",
    definition: "TDD results in a full suite of tests that cover features, not just edge cases.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "refactorSafety",
    label: "Confidence in Refactoring",
    definition: "With strong test coverage, devs can refactor safely knowing regressions will be caught.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "docs",
    label: "Documentation of Behavior",
    definition: "Tests explain how the system should behave to future devs.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "challenges",
    label: "Challenges",
    definition: "Difficulties and criticisms of TDD.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "slowStart",
    label: "Initial Slowness",
    definition: "Writing tests first takes time at first but pays off long-term.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "notEasyEverywhere",
    label: "Not All Code Easily TDD-ed",
    definition: "UI or complex flows may require code spikes first, with tests written after.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "testMaintenance",
    label: "Maintenance of Tests",
    definition: "Tightly coupled tests break often. Prefer testing behavior over internals.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "falseConfidence",
    label: "False Sense (Tests ≠ Specs)",
    definition: "Passing tests can still miss the real user or business requirements.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "bestPractices",
    label: "Best Practices",
    definition: "Tips for effective TDD.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "smallSteps",
    label: "Small Increments",
    definition: "Work in tiny test/code cycles. Commit often. Keeps context clear and feedback tight.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "triangulation",
    label: "Triangulation",
    definition: "Use more than one test case to drive generalized solutions instead of hardcoded logic.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "mockOnlyWhenNeeded",
    label: "Mock Only Where Necessary",
    definition: "Use mocks to isolate external calls, but don’t over-mock just to force isolation.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "shortRed",
    label: "Stay at Red Briefly",
    definition: "Failing tests should quickly become passing. Don't stack multiple failing cases.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "antiPatterns",
    label: "Anti-Patterns",
    definition: "Misapplications of TDD.",
    shape: "hexagon",
    color: "#FF8A80"
  },
  {
    id: "testsUpfront",
    label: "Writing All \n Tests Upfront",
    definition: "TDD is iterative. Don’t write all tests first — it undermines the feedback loop.",
    shape: "diamond",
    color: "#FFB3B3"
  },
  {
    id: "skipRefactor",
    label: "Skipping \n Refactor \n Step",
    definition: "Skipping refactor leads to messy code and fragile systems.",
    shape: "diamond",
    color: "#FFB3B3"
  },
  {
    id: "designDamage",
    label: "Test-Induced \n Design \n Damage",
    definition: "Twisting design just for testability (e.g., exposing internals unnecessarily).",
    shape: "diamond",
    color: "#FFB3B3"
  },
  {
    id: "safetyNetOnly",
    label: "Treating Tests \n as \n Safety Net Only",
    definition: "TDD isn't just bug prevention — it should shape and guide design decisions.",
    shape: "diamond",
    color: "#FFB3B3"
  }
];

export const links = [
  { source: "root", target: "cycle" },
  { source: "cycle", target: "red" },
  { source: "cycle", target: "green" },
  { source: "cycle", target: "refactor" },

  { source: "root", target: "principles" },
  { source: "principles", target: "testFirst" },
  { source: "principles", target: "oneTest" },
  { source: "principles", target: "minimal" },
  { source: "principles", target: "frequentRefactor" },

  { source: "root", target: "benefits" },
  { source: "benefits", target: "looseCoupling" },
  { source: "benefits", target: "regression" },
  { source: "benefits", target: "refactorSafety" },
  { source: "benefits", target: "docs" },

  { source: "root", target: "challenges" },
  { source: "challenges", target: "slowStart" },
  { source: "challenges", target: "notEasyEverywhere" },
  { source: "challenges", target: "testMaintenance" },
  { source: "challenges", target: "falseConfidence" },

  { source: "root", target: "bestPractices" },
  { source: "bestPractices", target: "smallSteps" },
  { source: "bestPractices", target: "triangulation" },
  { source: "bestPractices", target: "mockOnlyWhenNeeded" },
  { source: "bestPractices", target: "shortRed" },

  { source: "root", target: "antiPatterns" },
  { source: "antiPatterns", target: "testsUpfront" },
  { source: "antiPatterns", target: "skipRefactor" },
  { source: "antiPatterns", target: "designDamage" },
  { source: "antiPatterns", target: "safetyNetOnly" }
];
