import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Tailoring Prompts\nfor Cascade AI',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Approaches for customizing prompts specifically to Cascade AI, even in the absence of official platform-wide prompt engineering guidelines.',
  },
  {
    id: 'apply_general_principles',
    label: 'Apply General\nPrinciples',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Use foundational prompt strategies like clarity, structure, and few-shot examples even without platform-specific documentation.',
  },
  {
    id: 'test_prompt_variations',
    label: 'Test Prompt\nVariations',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Experiment with multiple prompt formats to evaluate which patterns Cascade AI responds to most reliably.',
  },
  {
    id: 'monitor_model_behavior',
    label: 'Monitor Model\nBehavior',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Analyze output consistency, clarity, and errors over time to detect prompt sensitivity or model limitations.',
  },
  {
    id: 'explore_platform_resources',
    label: 'Explore Platform\nResources',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Check Cascade AI documentation, settings, or community forums for hidden features, constraints, or tips.',
  },
  {
    id: 'adapt_to_model_type',
    label: 'Adapt to\nModel Type',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Consider how Cascade AI’s underlying model style (reasoning vs. generative) might affect how prompts should be framed.',
  },
  {
    id: 'investigate_keywords',
    label: 'Investigate\nKeywords and Prefixes',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Test whether Cascade AI responds to specific keywords or phrases like "windsurf" that may shape behavior.',
  },
  {
    id: 'track_prompt_evolution',
    label: 'Track Prompt\nEvolution',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Maintain a changelog of your best-performing prompts, refinements, and experiments across projects.',
  },
  // Level 2 nodes
  {
    id: 'structure_examples',
    label: 'Use Structured\nExamples',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'apply_general_principles',
    definition:
      'Format instructions, context, and examples with section delimiters like "### Input" or "::: Output".',
  },
  {
    id: 'track_success_failures',
    label: 'Log Successes\nand Failures',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'monitor_model_behavior',
    definition:
      'Keep track of which prompt formats lead to ideal, flawed, or inconsistent results.',
  },
  {
    id: 'differentiate_model_behaviors',
    label: 'Differentiate\nModel Behaviors',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'adapt_to_model_type',
    definition:
      'Reasoning-heavy models benefit from step-by-step guidance, while generative models may need more structured constraints.',
  },
]

export const links = [
  { source: 'root', target: 'apply_general_principles' },
  { source: 'root', target: 'test_prompt_variations' },
  { source: 'root', target: 'monitor_model_behavior' },
  { source: 'root', target: 'explore_platform_resources' },
  { source: 'root', target: 'adapt_to_model_type' },
  { source: 'root', target: 'investigate_keywords' },
  { source: 'root', target: 'track_prompt_evolution' },
  { source: 'apply_general_principles', target: 'structure_examples' },
  { source: 'monitor_model_behavior', target: 'track_success_failures' },
  { source: 'adapt_to_model_type', target: 'differentiate_model_behaviors' },
]
