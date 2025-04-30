import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Eliciting Clarifying\nQuestions',
    color: 'root',
    shape: 'roundRect',
    definition:
      'Prompt strategies that encourage Cascade AI to ask clarifying questions before making assumptions or generating output.',
  },
  {
    id: 'explicit_question_instruction',
    label: 'Explicit Question\nInstruction',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Tell the model to ask clarifying questions when unsure about task details or requirements.',
  },
  {
    id: 'specify_when_to_ask',
    label: 'Specify When\nto Ask',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Clarify conditions under which the model should ask questions (e.g., vague input, missing data).',
  },
  {
    id: 'role_playing_prompt',
    label: 'Role-Playing\nPrompt',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Assign the model a persona (e.g., helpful engineer) that naturally prioritizes asking questions to reduce errors.',
  },
  {
    id: 'few_shot_dialogues',
    label: 'Few-Shot\nDialogues',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Provide example conversations where the AI pauses to ask clarifying questions before proceeding.',
  },
  {
    id: 'confirmation_prompts',
    label: 'Confirmation\nPrompts',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Encourage the model to ask for confirmation before generating risky, irreversible, or significant output.',
  },
  {
    id: 'iterative_refinement',
    label: 'Iterative\nRefinement',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Update the prompt if the model fails to ask questions by adding stronger or clearer instruction.',
  },
  {
    id: 'platform_config_exploration',
    label: 'Platform Config\nExploration',
    color: 'nodePositive1',
    shape: 'ellipse',
    parent: 'root',
    definition:
      'Investigate whether the AI platform (e.g., Cascade AI) allows setting question-friendly defaults.',
  },
  // Level 2 nodes
  {
    id: 'question_phrasing',
    label: 'Encourage\nQuestion Phrasing',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'explicit_question_instruction',
    definition:
      'Instruct the model to say things like "Can you clarify..." or "Would you like me to...?" when uncertain.',
  },
  {
    id: 'vagueness_cues',
    label: 'Vagueness\nCues',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'specify_when_to_ask',
    definition:
      'Ask the model to seek clarification when prompts contain ambiguity, missing parameters, or vague goals.',
  },
  {
    id: 'risky_output_flagging',
    label: 'Flag Risky\nOutputs',
    color: 'nodePositive2',
    shape: 'rect',
    parent: 'confirmation_prompts',
    definition:
      'Prompt the model to double-check before generating deletions, destructive updates, or security-sensitive logic.',
  },
]

export const links = [
  { source: 'root', target: 'explicit_question_instruction' },
  { source: 'root', target: 'specify_when_to_ask' },
  { source: 'root', target: 'role_playing_prompt' },
  { source: 'root', target: 'few_shot_dialogues' },
  { source: 'root', target: 'confirmation_prompts' },
  { source: 'root', target: 'iterative_refinement' },
  { source: 'root', target: 'platform_config_exploration' },
  { source: 'explicit_question_instruction', target: 'question_phrasing' },
  { source: 'specify_when_to_ask', target: 'vagueness_cues' },
  { source: 'confirmation_prompts', target: 'risky_output_flagging' },
]
