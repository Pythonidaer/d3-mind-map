import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Backend Architectures',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Design patterns and strategies for server-side logic, APIs, data storage, and scalability.',
  },

  // Node 2 categories
  {
    id: 'application_structure',
    label: 'App Structure',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Patterns for organizing backend code for maintainability and modularity.',
    parent: 'root',
  },
  {
    id: 'service_decomposition',
    label: 'Service Split',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Architectures that split services for scalability and independence.',
    parent: 'root',
  },
  {
    id: 'data_oriented',
    label: 'Data Patterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Strategies for capturing, querying, and distributing data.',
    parent: 'root',
  },
  {
    id: 'state_behavior_modeling',
    label: 'State & Behavior',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Patterns for domain logic and concurrent system behavior.',
    parent: 'root',
  },
  {
    id: 'scalability_patterns',
    label: 'Scalability',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Architectures optimizing speed, availability, and capacity.',
    parent: 'root',
  },

  // Node 3 under Application Structure (rect - shorten labels)
  { id: 'monolithic', label: 'Monolith', shape: 'rect', color: 'nodePositive2', definition: 'Single codebase and deployable unit.', parent: 'application_structure' },
  { id: 'layered', label: 'Layered', shape: 'rect', color: 'nodePositive2', definition: 'Separated into controller, service, repository layers.', parent: 'application_structure' },
  { id: 'hexagonal', label: 'Hexagonal', shape: 'rect', color: 'nodePositive2', definition: 'Ports & Adapters separating core logic.', parent: 'application_structure' },
  { id: 'clean', label: 'Clean Arch', shape: 'rect', color: 'nodePositive2', definition: 'Framework-agnostic core with concentric layers.', parent: 'application_structure' },
  { id: 'plugin_based', label: 'Plugins', shape: 'rect', color: 'nodePositive2', definition: 'Extendable via external plugins.', parent: 'application_structure' },

  // Node 3 under Service Decomposition
  { id: 'microservices', label: 'Microservices', shape: 'rect', color: 'nodePositive2', definition: 'Independent services communicating over APIs.', parent: 'service_decomposition' },
  { id: 'soa', label: 'SOA', shape: 'rect', color: 'nodePositive2', definition: 'Services via bus or enterprise integration.', parent: 'service_decomposition' },
  { id: 'bff', label: 'BFF', shape: 'rect', color: 'nodePositive2', definition: 'Backend-for-Frontend layer to reduce over-fetching.', parent: 'service_decomposition' },
  { id: 'hybrid', label: 'Hybrid', shape: 'rect', color: 'nodePositive2', definition: 'Monolith core with decoupled services.', parent: 'service_decomposition' },

  // Node 3 under Data-Oriented Architectures
  { id: 'event_sourcing', label: 'Event Source', shape: 'rect', color: 'nodePositive2', definition: 'Store all changes as an event log.', parent: 'data_oriented' },
  { id: 'cqrs', label: 'CQRS', shape: 'rect', color: 'nodePositive2', definition: 'Separate command and query models.', parent: 'data_oriented' },
  { id: 'data_centric', label: 'Data-Centric', shape: 'rect', color: 'nodePositive2', definition: 'Unified data model for services.', parent: 'data_oriented' },
  { id: 'data_mesh', label: 'Data Mesh', shape: 'rect', color: 'nodePositive2', definition: 'Decentralized data-as-product ownership.', parent: 'data_oriented' },

  // Node 3 under State & Behavior Modeling
  { id: 'ddd', label: 'DDD', shape: 'rect', color: 'nodePositive2', definition: 'Business domain modeling with bounded contexts.', parent: 'state_behavior_modeling' },
  { id: 'actor_model', label: 'Actor Model', shape: 'rect', color: 'nodePositive2', definition: 'Actors encapsulate state and communicate via messages.', parent: 'state_behavior_modeling' },
  { id: 'state_machine_backend', label: 'State Machine', shape: 'rect', color: 'nodePositive2', definition: 'Finite states and transitions model.', parent: 'state_behavior_modeling' },

  // Node 3 under Scalability & Performance Patterns
  { id: 'job_queue', label: 'Job Queue', shape: 'rect', color: 'nodePositive2', definition: 'Asynchronous tasks processed by worker queues.', parent: 'scalability_patterns' },
  { id: 'shared_nothing', label: 'Shared-Nothing', shape: 'rect', color: 'nodePositive2', definition: 'Independent nodes with no shared storage.', parent: 'scalability_patterns' },
  { id: 'reverse_proxy', label: 'Reverse Proxy', shape: 'rect', color: 'nodePositive2', definition: 'Offloads LB, SSL, caching via proxy.', parent: 'scalability_patterns' },
  { id: 'edge_architecture', label: 'Edge', shape: 'rect', color: 'nodePositive2', definition: 'Compute at the network edge to reduce latency.', parent: 'scalability_patterns' },
  { id: 'serverless', label: 'Serverless', shape: 'rect', color: 'nodePositive2', definition: 'Functions with auto-scaling by provider.', parent: 'scalability_patterns' },
]

export const links = [
  { source: 'root', target: 'application_structure' },
  { source: 'root', target: 'service_decomposition' },
  { source: 'root', target: 'data_oriented' },
  { source: 'root', target: 'state_behavior_modeling' },
  { source: 'root', target: 'scalability_patterns' },

  // Application Structure links
  { source: 'application_structure', target: 'monolithic' },
  { source: 'application_structure', target: 'layered' },
  { source: 'application_structure', target: 'hexagonal' },
  { source: 'application_structure', target: 'clean' },
  { source: 'application_structure', target: 'plugin_based' },

  // Service Decomposition links
  { source: 'service_decomposition', target: 'microservices' },
  { source: 'service_decomposition', target: 'soa' },
  { source: 'service_decomposition', target: 'bff' },
  { source: 'service_decomposition', target: 'hybrid' },

  // Data-Oriented links
  { source: 'data_oriented', target: 'event_sourcing' },
  { source: 'data_oriented', target: 'cqrs' },
  { source: 'data_oriented', target: 'data_centric' },
  { source: 'data_oriented', target: 'data_mesh' },

  // State & Behavior links
  { source: 'state_behavior_modeling', target: 'ddd' },
  { source: 'state_behavior_modeling', target: 'actor_model' },
  { source: 'state_behavior_modeling', target: 'state_machine_backend' },

  // Scalability links
  { source: 'scalability_patterns', target: 'job_queue' },
  { source: 'scalability_patterns', target: 'shared_nothing' },
  { source: 'scalability_patterns', target: 'reverse_proxy' },
  { source: 'scalability_patterns', target: 'edge_architecture' },
  { source: 'scalability_patterns', target: 'serverless' },
]
