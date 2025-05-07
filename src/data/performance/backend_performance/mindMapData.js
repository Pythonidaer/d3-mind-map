import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Backend\nPerformance',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Strategies to ensure fast, scalable, and efficient server-side processing, impacting response time and system stability.',
  },

  // Level 1 - Positives
  {
    id: 'ssr',
    label: 'Server-Side\nRendering (SSR)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Renders HTML on the server before sending it to the client, improving initial load speed and SEO.',
    parent: 'root',
  },
  {
    id: 'ssg',
    label: 'Static Site\nGeneration (SSG)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Pre-renders pages at build time for fast delivery and scalability, ideal for content that doesn’t change often.',
    parent: 'root',
  },
  {
    id: 'caching',
    label: 'Caching\nStrategies',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Stores frequently accessed data closer to the user or in memory to reduce processing time and server load.',
    parent: 'root',
  },

  // Level 2 - Caching Strategies
  {
    id: 'browser_caching',
    label: 'Browser\nCaching',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Leverages HTTP headers to allow browsers to reuse static assets without re-downloading them.',
    parent: 'caching',
  },
  {
    id: 'server_cache',
    label: 'Server-Side\nCaching',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Caches API responses or serialized objects in memory (e.g., with Redis or Memcached) for quick retrieval.',
    parent: 'caching',
  },
  {
    id: 'cdn_cache',
    label: 'CDN\nCaching',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Caches static files on edge servers around the globe to reduce latency and offload origin server traffic.',
    parent: 'caching',
  },

  // Level 1 - Negatives
  {
    id: 'backend_bottlenecks',
    label: 'Backend\nBottlenecks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Inefficiencies on the server (e.g., slow logic, unoptimized data access) that increase response times.',
    parent: 'root',
  },

  // Level 2 - Bottlenecks
  {
    id: 'no_caching',
    label: 'Lack of\nCaching',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Forces the server to recompute results for every request, slowing performance and increasing load.',
    parent: 'backend_bottlenecks',
  },
  {
    id: 'heavy_logic',
    label: 'Heavy or\nBlocking Logic',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Complex or synchronous server logic can block request handling and delay responses.',
    parent: 'backend_bottlenecks',
  },
  {
    id: 'slow_io',
    label: 'Slow I/O\nOperations',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Unoptimized file reads, database queries, or external API calls can bottleneck backend performance.',
    parent: 'backend_bottlenecks',
  },
];

export const links = [
  { source: 'root', target: 'ssr' },
  { source: 'root', target: 'ssg' },
  { source: 'root', target: 'caching' },
  { source: 'root', target: 'backend_bottlenecks' },

  { source: 'caching', target: 'browser_caching' },
  { source: 'caching', target: 'server_cache' },
  { source: 'caching', target: 'cdn_cache' },

  { source: 'backend_bottlenecks', target: 'no_caching' },
  { source: 'backend_bottlenecks', target: 'heavy_logic' },
  { source: 'backend_bottlenecks', target: 'slow_io' },
];
