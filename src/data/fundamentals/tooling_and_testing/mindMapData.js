import { COLORS } from '../../../theme/colors';

export const nodes = [
    {
      id: "root",
      label: "Tooling & \n Testing",
      definition: "The tools, libraries, and practices that support writing, maintaining, and testing JavaScript applications.",
      shape: "roundRect",
      color: 'root',
    },
    {
      id: "linting",
      label: "Linting",
      definition: "Static code analysis to catch errors, enforce consistency, and improve readability.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "bundling",
      label: "Bundling",
      definition: "Tools that combine JS modules and assets into optimized bundles for the browser.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "transpiling",
      label: "Transpiling",
      definition: "Converting modern JavaScript into compatible syntax for older environments.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "testing",
      label: "Testing",
      definition: "Writing tests to verify code correctness. Includes unit, integration, and end-to-end tests.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
    {
      id: "ci",
      label: "CI/CD",
      definition: "Automating test runs and deployments using continuous integration pipelines.",
      shape: "ellipse",
      color: 'nodePositive1',
    },
  
    // Linting
    { id: "eslint", label: "ESLint", definition: "Most popular JS linter. Supports plugins and rule customization.", shape: "rect", color: 'nodePositive2' },
    { id: "prettier", label: "Prettier", definition: "Code formatter that enforces consistent style.", shape: "rect", color: 'nodePositive2' },
  
    // Bundling
    { id: "vite", label: "Vite", definition: "Fast bundler and dev server optimized for modern frontend tools.", shape: "rect", color: 'nodePositive2' },
    { id: "webpack", label: "Webpack", definition: "Highly configurable module bundler for web apps.", shape: "rect", color: 'nodePositive2' },
  
    // Transpiling
    { id: "babel", label: "Babel", definition: "Transpile modern JS syntax (ES6+) into backward-compatible code.", shape: "rect", color: 'nodePositive2' },
    { id: "tsc", label: "TypeScript Compiler", definition: "Compiles TypeScript into JavaScript.", shape: "rect", color: 'nodePositive2' },
  
    // Testing
    { id: "unit", label: "Unit Tests", definition: "Tests individual functions or components in isolation.", shape: "rect", color: 'nodePositive2' },
    { id: "integration", label: "Integration Tests", definition: "Tests combined modules working together.", shape: "rect", color: 'nodePositive2' },
    { id: "e2e", label: "E2E Tests", definition: "Tests full flows in a real browser (e.g., Cypress, Playwright).", shape: "rect", color: 'nodePositive2' },
    { id: "vitest", label: "Vitest", definition: "Vite-native testing framework with Jest-like syntax.", shape: "rect", color: 'nodePositive2' },
    { id: "jest", label: "Jest", definition: "Popular testing framework used across React & Node apps.", shape: "rect", color: 'nodePositive2' },
  
    // CI/CD
    { id: "githubActions", label: "GitHub Actions", definition: "Define workflows for testing, building, and deploying.", shape: "rect", color: 'nodePositive2' },
    { id: "pipeline", label: "Test Pipelines", definition: "Run automated tests on every push or PR.", shape: "rect", color: 'nodePositive2' },
    { id: "deploy", label: "Deploy Hooks", definition: "Trigger deployments to Netlify, Vercel, etc. after tests pass.", shape: "rect", color: 'nodePositive2' },
  ];
  
  export const links = [
    { source: "root", target: "linting" },
    { source: "root", target: "bundling" },
    { source: "root", target: "transpiling" },
    { source: "root", target: "testing" },
    { source: "root", target: "ci" },
  
    { source: "linting", target: "eslint" },
    { source: "linting", target: "prettier" },
  
    { source: "bundling", target: "vite" },
    { source: "bundling", target: "webpack" },
  
    { source: "transpiling", target: "babel" },
    { source: "transpiling", target: "tsc" },
  
    { source: "testing", target: "unit" },
    { source: "testing", target: "integration" },
    { source: "testing", target: "e2e" },
    { source: "testing", target: "vitest" },
    { source: "testing", target: "jest" },
  
    { source: "ci", target: "githubActions" },
    { source: "ci", target: "pipeline" },
    { source: "ci", target: "deploy" },
  ];
  