import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Specialized React Libraries',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Focused libraries designed to solve specific frontend challenges such as admin dashboards, form management, and validation in React applications.',
  },
  // React-Admin
  {
    id: 'react_admin',
    label: 'React-Admin',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A frontend framework for building admin interfaces and dashboards using REST or GraphQL APIs.',
  },
  {
    id: 'react_admin_use_cases',
    label: 'React-Admin\nUse Cases',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'react_admin',
    definition:
      'Building CRUD dashboards, CMS systems, and internal management tools.',
  },
  {
    id: 'react_admin_limitations',
    label: 'React-Admin\nLimitations',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'react_admin',
    definition:
      'Heavy reliance on client-side rendering; SSR requires extra setup in Next.js.',
  },

  // Formik
  {
    id: 'formik',
    label: 'Formik',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A form management library that simplifies building forms, handling form state, and integrating schema validation.',
  },
  {
    id: 'formik_strengths',
    label: 'Formik\nStrengths',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'formik',
    definition:
      'Declarative form building, easy integration with Yup/Zod for validation, helpful for medium to large forms.',
  },
  {
    id: 'formik_drawbacks',
    label: 'Formik\nDrawbacks',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'formik',
    definition:
      'May introduce performance issues in very large forms due to rerendering.',
  },

  // React Hook Form
  {
    id: 'react_hook_form',
    label: 'React Hook Form',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A performant and flexible form library using uncontrolled components and subscriptions to minimize rerenders.',
  },
  {
    id: 'rhookform_pros',
    label: 'React Hook Form\nBenefits',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'react_hook_form',
    definition:
      'High performance even with large, complex forms; integrates easily with schema validation libraries.',
  },
  {
    id: 'rhookform_challenges',
    label: 'React Hook Form\nChallenges',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'react_hook_form',
    definition:
      'Learning curve due to differences from traditional controlled form approaches.',
  },

  // Pitfalls
  {
    id: 'specialized_libraries_pitfalls',
    label: 'Specialized \nLibraries\nPitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common mistakes when using admin or form libraries improperly or without considering app architecture.',
  },
  {
    id: 'wrong_library_choice',
    label: 'Wrong Library\nChoice',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'specialized_libraries_pitfalls',
    definition:
      'Using Formik for extremely dynamic forms when React Hook Form would perform better, or using React-Admin when SSR is critical.',
  },
  {
    id: 'overcomplicated_forms',
    label: 'Overcomplicated\nForms',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'specialized_libraries_pitfalls',
    definition:
      'Adding unnecessary nesting, deep validation logic, or redundant field states that slow down performance.',
  },
]

export const links = [
  // Core branches
  { source: 'root', target: 'react_admin' },
  { source: 'root', target: 'formik' },
  { source: 'root', target: 'react_hook_form' },
  { source: 'root', target: 'specialized_libraries_pitfalls' },

  // React-Admin sub-nodes
  { source: 'react_admin', target: 'react_admin_use_cases' },
  { source: 'react_admin', target: 'react_admin_limitations' },

  // Formik sub-nodes
  { source: 'formik', target: 'formik_strengths' },
  { source: 'formik', target: 'formik_drawbacks' },

  // React Hook Form sub-nodes
  { source: 'react_hook_form', target: 'rhookform_pros' },
  { source: 'react_hook_form', target: 'rhookform_challenges' },

  // Pitfalls sub-nodes
  { source: 'specialized_libraries_pitfalls', target: 'wrong_library_choice' },
  { source: 'specialized_libraries_pitfalls', target: 'overcomplicated_forms' },
]
