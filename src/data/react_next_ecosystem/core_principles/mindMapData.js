import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Core Principles',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Foundational concepts that underpin React and Next.js development.',
  },
  {
    id: 'component_architecture',
    label: 'Component-Based\nArchitecture',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'React organizes UIs as independent, reusable components, promoting modularity and maintainability.',
  },
  {
    id: 'virtual_dom',
    label: 'Virtual DOM',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'An in-memory representation of the real DOM that enables efficient UI updates through reconciliation.',
  },
  {
    id: 'unidirectional_data_flow',
    label: 'Unidirectional\nData Flow',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Data flows one-way, from parent to child, making state changes predictable and debugging easier.',
  },
  {
    id: 'server_side_rendering',
    label: 'Server-Side\nRendering (SSR)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Next.js renders pages on the server per request, improving SEO and performance.',
  },
  {
    id: 'static_site_generation',
    label: 'Static Site\nGeneration (SSG)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Next.js generates static HTML at build time for speed, scalability, and SEO benefits.',
  },
  {
    id: 'api_routes',
    label: 'API Routes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Serverless functions in Next.js for backend logic, simplifying full-stack development.',
  },
  {
    id: 'file_system_routing',
    label: 'File-System\nRouting',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Next.js automatically maps files in the pages directory to application routes.',
  },
]

export const links = [
  { source: 'root', target: 'component_architecture' },
  { source: 'root', target: 'virtual_dom' },
  { source: 'root', target: 'unidirectional_data_flow' },
  { source: 'root', target: 'server_side_rendering' },
  { source: 'root', target: 'static_site_generation' },
  { source: 'root', target: 'api_routes' },
  { source: 'root', target: 'file_system_routing' },
]
