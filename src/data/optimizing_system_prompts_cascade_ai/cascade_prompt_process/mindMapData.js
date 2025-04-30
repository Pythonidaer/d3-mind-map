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
    id: 'step1_reference',
    label: 'Step 1:\nReference Docs',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Locate and review the official windsrf prompt documentation or internal configuration references that describe system prompt structure and behavior.',
  },
  {
    id: 'step2_add_file',
    label: 'Step 2:\nAdd Prompt File',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Create the windsrf.txt prompt file and store it in /prompts, /config, or other structured folder. Include consistent naming, behavior, and modularity expectations.',
  },
  {
    id: 'step3_wire_up',
    label: 'Step 3:\nWire to Cascade',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Ensure Cascade loads the prompt file at session init via file reference, UI config, startup logic, or environment variables like SYSTEM_PROMPT_PATH.',
  },
  {
    id: 'step4_test',
    label: 'Step 4:\nTest Application',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Test that the prompt is being used by providing ambiguous input and confirming behaviors such as clarifying questions, consistent naming, and modular structure.',
  },
  {
    id: 'step5_logging',
    label: 'Step 5:\nAdd Observability',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Add startup logs and observability hooks to confirm when and how the system prompt is loaded. Include decision logs that track prompt influence on behavior.',
  },
  {
    id: 'step6_checklist',
    label: 'Step 6:\nVerify Checklist',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Create and routinely run a prompt verification checklist to ensure startup reference, test presence, consistent output, and correct fallback behavior.',
  },
  // Level 2 nodes
  {
    id: 'locate_docs',
    label: 'Find Windsurf\nGuidelines',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step1_reference',
    definition:
      'Search Cascade documentation, community posts, or internal resources for prompt format expectations.',
  },
  {
    id: 'confirm_behavior_rules',
    label: 'Confirm Behavior\nRules',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step1_reference',
    definition:
      'Ensure rules around clarification, tone, testing, and documentation are understood before implementation.',
  },
  {
    id: 'create_prompt_file',
    label: 'Create\nwindsrf.txt',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step2_add_file',
    definition:
      'Include full AI behavior prompt with role, flow, naming conventions, and observability instructions.',
  },
  {
    id: 'store_in_repo',
    label: 'Store in\n/config or /prompts',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step2_add_file',
    definition:
      'Save prompt in a dedicated folder where Cascade or your config manager can consistently access it.',
  },
  {
    id: 'link_to_settings',
    label: 'Wire to\nStartup Config',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step3_wire_up',
    definition:
      'Connect the prompt file to Cascade via UI, env vars, or bootstrapping code.',
  },
  {
    id: 'fallback_behavior',
    label: 'Ensure\nFallback Logic',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step3_wire_up',
    definition:
      'Cascade should default to clarifying if a prompt path is invalid or not found.',
  },
  {
    id: 'manual_tests',
    label: 'Test for\nClarification Prompts',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step4_test',
    definition:
      'Manually test vague requests and ensure Cascade follows prompt logic to clarify intent.',
  },
  {
    id: 'write_unit_tests',
    label: 'Write Unit\nValidation Tests',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step4_test',
    definition:
      'Automate validation that prompt is respected by checking test assertions on output structure.',
  },
  {
    id: 'log_prompt_loading',
    label: 'Log Prompt\nLoad Events',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step5_logging',
    definition:
      'Add a log entry confirming the prompt loaded and parsed successfully.',
  },
  {
    id: 'capture_decision_log',
    label: 'Capture\nDecision Trail',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step5_logging',
    definition:
      'Log prompt-driven decisions to aid debugging and ensure visibility into AI behavior.',
  },
  {
    id: 'run_checklist_routinely',
    label: 'Run Checklist\nPre-Launch',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step6_checklist',
    definition:
      'Run checklist before every release to ensure prompt loading, clarity, testing, and documentation work.',
  },
  {
    id: 'check_behavior_consistency',
    label: 'Verify\nBehavior Match',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'step6_checklist',
    definition:
      'Check whether clarifying prompts, modular output, and tone match expectations from the windsrf file.',
  },
]

export const links = [
  { source: 'root', target: 'step1_reference' },
  { source: 'root', target: 'step2_add_file' },
  { source: 'root', target: 'step3_wire_up' },
  { source: 'root', target: 'step4_test' },
  { source: 'root', target: 'step5_logging' },
  { source: 'root', target: 'step6_checklist' },
  { source: 'step1_reference', target: 'locate_docs' },
  { source: 'step1_reference', target: 'confirm_behavior_rules' },
  { source: 'step2_add_file', target: 'create_prompt_file' },
  { source: 'step2_add_file', target: 'store_in_repo' },
  { source: 'step3_wire_up', target: 'link_to_settings' },
  { source: 'step3_wire_up', target: 'fallback_behavior' },
  { source: 'step4_test', target: 'manual_tests' },
  { source: 'step4_test', target: 'write_unit_tests' },
  { source: 'step5_logging', target: 'log_prompt_loading' },
  { source: 'step5_logging', target: 'capture_decision_log' },
  { source: 'step6_checklist', target: 'run_checklist_routinely' },
  { source: 'step6_checklist', target: 'check_behavior_consistency' },
]
