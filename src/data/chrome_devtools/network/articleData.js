const articleData = {
  introduction: `The Network tab in Chrome DevTools provides developers with a powerful window into all network activity occurring during page load and runtime. It offers essential tools to inspect, debug, and optimize HTTP requests, responses, loading behavior, and caching strategies, making it a cornerstone for web performance and reliability analysis.`,

  request_list: {
    title: 'Request List Overview',
    content: [
      'Chronological capture of all resources loaded by the page.',
      'View critical details: URL, request method (GET, POST, etc.), HTTP status code, file size, and total request time.',
      'Use the Waterfall Chart to visualize loading sequences, dependencies, and bottlenecks.',
    ],
  },

  request_method: {
    title: 'Request Method',
    content: [
      'Understand how resources are fetched: GET (retrieve), POST (send data), PUT (update), DELETE (remove).',
      'Analyze API behaviors and resource fetching patterns.',
    ],
  },

  status_code: {
    title: 'Status Code',
    content: [
      'Identify server responses: 200 OK, 301/302 redirects, 404 Not Found, 500 Internal Server Error.',
      'Quickly spot failed or misconfigured server responses.',
    ],
  },

  waterfall_chart: {
    title: 'Waterfall Chart',
    content: [
      'Visualize the exact start time, blocking, queuing, and load duration for every resource.',
      'Detect critical path blockages and resource delays.',
    ],
  },

  request_details: {
    title: 'Request Details',
    content: [
      'Inspect deep properties of every request including Headers, Payload, Response, Timing breakdown, and Cookies.',
      'Debug APIs, static assets, and caching policies with surgical precision.',
    ],
  },

  headers: {
    title: 'Headers',
    content: [
      'Analyze request headers (Accept, Content-Type, Authorization) and response headers (Cache-Control, CORS settings, Content-Encoding).',
    ],
  },

  payload: {
    title: 'Payload',
    content: [
      'View POST bodies, form submissions, JSON payloads, or query strings sent to servers.',
    ],
  },

  response: {
    title: 'Response',
    content: [
      'Inspect the server’s reply: HTML, JSON data, media, or files.',
      'Preview renderable responses like images and documents.',
    ],
  },

  timing: {
    title: 'Timing',
    content: [
      'Break down network timing stages: DNS Lookup, Initial Connection, SSL Handshake, Request Sent, Waiting (TTFB), and Content Download.',
    ],
  },

  cookies: {
    title: 'Cookies',
    content: [
      'See cookies attached to each request/response and inspect properties like Secure, HttpOnly, Expiry, and SameSite policies.',
    ],
  },

  filtering_sorting: {
    title: 'Filtering & Sorting',
    content: [
      'Filter requests by type (Documents, Stylesheets, Scripts, Images, XHR/fetch calls).',
      'Sort requests by size, load time, or initiator to prioritize debugging.',
    ],
  },

  filter_by_type: {
    title: 'Filter by Type',
    content: [
      'Show only network requests matching specific categories like scripts, XHR requests, images, fonts, etc.',
    ],
  },

  filter_by_domain: {
    title: 'Filter by Domain',
    content: [
      'Focus only on resources fetched from specific origins, useful in multi-domain or CDN-heavy setups.',
    ],
  },

  sort_by_time: {
    title: 'Sort by Load Time',
    content: [
      'Highlight the slowest loading resources and diagnose frontend performance hits.',
    ],
  },

  searching: {
    title: 'Searching Headers & Body',
    content: [
      'Use text or regular expressions to find specific header values, API keys, data fields, or error strings across requests.',
    ],
  },

  throttling: {
    title: 'Network Throttling',
    content: [
      'Simulate slower connections like Fast 3G or Slow 3G to test loading experiences under poor network conditions.',
      'Diagnose how bandwidth or latency impacts user experience.',
    ],
  },

  disable_cache: {
    title: 'Disable Cache',
    content: [
      'Force browsers to fetch every resource anew, bypassing any cached versions.',
      'Essential for testing deployment changes and caching behaviors.',
    ],
  },

  request_blocking: {
    title: 'Request Blocking',
    content: [
      'Simulate third-party script failures or missing assets by blocking requests.',
      'Test how gracefully your site degrades when dependencies are unavailable.',
    ],
  },

  copy_export: {
    title: 'Copy & Export Requests',
    content: [
      'Copy individual requests as cURL commands for terminal replays.',
      'Export full HAR (HTTP Archive) files to share complex network logs or debug remotely.',
    ],
  },

  performance_analysis: {
    title: 'Performance Analysis',
    content: [
      'Study overall load time, initial load bottlenecks, third-party script delays, and waterfall blocking issues.',
    ],
  },

  timing_breakdown: {
    title: 'Timing Breakdown',
    content: [
      'Detailed phase timings for every resource: DNS, TCP, SSL, TTFB, and download.',
    ],
  },

  bottleneck_identification: {
    title: 'Bottleneck Identification',
    content: [
      'Identify which requests block render-critical paths and delay interactivity.',
      'Prioritize optimizations for largest, slowest, or render-blocking assets.',
    ],
  },

  benefits: {
    title: 'Benefits',
    content: [
      'Pinpoint API issues and slow-loading assets.',
      'Diagnose caching problems and optimize load order.',
      'Simulate real-world network conditions to harden performance.',
    ],
  },

  cons: {
    title: 'Cons',
    content: [
      'Large web apps can generate overwhelming request volumes.',
      'Filtering/searching becomes critical to avoid analysis paralysis.',
      'Interpreting Waterfall and Timing data requires some practice.',
    ],
  },

  codeExamples: [
    {
      title: 'Copy Request as cURL',
      code: `// Right-click a network request
  // Select: "Copy" > "Copy as cURL"
  // Paste into Terminal to replay`,
    },
    {
      title: 'Apply Custom Filter',
      code: `// In Network Filter box:
  // Only show API calls:
  -XHR
  `,
    },
    {
      title: 'Simulate Slow 3G',
      code: `// Throttling dropdown > Select "Slow 3G"
  // Reload page and observe behavior`,
    },
    {
      title: 'Search for Specific Payload Data',
      code: `// Open Network panel
  // Press Ctrl+F (Cmd+F) and type keyword to find in payloads or headers`,
    },
    {
      title: 'Export HAR File',
      code: `// Right-click > "Save all as HAR with content"
  // Share with team for remote debugging`,
    },
  ],

  conclusion: `The Network tab unlocks the ability to view, simulate, and optimize every piece of traffic flowing between the client and server. Mastery of its filtering, searching, timing breakdowns, and bottleneck identification transforms developers into powerful performance engineers who can optimize user experience across devices and conditions.`,
}

export default articleData
