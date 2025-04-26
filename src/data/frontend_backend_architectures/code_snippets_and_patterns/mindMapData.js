import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Code Snippets and \nPractical Patterns',
    shape: 'roundRect',
    color: 'root',
    definition: 'Common practical coding patterns and code snippets for frontend, backend, and integration scenarios.',
  },

  // Node 2 categories
  {
    id: 'frontend_patterns',
    label: 'Frontend\nPatterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Patterns for building efficient, maintainable frontend applications.',
    parent: 'root',
  },
  {
    id: 'backend_patterns',
    label: 'Backend\nPatterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Server-side programming techniques for scalable and organized backend services.',
    parent: 'root',
  },
  {
    id: 'integration_patterns',
    label: 'Integration\nPatterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Patterns that focus on communication between frontend and backend systems.',
    parent: 'root',
  },

  // Node 3 under Frontend Patterns
  {
    id: 'component_composition',
    label: 'Component\nComposition',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Building UIs by composing reusable, independent components.',
    parent: 'frontend_patterns',
  },
  {
    id: 'state_management',
    label: 'State\nManagement',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Managing local and global application state effectively.',
    parent: 'frontend_patterns',
  },
  {
    id: 'lazy_loading',
    label: 'Lazy\nLoading',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Loading resources or components only when needed to optimize performance.',
    parent: 'frontend_patterns',
  },

  // Node 3 under Backend Patterns
  {
    id: 'routing',
    label: 'API\nRouting',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Organizing endpoints and routes cleanly in server-side applications.',
    parent: 'backend_patterns',
  },
  {
    id: 'error_handling',
    label: 'Error\nHandling',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Handling server and client errors gracefully and consistently.',
    parent: 'backend_patterns',
  },
  {
    id: 'async_patterns',
    label: 'Asynchronous\nPatterns',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Techniques for managing non-blocking operations and concurrency.',
    parent: 'backend_patterns',
  },

  // Node 3 under Integration Patterns
  {
    id: 'restful_api_consumption',
    label: 'RESTful API\nConsumption',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Fetching, sending, and manipulating data through REST APIs.',
    parent: 'integration_patterns',
  },
  {
    id: 'graphql_queries',
    label: 'GraphQL\nQueries',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Efficiently fetching only the required data from a GraphQL API.',
    parent: 'integration_patterns',
  },
  {
    id: 'authentication_flows',
    label: 'Authentication\nFlows',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Handling login, registration, and session validation securely.',
    parent: 'integration_patterns',
  },
];

export const links = [
  { source: 'root', target: 'frontend_patterns' },
  { source: 'root', target: 'backend_patterns' },
  { source: 'root', target: 'integration_patterns' },

  { source: 'frontend_patterns', target: 'component_composition' },
  { source: 'frontend_patterns', target: 'state_management' },
  { source: 'frontend_patterns', target: 'lazy_loading' },

  { source: 'backend_patterns', target: 'routing' },
  { source: 'backend_patterns', target: 'error_handling' },
  { source: 'backend_patterns', target: 'async_patterns' },

  { source: 'integration_patterns', target: 'restful_api_consumption' },
  { source: 'integration_patterns', target: 'graphql_queries' },
  { source: 'integration_patterns', target: 'authentication_flows' },
];
