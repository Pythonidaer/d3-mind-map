import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Backend Integration',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Tools and techniques for integrating databases and backend logic into React and Next.js applications.',
  },
  {
    id: 'prisma',
    label: 'Prisma ORM',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A modern, type-safe ORM that simplifies database interactions and integrates smoothly with TypeScript and Next.js.',
  },
  {
    id: 'sequelize',
    label: 'Sequelize ORM',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A promise-based ORM for Node.js supporting various SQL dialects like PostgreSQL, MySQL, and SQLite.',
  },
  {
    id: 'express',
    label: 'Express.js',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A minimalist web framework for Node.js often used to create APIs, middleware, and server logic.',
  },
  {
    id: 'nestjs',
    label: 'NestJS',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A TypeScript-based server-side framework inspired by Angular, offering modular architecture for scalable backend services.',
  },
  {
    id: 'nextjs_api_routes_backend',
    label: 'Next.js API Routes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Built-in serverless endpoints inside Next.js projects, useful for simple backend functionality without a full server setup.',
  },
  {
    id: 'backend_pitfalls',
    label: 'Backend\nIntegration Pitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common mistakes like tightly coupling frontend and backend logic, or ignoring serverless function limits in cloud deployments.',
  },
]

export const links = [
  { source: 'root', target: 'prisma' },
  { source: 'root', target: 'sequelize' },
  { source: 'root', target: 'express' },
  { source: 'root', target: 'nestjs' },
  { source: 'root', target: 'nextjs_api_routes_backend' },
  { source: 'root', target: 'backend_pitfalls' },
]
