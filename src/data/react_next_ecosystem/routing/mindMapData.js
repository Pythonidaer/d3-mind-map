import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Routing',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Techniques and systems for navigating between pages in React and Next.js applications.',
  },
  {
    id: 'react_router_dom',
    label: 'React Router DOM',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A library providing declarative routing for React Single-Page Applications (SPAs).',
  },
  {
    id: 'nextjs_file_system_routing',
    label: 'Next.js\nFile-System Routing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Next.js automatically creates routes based on the file structure in the pages or app directory.',
  },
  {
    id: 'dynamic_routing',
    label: 'Dynamic Routing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Support for dynamic URL segments in routing, e.g., [id].js in Next.js or route params in React Router.',
  },
  {
    id: 'nested_routing',
    label: 'Nested Routing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Creating a hierarchy of routes where child routes are rendered inside parent layouts or views.',
  },
  {
    id: 'programmatic_navigation',
    label: 'Programmatic Navigation',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Changing routes via JavaScript functions (e.g., router.push in Next.js or navigate in React Router).',
  },
  {
    id: 'prefetching',
    label: 'Prefetching',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Preloading page resources for faster navigation (automatic in Next.js Link component).',
  },
  {
    id: 'react_router_in_next',
    label: 'React Router\nin Next.js',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Using React Router DOM inside Next.js can cause conflicts with Next.js routing conventions and server-side features.',
  },
]

export const links = [
  { source: 'root', target: 'react_router_dom' },
  { source: 'root', target: 'nextjs_file_system_routing' },
  { source: 'root', target: 'dynamic_routing' },
  { source: 'root', target: 'nested_routing' },
  { source: 'root', target: 'programmatic_navigation' },
  { source: 'root', target: 'prefetching' },
  { source: 'root', target: 'react_router_in_next' },
]
