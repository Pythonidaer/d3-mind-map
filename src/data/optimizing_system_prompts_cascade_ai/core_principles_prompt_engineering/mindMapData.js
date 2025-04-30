import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Core Principles\nof Prompt Engineering',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Foundational best practices for designing effective system prompts that guide AI behavior.',
  },
  {
    id: 'clear_specific_instructions',
    label: 'Clear and Specific\nInstructions',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Prompts must clearly articulate outcome, format, tone, style, audience, and context.',
  },
  {
    id: 'sufficient_context',
    label: 'Sufficient\nContext',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Provide enough relevant details so the model can generate informed and accurate outputs.',
  },
  {
    id: 'structured_inputs_outputs',
    label: 'Structured Inputs\nand Outputs',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Use clear formats like JSON, lists, tables, and delimiters (###, """) to organize prompts.',
  },
  {
    id: 'task_decomposition',
    label: 'Task\nDecomposition',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Break large prompts into smaller, manageable subtasks to improve clarity and focus.',
  },
  {
    id: 'few_shot_prompting',
    label: 'Few-Shot\nPrompting',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Provide examples to show expected input-output patterns and guide model behavior.',
  },
  {
    id: 'affirmative_language',
    label: 'Affirmative\nLanguage',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Use "do" instructions rather than "don\'t", giving clear positive guidance.',
  },
  {
    id: 'lead_the_model',
    label: 'Lead the\nModel',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Use guiding phrases like "think step by step" to encourage logical and sequential reasoning.',
  },
  {
    id: 'iterative_refinement',
    label: 'Iterative\nRefinement',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Test and refine prompts continuously based on model output to improve results.',
  },
  // Level 2 Nodes
  {
    id: 'audience_specification',
    label: 'Specify\nAudience',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'clear_specific_instructions',
    definition: 'Define the target reader or user for more tailored outputs.',
  },
  {
    id: 'outcome_articulation',
    label: 'Articulate\nDesired Outcome',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'clear_specific_instructions',
    definition:
      'State clearly what the model is supposed to accomplish or deliver.',
  },
  {
    id: 'background_details',
    label: 'Provide\nBackground Details',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'sufficient_context',
    definition:
      'Include essential information about the topic, domain, or project.',
  },
  {
    id: 'format_specification',
    label: 'Specify Output\nFormat',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'structured_inputs_outputs',
    definition:
      'Indicate if output should be a list, table, paragraph, or code block.',
  },
  {
    id: 'use_clear_separators',
    label: 'Use Clear\nSeparators',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'structured_inputs_outputs',
    definition:
      'Visibly separate instructions, context, and examples with delimiters like ###.',
  },
  {
    id: 'smaller_steps',
    label: 'Simplify into\nSmaller Steps',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'task_decomposition',
    definition:
      'Divide complex instructions into logical subparts for easier processing.',
  },
  {
    id: 'positive_instruction',
    label: 'Use Positive\nInstruction',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'affirmative_language',
    definition:
      'Frame tasks affirmatively rather than telling the model what not to do.',
  },
  {
    id: 'logical_guidance',
    label: 'Encourage\nLogical Steps',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'lead_the_model',
    definition:
      'Prompt the model to reason sequentially rather than jumping to conclusions.',
  },
  {
    id: 'test_variations',
    label: 'Test\nVariations',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'iterative_refinement',
    definition:
      'Try different prompt versions to find the most effective structures.',
  },
]

export const links = [
  { source: 'root', target: 'clear_specific_instructions' },
  { source: 'root', target: 'sufficient_context' },
  { source: 'root', target: 'structured_inputs_outputs' },
  { source: 'root', target: 'task_decomposition' },
  { source: 'root', target: 'few_shot_prompting' },
  { source: 'root', target: 'affirmative_language' },
  { source: 'root', target: 'lead_the_model' },
  { source: 'root', target: 'iterative_refinement' },
  { source: 'clear_specific_instructions', target: 'audience_specification' },
  { source: 'clear_specific_instructions', target: 'outcome_articulation' },
  { source: 'sufficient_context', target: 'background_details' },
  { source: 'structured_inputs_outputs', target: 'format_specification' },
  { source: 'structured_inputs_outputs', target: 'use_clear_separators' },
  { source: 'task_decomposition', target: 'smaller_steps' },
  { source: 'affirmative_language', target: 'positive_instruction' },
  { source: 'lead_the_model', target: 'logical_guidance' },
  { source: 'iterative_refinement', target: 'test_variations' },
]
