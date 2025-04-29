import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Automatic Test\nGeneration',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Techniques to instruct Cascade AI to automatically generate tests for code or systems, improving output reliability and quality.',
  },
  {
    id: 'explicit_test_instruction',
    label: 'Explicit Test\nInstruction',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Directly instruct the model to generate tests, specifying the programming language and test framework if applicable.',
  },
  {
    id: 'provide_the_code',
    label: 'Provide the\nCode',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Include the code that needs to be tested within the prompt or reference it clearly.',
  },
  {
    id: 'specify_test_types',
    label: 'Specify Test\nTypes',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Clearly define whether the model should generate unit tests, integration tests, positive cases, negative cases, or a combination.',
  },
  {
    id: 'define_test_scope',
    label: 'Define Test\nScope',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Instruct the model to cover normal inputs, edge cases, and error conditions in the generated tests.',
  },
  {
    id: 'few_shot_test_examples',
    label: 'Few-Shot Test\nExamples',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Provide examples of well-written tests using the desired style and framework to prime the model.',
  },
  {
    id: 'multi_step_prompts',
    label: 'Multi-Step\nPrompts',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Break down the test generation task into logical phases, such as explaining the function first and then planning and writing tests.',
  },
  {
    id: 'iterative_refinement',
    label: 'Iterative\nRefinement',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Review and refine the test generation prompt based on output quality, adding clarification as needed.',
  },
  {
    id: 'prompt_for_test_data',
    label: 'Prompt for\nTest Data',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Instruct the model to generate realistic input data for tests, including both valid and invalid cases.',
  },
  // Level 2 nodes
  {
    id: 'language_specification',
    label: 'Language\nSpecification',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'explicit_test_instruction',
    definition:
      'Specify the programming language (e.g., Python, JavaScript) for test generation.',
  },
  {
    id: 'framework_specification',
    label: 'Framework\nSpecification',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'explicit_test_instruction',
    definition:
      'Define the preferred test framework (e.g., pytest, JUnit, Jest) if applicable.',
  },
  {
    id: 'positive_vs_negative',
    label: 'Positive vs.\nNegative Testing',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'specify_test_types',
    definition:
      'Clarify whether to include both successful case testing and error/failure case testing.',
  },
  {
    id: 'normal_vs_edge_cases',
    label: 'Normal vs.\nEdge Cases',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'define_test_scope',
    definition:
      'Ensure the model tests both common inputs and unusual boundary conditions.',
  },
  {
    id: 'test_data_variety',
    label: 'Test Data\nVariety',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'prompt_for_test_data',
    definition:
      'Request a diverse set of test inputs, including valid, invalid, and boundary cases.',
  },
]

export const links = [
  { source: 'root', target: 'explicit_test_instruction' },
  { source: 'root', target: 'provide_the_code' },
  { source: 'root', target: 'specify_test_types' },
  { source: 'root', target: 'define_test_scope' },
  { source: 'root', target: 'few_shot_test_examples' },
  { source: 'root', target: 'multi_step_prompts' },
  { source: 'root', target: 'iterative_refinement' },
  { source: 'root', target: 'prompt_for_test_data' },
  { source: 'explicit_test_instruction', target: 'language_specification' },
  { source: 'explicit_test_instruction', target: 'framework_specification' },
  { source: 'specify_test_types', target: 'positive_vs_negative' },
  { source: 'define_test_scope', target: 'normal_vs_edge_cases' },
  { source: 'prompt_for_test_data', target: 'test_data_variety' },
]
