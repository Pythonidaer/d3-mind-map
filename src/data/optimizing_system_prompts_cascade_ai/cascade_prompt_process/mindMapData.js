import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Cascade System\nPrompt Process',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Step-by-step process for implementing, testing, observing, and verifying a system prompt in Cascade AI, ensuring consistent model behavior and reliability.',
  },
  {
    id: 'reference_windsurf_rules',
    label: 'Reference\nWindsurf Rules',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Start by reviewing the official "windsurf" prompt guidelines or platform documentation to understand Cascade AI’s prompt file expectations.',
  },
  {
    id: 'add_prompt_file',
    label: 'Add Prompt\nFile to Repository',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Create and save your system prompt file (e.g., windsrf.txt) in the appropriate project folder, following any naming conventions recommended by Cascade AI.',
  },
  {
    id: 'wire_prompt_to_memory',
    label: 'Wire Prompt to\nCascade Memory',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Configure Cascade settings to reference your custom system prompt file during session initialization or model loading, if necessary.',
  },
  {
    id: 'test_prompt_traversal',
    label: 'Test Prompt\nTraversal',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Design tests to ensure that Cascade AI reads and applies the full system prompt consistently at the start of every new session or task execution.',
  },
  {
    id: 'implement_observability',
    label: 'Implement\nObservability',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Establish logs or monitoring processes to track whether system prompts were successfully loaded and followed during execution.',
  },
  {
    id: 'build_verification_checklist',
    label: 'Build Verification\nChecklist',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Create a repeatable checklist to verify that every deployment, test, or major update still meets prompt loading, application, and behavioral expectations.',
  },
  // Level 2 Nodes
  {
    id: 'locate_documentation',
    label: 'Locate Official\nDocumentation',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'reference_windsurf_rules',
    definition:
      'Search Cascade AI resources (docs, support articles, forums) for any windsrf-related prompt format or behavioral guidelines.',
  },
  {
    id: 'save_in_correct_location',
    label: 'Save in Correct\nLocation',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'add_prompt_file',
    definition:
      'Place the system prompt file where Cascade AI expects it, such as a /prompts or /config directory.',
  },
  {
    id: 'update_model_settings',
    label: 'Update Cascade\nSettings',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'wire_prompt_to_memory',
    definition:
      'Modify any configuration files, environment variables, or setup scripts so Cascade links the prompt file correctly on initialization.',
  },
  {
    id: 'design_unit_tests',
    label: 'Design Unit\nTests',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'test_prompt_traversal',
    definition:
      'Write simple automated tests that simulate starting a session and verifying that system prompts were applied successfully.',
  },
  {
    id: 'log_prompt_loading',
    label: 'Log Prompt\nLoading',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'implement_observability',
    definition:
      'Add explicit logging to confirm when and how the system prompt was loaded and parsed at runtime.',
  },
  {
    id: 'verify_key_behaviors',
    label: 'Verify Key\nBehaviors',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'build_verification_checklist',
    definition:
      'Ensure that critical behaviors defined in the system prompt (e.g., always asking clarifying questions) are consistently observed.',
  },
]

export const links = [
  { source: 'root', target: 'reference_windsurf_rules' },
  { source: 'root', target: 'add_prompt_file' },
  { source: 'root', target: 'wire_prompt_to_memory' },
  { source: 'root', target: 'test_prompt_traversal' },
  { source: 'root', target: 'implement_observability' },
  { source: 'root', target: 'build_verification_checklist' },
  { source: 'reference_windsurf_rules', target: 'locate_documentation' },
  { source: 'add_prompt_file', target: 'save_in_correct_location' },
  { source: 'wire_prompt_to_memory', target: 'update_model_settings' },
  { source: 'test_prompt_traversal', target: 'design_unit_tests' },
  { source: 'implement_observability', target: 'log_prompt_loading' },
  { source: 'build_verification_checklist', target: 'verify_key_behaviors' },
]
