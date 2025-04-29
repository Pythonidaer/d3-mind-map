import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Consistent Naming\nStrategies',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Techniques for guiding AI to generate consistently named variables, functions, classes, and entities.',
  },
  {
    id: 'explicit_instructions',
    label: 'Explicit\nInstructions',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Directly tell the model what naming convention to use (e.g., snake_case, CamelCase).',
  },
  {
    id: 'providing_examples',
    label: 'Providing\nExamples',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Show examples of correctly named variables, functions, or classes to prime the model.',
  },
  {
    id: 'format_specifications',
    label: 'Format\nSpecifications',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Define prefixes, suffixes, and delimiters to enforce consistent naming styles.',
  },
  {
    id: 'style_guide_references',
    label: 'Style Guide\nReferences',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Reference formal coding style guides (e.g., PEP 8) to standardize naming.',
  },
  {
    id: 'consistent_terminology',
    label: 'Consistent\nTerminology',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Maintain internal consistency by using the target naming style inside the prompt itself.',
  },
  {
    id: 'iterative_refinement',
    label: 'Iterative\nRefinement',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Review outputs and adjust prompts with clearer or more specific instructions if inconsistencies appear.',
  },
  // Level 2 Nodes
  {
    id: 'specify_convention',
    label: 'Specify\nConvention',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'explicit_instructions',
    definition:
      'Clearly mention desired styles like snake_case, CamelCase, PascalCase, or kebab-case.',
  },
  {
    id: 'entity_type_instructions',
    label: 'Entity-Type\nInstructions',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'explicit_instructions',
    definition:
      'Instruct different styles for variables, functions, and classes based on their roles.',
  },
  {
    id: 'positive_examples',
    label: 'Positive Naming\nExamples',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'providing_examples',
    definition:
      'Provide good examples showcasing how to name entities correctly.',
  },
  {
    id: 'bad_examples_optional',
    label: 'Optional Bad\nExamples',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'providing_examples',
    definition:
      'Optionally show bad examples to contrast good naming conventions, if necessary.',
  },
  {
    id: 'prefix_suffix_usage',
    label: 'Prefix/Suffix\nUsage',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'format_specifications',
    definition:
      'Define standardized prefixes (like config_) or suffixes (like _service) where applicable.',
  },
  {
    id: 'delimiter_instructions',
    label: 'Delimiter\nInstructions',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'format_specifications',
    definition:
      'Specify if underscores, hyphens, or no delimiters are preferred.',
  },
  {
    id: 'reference_pep8',
    label: 'Reference\nPEP 8',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'style_guide_references',
    definition:
      "Mention Python's PEP 8 or equivalent guides for styling and naming conventions.",
  },
  {
    id: 'reaffirm_inside_prompt',
    label: 'Reaffirm in\nPrompt Language',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'consistent_terminology',
    definition:
      'Use the correct naming convention while describing entities inside the prompt.',
  },
  {
    id: 'feedback_iteration',
    label: 'Feedback-Based\nIteration',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'iterative_refinement',
    definition:
      'Analyze inconsistent outputs and iteratively adjust the prompt with more specific guidance.',
  },
]

export const links = [
  { source: 'root', target: 'explicit_instructions' },
  { source: 'root', target: 'providing_examples' },
  { source: 'root', target: 'format_specifications' },
  { source: 'root', target: 'style_guide_references' },
  { source: 'root', target: 'consistent_terminology' },
  { source: 'root', target: 'iterative_refinement' },
  { source: 'explicit_instructions', target: 'specify_convention' },
  { source: 'explicit_instructions', target: 'entity_type_instructions' },
  { source: 'providing_examples', target: 'positive_examples' },
  { source: 'providing_examples', target: 'bad_examples_optional' },
  { source: 'format_specifications', target: 'prefix_suffix_usage' },
  { source: 'format_specifications', target: 'delimiter_instructions' },
  { source: 'style_guide_references', target: 'reference_pep8' },
  { source: 'consistent_terminology', target: 'reaffirm_inside_prompt' },
  { source: 'iterative_refinement', target: 'feedback_iteration' },
]
