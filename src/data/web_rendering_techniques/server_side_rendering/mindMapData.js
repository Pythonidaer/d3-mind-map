import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Server-Side\nRendering (SSR)',
    shape: 'roundRect',
    color: 'root',
    definition:
      'HTML is generated on the server for each user request and sent to the browser.',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Advantages of using Server-Side Rendering.',
  },
  {
    id: 'seo',
    label: 'SEO\nImprovement',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Server-rendered pages are easier for search engines to crawl and index.',
  },
  {
    id: 'faster_initial_load',
    label: 'Faster\nInitial Load',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Users see content more quickly because the server sends a fully rendered page.',
  },
  {
    id: 'accessibility',
    label: 'Improved\nAccessibility',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Content is accessible even if JavaScript fails or is disabled.',
  },
  {
    id: 'social_sharing',
    label: 'Better\nSocial Sharing',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Metadata like titles and descriptions are immediately available for social media previews.',
  },
  {
    id: 'drawbacks',
    label: 'Drawbacks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Disadvantages and challenges of Server-Side Rendering.',
  },
  {
    id: 'increased_server_load',
    label: 'Increased\nServer Load',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Each request requires server computation, which can strain resources.',
  },
  {
    id: 'longer_ttfb',
    label: 'Longer\nTTFB',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Time To First Byte may increase because the server has to generate the page dynamically.',
  },
  {
    id: 'development_complexity',
    label: 'Development\nComplexity',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'More complicated setup needed to manage server-side and client-side states.',
  },
  {
    id: 'impact_client',
    label: 'Impact on\nClient-Side',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How SSR affects client-side development.',
  },
  {
    id: 'hydration_mismatches',
    label: 'Hydration\nMismatches',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'impact_client',
    definition:
      'Client-rendered DOM might differ from server-rendered HTML, causing errors.',
  },
  {
    id: 'efficient_hydration',
    label: 'Efficient\nHydration',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_client',
    definition:
      'Critical for making the page interactive quickly after server render.',
  },
  {
    id: 'impact_server',
    label: 'Impact on\nServer-Side',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How SSR affects server-side development.',
  },
  {
    id: 'resource_utilization',
    label: 'Higher\nResource Use',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'impact_server',
    definition:
      'Server needs more CPU and memory to generate pages dynamically.',
  },
  {
    id: 'server_side_env',
    label: 'Server-Side\nEnvironment',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_server',
    definition: 'Requires environments like Node.js or specialized frameworks.',
  },
  {
    id: 'impact_edge',
    label: 'Impact on\nEdge Computing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How SSR benefits from or affects edge computing deployments.',
  },
  {
    id: 'edge_personalization',
    label: 'Real-Time\nPersonalization',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_edge',
    definition:
      'Personalization can happen closer to users, improving speed and relevance.',
  },
  {
    id: 'edge_server_load',
    label: 'Reduced\nServer Load',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_edge',
    definition:
      'Edge nodes handle rendering, decreasing the burden on origin servers.',
  },
  {
    id: 'implementation',
    label: 'Implementation\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How to practically implement SSR in modern frameworks.',
  },
  {
    id: 'nextjs',
    label: 'Next.js\n(getServerSideProps)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Fetch data on server per request using getServerSideProps in Next.js.',
  },
  {
    id: 'nuxtjs',
    label: 'Nuxt.js\n(asyncData)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Fetch data server-side in Vue apps using Nuxt.js asyncData or fetch.',
  },
  {
    id: 'angular_universal',
    label: 'Angular\nUniversal',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Render Angular apps server-side and hydrate them client-side with Angular Universal.',
  },
]

export const links = [
  { source: 'root', target: 'benefits' },
  { source: 'root', target: 'drawbacks' },
  { source: 'root', target: 'impact_client' },
  { source: 'root', target: 'impact_server' },
  { source: 'root', target: 'impact_edge' },
  { source: 'root', target: 'implementation' },
  { source: 'benefits', target: 'seo' },
  { source: 'benefits', target: 'faster_initial_load' },
  { source: 'benefits', target: 'accessibility' },
  { source: 'benefits', target: 'social_sharing' },
  { source: 'drawbacks', target: 'increased_server_load' },
  { source: 'drawbacks', target: 'longer_ttfb' },
  { source: 'drawbacks', target: 'development_complexity' },
  { source: 'impact_client', target: 'hydration_mismatches' },
  { source: 'impact_client', target: 'efficient_hydration' },
  { source: 'impact_server', target: 'resource_utilization' },
  { source: 'impact_server', target: 'server_side_env' },
  { source: 'impact_edge', target: 'edge_personalization' },
  { source: 'impact_edge', target: 'edge_server_load' },
  { source: 'implementation', target: 'nextjs' },
  { source: 'implementation', target: 'nuxtjs' },
  { source: 'implementation', target: 'angular_universal' },
]
