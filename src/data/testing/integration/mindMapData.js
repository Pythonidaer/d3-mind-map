export const nodes = [
  { id: "root", label: "Integration Testing", definition: "Testing combined parts of an application to ensure they work together", shape: "roundRect", color: "#37474F" },

  { id: "scope", label: "Scope", definition: "Multiple units/components exercised as a group (beyond unit tests, but not full system)", shape: "ellipse", color: "#98EE99" },
  { id: "interfaces", label: "Interfaces & Interactions", definition: "Focus on interfaces between modules – do components communicate and coordinate correctly?", shape: "ellipse", color: "#B9F6CA" },
  { id: "partial-system", label: "Partial System", definition: "Covers a subset of the system (e.g., several modules together), larger than a unit test but smaller than end-to-end", shape: "ellipse", color: "#B9F6CA" },

  { id: "approach", label: "Approach", definition: "Strategies for combining components in tests", shape: "ellipse", color: "#98EE99" },
  { id: "incremental", label: "Incremental Integration", definition: "Integrate components gradually (top-down, bottom-up, or sandwich approach) using stubs/drivers", shape: "ellipse", color: "#B9F6CA" },
  { id: "big-bang", label: "Big Bang Integration", definition: "Combine all components at once and test the entire integrated subsystem (simple but debugging failures is harder)", shape: "ellipse", color: "#B9F6CA" },

  { id: "env", label: "Test Environment", definition: "Often requires a test database, APIs, or microservices running together", shape: "ellipse", color: "#98EE99" },

  { id: "tools", label: "Tools", definition: "Frameworks for integration tests (can use unit test frameworks or specialized tools)", shape: "ellipse", color: "#98EE99" },
  { id: "component-api", label: "Component/API Testing", definition: "Use tools like Jest or Mocha for services, or Supertest for HTTP endpoint testing", shape: "ellipse", color: "#B9F6CA" },
  { id: "ui-integration", label: "UI Integration", definition: "Use React Testing Library to test how UI components render and interact together", shape: "ellipse", color: "#B9F6CA" },
  { id: "virtualization", label: "Service Virtualization", definition: "Simulate parts of the system (e.g., external services or DBs) using mock servers", shape: "ellipse", color: "#B9F6CA" },

  { id: "benefits", label: "Benefits", definition: "Why integration testing matters", shape: "ellipse", color: "#98EE99" },
  { id: "defects", label: "Catches Interface Defects", definition: "Finds issues in how modules interact, like mismatched data formats or contracts", shape: "ellipse", color: "#B9F6CA" },
  { id: "combined-behavior", label: "Ensures Modules Work", definition: "Validates that modules behave correctly when combined (not just in isolation)", shape: "ellipse", color: "#B9F6CA" },
  { id: "confidence", label: "Mid-Level Confidence", definition: "More realistic than unit tests, faster and cheaper than full E2E tests", shape: "ellipse", color: "#B9F6CA" },

  { id: "challenges", label: "Challenges", definition: "Drawbacks or difficulties in integration testing", shape: "ellipse", color: "#98EE99" },
  { id: "debugging", label: "Debugging Failures", definition: "Hard to isolate issues when failures span multiple components", shape: "ellipse", color: "#B9F6CA" },
  { id: "data-setup", label: "Test Data Setup", definition: "Need to prepare complex test data across components (e.g., seeded DB + services)", shape: "ellipse", color: "#B9F6CA" },
  { id: "slowness", label: "Slower Than Unit Tests", definition: "Slower than unit tests, not suitable for running on every save", shape: "ellipse", color: "#B9F6CA" },
  { id: "env-issues", label: "Environment Issues", definition: "Integration tests can be flaky if dependent services or networks are unreliable", shape: "ellipse", color: "#B9F6CA" },

  { id: "best-practices", label: "Best Practices", definition: "Effective tips for integration testing", shape: "ellipse", color: "#98EE99" },
  { id: "fixtures", label: "Use Stable Test Fixtures", definition: "Seed test databases or use known responses to keep tests deterministic", shape: "ellipse", color: "#B9F6CA" },
  { id: "setup-teardown", label: "Automate Setup/TearDown", definition: "Automate test environment setup and cleanup using scripts or containers", shape: "ellipse", color: "#B9F6CA" },
  { id: "critical-paths", label: "Focus on Critical Paths", definition: "Don’t try to test everything – cover important and error-prone interactions", shape: "ellipse", color: "#B9F6CA" },
  { id: "mocks", label: "Use Mocks for Unstable Services", definition: "Use mocks for unreliable or external services to reduce flakiness", shape: "ellipse", color: "#B9F6CA" },

  { id: "anti-patterns", label: "Anti-Patterns", definition: "Common integration testing mistakes", shape: "ellipse", color: "#EF9A9A" },
  { id: "ice-cream", label: "Ice Cream Cone", definition: "Too many UI tests, too few unit/integration tests – leads to slow brittle suites", shape: "ellipse", color: "#EF9A9A" },
  { id: "no-isolation", label: "No Isolation at All", definition: "Integrating everything without unit testing – hard to trace failures", shape: "ellipse", color: "#EF9A9A" },
  { id: "no-stubs", label: "Not Using Stubs", definition: "Failing to use stub drivers/modules during incremental integration", shape: "ellipse", color: "#EF9A9A" }
];

export const links = [
  { source: "root", target: "scope" },
  { source: "scope", target: "interfaces" },
  { source: "scope", target: "partial-system" },

  { source: "root", target: "approach" },
  { source: "approach", target: "incremental" },
  { source: "approach", target: "big-bang" },

  { source: "root", target: "env" },
  { source: "root", target: "tools" },
  { source: "tools", target: "component-api" },
  { source: "tools", target: "ui-integration" },
  { source: "tools", target: "virtualization" },

  { source: "root", target: "benefits" },
  { source: "benefits", target: "defects" },
  { source: "benefits", target: "combined-behavior" },
  { source: "benefits", target: "confidence" },

  { source: "root", target: "challenges" },
  { source: "challenges", target: "debugging" },
  { source: "challenges", target: "data-setup" },
  { source: "challenges", target: "slowness" },
  { source: "challenges", target: "env-issues" },

  { source: "root", target: "best-practices" },
  { source: "best-practices", target: "fixtures" },
  { source: "best-practices", target: "setup-teardown" },
  { source: "best-practices", target: "critical-paths" },
  { source: "best-practices", target: "mocks" },

  { source: "root", target: "anti-patterns" },
  { source: "anti-patterns", target: "ice-cream" },
  { source: "anti-patterns", target: "no-isolation" },
  { source: "anti-patterns", target: "no-stubs" }
];

export default { nodes, links };
