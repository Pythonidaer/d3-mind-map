import { COLORS } from '../../../theme/colors';

export const nodes = [
  { id: 'root', label: 'Network Performance', shape: 'roundRect', color: 'root', definition: 'Techniques to optimize data transfer and resource loading for faster, more reliable web experiences.' },

  { id: 'caching_strategies', label: 'Caching Strategies', shape: 'ellipse', color: 'nodePositive1', parent: 'root', definition: 'Store resources closer to users or in-browser caches to reduce latency and repeated downloads.' },
  { id: 'browser_caching', label: 'Browser Caching', shape: 'rect', color: 'nodePositive2', parent: 'caching_strategies', definition: 'Utilize Cache-Control headers and client storage for caching static assets locally.' },
  { id: 'http_caching_policies', label: 'HTTP Caching Policies', shape: 'rect', color: 'nodePositive2', parent: 'caching_strategies', definition: 'Configure headers like ETag, Expires, and Cache-Control to manage resource freshness.' },

  { id: 'reduce_network_requests', label: 'Reduce Network Requests', shape: 'ellipse', color: 'nodePositive1', parent: 'root', definition: 'Minimize the number of HTTP requests by bundling, inlining, and optimizing assets.' },

  { id: 'service_workers', label: 'Service Workers', shape: 'ellipse', color: 'nodePositive1', parent: 'root', definition: 'Background scripts that handle caching, offline support, and intercept network requests.' },
  { id: 'offline_capabilities', label: 'Offline Capabilities', shape: 'rect', color: 'nodePositive2', parent: 'service_workers', definition: 'Serve cached responses when the network is unavailable to maintain functionality.' },

  { id: 'cdn', label: 'CDN', shape: 'ellipse', color: 'nodePositive1', parent: 'root', definition: 'Distribute static assets across geographically dispersed servers to reduce latency.' },
  { id: 'static_assets', label: 'Static Assets', shape: 'rect', color: 'nodePositive2', parent: 'cdn', definition: 'Host images, scripts, and styles on CDNs for faster loading worldwide.' },

  { id: 'server_side_rendering', label: 'Server-Side Rendering', shape: 'ellipse', color: 'nodePositive1', parent: 'root', definition: 'Render HTML on the server to reduce client-side processing and initial payload size.' },

  { id: 'benefits', label: 'Benefits / Pros', shape: 'ellipse', color: 'nodePositive1', parent: 'root', definition: 'Positive outcomes of network performance optimizations.' },
  { id: 'faster_load_times', label: 'Faster Load Times', shape: 'rect', color: 'nodePositive2', parent: 'benefits', definition: 'Reduced latency and fewer requests improve perceived speed.' },
  { id: 'reduced_bandwidth', label: 'Reduced Bandwidth', shape: 'rect', color: 'nodePositive2', parent: 'benefits', definition: 'Caching and request minimization lower data transfer costs.' },
  { id: 'improved_reliability', label: 'Improved Reliability', shape: 'rect', color: 'nodePositive2', parent: 'benefits', definition: 'Offline support and CDNs ensure content availability under poor network conditions.' },

  { id: 'cons', label: 'Cons', shape: 'hexagon', color: 'nodeNegative1', parent: 'root', definition: 'Drawbacks and challenges of implementing network optimizations.' },
  { id: 'stale_resources', label: 'Stale Resources', shape: 'rect', color: 'nodeNegative2', parent: 'cons', definition: 'Incorrect cache settings can serve outdated content to users.' },
  { id: 'cache_invalidation', label: 'Cache Invalidation Challenges', shape: 'rect', color: 'nodeNegative2', parent: 'cons', definition: 'Coordinating when to clear or update caches is complex.' },
  { id: 'implementation_complexity', label: 'Implementation Complexity', shape: 'rect', color: 'nodeNegative2', parent: 'cons', definition: 'Setting up CDNs, service workers, and caching requires additional infrastructure and code.' },

  { id: 'anti_patterns', label: 'Anti-Patterns', shape: 'hexagon', color: 'nodeNegative1', parent: 'root', definition: 'Common mistakes that undermine network performance.' },
  { id: 'over_caching', label: 'Over-Caching', shape: 'rect', color: 'nodeNegative2', parent: 'anti_patterns', definition: 'Caching every resource indiscriminately leads to stale or bloated caches.' },
  { id: 'ignoring_cache_headers', label: 'Ignoring Cache Headers', shape: 'rect', color: 'nodeNegative2', parent: 'anti_patterns', definition: 'Bypassing or misconfiguring headers negates caching benefits and consistency.' },
  { id: 'unoptimized_resources', label: 'Unoptimized Resources', shape: 'rect', color: 'nodeNegative2', parent: 'anti_patterns', definition: 'Large or uncompressed files waste bandwidth and slow delivery.' },
];

export const links = [
  { source: 'root', target: 'caching_strategies' },
  { source: 'caching_strategies', target: 'browser_caching' },
  { source: 'caching_strategies', target: 'http_caching_policies' },
  { source: 'root', target: 'reduce_network_requests' },
  { source: 'root', target: 'service_workers' },
  { source: 'service_workers', target: 'offline_capabilities' },
  { source: 'root', target: 'cdn' },
  { source: 'cdn', target: 'static_assets' },
  { source: 'root', target: 'server_side_rendering' },
  { source: 'root', target: 'benefits' },
  { source: 'benefits', target: 'faster_load_times' },
  { source: 'benefits', target: 'reduced_bandwidth' },
  { source: 'benefits', target: 'improved_reliability' },
  { source: 'root', target: 'cons' },
  { source: 'cons', target: 'stale_resources' },
  { source: 'cons', target: 'cache_invalidation' },
  { source: 'cons', target: 'implementation_complexity' },
  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'over_caching' },
  { source: 'anti_patterns', target: 'ignoring_cache_headers' },
  { source: 'anti_patterns', target: 'unoptimized_resources' },
];
