import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Crosscutting Architectures',
    shape: 'roundRect',
    color: 'root',
    definition: 'Architectures that blend frontend and backend concerns or orchestrate system-wide interaction across services.',
  },

  // Node 2 categories
  {
    id: 'api_communication',
    label: 'API &\nCommunication',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures focused on how clients and services exchange data.',
    parent: 'root',
  },
  {
    id: 'fullstack_patterns',
    label: 'Frontend-Leaning\nFull Stack',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures where frontend and backend boundaries blur, often sharing logic.',
    parent: 'root',
  },
  {
    id: 'integration_and_composition',
    label: 'Integration &\nComposition',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Patterns focused on integrating multiple systems and composing experiences from multiple sources.',
    parent: 'root',
  },

  // Node 3 under API & Communication
  { id: 'rest_api', label: 'RESTful API', shape: 'rect', color: 'nodePositive2', definition: 'Data is exposed and manipulated via HTTP verbs (GET, POST, PUT, DELETE).', parent: 'api_communication' },
  { id: 'graphql', label: 'GraphQL', shape: 'rect', color: 'nodePositive2', definition: 'Clients specify precisely the data they need, reducing over-fetching.', parent: 'api_communication' },
  { id: 'federated_graphql', label: 'Federated GraphQL', shape: 'rect', color: 'nodePositive2', definition: 'Multiple GraphQL services form a unified graph, allowing independent service ownership.', parent: 'api_communication' },
  { id: 'api_gateway', label: 'API Gateway', shape: 'rect', color: 'nodePositive2', definition: 'Centralized entry point that routes requests to appropriate backend services.', parent: 'api_communication' },
  { id: 'multi_backend_federation', label: 'Multi-Backend Federation', shape: 'rect', color: 'nodePositive2', definition: 'Combining REST, GraphQL, and gRPC under a unified access layer.', parent: 'api_communication' },

  // Node 3 under Frontend-Leaning Full Stack
  { id: 'isomorphic_apps', label: 'Isomorphic Apps', shape: 'rect', color: 'nodePositive2', definition: 'Applications where the same codebase runs on both server and client.', parent: 'fullstack_patterns' },
  { id: 'backend_on_frontend', label: 'Backend-on-Frontend (BOF)', shape: 'rect', color: 'nodePositive2', definition: 'Frontend applications directly query backend APIs without a traditional server.', parent: 'fullstack_patterns' },
  { id: 'headless_cms', label: 'Headless CMS', shape: 'rect', color: 'nodePositive2', definition: 'Frontend apps consume content from CMS systems via APIs, decoupling content management from rendering.', parent: 'fullstack_patterns' },

  // Node 3 under Integration & Composition
  { id: 'composable_architecture', label: 'Composable', shape: 'rect', color: 'nodePositive2', definition: 'Systems built by composing SaaS, APIs, microservices, and frontend components.', parent: 'integration_and_composition' },
  { id: 'multi_tenant', label: 'Multi-Tenant', shape: 'rect', color: 'nodePositive2', definition: 'A single backend serves multiple customers (tenants) with isolated or shared resources.', parent: 'integration_and_composition' },
  { id: 'event_driven', label: 'Event-Driven', shape: 'rect', color: 'nodePositive2', definition: 'Systems react to and process events asynchronously, enabling decoupled communication.', parent: 'integration_and_composition' },
];

export const links = [
  { source: 'root', target: 'api_communication' },
  { source: 'root', target: 'fullstack_patterns' },
  { source: 'root', target: 'integration_and_composition' },

  { source: 'api_communication', target: 'rest_api' },
  { source: 'api_communication', target: 'graphql' },
  { source: 'api_communication', target: 'federated_graphql' },
  { source: 'api_communication', target: 'api_gateway' },
  { source: 'api_communication', target: 'multi_backend_federation' },

  { source: 'fullstack_patterns', target: 'isomorphic_apps' },
  { source: 'fullstack_patterns', target: 'backend_on_frontend' },
  { source: 'fullstack_patterns', target: 'headless_cms' },

  { source: 'integration_and_composition', target: 'composable_architecture' },
  { source: 'integration_and_composition', target: 'multi_tenant' },
  { source: 'integration_and_composition', target: 'event_driven' },
];
