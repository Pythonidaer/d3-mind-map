import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Cross-Cutting Architectures',
    shape: 'roundRect',
    color: 'root',
    definition: 'Architectural patterns that apply across both frontend and backend systems, influencing communication, structure, and scalability.',
  },

  // Node 2 categories
  {
    id: 'communication_patterns',
    label: 'Communication\nPatterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures focusing on how different parts of the system communicate and synchronize.',
    parent: 'root',
  },
  {
    id: 'deployment_patterns',
    label: 'Deployment\nPatterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures focusing on how applications are packaged, built, and delivered.',
    parent: 'root',
  },
  {
    id: 'integration_patterns',
    label: 'Integration\nPatterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures that define standardized ways to integrate components across the full stack.',
    parent: 'root',
  },

  // Node 3 under Communication Patterns
  {
    id: 'bff_crosscut',
    label: 'Backend-for-Frontend\n(BFF)',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Custom API gateways or service layers built to match frontend needs closely.',
    parent: 'communication_patterns',
  },
  {
    id: 'graphql',
    label: 'GraphQL\nAPIs',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Flexible APIs enabling clients to specify exactly what data they need.',
    parent: 'communication_patterns',
  },

  // Node 3 under Deployment Patterns
  {
    id: 'jamstack_crosscut',
    label: 'JAMstack',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pre-rendering static content and serving via CDN with dynamic capabilities added through APIs.',
    parent: 'deployment_patterns',
  },
  {
    id: 'micro_frontends_crosscut',
    label: 'Micro Frontends',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Breaking frontend into independently deployable pieces often coordinated with backend services.',
    parent: 'deployment_patterns',
  },

  // Node 3 under Integration Patterns
  {
    id: 'event_driven_crosscut',
    label: 'Event-Driven\nIntegration',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Using events to decouple systems and trigger actions across frontend and backend asynchronously.',
    parent: 'integration_patterns',
  },
  {
    id: 'rest_apis_crosscut',
    label: 'REST APIs\n(Full Stack)',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Classic client-server communication model using standard HTTP methods (GET, POST, PUT, DELETE).',
    parent: 'integration_patterns',
  },
];

export const links = [
  { source: 'root', target: 'communication_patterns' },
  { source: 'root', target: 'deployment_patterns' },
  { source: 'root', target: 'integration_patterns' },

  { source: 'communication_patterns', target: 'bff_crosscut' },
  { source: 'communication_patterns', target: 'graphql' },

  { source: 'deployment_patterns', target: 'jamstack_crosscut' },
  { source: 'deployment_patterns', target: 'micro_frontends_crosscut' },

  { source: 'integration_patterns', target: 'event_driven_crosscut' },
  { source: 'integration_patterns', target: 'rest_apis_crosscut' },
];
