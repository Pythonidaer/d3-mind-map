import { COLORS } from '../../../theme/colors';

export const nodes = [
  { id: "root", label: "Integration \nTesting", definition: "Testing combined parts of an application to ensure they work together", shape: "roundRect", color: 'root' },

  { id: "scope", label: "Scope", definition: "Multiple units/components exercised as a group (beyond unit tests, but not full system)", shape: "ellipse", color: 'veryLightGreen' },
  { id: "interfaces", label: "Interfaces \n & Interactions", definition: "Focus on interfaces between modules – do components communicate and coordinate correctly?", shape: "ellipse", color: 'mintGreen' },
  { id: "partial-system", label: "Partial System", definition: "Covers a subset of the system (e.g., several modules together), larger than a unit test but smaller than end-to-end", shape: "ellipse", color: 'mintGreen' },

  { id: "approach", label: "Approach", definition: "Strategies for combining components in tests", shape: "ellipse", color: 'veryLightGreen' },
  { id: "incremental", label: "Incremental \n Integration", definition: "Integrate components gradually (top-down, bottom-up, or sandwich approach) using stubs/drivers", shape: "ellipse", color: 'mintGreen' },
  { id: "big-bang", label: "Big Bang \n Integration", definition: "Combine all components at once and test the entire integrated subsystem (simple but debugging failures is harder)", shape: "ellipse", color: 'mintGreen' },

  { id: "env", label: "Test Environment", definition: "Often requires a test database, APIs, or microservices running together", shape: "ellipse", color: 'veryLightGreen' },

  { id: "tools", label: "Tools", definition: "Frameworks for integration tests (can use unit test frameworks or specialized tools)", shape: "ellipse", color: 'veryLightGreen' },
  { id: "component-api", label: "Component/API\n Testing", definition: "Use tools like Jest or Mocha for services, or Supertest for HTTP endpoint testing", shape: "ellipse", color: 'mintGreen' },
  { id: "ui-integration", label: "UI Integration", definition: "Use React Testing Library to test how UI components render and interact together", shape: "ellipse", color: 'mintGreen' },
  { id: "virtualization", label: "Service \nVirtualization", definition: "Simulate parts of the system (e.g., external services or DBs) using mock servers", shape: "ellipse", color: 'mintGreen' },

  { id: "benefits", label: "Benefits", definition: "Why integration testing matters", shape: "ellipse", color: 'veryLightGreen' },
  { id: "defects", label: "Catches \nInterface \nDefects", definition: "Finds issues in how modules interact, like mismatched data formats or contracts", shape: "ellipse", color: 'mintGreen' },
  { id: "combined-behavior", label: "Ensures \nModules Work", definition: "Validates that modules behave correctly when combined (not just in isolation)", shape: "ellipse", color: 'mintGreen' },
  { id: "confidence", label: "Mid-Level \nConfidence", definition: "More realistic than unit tests, faster and cheaper than full E2E tests", shape: "ellipse", color: 'mintGreen' },

  { id: "challenges", label: "Challenges", definition: "Drawbacks or difficulties in integration testing", shape: "ellipse", color: 'veryLightGreen' },
  { id: "debugging", label: "Debugging \n Failures", definition: "Hard to isolate issues when failures span multiple components", shape: "ellipse", color: 'mintGreen' },
  { id: "data-setup", label: "Test Data\n Setup", definition: "Need to prepare complex test data across components (e.g., seeded DB + services)", shape: "ellipse", color: 'mintGreen' },
  { id: "slowness", label: "Slower Than \nUnit Tests", definition: "Slower than unit tests, not suitable for running on every save", shape: "ellipse", color: 'mintGreen' },
  { id: "env-issues", label: "Environment \n Issues", definition: "Integration tests can be flaky if dependent services or networks are unreliable", shape: "ellipse", color: 'mintGreen' },

  { id: "best-practices", label: "Best Practices", definition: "Effective tips for integration testing", shape: "ellipse", color: 'veryLightGreen' },
  { id: "fixtures", label: "Use Stable \nTest Fixtures", definition: "Seed test databases or use known responses to keep tests deterministic", shape: "ellipse", color: 'mintGreen' },
  { id: "setup-teardown", label: "Automate Setup\n/TearDown", definition: "Automate test environment setup and cleanup using scripts or containers", shape: "ellipse", color: 'mintGreen' },
  { id: "critical-paths", label: "Focus on \nCritical Paths", definition: "Don’t try to test everything – cover important and error-prone interactions", shape: "ellipse", color: 'mintGreen' },
  { id: "mocks", label: "Use Mocks for \nUnstable Services", definition: "Use mocks for unreliable or external services to reduce flakiness", shape: "ellipse", color: 'mintGreen' },

  { id: "anti-patterns", label: "Anti-Patterns", definition: "Common integration testing mistakes", shape: "ellipse", color: 'lightRed' },
  { id: "ice-cream", label: "Ice Cream Cone", definition: "Too many UI tests, too few unit/integration tests – leads to slow brittle suites", shape: "ellipse", color: 'veryLightRed' },
  { id: "no-isolation", label: "No Isolation at All", definition: "Integrating everything without unit testing – hard to trace failures", shape: "ellipse", color: 'veryLightRed' },
  { id: "no-stubs", label: "Not Using Stubs", definition: "Failing to use stub drivers/modules during incremental integration", shape: "ellipse", color: 'veryLightRed' }
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
