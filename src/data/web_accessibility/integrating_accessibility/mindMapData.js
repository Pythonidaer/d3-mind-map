import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Integrating Accessibility\ninto Development',
    definition: 'Embedding accessibility into every stage of the design, development, and maintenance process.',
    color: 'root',
    shape: 'roundRect',
  },

  // Level 1: Lifecycle stages
  {
    id: 'planning_stage',
    label: 'Planning\n& Discovery',
    definition: 'Define accessibility goals, success metrics, and user needs from the outset.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'design_stage',
    label: 'Design &\nPrototyping',
    definition: 'Use accessible color palettes, text sizes, and UI components during visual design.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'development_stage',
    label: 'Development &\nImplementation',
    definition: 'Write semantic HTML, test keyboard flows, and include ARIA only when needed.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'testing_stage',
    label: 'Testing &\nValidation',
    definition: 'Use automated, manual, and user-based testing to confirm WCAG conformance.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },
  {
    id: 'maintenance_stage',
    label: 'Maintenance &\nIteration',
    definition: 'Ensure accessibility is maintained through content updates and future deployments.',
    color: 'nodePositive1',
    shape: 'ellipse',
  },

  // Level 2: Practices per stage
  {
    id: 'a11y_goals',
    label: 'Accessibility\nRequirements',
    definition: 'Define WCAG level, target platforms, and assistive tech support expectations.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'personas_disabilities',
    label: 'Inclusive\nPersonas',
    definition: 'Create personas with disabilities to guide planning and user journey mapping.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'color_contrast_ui',
    label: 'Accessible\nDesign Tokens',
    definition: 'Select fonts, contrast-safe color palettes, and scalable spacing from the start.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'design_patterns',
    label: 'Accessible\nComponents',
    definition: 'Use ARIA patterns, skip links, and modals that meet keyboard and screen reader standards.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'code_reviews',
    label: 'A11y Code\nReviews',
    definition: 'Review markup, roles, and keyboard logic during PRs and QA.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'linting_ci',
    label: 'Linting &\nCI Rules',
    definition: 'Use a11y linters, ESLint plugins, and automated tests in your CI/CD pipeline.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'user_feedback',
    label: 'User\nFeedback Loops',
    definition: 'Gather feedback from disabled users to drive inclusive iteration.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'training',
    label: 'Team\nTraining',
    definition: 'Educate designers, devs, QA, and PMs on a11y principles and tools.',
    color: 'nodePositive2',
    shape: 'rect',
  },
  {
    id: 'content_audits',
    label: 'Ongoing\nContent Audits',
    definition: 'Check that new content continues to meet alt text, heading, and contrast rules.',
    color: 'nodePositive2',
    shape: 'rect',
  }
];

export const links = [
  { source: 'root', target: 'planning_stage' },
  { source: 'root', target: 'design_stage' },
  { source: 'root', target: 'development_stage' },
  { source: 'root', target: 'testing_stage' },
  { source: 'root', target: 'maintenance_stage' },

  { source: 'planning_stage', target: 'a11y_goals' },
  { source: 'planning_stage', target: 'personas_disabilities' },

  { source: 'design_stage', target: 'color_contrast_ui' },
  { source: 'design_stage', target: 'design_patterns' },

  { source: 'development_stage', target: 'code_reviews' },
  { source: 'development_stage', target: 'linting_ci' },

  { source: 'testing_stage', target: 'user_feedback' },
  { source: 'testing_stage', target: 'training' },

  { source: 'maintenance_stage', target: 'content_audits' }
];
