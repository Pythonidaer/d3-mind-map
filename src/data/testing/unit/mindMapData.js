// src/data/testing/unit/mindMapData.js
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
    label: "Unit\nTesting",
    definition: "Testing the smallest pieces of code in isolation to ensure each works as expected.",
    shape: "roundRect",
    color: "#37474F"
  },
  {
    id: "traits",
    label: "Key Traits",
    definition: "Characteristics of unit tests: isolated, fast, focused.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "isolated",
    label: "Isolated from Dependencies",
    definition: "Runs code with no external effects (use mocks/stubs for DB, network, etc.).",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "fast",
    label: "Fast Execution",
    definition: "Tests complete quickly (milliseconds), enabling rapid feedback.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "smallScope",
    label: "Focused Scope",
    definition: "Each test targets a single function or class (smallest testable unit).",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "benefits",
    label: "Benefits",
    definition: "Why write unit tests.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "earlyBugs",
    label: "Early Bug Detection",
    definition: "Catches bugs early in development before they spread.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "betterDesign",
    label: "Improves Design",
    definition: "Encourages simpler, single-responsibility code that's easier to test.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "debugging",
    label: "Simplifies Debugging",
    definition: "Failures pinpoint the specific unit causing an issue.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "docs",
    label: "Documents Behavior",
    definition: "Tests serve as living examples of how functions should behave.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "challenges",
    label: "Challenges",
    definition: "Limitations and drawbacks of unit tests.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "limitedScope",
    label: "Limited Scope",
    definition: "Cannot catch issues arising from interactions between components.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "maintenance",
    label: "Maintenance Overhead",
    definition: "Tests must be updated alongside code changes (extra work).",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "falseConfidence",
    label: "False Confidence",
    definition: "All units can pass while the integrated system still fails.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "hardToTest",
    label: "Hard-to-Test Code",
    definition: "GUI or tightly coupled code may be difficult to unit test.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "bestPractices",
    label: "Best Practices",
    definition: "Tips for effective unit tests.",
    shape: "ellipse",
    color: "#98EE99"
  },
  {
    id: "singleBehavior",
    label: "One Behavior per Test",
    definition: "Each test should verify one logical outcome or scenario.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "naming",
    label: "Clear Naming",
    definition: "Name tests descriptively to reveal intent (e.g., method_whenCondition_expectedResult).",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "testDoubles",
    label: "Use Test Doubles Wisely",
    definition: "Use mocks/stubs only when needed to isolate the unit.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "independent",
    label: "Fast & Independent",
    definition: "Keep tests quick and not reliant on global state or execution order.",
    shape: "rect",
    color: "#B9F6CA"
  },
  {
    id: "antiPatterns",
    label: "Anti-Patterns",
    definition: "Common mistakes in unit testing.",
    shape: "hexagon",
    color: "#FF8A80"
  },
  {
    id: "overMocking",
    label: "Over-Mocking",
    definition: "Relying too much on mocks such that tests no longer reflect real usage.",
    shape: "diamond",
    color: "#FFB3B3"
  },
  {
    id: "implDetails",
    label: "Testing \n Implementation \n Details",
    definition: "Asserting internal behavior instead of outputs makes tests fragile during refactoring.",
    shape: "diamond",
    color: "#FFB3B3"
  },
  {
    id: "skippedTests",
    label: "Ignoring \n Unit Tests",
    definition: "Skipping writing or running unit tests defeats their purpose.",
    shape: "diamond",
    color: "#FFB3B3"
  }
];

export const links = [
  { source: "root", target: "traits" },
  { source: "traits", target: "isolated" },
  { source: "traits", target: "fast" },
  { source: "traits", target: "smallScope" },

  { source: "root", target: "benefits" },
  { source: "benefits", target: "earlyBugs" },
  { source: "benefits", target: "betterDesign" },
  { source: "benefits", target: "debugging" },
  { source: "benefits", target: "docs" },

  { source: "root", target: "challenges" },
  { source: "challenges", target: "limitedScope" },
  { source: "challenges", target: "maintenance" },
  { source: "challenges", target: "falseConfidence" },
  { source: "challenges", target: "hardToTest" },

  { source: "root", target: "bestPractices" },
  { source: "bestPractices", target: "singleBehavior" },
  { source: "bestPractices", target: "naming" },
  { source: "bestPractices", target: "testDoubles" },
  { source: "bestPractices", target: "independent" },

  { source: "root", target: "antiPatterns" },
  { source: "antiPatterns", target: "overMocking" },
  { source: "antiPatterns", target: "implDetails" },
  { source: "antiPatterns", target: "skippedTests" }
];
