import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Technologies and Tools',
    shape: 'roundRect',
    color: 'root',
    definition: 'Key technologies, frameworks, and tools commonly used to implement frontend, backend, and cross-cutting architectures.',
  },

  // Node 2 categories
  {
    id: 'frontend_tools',
    label: 'Frontend\nTechnologies',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Libraries and frameworks focused on building user interfaces and frontend architectures.',
    parent: 'root',
  },
  {
    id: 'backend_tools',
    label: 'Backend\nTechnologies',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Technologies and frameworks for handling server-side logic, APIs, and databases.',
    parent: 'root',
  },
  {
    id: 'crosscutting_tools',
    label: 'Cross-Cutting\nTools',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Tools that bridge frontend and backend, handling APIs, communication, and deployment.',
    parent: 'root',
  },

  // Node 3 under Frontend Technologies
  {
    id: 'react',
    label: 'React.js',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Popular JavaScript library for building component-based user interfaces.',
    parent: 'frontend_tools',
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'React framework enabling server-side rendering, static generation, and hybrid apps.',
    parent: 'frontend_tools',
  },
  {
    id: 'vue',
    label: 'Vue.js',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Progressive JavaScript framework for building user interfaces with reactive data binding.',
    parent: 'frontend_tools',
  },
  {
    id: 'svelte',
    label: 'Svelte',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Compiler that generates highly efficient vanilla JavaScript code at build time.',
    parent: 'frontend_tools',
  },
  {
    id: 'angular',
    label: 'Angular',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Platform for building dynamic web apps with dependency injection and two-way data binding.',
    parent: 'frontend_tools',
  },

  // Node 3 under Backend Technologies
  {
    id: 'nodejs',
    label: 'Node.js',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'JavaScript runtime built on Chrome\'s V8 engine for building scalable network applications.',
    parent: 'backend_tools',
  },
  {
    id: 'express',
    label: 'Express.js',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Minimalist web framework for Node.js to build APIs and web servers.',
    parent: 'backend_tools',
  },
  {
    id: 'nestjs',
    label: 'NestJS',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Progressive Node.js framework building efficient, scalable server-side applications with TypeScript.',
    parent: 'backend_tools',
  },
  {
    id: 'fastify',
    label: 'Fastify',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Fast and low overhead web framework for Node.js, focused on speed and low latency.',
    parent: 'backend_tools',
  },
  {
    id: 'apollo_server',
    label: 'Apollo Server',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Open-source GraphQL server for building flexible, production-ready APIs.',
    parent: 'backend_tools',
  },

  // Node 3 under Cross-Cutting Tools
  {
    id: 'graphql_crosscut',
    label: 'GraphQL',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Query language for APIs and a runtime for fulfilling queries with existing data.',
    parent: 'crosscutting_tools',
  },
  {
    id: 'restapi',
    label: 'REST APIs',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Standard architectural style using HTTP methods to access and manipulate resources.',
    parent: 'crosscutting_tools',
  },
  {
    id: 'swagger',
    label: 'Swagger / OpenAPI',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Specification for defining RESTful APIs, making it easier to develop and integrate services.',
    parent: 'crosscutting_tools',
  },
  {
    id: 'module_federation',
    label: 'Module Federation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Webpack feature that allows independently deployed frontend apps to share code at runtime.',
    parent: 'crosscutting_tools',
  },
  {
    id: 'eventbridge',
    label: 'AWS EventBridge',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Serverless event bus for integrating applications via asynchronous events.',
    parent: 'crosscutting_tools',
  },
];

export const links = [
  { source: 'root', target: 'frontend_tools' },
  { source: 'root', target: 'backend_tools' },
  { source: 'root', target: 'crosscutting_tools' },

  { source: 'frontend_tools', target: 'react' },
  { source: 'frontend_tools', target: 'nextjs' },
  { source: 'frontend_tools', target: 'vue' },
  { source: 'frontend_tools', target: 'svelte' },
  { source: 'frontend_tools', target: 'angular' },

  { source: 'backend_tools', target: 'nodejs' },
  { source: 'backend_tools', target: 'express' },
  { source: 'backend_tools', target: 'nestjs' },
  { source: 'backend_tools', target: 'fastify' },
  { source: 'backend_tools', target: 'apollo_server' },

  { source: 'crosscutting_tools', target: 'graphql_crosscut' },
  { source: 'crosscutting_tools', target: 'restapi' },
  { source: 'crosscutting_tools', target: 'swagger' },
  { source: 'crosscutting_tools', target: 'module_federation' },
  { source: 'crosscutting_tools', target: 'eventbridge' },
];
