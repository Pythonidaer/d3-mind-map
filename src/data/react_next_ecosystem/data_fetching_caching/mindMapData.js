import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Data Fetching\n& Caching',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Techniques and libraries for retrieving, caching, and updating remote data in React and Next.js applications.',
  },
  {
    id: 'react_query',
    label: 'React Query\n(TanStack Query)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A robust library for fetching, caching, syncing, and updating server state in React applications.',
  },
  {
    id: 'swr',
    label: 'SWR',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A lightweight React Hooks library using the stale-while-revalidate strategy for efficient data fetching and caching.',
  },
  {
    id: 'nextjs_getServerSideProps',
    label: 'getServerSideProps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Next.js function that fetches data server-side on every request, useful for dynamic pages requiring fresh data.',
  },
  {
    id: 'nextjs_getStaticProps',
    label: 'getStaticProps\n+ getStaticPaths',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Next.js functions for static site generation, fetching data at build time and defining dynamic paths for prerendered pages.',
  },
  {
    id: 'nextjs_api_routes',
    label: 'Next.js\nAPI Routes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Serverless backend endpoints in Next.js, useful for fetching or manipulating data internally without needing a full backend.',
  },
  {
    id: 'server_component_fetching',
    label: 'Server Component\nFetching',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'In the App Router, fetch data directly inside server components without client-side libraries for improved performance and reduced bundle size.',
  },
  {
    id: 'overlapping_fetching',
    label: 'Overlapping\nFetching Strategies',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Using multiple fetching methods simultaneously (e.g., SWR + getStaticProps) can cause confusion, duplication, and maintenance issues if not carefully managed.',
  },
]

export const links = [
  { source: 'root', target: 'react_query' },
  { source: 'root', target: 'swr' },
  { source: 'root', target: 'nextjs_getServerSideProps' },
  { source: 'root', target: 'nextjs_getStaticProps' },
  { source: 'root', target: 'nextjs_api_routes' },
  { source: 'root', target: 'server_component_fetching' },
  { source: 'root', target: 'overlapping_fetching' },
]
