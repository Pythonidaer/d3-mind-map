import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Documentation for\nMaintainability',
    definition:
      'Strategies to ensure that developer documentation remains useful, accurate, and scalable over time, especially for solo developers or small teams.',
    color: 'root',
    shape: 'roundRect'
  },

  // Solo Dev Strategies
  {
    id: 'solo_strategies',
    label: 'Solo Dev\nStrategies',
    definition:
      'Low-overhead documentation workflows that help individual developers stay organized and maintain clarity across long-term projects.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'markdown_in_repo',
    label: 'Markdown in\nRepository',
    definition:
      'Keep docs close to code using version-controlled Markdown files. Enables fast editing and documentation that evolves with code.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'storytelling_code',
    label: 'Storytelling\nCode',
    definition:
      'Use descriptive names and inline comments to embed purpose and behavior directly into the code itself.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'task_notes',
    label: 'Task & Idea\nTracking',
    definition:
      'Use flat files or lightweight tools like Notion to track ideas, goals, and architectural decisions in small projects.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Design Rationale
  {
    id: 'design_rationale',
    label: 'Design\nRationale',
    definition:
      'Documentation should explain not only what was built, but why it was built that way. Captures the context and reasoning behind decisions.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'adrs',
    label: 'Architecture\nDecision Records',
    definition:
      'Structured documents that log major technical decisions, alternatives considered, and their consequences.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'why_this_way',
    label: 'Explain\nTradeoffs',
    definition:
      'Describe why a given solution was chosen over others, especially for code that may not seem intuitive at first glance.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'non_goals',
    label: 'State\nNon-Goals',
    definition:
      'Clarify what your system intentionally does not cover to prevent scope creep and misunderstanding.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Code Intent & Dependencies
  {
    id: 'code_intent',
    label: 'Code Intent &\nDependencies',
    definition:
      'Documentation should explain what the code is doing, why it matters, and what it relies on to function.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'function_explainer',
    label: 'Function-Level\nIntent',
    definition:
      'Each function or module should explain its purpose and behavior, either inline or through supporting docs.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'modifiability',
    label: 'Modifiability &\nImpact',
    definition:
      'Describe which parts of the system are safe to change and how those changes may affect other modules.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'dependencies',
    label: 'Dependencies &\nVersions',
    definition:
      'List external libraries, version numbers, and reasons for inclusion. Helps assess risk and update cost later.',
    color: 'nodePositive2',
    shape: 'rect'
  }
];

export const links = [
  { source: 'root', target: 'solo_strategies' },
  { source: 'solo_strategies', target: 'markdown_in_repo' },
  { source: 'solo_strategies', target: 'storytelling_code' },
  { source: 'solo_strategies', target: 'task_notes' },

  { source: 'root', target: 'design_rationale' },
  { source: 'design_rationale', target: 'adrs' },
  { source: 'design_rationale', target: 'why_this_way' },
  { source: 'design_rationale', target: 'non_goals' },

  { source: 'root', target: 'code_intent' },
  { source: 'code_intent', target: 'function_explainer' },
  { source: 'code_intent', target: 'modifiability' },
  { source: 'code_intent', target: 'dependencies' }
];
