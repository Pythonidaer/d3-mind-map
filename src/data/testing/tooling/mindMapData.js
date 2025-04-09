export const nodes = [
  {
    id: "root",
    label: "Tooling Overview",
    definition: "Popular frameworks and tools for JavaScript testing, and their roles",
    shape: "roundRect",
    color: "#37474F",
  },
  {
    id: "unitFrameworks",
    label: "Unit Test \n Frameworks",
    definition: "Tools for writing and running unit tests",
    shape: "ellipse",
    color: "#98EE99",
  },
  {
    id: "jest",
    label: "Jest",
    definition: "De-facto standard JS testing framework (by Meta): built-in runner, assertions, mocking, and coverage",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "vitest",
    label: "Vitest",
    definition: "Vite-native test framework, very Jest-compatible but faster (leverages Vite's bundler)",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "mocha",
    label: "Mocha",
    definition: "Older test runner for Node (often used with Chai for assertions). Flexible but requires more setup.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "assertionLibs",
    label: "Assertion Libraries",
    definition: "Libraries for making assertions in tests (often integrated in frameworks now)",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "integrationTools",
    label: "Integration/\nComponent Testing",
    definition: "Tools for testing larger units or UI components in isolation",
    shape: "ellipse",
    color: "#98EE99",
  },
  {
    id: "rtl",
    label: "React Testing Library",
    definition: "Library for testing React components by simulating user interactions and asserting on DOM",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "enzyme",
    label: "Enzyme (legacy)",
    definition: "Older React test util (by Airbnb) for enzyme-style shallow rendering. Supplanted by RTL.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "supertest",
    label: "Node + SuperTest",
    definition: "For testing Node.js HTTP servers by making requests. Often used with Express apps.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "e2eTools",
    label: "End-to-End Tools",
    definition: "Tools for automating browsers or environments for full-system tests",
    shape: "ellipse",
    color: "#98EE99",
  },
  {
    id: "cypress",
    label: "Cypress",
    definition: "Modern all-in-one E2E test runner. Runs in browser with interactive runner and automatic waits.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "playwright",
    label: "Playwright",
    definition: "Microsoft's E2E tool. Controls multiple browsers and supports parallel runs and advanced automation.",
    shape: "rect",
    color: "#B9F6CA",
  },
  {
    id: "selenium",
    label: "Selenium/WebDriver",
    definition: "Browser automation standard (used via WebDriverIO in JS). Powerful but more setup-heavy.",
    shape: "rect",
    color: "#B9F6CA",
  }
];

export const links = [
  { source: "root", target: "unitFrameworks" },
  { source: "unitFrameworks", target: "jest" },
  { source: "unitFrameworks", target: "vitest" },
  { source: "unitFrameworks", target: "mocha" },
  { source: "unitFrameworks", target: "assertionLibs" },

  { source: "root", target: "integrationTools" },
  { source: "integrationTools", target: "rtl" },
  { source: "integrationTools", target: "enzyme" },
  { source: "integrationTools", target: "supertest" },

  { source: "root", target: "e2eTools" },
  { source: "e2eTools", target: "cypress" },
  { source: "e2eTools", target: "playwright" },
  { source: "e2eTools", target: "selenium" }
];