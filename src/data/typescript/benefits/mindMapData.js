// mindMapData.js
import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Benefits',
    definition: 'Advantages of using TypeScript in development',
    shape: 'roundRect',
    color: 'root',
  },

  {
    id: 'code_reliability',
    label: 'Code\nReliability',
    definition:
      'Static typing catches errors at compile time, improving reliability',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'improved_tooling',
    label: 'Improved\nTooling',
    definition:
      'Enhanced IDE support with autocomplete and refactoring powered by types',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'maintainability',
    label: 'Maintainability',
    definition:
      'Self-documenting types and clear structure simplify code maintenance',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'early_detection',
    label: 'Early\nDetection',
    definition:
      'Type checking identifies bugs before runtime, reducing debugging time',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'scalability',
    label: 'Scalability',
    definition:
      'Features like interfaces and modules help manage large codebases',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2s
  {
    id: 'intellisense',
    label: 'IntelliSense',
    definition:
      'Types enable context-aware suggestions, saving time and reducing typos',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'refactoring_tools',
    label: 'Refactoring\nTools',
    definition:
      'Types allow safe renaming and restructuring of variables and methods',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'team_onboarding',
    label: 'Team\nOnboarding',
    definition:
      'Clear types and structure help new devs understand the codebase faster',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'type_contracts',
    label: 'Type\nContracts',
    definition: 'Interfaces act as contracts across modules and services',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'static_analysis',
    label: 'Static\nAnalysis',
    definition:
      'Catch unused vars, unreachable code, and errors before execution',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'scoped_modules',
    label: 'Scoped\nModules',
    definition:
      'Modules and namespaces allow isolated concerns across features',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 3s
  {
    id: 'cross_team_scale',
    label: 'Cross-Team\nScalability',
    definition: 'Shared interfaces make it easier to coordinate across teams',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'auto_documentation',
    label: 'Auto\nDocumentation',
    definition: 'Types double as real-time documentation within IDEs',
    shape: 'diamond',
    color: 'nodePositive3',
  },
]

export const links = [
  { source: 'root', target: 'code_reliability' },
  { source: 'root', target: 'improved_tooling' },
  { source: 'root', target: 'maintainability' },
  { source: 'root', target: 'early_detection' },
  { source: 'root', target: 'scalability' },

  { source: 'improved_tooling', target: 'intellisense' },
  { source: 'improved_tooling', target: 'refactoring_tools' },
  { source: 'maintainability', target: 'team_onboarding' },
  { source: 'maintainability', target: 'auto_documentation' },
  { source: 'code_reliability', target: 'static_analysis' },
  { source: 'scalability', target: 'type_contracts' },
  { source: 'scalability', target: 'scoped_modules' },
  { source: 'scalability', target: 'cross_team_scale' },
]

export default { nodes, links }
