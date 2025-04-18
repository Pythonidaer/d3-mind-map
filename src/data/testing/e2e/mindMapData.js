import { COLORS } from '../../../theme/colors';

export const nodes = [
  { id: "root", label: "End-to-End \n Testing", definition: "Validating the entire application flow from the user’s perspective, start to finish", shape: "roundRect", color: 'root' },
  { id: "scope", label: "Scope", definition: "Tests the full stack – all layers of the application as a whole (frontend, backend, databases, etc.)", shape: "ellipse", color: 'nodePositive1' },
  { id: "user-scenarios", label: "User \n Scenarios", definition: "Mimics real user actions (clicking UI, navigating pages, making API calls) to verify complete workflows", shape: "ellipse", color: 'nodePositive2' },
  { id: "prod-env", label: "Production-like \n Environment", definition: "Runs against an environment that closely resembles prod (e.g., staging) to include all system components", shape: "ellipse", color: 'nodePositive2' },
  { id: "tools", label: "Tools", definition: "Frameworks for automating end-to-end tests", shape: "ellipse", color: 'nodePositive1' },
  { id: "browser-automation", label: "Browser \n Automation", definition: "Tools like Cypress, Playwright, Selenium automate a real browser to simulate user interactions", shape: "ellipse", color: 'nodePositive2' },
  { id: "cross-browser", label: "Cross-browser \n Testing", definition: "E2E frameworks support multiple browsers/devices (e.g., Playwright can run tests on Chromium, Firefox, WebKit)", shape: "ellipse", color: 'nodePositive2' },
  { id: "ci-integration", label: "CI \n Integration", definition: "Often run in CI pipeline on each deployment (using services like BrowserStack, etc., for device/browser coverage)", shape: "ellipse", color: 'nodePositive2' },
  { id: "goals", label: "Key Goals", definition: "What E2E tests ensure", shape: "ellipse", color: 'nodePositive1' },
  { id: "workflow-validation", label: "Entire Workflow \n Validation", definition: "Verify that all pieces of the application work together correctly to accomplish a user task", shape: "ellipse", color: 'nodePositive2' },
  { id: "regression", label: "Regression \n Prevention", definition: "Catch bugs introduced in one part of the system that break functionality in another (last line of defense before release)", shape: "ellipse", color: 'nodePositive2' },
  { id: "user-experience", label: "User \n Experience", definition: "Ensure the user-facing behavior is correct – the app behaves as expected from the UI down to the data, improving confidence in UX", shape: "ellipse", color: 'nodePositive2' },
  { id: "challenges", label: "Challenges", definition: "Why E2E testing is tricky", shape: "ellipse", color: 'nodePositive1' },
  { id: "slow-tests", label: "Slow Tests", definition: "E2E tests are relatively slow (run entire app, wait for UI rendering, network calls)", shape: "ellipse", color: 'nodePositive2' },
  { id: "flakiness", label: "Flakiness", definition: "Tests can be flaky due to timing issues (waiting for elements), environment differences, etc., requiring careful synchronization (waits/retries)", shape: "ellipse", color: 'nodePositive2' },
  { id: "maintenance", label: "Maintenance \n Heavy", definition: "UI changes or flow changes can break many tests, so test scripts need regular updates. Keeping tests resilient (using stable selectors, etc.) is an ongoing effort", shape: "ellipse", color: 'nodePositive2' },
  { id: "env-setup", label: "Environment \n Setup", definition: "Requires a fully deployed test environment with all services running. Setting up and tearing down that environment (and test data) can be complex.", shape: "ellipse", color: 'nodePositive2' },
  { id: "best-practices", label: "Best Practices", definition: "Guidelines for effective E2E tests", shape: "ellipse", color: 'nodePositive1' },
  { id: "critical-paths", label: "Critical \n Paths First", definition: "Focus E2E tests on the core user journeys (e.g., signup -> purchase) rather than trying to cover every minor case with E2E", shape: "ellipse", color: 'nodePositive2' },
  { id: "seeding", label: "Use Data \n Seeding & Cleanup", definition: "Ensure each test runs on known state – seed data at start or create via APIs, and clean up after (or use isolated test accounts)", shape: "ellipse", color: 'nodePositive2' },
  { id: "selectors", label: "Stable Selectors", definition: "When automating UI, use selectors that won’t change frequently (like data-testid attributes) instead of brittle CSS selectors or text that may change", shape: "ellipse", color: 'nodePositive2' },
  { id: "parallel", label: "Parallel Execution", definition: "Run tests in parallel (if possible) to mitigate slow speed – e.g., use multiple browser instances or cloud grids to run suites faster", shape: "ellipse", color: 'nodePositive2' },
  { id: "anti-patterns", label: "Anti-Patterns", definition: "Common mistakes in E2E testing", shape: "ellipse", color: 'nodeNegative1' },
  { id: "ui-overuse", label: "Testing \n Everything \n via UI", definition: "Over-reliance on E2E for all tests – leads to huge slow suites. Avoid replicating unit/integration tests on the UI level; use E2E sparingly for what truly needs full-stack validation.", shape: "ellipse", color: 'nodeNegative1' },
  { id: "fragile-data", label: "Fragile \n  Test Data", definition: "Tests that depend on specific data which isn’t managed by the test (e.g., assuming certain records exist). This can cause failures if data changes.", shape: "ellipse", color: 'nodeNegative1' },
  { id: "ignored-flaky", label: "Ignoring \n Flaky Tests", definition: "Marking flaky tests as passed or ignoring them without fixing the root cause. Undermines trust in the suite.", shape: "ellipse", color: 'nodeNegative1' },
  { id: "no-diversity", label: "No Browser \n Diversity", definition: "Only testing in one browser. Cross-browser issues are real; E2E should cover at least a couple of major browsers if applicable.", shape: "ellipse", color: 'nodeNegative1' }
];

export const links = [
  { source: "root", target: "scope" },
  { source: "scope", target: "user-scenarios" },
  { source: "scope", target: "prod-env" },

  { source: "root", target: "tools" },
  { source: "tools", target: "browser-automation" },
  { source: "tools", target: "cross-browser" },
  { source: "tools", target: "ci-integration" },

  { source: "root", target: "goals" },
  { source: "goals", target: "workflow-validation" },
  { source: "goals", target: "regression" },
  { source: "goals", target: "user-experience" },

  { source: "root", target: "challenges" },
  { source: "challenges", target: "slow-tests" },
  { source: "challenges", target: "flakiness" },
  { source: "challenges", target: "maintenance" },
  { source: "challenges", target: "env-setup" },

  { source: "root", target: "best-practices" },
  { source: "best-practices", target: "critical-paths" },
  { source: "best-practices", target: "seeding" },
  { source: "best-practices", target: "selectors" },
  { source: "best-practices", target: "parallel" },

  { source: "root", target: "anti-patterns" },
  { source: "anti-patterns", target: "ui-overuse" },
  { source: "anti-patterns", target: "fragile-data" },
  { source: "anti-patterns", target: "ignored-flaky" },
  { source: "anti-patterns", target: "no-diversity" }
];

export default { nodes, links };
