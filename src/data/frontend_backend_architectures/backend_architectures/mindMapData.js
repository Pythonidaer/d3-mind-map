import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Backend Architectures',
    shape: 'roundRect',
    color: 'root',
    definition: 'Design patterns and organizational strategies for handling server-side logic, APIs, data storage, services, and scalability.',
  },

  // Node 2 categories
  {
    id: 'application_structure',
    label: 'Application\nStructure',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Patterns for organizing backend projects internally, focusing on maintainability and modularity.',
    parent: 'root',
  },
  {
    id: 'service_decomposition',
    label: 'Service\nDecomposition',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures that split services for better scalability and independence.',
    parent: 'root',
  },
  {
    id: 'data_oriented',
    label: 'Data-Oriented\nArchitectures',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Strategies centered around how data is captured, organized, queried, and distributed.',
    parent: 'root',
  },
  {
    id: 'state_behavior_modeling',
    label: 'State & Behavior\nModeling',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Patterns for representing domain logic and concurrent system behavior.',
    parent: 'root',
  },
  {
    id: 'scalability_patterns',
    label: 'Scalability &\nPerformance Patterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Architectures that optimize system speed, availability, and capacity.',
    parent: 'root',
  },

  // Node 3 under Application Structure
  { id: 'monolithic', label: 'Monolithic Architecture', shape: 'rect', color: 'nodePositive2', definition: 'All server logic lives inside a single codebase and deployable unit.', parent: 'application_structure' },
  { id: 'layered', label: 'Layered / N-Tier Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Code is separated into layers (e.g., controller, service, repository) for better organization.', parent: 'application_structure' },
  { id: 'hexagonal', label: 'Hexagonal Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Also known as Ports and Adapters; separates core logic from delivery mechanisms.', parent: 'application_structure' },
  { id: 'clean', label: 'Clean Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Strict separation of concerns through layered rings; the innermost business logic is framework-agnostic.', parent: 'application_structure' },
  { id: 'plugin_based', label: 'Plugin-Based Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Extensible systems where new features can be added via external plugins.', parent: 'application_structure' },

  // Node 3 under Service Decomposition
  { id: 'microservices', label: 'Microservices Architecture', shape: 'rect', color: 'nodePositive2', definition: 'System split into small independent services communicating over APIs.', parent: 'service_decomposition' },
  { id: 'soa', label: 'Service-Oriented Architecture (SOA)', shape: 'rect', color: 'nodePositive2', definition: 'Services communicate over a service bus or enterprise-wide integration.', parent: 'service_decomposition' },
  { id: 'bff', label: 'Backend-for-Frontend (BFF)', shape: 'rect', color: 'nodePositive2', definition: 'A backend layer optimized for frontend needs, reducing data over-fetching.', parent: 'service_decomposition' },
  { id: 'hybrid', label: 'Hybrid (Monolith + Services)', shape: 'rect', color: 'nodePositive2', definition: 'Combines monolithic cores with decoupled service modules.', parent: 'service_decomposition' },

  // Node 3 under Data-Oriented Architectures
  { id: 'event_sourcing', label: 'Event Sourcing', shape: 'rect', color: 'nodePositive2', definition: 'Instead of storing only the current state, the system stores all changes as an event log.', parent: 'data_oriented' },
  { id: 'cqrs', label: 'CQRS (Command Query Responsibility Segregation)', shape: 'rect', color: 'nodePositive2', definition: 'Separate models for updating (commands) and reading (queries) data.', parent: 'data_oriented' },
  { id: 'data_centric', label: 'Data-Centric Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Applications center around a unified data model accessible by different services.', parent: 'data_oriented' },
  { id: 'data_mesh', label: 'Data Mesh Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Data ownership is decentralized to teams, treating data as a product.', parent: 'data_oriented' },

  // Node 3 under State & Behavior Modeling
  { id: 'ddd', label: 'Domain-Driven Design (DDD)', shape: 'rect', color: 'nodePositive2', definition: 'Modeling software around business domains, focusing on ubiquitous language and bounded contexts.', parent: 'state_behavior_modeling' },
  { id: 'actor_model', label: 'Actor Model', shape: 'rect', color: 'nodePositive2', definition: 'Concurrency model where "actors" encapsulate state and communicate via messages.', parent: 'state_behavior_modeling' },
  { id: 'state_machine_backend', label: 'State Machine-Based Backend', shape: 'rect', color: 'nodePositive2', definition: 'Systems explicitly modeled as finite states and transitions.', parent: 'state_behavior_modeling' },

  // Node 3 under Scalability & Performance Patterns
  { id: 'job_queue', label: 'Job Queue-Based Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Tasks are processed asynchronously by worker queues to improve throughput.', parent: 'scalability_patterns' },
  { id: 'shared_nothing', label: 'Shared Nothing Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Each node is independent and shares no memory or storage; ideal for scaling horizontally.', parent: 'scalability_patterns' },
  { id: 'reverse_proxy', label: 'Reverse Proxy Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Reverse proxies (like Nginx) offload load balancing, SSL termination, and caching.', parent: 'scalability_patterns' },
  { id: 'edge_architecture', label: 'Edge Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Pushes compute closer to users geographically to minimize latency.', parent: 'scalability_patterns' },
  { id: 'serverless', label: 'Serverless Architecture', shape: 'rect', color: 'nodePositive2', definition: 'Developers deploy functions without managing servers; providers handle scaling automatically.', parent: 'scalability_patterns' },
];

export const links = [
  { source: 'root', target: 'application_structure' },
  { source: 'root', target: 'service_decomposition' },
  { source: 'root', target: 'data_oriented' },
  { source: 'root', target: 'state_behavior_modeling' },
  { source: 'root', target: 'scalability_patterns' },

  { source: 'application_structure', target: 'monolithic' },
  { source: 'application_structure', target: 'layered' },
  { source: 'application_structure', target: 'hexagonal' },
  { source: 'application_structure', target: 'clean' },
  { source: 'application_structure', target: 'plugin_based' },

  { source: 'service_decomposition', target: 'microservices' },
  { source: 'service_decomposition', target: 'soa' },
  { source: 'service_decomposition', target: 'bff' },
  { source: 'service_decomposition', target: 'hybrid' },

  { source: 'data_oriented', target: 'event_sourcing' },
  { source: 'data_oriented', target: 'cqrs' },
  { source: 'data_oriented', target: 'data_centric' },
  { source: 'data_oriented', target: 'data_mesh' },

  { source: 'state_behavior_modeling', target: 'ddd' },
  { source: 'state_behavior_modeling', target: 'actor_model' },
  { source: 'state_behavior_modeling', target: 'state_machine_backend' },

  { source: 'scalability_patterns', target: 'job_queue' },
  { source: 'scalability_patterns', target: 'shared_nothing' },
  { source: 'scalability_patterns', target: 'reverse_proxy' },
  { source: 'scalability_patterns', target: 'edge_architecture' },
  { source: 'scalability_patterns', target: 'serverless' },
];
