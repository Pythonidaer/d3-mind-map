import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'User Flows &\nOnboarding',
    definition: 'Guide users from data upload to actionable insight through intentional flows and supportive onboarding UX.',
    shape: 'roundRect',
    color: 'root',
  },

  // Positive Level 1
  {
    id: 'upload_flow',
    label: 'Job Description\nUpload Flow',
    definition: 'The user’s path from selecting a file to successful parsing and confirmation.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'mapping_flow',
    label: 'Data Mapping\nExperience',
    definition: 'Interactive steps that help users match their data fields to your expected schema.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'initial_dashboard',
    label: 'Initial Dashboard\nExperience',
    definition: 'What users see immediately after their data is uploaded or when no data exists.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'onboarding_helpers',
    label: 'Onboarding\nMechanisms',
    definition: 'UI elements that help orient new users to dashboard functionality and flow.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Negative Level 1
  {
    id: 'flow_anti_patterns',
    label: 'User Flow\nAnti-Patterns',
    definition: 'Common mistakes that lead to confusion, frustration, or user drop-off in onboarding.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },

  // Children of Upload Flow
  {
    id: 'drag_and_drop',
    label: 'Drag-and-Drop\nSupport',
    definition: 'Allow file upload via intuitive drag-and-drop interface as well as manual selection.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'pre_upload_validation',
    label: 'Pre-Upload\nValidation',
    definition: 'Check file type, size, and column structure before submission.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'upload_success_state',
    label: 'Upload\nConfirmation UI',
    definition: 'Provide success message, parsed file summary, and call to next action.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Mapping Flow
  {
    id: 'auto_column_mapping',
    label: 'Auto Mapping\nSuggestions',
    definition: 'Suggest matches between user columns and expected schema fields.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'manual_override',
    label: 'Manual Mapping\nOverrides',
    definition: 'Let users manually adjust suggested column matches with dropdowns or forms.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Initial Dashboard
  {
    id: 'empty_state',
    label: 'Empty State\nDesign',
    definition: 'Offer clear messaging, sample data, or prompts when no data has been uploaded yet.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'first_insights',
    label: 'Post-Upload\nFirst Insights',
    definition: 'Highlight useful, high-level insights immediately after upload.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Onboarding Helpers
  {
    id: 'guided_tour',
    label: 'Guided\nTour or Overlay',
    definition: 'Step-by-step UI walkthrough using overlays or modals.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tooltip_support',
    label: 'Contextual\nTooltips',
    definition: 'Use icons or hover targets to explain metrics, filters, and layouts.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Children of Anti-Patterns
  {
    id: 'no_next_step',
    label: 'No Clear\nNext Step',
    definition: 'Leaving users stranded after upload without call to action or guidance.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'overlong_tour',
    label: 'Overwhelming or\nUnskippable Tours',
    definition: 'Long onboarding flows that interrupt exploration or force reading.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'no_data_guidance',
    label: 'Empty State\nConfusion',
    definition: 'Showing a blank dashboard without explaining how to get started.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'upload_flow' },
  { source: 'root', target: 'mapping_flow' },
  { source: 'root', target: 'initial_dashboard' },
  { source: 'root', target: 'onboarding_helpers' },
  { source: 'root', target: 'flow_anti_patterns' },

  { source: 'upload_flow', target: 'drag_and_drop' },
  { source: 'upload_flow', target: 'pre_upload_validation' },
  { source: 'upload_flow', target: 'upload_success_state' },

  { source: 'mapping_flow', target: 'auto_column_mapping' },
  { source: 'mapping_flow', target: 'manual_override' },

  { source: 'initial_dashboard', target: 'empty_state' },
  { source: 'initial_dashboard', target: 'first_insights' },

  { source: 'onboarding_helpers', target: 'guided_tour' },
  { source: 'onboarding_helpers', target: 'tooltip_support' },

  { source: 'flow_anti_patterns', target: 'no_next_step' },
  { source: 'flow_anti_patterns', target: 'overlong_tour' },
  { source: 'flow_anti_patterns', target: 'no_data_guidance' }
];
