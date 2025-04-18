// src/data/testing/unit/mindMapData.js
// -- Color Sequence
// Colors are now sourced from src/theme/colors.js
import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Unit\nTesting',
    definition:
      'Testing the smallest pieces of code in isolation to ensure each works as expected.',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'traits',
    label: 'Key Traits',
    definition: 'Characteristics of unit tests: isolated, fast, focused.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'isolated',
    label: 'Isolated from Dependencies',
    definition:
      'Runs code with no external effects (use mocks/stubs for DB, network, etc.).',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'fast',
    label: 'Fast Execution',
    definition:
      'Tests complete quickly (milliseconds), enabling rapid feedback.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'smallScope',
    label: 'Focused Scope',
    definition:
      'Each test targets a single function or class (smallest testable unit).',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    definition: 'Why write unit tests.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'earlyBugs',
    label: 'Early Bug Detection',
    definition: 'Catches bugs early in development before they spread.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'betterDesign',
    label: 'Improves Design',
    definition:
      "Encourages simpler, single-responsibility code that's easier to test.",
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'debugging',
    label: 'Simplifies Debugging',
    definition: 'Failures pinpoint the specific unit causing an issue.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'docs',
    label: 'Documents Behavior',
    definition:
      'Tests serve as living examples of how functions should behave.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'challenges',
    label: 'Challenges',
    definition: 'Limitations and drawbacks of unit tests.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'limitedScope',
    label: 'Limited Scope',
    definition:
      'Cannot catch issues arising from interactions between components.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'maintenance',
    label: 'Maintenance Overhead',
    definition: 'Tests must be updated alongside code changes (extra work).',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'falseConfidence',
    label: 'False Confidence',
    definition: 'All units can pass while the integrated system still fails.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'hardToTest',
    label: 'Hard-to-Test Code',
    definition: 'GUI or tightly coupled code may be difficult to unit test.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'bestPractices',
    label: 'Best Practices',
    definition: 'Tips for effective unit tests.',
    shape: 'ellipse',
    color: 'veryLightGreen',
  },
  {
    id: 'singleBehavior',
    label: 'One Behavior per Test',
    definition: 'Each test should verify one logical outcome or scenario.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'naming',
    label: 'Clear Naming',
    definition:
      'Name tests descriptively to reveal intent (e.g., method_whenCondition_expectedResult).',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'testDoubles',
    label: 'Use Test Doubles Wisely',
    definition: 'Use mocks/stubs only when needed to isolate the unit.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'independent',
    label: 'Fast & Independent',
    definition:
      'Keep tests quick and not reliant on global state or execution order.',
    shape: 'rect',
    color: 'mintGreen',
  },
  {
    id: 'antiPatterns',
    label: 'Anti-Patterns',
    definition: 'Common mistakes in unit testing.',
    shape: 'hexagon',
    color: 'lightRed',
  },
  {
    id: 'overMocking',
    label: 'Over-Mocking',
    definition:
      'Relying too much on mocks such that tests no longer reflect real usage.',
    shape: 'diamond',
    color: 'lighterRed',
  },
  {
    id: 'implDetails',
    label: 'Testing \n Implementation \n Details',
    definition:
      'Asserting internal behavior instead of outputs makes tests fragile during refactoring.',
    shape: 'diamond',
    color: 'lighterRed',
  },
  {
    id: 'skippedTests',
    label: 'Ignoring \n Unit Tests',
    definition: 'Skipping writing or running unit tests defeats their purpose.',
    shape: 'diamond',
    color: 'lighterRed',
  },
]

export const links = [
  { source: 'root', target: 'traits' },
  { source: 'traits', target: 'isolated' },
  { source: 'traits', target: 'fast' },
  { source: 'traits', target: 'smallScope' },

  { source: 'root', target: 'benefits' },
  { source: 'benefits', target: 'earlyBugs' },
  { source: 'benefits', target: 'betterDesign' },
  { source: 'benefits', target: 'debugging' },
  { source: 'benefits', target: 'docs' },

  { source: 'root', target: 'challenges' },
  { source: 'challenges', target: 'limitedScope' },
  { source: 'challenges', target: 'maintenance' },
  { source: 'challenges', target: 'falseConfidence' },
  { source: 'challenges', target: 'hardToTest' },

  { source: 'root', target: 'bestPractices' },
  { source: 'bestPractices', target: 'singleBehavior' },
  { source: 'bestPractices', target: 'naming' },
  { source: 'bestPractices', target: 'testDoubles' },
  { source: 'bestPractices', target: 'independent' },

  { source: 'root', target: 'antiPatterns' },
  { source: 'antiPatterns', target: 'overMocking' },
  { source: 'antiPatterns', target: 'implDetails' },
  { source: 'antiPatterns', target: 'skippedTests' },
]
