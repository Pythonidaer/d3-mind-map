import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Backend Architectures',
    shape: 'roundRect',
    color: 'root',
    definition: 'The organizational patterns and structural designs used to manage server-side logic, APIs, databases, and services.',
  },

  // Node 2 categories
  {
    id: 'monolithic_systems',
    label: 'Monolithic\nSystems',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Backend systems where all functionality is combined into a single deployable unit.',
    parent: 'root',
  },
  {
    id: 'distributed_systems',
    label: 'Distributed\nSystems',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Systems designed around decentralization, where services communicate across a network.',
    parent: 'root',
  },
  {
    id: 'api_focused_systems',
    label: 'API-Focused\nSystems',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures emphasizing the API as the primary contract for communication and functionality.',
    parent: 'root',
  },
  {
    id: 'domain_modeling_systems',
    label: 'Domain Modeling\nSystems',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures that focus on modeling business logic and separating responsibilities.',
    parent: 'root',
  },

  // Node 3 under Monolithic Systems
  {
    id: 'monolithic_architectures',
    label: 'Monolithic\nArchitectures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Single unified codebases handling all backend functionality within a single deployable unit.',
    parent: 'monolithic_systems',
  },
  {
    id: 'modular_monoliths',
    label: 'Modular\nMonoliths',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Structured monoliths with clear internal module separations and service boundaries.',
    parent: 'monolithic_systems',
  },

  // Node 3 under Distributed Systems
  {
    id: 'microservices',
    label: 'Microservices\nArchitectures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Architectures where applications are split into independent, loosely coupled services.',
    parent: 'distributed_systems',
  },
  {
    id: 'serverless',
    label: 'Serverless\nArchitectures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Applications composed of small, event-driven functions executed on demand.',
    parent: 'distributed_systems',
  },
  {
    id: 'event_driven',
    label: 'Event-Driven\nArchitectures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Systems built around the production, detection, consumption, and reaction to events.',
    parent: 'distributed_systems',
  },

  // Node 3 under API-Focused Systems
  {
    id: 'api_first',
    label: 'API-First\nArchitectures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Designing backend systems starting from the APIs that frontend or third-party consumers will use.',
    parent: 'api_focused_systems',
  },
  {
    id: 'backend_for_frontend',
    label: 'Backend-for-Frontend\n(BFF)',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Custom backend layers tailored specifically for individual frontend apps or devices.',
    parent: 'api_focused_systems',
  },
  {
    id: 'graph_based',
    label: 'Graph-Based\nArchitectures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Architectures built around graph structures, enabling highly connected queries and datasets (e.g., GraphQL).',
    parent: 'api_focused_systems',
  },

  // Node 3 under Domain Modeling Systems
  {
    id: 'domain_driven_design',
    label: 'Domain-Driven\nDesign (DDD)',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Modeling complex business domains closely with code structure and service boundaries.',
    parent: 'domain_modeling_systems',
  },
  {
    id: 'cqrs',
    label: 'Command Query\nResponsibility Segregation (CQRS)',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Separating read and write operations into different models for scalability and performance.',
    parent: 'domain_modeling_systems',
  },
];

export const links = [
  { source: 'root', target: 'monolithic_systems' },
  { source: 'root', target: 'distributed_systems' },
  { source: 'root', target: 'api_focused_systems' },
  { source: 'root', target: 'domain_modeling_systems' },

  { source: 'monolithic_systems', target: 'monolithic_architectures' },
  { source: 'monolithic_systems', target: 'modular_monoliths' },

  { source: 'distributed_systems', target: 'microservices' },
  { source: 'distributed_systems', target: 'serverless' },
  { source: 'distributed_systems', target: 'event_driven' },

  { source: 'api_focused_systems', target: 'api_first' },
  { source: 'api_focused_systems', target: 'backend_for_frontend' },
  { source: 'api_focused_systems', target: 'graph_based' },

  { source: 'domain_modeling_systems', target: 'domain_driven_design' },
  { source: 'domain_modeling_systems', target: 'cqrs' },
];
