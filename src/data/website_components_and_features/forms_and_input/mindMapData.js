import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Forms and\nInput',
    shape: 'roundRect',
    color: 'root',
    definition: 'Fields and structures that collect, validate, and submit user data — including inputs, labels, controls, and interactions.',
  },

  // Level 1
  {
    id: 'form_types',
    label: 'Form\nTypes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Common forms such as contact, login, search, surveys, and checkout flows.',
  },
  {
    id: 'input_elements',
    label: 'Input\nElements',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Individual UI fields used to gather different types of data.',
  },
  {
    id: 'form_behavior',
    label: 'Form\nBehavior',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The logic, flow, and interactivity of the form as it validates and responds to user input.',
  },
  {
    id: 'form_accessibility',
    label: 'Form\nAccessibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Practices for making forms usable by all users, including screen reader support.',
  },
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common form UX and implementation anti-patterns that lead to frustration and abandonment.',
  },

  // Level 2 – Form Types
  {
    id: 'contact_forms',
    label: 'Contact\nForms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_types',
    definition: 'Short forms used to capture name, email, and a message for inquiries.',
  },
  {
    id: 'registration_forms',
    label: 'Registration\nForms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_types',
    definition: 'Forms that collect user info for account creation or onboarding.',
  },
  {
    id: 'login_forms',
    label: 'Login\nForms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_types',
    definition: 'Username and password fields for account access.',
  },
  {
    id: 'search_forms',
    label: 'Search\nForms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_types',
    definition: 'Single-field forms for querying content, usually with autosuggest or filters.',
  },
  {
    id: 'checkout_forms',
    label: 'Checkout\nForms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_types',
    definition: 'Multi-step forms for address, shipping, and payment collection.',
  },
  {
    id: 'survey_forms',
    label: 'Survey\nForms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_types',
    definition: 'Questionnaire-based forms for collecting opinions or feedback.',
  },

  // Level 2 – Input Elements
  {
    id: 'text_inputs',
    label: 'Text\nInputs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'input_elements',
    definition: 'Single-line or multi-line fields for open-ended text.',
  },
  {
    id: 'checkboxes',
    label: 'Checkboxes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'input_elements',
    definition: 'Fields that allow for one or more binary selections.',
  },
  {
    id: 'radio_buttons',
    label: 'Radio\nButtons',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'input_elements',
    definition: 'Grouped inputs allowing one selection from many.',
  },
  {
    id: 'dropdowns',
    label: 'Dropdowns',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'input_elements',
    definition: 'Compact menus for selecting one or more options.',
  },
  {
    id: 'file_uploads_input',
    label: 'File Upload\nInputs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'input_elements',
    definition: 'Inputs that allow users to upload files or media.',
  },
  {
    id: 'date_and_range_inputs',
    label: 'Date and Range\nInputs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'input_elements',
    definition: 'Specialized inputs for selecting dates or ranges via sliders or calendars.',
  },

  // Level 2 – Form Behavior
  {
    id: 'validation_feedback',
    label: 'Validation\nFeedback',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_behavior',
    definition: 'Real-time or post-submit validation to confirm correct input.',
  },
  {
    id: 'loading_and_submission',
    label: 'Loading and\nSubmission',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_behavior',
    definition: 'Transitions, spinners, and success states during form submission.',
  },
  {
    id: 'multi_step_forms',
    label: 'Multi-Step\nForms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_behavior',
    definition: 'Forms split into sequential stages with progress indication.',
  },

  // Level 2 – Form Accessibility
  {
    id: 'label_association',
    label: 'Label\nAssociation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_accessibility',
    definition: 'Proper use of <label> and aria attributes for screen reader context.',
  },
  {
    id: 'keyboard_navigation',
    label: 'Keyboard\nNavigation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_accessibility',
    definition: 'Ensures users can tab, focus, and activate form elements via keyboard.',
  },
  {
    id: 'error_state_accessibility',
    label: 'Accessible\nError States',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_accessibility',
    definition: 'Descriptive error messages with aria-live and clear visual indicators.',
  },

  // Cons
  {
    id: 'missing_labels',
    label: 'Missing\nLabels',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Fields without labels create confusion and reduce accessibility.',
  },
  {
    id: 'overly_long_forms',
    label: 'Overly Long\nForms',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Too many fields or pages can cause abandonment or fatigue.',
  },
  {
    id: 'no_validation',
    label: 'No\nValidation',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Forms that fail silently or don’t guide users through errors.',
  },
  {
    id: 'unclear_submit_feedback',
    label: 'Unclear Submit\nFeedback',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'No loader, success message, or redirect — leaving the user unsure what happened.',
  }
];

export const links = [
  { source: 'root', target: 'form_types' },
  { source: 'root', target: 'input_elements' },
  { source: 'root', target: 'form_behavior' },
  { source: 'root', target: 'form_accessibility' },
  { source: 'root', target: 'cons' },

  { source: 'form_types', target: 'contact_forms' },
  { source: 'form_types', target: 'registration_forms' },
  { source: 'form_types', target: 'login_forms' },
  { source: 'form_types', target: 'search_forms' },
  { source: 'form_types', target: 'checkout_forms' },
  { source: 'form_types', target: 'survey_forms' },

  { source: 'input_elements', target: 'text_inputs' },
  { source: 'input_elements', target: 'checkboxes' },
  { source: 'input_elements', target: 'radio_buttons' },
  { source: 'input_elements', target: 'dropdowns' },
  { source: 'input_elements', target: 'file_uploads_input' },
  { source: 'input_elements', target: 'date_and_range_inputs' },

  { source: 'form_behavior', target: 'validation_feedback' },
  { source: 'form_behavior', target: 'loading_and_submission' },
  { source: 'form_behavior', target: 'multi_step_forms' },

  { source: 'form_accessibility', target: 'label_association' },
  { source: 'form_accessibility', target: 'keyboard_navigation' },
  { source: 'form_accessibility', target: 'error_state_accessibility' },

  { source: 'cons', target: 'missing_labels' },
  { source: 'cons', target: 'overly_long_forms' },
  { source: 'cons', target: 'no_validation' },
  { source: 'cons', target: 'unclear_submit_feedback' }
];
