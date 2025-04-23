// mindMapData.js
import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Challenges',
    definition: 'Potential obstacles when adopting TypeScript at scale',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'learning_curve',
    label: 'Learning\nCurve',
    definition:
      'Time and effort required to master interfaces, generics, and strict typing',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'compilation_overhead',
    label: 'Compilation\nOverhead',
    definition:
      'Additional build step and tooling complexity introduced by TypeScript transpilation',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'code_verbosity',
    label: 'Code\nVerbosity',
    definition:
      'Explicit type annotations can lead to more verbose code compared to vanilla JavaScript',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  // Expanded child nodes for learning_curve
  {
    id: 'resource_availability',
    label: 'Resource\nAvailability',
    definition: 'Finding up-to-date learning materials and community support',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'onboarding_time',
    label: 'Onboarding\nTime',
    definition:
      'Time investment needed for new team members to get productive with TS',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  // Expanded child nodes for compilation_overhead
  {
    id: 'build_time',
    label: 'Build\nTime',
    definition: 'Increased build times due to type checking and transpilation',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'config_complexity',
    label: 'Config\nComplexity',
    definition: 'Additional tsconfig and toolchain configuration complexity',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  // Expanded child nodes for code_verbosity
  {
    id: 'excess_annotations',
    label: 'Excess\nAnnotations',
    definition: 'Overly verbose type annotations clutter code',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'template_complexity',
    label: 'Template\nComplexity',
    definition: 'Complex generic type definitions can become hard to read',
    shape: 'rect',
    color: 'nodeNegative2',
  },
]

export const links = [
  { source: 'root', target: 'learning_curve' },
  { source: 'root', target: 'compilation_overhead' },
  { source: 'root', target: 'code_verbosity' },
  { source: 'learning_curve', target: 'resource_availability' },
  { source: 'learning_curve', target: 'onboarding_time' },
  { source: 'compilation_overhead', target: 'build_time' },
  { source: 'compilation_overhead', target: 'config_complexity' },
  { source: 'code_verbosity', target: 'excess_annotations' },
  { source: 'code_verbosity', target: 'template_complexity' },
]

export default { nodes, links }
