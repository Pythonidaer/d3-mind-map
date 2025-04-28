import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Network\nTab',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Monitor and inspect network activity like HTTP requests, responses, loading times, and caching.',
  },

  // Level 1
  {
    id: 'request_list',
    label: 'Request\nList Overview',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Chronological list of all network requests with key details like URL, method, status, size, and time.',
  },
  {
    id: 'request_details',
    label: 'Request\nDetails',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Inspect Headers, Payload, Response, Timing, and Cookies for individual requests.',
  },
  {
    id: 'filtering_sorting',
    label: 'Filtering &\nSorting',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Filter and sort network requests by type, domain, status, size, or keyword.',
  },
  {
    id: 'searching',
    label: 'Searching\nHeaders & Body',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Search for specific text or patterns inside request headers or response bodies.',
  },
  {
    id: 'throttling',
    label: 'Network\nThrottling',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Simulate slower network conditions (e.g., 3G) to observe site performance under constraints.',
  },
  {
    id: 'disable_cache',
    label: 'Disable\nCache',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Force the browser to fetch fresh resources every time without relying on cache.',
  },
  {
    id: 'request_blocking',
    label: 'Request\nBlocking',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Block specific URLs or domains to test fallback behavior and dependency resilience.',
  },
  {
    id: 'copy_export',
    label: 'Copy &\nExport Requests',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Copy requests as cURL commands or export full HAR files for analysis.',
  },
  {
    id: 'performance_analysis',
    label: 'Performance\nAnalysis',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Analyze loading times, waterfall timelines, and bottlenecks in resource loading.',
  },

  // Level 2 under Request List
  {
    id: 'request_method',
    label: 'Request\nMethod',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'GET, POST, PUT, DELETE, etc., representing how the resource is accessed.',
  },
  {
    id: 'status_code',
    label: 'Status\nCode',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'HTTP status code indicating success, redirects, client errors, or server errors.',
  },
  {
    id: 'waterfall_chart',
    label: 'Waterfall\nChart',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Visual timeline showing when and how long each request took.',
  },

  // Level 2 under Request Details
  {
    id: 'headers',
    label: 'Headers',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Inspect request and response headers, such as Content-Type, Cache-Control, and Authentication.',
  },
  {
    id: 'payload',
    label: 'Payload',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Examine POST data and query parameters sent with requests.',
  },
  {
    id: 'response',
    label: 'Response',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'View returned data, e.g., HTML, JSON, XML, or files.',
  },
  {
    id: 'timing',
    label: 'Timing',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'See precise phases of request: DNS lookup, connection, TTFB, content download.',
  },
  {
    id: 'cookies',
    label: 'Cookies',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Inspect cookies sent with requests and responses.',
  },

  // Level 2 under Filtering and Sorting
  {
    id: 'filter_by_type',
    label: 'Filter by\nType',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Filter requests by document, stylesheet, script, xhr, fetch, websocket, etc.',
  },
  {
    id: 'filter_by_domain',
    label: 'Filter by\nDomain',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Display requests from specific domains.',
  },
  {
    id: 'sort_by_time',
    label: 'Sort by\nLoad Time',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Sort to find slowest or fastest network requests.',
  },

  // Level 2 under Performance Analysis
  {
    id: 'timing_breakdown',
    label: 'Timing\nBreakdown',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Detailed metrics: DNS lookup, initial connection, SSL handshake, TTFB, download time.',
  },
  {
    id: 'bottleneck_identification',
    label: 'Bottleneck\nIdentification',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Find requests that block or delay critical content loading.',
  },
]

export const links = [
  { source: 'root', target: 'request_list' },
  { source: 'root', target: 'request_details' },
  { source: 'root', target: 'filtering_sorting' },
  { source: 'root', target: 'searching' },
  { source: 'root', target: 'throttling' },
  { source: 'root', target: 'disable_cache' },
  { source: 'root', target: 'request_blocking' },
  { source: 'root', target: 'copy_export' },
  { source: 'root', target: 'performance_analysis' },

  // Request List breakdown
  { source: 'request_list', target: 'request_method' },
  { source: 'request_list', target: 'status_code' },
  { source: 'request_list', target: 'waterfall_chart' },

  // Request Details breakdown
  { source: 'request_details', target: 'headers' },
  { source: 'request_details', target: 'payload' },
  { source: 'request_details', target: 'response' },
  { source: 'request_details', target: 'timing' },
  { source: 'request_details', target: 'cookies' },

  // Filtering and Sorting breakdown
  { source: 'filtering_sorting', target: 'filter_by_type' },
  { source: 'filtering_sorting', target: 'filter_by_domain' },
  { source: 'filtering_sorting', target: 'sort_by_time' },

  // Performance Analysis breakdown
  { source: 'performance_analysis', target: 'timing_breakdown' },
  { source: 'performance_analysis', target: 'bottleneck_identification' },
]
