import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: "root",
    label: "Testing Pyramid",
    definition: "Conceptual pyramid illustrating ideal distribution of test types (many unit, fewer integration, fewest E2E)",
    shape: "roundRect",
    color: 'root'
  },
  {
    id: "layers",
    label: "Layers",
    definition: "Levels of the pyramid from bottom (small tests) to top (large tests)",
    shape: "ellipse",
    color: 'nodePositive1'
  },
  {
    id: "unit",
    label: "Unit Tests (Base)",
    definition: "Foundation: largest number of tests are unit tests (fast, isolated, low-level)",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "integration",
    label: "Service/Integration Tests",
    definition: "Middle layer: moderate number of tests cover integration of components or services",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "e2e",
    label: "UI/E2E Tests (Top)",
    definition: "Top of pyramid: few high-level tests that cover end-to-end user flows (slow, but high confidence)",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "origins",
    label: "Origins",
    definition: "Where the concept came from",
    shape: "ellipse",
    color: 'nodePositive1'
  },
  {
    id: "cohn",
    label: "Mike Cohn (2009)",
    definition: "Introduced in 'Succeeding with Agile' – automated testing split into Unit, Service, UI",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "fowler",
    label: "Fowler & Others",
    definition: "Martin Fowler popularized it in 2012 (blog), similar ideas by Jason Huggins (2006)",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "purpose",
    label: "Purpose",
    definition: "Why use a pyramid model",
    shape: "ellipse",
    color: 'nodePositive1'
  },
  {
    id: "cost",
    label: "Cost vs. Volume",
    definition: "Lower-level tests are cheaper and faster, so have more of them; high-level tests are expensive/slower, so have fewer",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "feedback",
    label: "Faster Feedback",
    definition: "Many unit tests catch issues quickly; few slow tests means quicker test cycles overall",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "coverage",
    label: "Balanced Coverage",
    definition: "Ensures you test individual pieces thoroughly and also have some tests for integration and full system, without over-relying on any one level",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "modern",
    label: "Modern \n Interpretations",
    definition: "Adaptations or critiques of the pyramid",
    shape: "ellipse",
    color: 'nodePositive1'
  },
  {
    id: "trophy",
    label: "Testing Trophy",
    definition: "Kent C. Dodds’ model: like a trophy shape – emphasizes more integration tests and includes static tests at the base",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "honeycomb",
    label: "Testing Honeycomb",
    definition: "Spotify’s model: a honeycomb (not hierarchical) focusing on different test types (e.g., integration, UI, contract tests) for microservices",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "criticism",
    label: "Criticism",
    definition: "Critiques of a strict pyramid interpretation",
    shape: "ellipse",
    color: 'nodePositive1'
  },
  {
    id: "notOneSize",
    label: "Not One-Size-Fits-All",
    definition: "A rigid pyramid may not fit every project (UI-heavy apps might need relatively more integration tests, etc.)",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "ratioFocus",
    label: "Over-focusing on Numbers",
    definition: "Some teams misapply it by aiming for specific ratios (e.g., 70% unit) rather than assessing actual risk/coverage needs",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "uiNeglect",
    label: "Neglecting UI Tests",
    definition: "Pyramid sometimes led teams to minimize UI tests to near zero, but that can be dangerous if critical flows aren’t tested from the user perspective",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "bestUse",
    label: "Best Use",
    definition: "How to effectively use the pyramid concept",
    shape: "ellipse",
    color: 'nodePositive1'
  },
  {
    id: "guideline",
    label: "Guideline, Not Law",
    definition: "Use the pyramid as a heuristic to remind you to keep tests fast and broad at the base, but adapt levels to your context",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "metrics",
    label: "Combine with Other Metrics",
    definition: "Also consider test scope (small/medium/large) or determinism rather than only type. Google uses small/medium/large in a similar spirit.",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "valuePerLayer",
    label: "Ensure Each Layer Adds Value",
    definition: "Write unit tests for logic details, integration tests for interactions, E2E for core flows – avoid duplication and cover different risk categories at each level.",
    shape: "rect",
    color: 'nodePositive2'
  },
  {
    id: "antiPatterns",
    label: "Anti-Patterns",
    definition: "Misusing the pyramid",
    shape: "ellipse",
    color: 'nodeNegative1'
  },
  {
    id: "cone",
    label: "Ice Cream Cone",
    definition: "Inverse pyramid (mostly manual or UI tests, few unit tests) – results in slow, brittle testing",
    shape: "rect",
    color: 'nodeNegative1'
  },
  {
    id: "hourglass",
    label: "Hourglass",
    definition: "Too many UI tests, some unit, very few integration (or vice versa) – an unbalanced distribution leading to gaps or redundancies",
    shape: "rect",
    color: 'nodeNegative1'
  },
  {
    id: "onlyUnit",
    label: "100% Unit Tests Only",
    definition: "Some teams attempt only unit tests with no integration or E2E – fast but can miss bugs that occur only when components integrate",
    shape: "rect",
    color: 'nodeNegative1'
  }
];

export const links = [
  { source: "root", target: "layers" },
  { source: "layers", target: "unit" },
  { source: "layers", target: "integration" },
  { source: "layers", target: "e2e" },

  { source: "root", target: "origins" },
  { source: "origins", target: "cohn" },
  { source: "origins", target: "fowler" },

  { source: "root", target: "purpose" },
  { source: "purpose", target: "cost" },
  { source: "purpose", target: "feedback" },
  { source: "purpose", target: "coverage" },

  { source: "root", target: "modern" },
  { source: "modern", target: "trophy" },
  { source: "modern", target: "honeycomb" },

  { source: "root", target: "criticism" },
  { source: "criticism", target: "notOneSize" },
  { source: "criticism", target: "ratioFocus" },
  { source: "criticism", target: "uiNeglect" },

  { source: "root", target: "bestUse" },
  { source: "bestUse", target: "guideline" },
  { source: "bestUse", target: "metrics" },
  { source: "bestUse", target: "valuePerLayer" },

  { source: "root", target: "antiPatterns" },
  { source: "antiPatterns", target: "cone" },
  { source: "antiPatterns", target: "hourglass" },
  { source: "antiPatterns", target: "onlyUnit" }
];
