import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Technical\nArchitecture',
    definition: 'The underlying systems, structure, and technologies that support the scalable, maintainable, and performant delivery of your dashboard.',
    shape: 'roundRect',
    color: 'root',
  },

  // First Level (Positive)
  {
    id: 'frontend_stack',
    label: 'Frontend\nStack',
    definition: 'Client-side tools and frameworks used to build interactive UIs, manage state, and fetch data.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'backend_stack',
    label: 'Backend\nStack',
    definition: 'Server-side technologies used for APIs, authentication, and business logic.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'data_layer',
    label: 'Data\nLayer',
    definition: 'Systems for storing, retrieving, filtering, and processing user-uploaded job data.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'integration_layer',
    label: 'Integration &\nExtensibility',
    definition: 'External services or internal plugins connected via APIs or hooks.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'scalability',
    label: 'Scalability &\nMaintainability',
    definition: 'Architecture decisions that enable performance, modularity, and long-term evolution.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Frontend Stack Children
  {
    id: 'react_components',
    label: 'Modular\nReact Components',
    definition: 'Reusable, encapsulated pieces that manage UI logic and presentation.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'vite_setup',
    label: 'Vite &\nBundling Strategy',
    definition: 'Development/build pipeline that enables fast dev environments and optimized bundles.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'routing_layer',
    label: 'Client Routing\n& Navigation',
    definition: 'React Router or similar tool to manage page-level navigation and parameterized views.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Backend Stack Children
  {
    id: 'strapi_cms',
    label: 'Strapi or\nHeadless CMS',
    definition: 'Stores blogs, dashboards, user uploads, and connects to frontend via REST or GraphQL.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'auth_layer',
    label: 'Authentication\nLayer',
    definition: 'Handles secure login, access roles, and permissions via token/session.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'api_gateway',
    label: 'API Gateway\n& Logic Layer',
    definition: 'RESTful or GraphQL endpoints that process uploads and handle dashboard logic.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Data Layer Children
  {
    id: 'relational_db',
    label: 'Relational or\nNoSQL Storage',
    definition: 'Persistent store for job uploads, tags, user preferences, and analytics.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'etl_pipeline',
    label: 'ETL/Data\nProcessing Logic',
    definition: 'Extract, transform, and load user data into normalized structures for analysis.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'indexing',
    label: 'Indexing &\nQuery Optimization',
    definition: 'Ensures high-performance lookups and filtering of job descriptions and skill phrases.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Integration Layer Children
  {
    id: 'cloudinary_assets',
    label: 'Cloudinary or\nMedia Services',
    definition: 'Handles uploads and optimization of logos, avatars, and charts.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'email_hooks',
    label: 'Email/Webhook\nIntegrations',
    definition: 'Trigger feedback, alerts, or onboarding flows via 3rd-party services.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'analytics_integration',
    label: 'Analytics\nTracking',
    definition: 'Embedding of user event logging or behavior insights tools (e.g., Plausible, GA).',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Scalability & Maintainability Children
  {
    id: 'code_split',
    label: 'Code Splitting\n& Lazy Loading',
    definition: 'Improve performance by loading only the necessary modules when needed.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'env_config',
    label: 'Environment &\nSecrets Management',
    definition: 'Use .env files and service configs to separate dev, staging, and prod logic.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'modular_arch',
    label: 'Modular &\nTestable Architecture',
    definition: 'Encourage separation of concerns, reusable modules, and isolated test coverage.',
    shape: 'rect',
    color: 'nodePositive2',
  }
];

export const links = [
  { source: 'root', target: 'frontend_stack' },
  { source: 'root', target: 'backend_stack' },
  { source: 'root', target: 'data_layer' },
  { source: 'root', target: 'integration_layer' },
  { source: 'root', target: 'scalability' },

  { source: 'frontend_stack', target: 'react_components' },
  { source: 'frontend_stack', target: 'vite_setup' },
  { source: 'frontend_stack', target: 'routing_layer' },

  { source: 'backend_stack', target: 'strapi_cms' },
  { source: 'backend_stack', target: 'auth_layer' },
  { source: 'backend_stack', target: 'api_gateway' },

  { source: 'data_layer', target: 'relational_db' },
  { source: 'data_layer', target: 'etl_pipeline' },
  { source: 'data_layer', target: 'indexing' },

  { source: 'integration_layer', target: 'cloudinary_assets' },
  { source: 'integration_layer', target: 'email_hooks' },
  { source: 'integration_layer', target: 'analytics_integration' },

  { source: 'scalability', target: 'code_split' },
  { source: 'scalability', target: 'env_config' },
  { source: 'scalability', target: 'modular_arch' }
];
