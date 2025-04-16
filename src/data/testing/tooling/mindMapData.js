import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: "root",
    label: "Tooling Overview",
    definition: "Popular frameworks and tools for JavaScript testing, and their roles",
    shape: "roundRect",
    color: COLORS.root,
  },
  {
    id: "unitFrameworks",
    label: "Unit Test \n Frameworks",
    definition: "Tools for writing and running unit tests",
    shape: "ellipse",
    color: COLORS.veryLightGreen,
  },
  {
    id: "jest",
    label: "Jest",
    definition: "De-facto standard JS testing framework (by Meta): built-in runner, assertions, mocking, and coverage",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "vitest",
    label: "Vitest",
    definition: "Vite-native test framework, very Jest-compatible but faster (leverages Vite's bundler)",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "mocha",
    label: "Mocha",
    definition: "Older test runner for Node (often used with Chai for assertions). Flexible but requires more setup.",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "assertionLibs",
    label: "Assertion Libraries",
    definition: "Libraries for making assertions in tests (often integrated in frameworks now)",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "integrationTools",
    label: "Integration/\nComponent Testing",
    definition: "Tools for testing larger units or UI components in isolation",
    shape: "ellipse",
    color: COLORS.veryLightGreen,
  },
  {
    id: "rtl",
    label: "React Testing Library",
    definition: "Library for testing React components by simulating user interactions and asserting on DOM",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "enzyme",
    label: "Enzyme (legacy)",
    definition: "Older React test util (by Airbnb) for enzyme-style shallow rendering. Supplanted by RTL.",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "supertest",
    label: "Node + SuperTest",
    definition: "For testing Node.js HTTP servers by making requests. Often used with Express apps.",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "e2eTools",
    label: "End-to-End Tools",
    definition: "Tools for automating browsers or environments for full-system tests",
    shape: "ellipse",
    color: COLORS.veryLightGreen,
  },
  {
    id: "cypress",
    label: "Cypress",
    definition: "Modern all-in-one E2E test runner. Runs in browser with interactive runner and automatic waits.",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "playwright",
    label: "Playwright",
    definition: "Microsoft's E2E tool. Controls multiple browsers and supports parallel runs and advanced automation.",
    shape: "rect",
    color: COLORS.mintGreen,
  },
  {
    id: "selenium",
    label: "Selenium/WebDriver",
    definition: "Browser automation standard (used via WebDriverIO in JS). Powerful but more setup-heavy.",
    shape: "rect",
    color: COLORS.mintGreen,
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