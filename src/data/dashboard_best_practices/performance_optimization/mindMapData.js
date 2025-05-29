import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Performance\nOptimization',
    definition: 'Strategies and techniques to improve the speed, responsiveness, and efficiency of web applications across frontend, backend, and network layers.',
    shape: 'roundRect',
    color: 'root',
  },

  // Positive First-Level Nodes
  {
    id: 'frontend_optimizations',
    label: 'Frontend\nOptimizations',
    definition: 'Enhancing user interface responsiveness and render speed through code splitting, lazy loading, and rendering techniques.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'backend_optimizations',
    label: 'Backend\nOptimizations',
    definition: 'Improving server-side request handling, database performance, and API efficiency.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'network_optimizations',
    label: 'Network &\nDelivery',
    definition: 'Techniques to reduce asset load times and improve delivery, including CDNs, caching, and compression.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'profiling_tools',
    label: 'Monitoring &\nProfiling',
    definition: 'Tools to analyze bottlenecks, memory usage, or render lag using performance audits and real-time telemetry.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Frontend Children
  {
    id: 'lazy_loading',
    label: 'Lazy\nLoading',
    definition: 'Only loading components or assets when they’re needed (e.g., images, modals, or routes).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'code_splitting',
    label: 'Code\nSplitting',
    definition: 'Breaking up large JavaScript bundles into smaller chunks for faster load and execution.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'virtualization',
    label: 'DOM\nVirtualization',
    definition: 'Rendering only the visible elements in a large list to reduce memory usage and DOM operations.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Backend Children
  {
    id: 'db_indexes',
    label: 'Indexed\nQueries',
    definition: 'Optimizing SQL or NoSQL queries by indexing commonly queried fields (e.g., job title, tag frequency).',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'query_batching',
    label: 'Batching &\nCaching',
    definition: 'Batching frequent queries and caching responses to reduce repeated database load.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'async_jobs',
    label: 'Async\nProcessing',
    definition: 'Using background workers to handle long-running operations (e.g., parsing uploaded jobs).',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Network & Delivery Children
  {
    id: 'cdn_assets',
    label: 'CDN\nDelivery',
    definition: 'Serving static assets (images, CSS, JS) via content delivery networks close to the user.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'http2_compression',
    label: 'Compression &\nMinification',
    definition: 'Reducing asset size through gzip/Brotli and minifying HTML/CSS/JS.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cache_headers',
    label: 'Caching &\nHeaders',
    definition: 'Using ETags, cache-control, and service workers to avoid reloading unchanged assets.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Monitoring Tools
  {
    id: 'lighthouse',
    label: 'Lighthouse &\nWeb Vitals',
    definition: 'Google’s audit tools to track loading, interaction latency, and accessibility.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'react_profiler',
    label: 'React\nProfiler',
    definition: 'DevTools integration to track React component renders, wasted renders, and performance impact.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'custom_metrics',
    label: 'Custom\nBenchmarks',
    definition: 'Using `performance.now()` or analytics logs to track app-specific latency and trends.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Cons
  {
    id: 'performance_cons',
    label: 'Cons',
    definition: 'Potential trade-offs and downsides of performance optimization.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'premature_opt',
    label: 'Premature\nOptimization',
    definition: 'Spending time on micro-optimizations before measuring real bottlenecks.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'complexity_risk',
    label: 'Added\nComplexity',
    definition: 'Over-engineering solutions that make debugging and maintenance harder.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'seo_conflicts',
    label: 'SEO &\nAccessibility Issues',
    definition: 'Optimizations like lazy loading or virtualization may hinder SEO or screen reader access.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'frontend_optimizations' },
  { source: 'root', target: 'backend_optimizations' },
  { source: 'root', target: 'network_optimizations' },
  { source: 'root', target: 'profiling_tools' },
  { source: 'root', target: 'performance_cons' },

  { source: 'frontend_optimizations', target: 'lazy_loading' },
  { source: 'frontend_optimizations', target: 'code_splitting' },
  { source: 'frontend_optimizations', target: 'virtualization' },

  { source: 'backend_optimizations', target: 'db_indexes' },
  { source: 'backend_optimizations', target: 'query_batching' },
  { source: 'backend_optimizations', target: 'async_jobs' },

  { source: 'network_optimizations', target: 'cdn_assets' },
  { source: 'network_optimizations', target: 'http2_compression' },
  { source: 'network_optimizations', target: 'cache_headers' },

  { source: 'profiling_tools', target: 'lighthouse' },
  { source: 'profiling_tools', target: 'react_profiler' },
  { source: 'profiling_tools', target: 'custom_metrics' },

  { source: 'performance_cons', target: 'premature_opt' },
  { source: 'performance_cons', target: 'complexity_risk' },
  { source: 'performance_cons', target: 'seo_conflicts' }
];
