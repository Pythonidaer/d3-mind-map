import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Reducing Cognitive\nComplexity',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Prompting techniques that guide Cascade AI to produce outputs that are simple, readable, and mentally efficient to understand or use.',
  },
  {
    id: 'simple_direct_instructions',
    label: 'Simple and Direct\nInstructions',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Use plain, clear, and unambiguous language in prompts to reduce misunderstanding and verbosity in responses.',
  },
  {
    id: 'break_down_tasks',
    label: 'Break Down\nComplex Tasks',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Decompose multi-step problems or workflows into smaller subtasks to simplify reasoning.',
  },
  {
    id: 'request_simple_solutions',
    label: 'Request Simple\nSolutions',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Ask for basic, straightforward answers over optimized or over-engineered ones.',
  },
  {
    id: 'avoid_advanced_features',
    label: 'Avoid Advanced\nFeatures',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Instruct the model to avoid complex language features, libraries, or paradigms unless required.',
  },
  {
    id: 'emphasize_readability',
    label: 'Emphasize\nReadability',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Guide the AI to use clean formatting, clear naming, and inline comments to support understanding.',
  },
  {
    id: 'step_by_step_reasoning',
    label: 'Step-by-Step\nReasoning',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Prompt the model to explain its thought process incrementally before or during generation.',
  },
  {
    id: 'iterative_simplification',
    label: 'Iterative\nSimplification',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Request multiple passes of output, simplifying each time based on feedback or clarity goals.',
  },
  // Level 2 nodes
  {
    id: 'plain_language',
    label: 'Use Plain\nLanguage',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'simple_direct_instructions',
    definition:
      'Favor everyday phrasing and intuitive metaphors over jargon or verbosity.',
  },
  {
    id: 'structure_response',
    label: 'Structure\nResponses',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'simple_direct_instructions',
    definition:
      'Ask for lists, headings, or other structured outputs to reduce cognitive load when reading results.',
  },
  {
    id: 'minimize_nested_logic',
    label: 'Minimize\nNested Logic',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'request_simple_solutions',
    definition:
      'Avoid deeply nested loops, conditionals, or callbacks in generated code to improve clarity.',
  },
  {
    id: 'comment_explanations',
    label: 'Add Inline\nComments',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'emphasize_readability',
    definition:
      'Encourage inline explanations and docstrings that describe purpose and logic of each part.',
  },
]

export const links = [
  { source: 'root', target: 'simple_direct_instructions' },
  { source: 'root', target: 'break_down_tasks' },
  { source: 'root', target: 'request_simple_solutions' },
  { source: 'root', target: 'avoid_advanced_features' },
  { source: 'root', target: 'emphasize_readability' },
  { source: 'root', target: 'step_by_step_reasoning' },
  { source: 'root', target: 'iterative_simplification' },
  { source: 'simple_direct_instructions', target: 'plain_language' },
  { source: 'simple_direct_instructions', target: 'structure_response' },
  { source: 'request_simple_solutions', target: 'minimize_nested_logic' },
  { source: 'emphasize_readability', target: 'comment_explanations' },
]
