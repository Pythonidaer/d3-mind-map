import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Conclusion and\nRecommendations',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Summary of strategies and final recommendations for achieving effective system prompt optimization within Cascade AI.',
  },
  {
    id: 'master_core_principles',
    label: 'Master Core\nPrinciples',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Prioritize clarity, structure, task decomposition, and examples in all prompts to form a strong foundation.',
  },
  {
    id: 'focus_consistency',
    label: 'Focus on\nConsistency',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Guide Cascade AI to use consistent naming, formatting, and conventions to improve maintainability and output quality.',
  },
  {
    id: 'promote_test_generation',
    label: 'Promote Test\nGeneration',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Integrate automatic test generation into all coding workflows to ensure correctness and reliability of outputs.',
  },
  {
    id: 'enforce_modularity',
    label: 'Enforce\nModularity',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Encourage the AI to build reusable, composable components rather than tightly coupled monolithic solutions.',
  },
  {
    id: 'encourage_questions',
    label: 'Encourage Clarifying\nQuestions',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Prompt Cascade AI to ask for clarification when encountering ambiguity rather than making risky assumptions.',
  },
  {
    id: 'simplify_outputs',
    label: 'Simplify\nOutputs',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Reduce cognitive complexity by promoting straightforward, readable code and explanations.',
  },
  {
    id: 'tailor_to_cascade',
    label: "Tailor to Cascade's\nStrengths",
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      "Continuously adapt prompts based on Cascade AI's observed behaviors, model sensitivities, and platform-specific nuances.",
  },
]

export const links = [
  { source: 'root', target: 'master_core_principles' },
  { source: 'root', target: 'focus_consistency' },
  { source: 'root', target: 'promote_test_generation' },
  { source: 'root', target: 'enforce_modularity' },
  { source: 'root', target: 'encourage_questions' },
  { source: 'root', target: 'simplify_outputs' },
  { source: 'root', target: 'tailor_to_cascade' },
]
