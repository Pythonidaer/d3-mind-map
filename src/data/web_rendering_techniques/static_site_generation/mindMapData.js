import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Static Site\nGeneration (SSG)',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Pre-renders HTML files at build time for fast, secure, and scalable web delivery.',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Advantages of using Static Site Generation.',
  },
  {
    id: 'performance',
    label: 'Exceptional\nPerformance',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Serving pre-built HTML files results in extremely fast page loads.',
  },
  {
    id: 'security',
    label: 'Enhanced\nSecurity',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'No server-side logic at runtime means a reduced attack surface.',
  },
  {
    id: 'scalability',
    label: 'High\nScalability',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Static files can be cached and served via CDNs easily, scaling effortlessly.',
  },
  {
    id: 'seo',
    label: 'Improved\nSEO',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'Pre-rendered HTML is fully crawlable by search engines.',
  },
  {
    id: 'cost_effective',
    label: 'Cost-Effective\nHosting',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Hosting static files is cheaper compared to maintaining dynamic servers.',
  },
  {
    id: 'drawbacks',
    label: 'Drawbacks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Disadvantages and challenges of Static Site Generation.',
  },
  {
    id: 'dynamic_content_limit',
    label: 'Limited Dynamic\nContent',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Frequent content updates or personalization require complex client-side strategies.',
  },
  {
    id: 'long_build_times',
    label: 'Long Build\nTimes',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Large websites can take considerable time to build all static files.',
  },
  {
    id: 'rebuild_required',
    label: 'Rebuilds for\nContent Updates',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Content changes often require a new build and redeploy process.',
  },
  {
    id: 'impact_client',
    label: 'Impact on\nClient-Side',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How SSG affects client-side development.',
  },
  {
    id: 'dynamic_features',
    label: 'Dynamic\nEnhancements',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_client',
    definition:
      'Client-side JavaScript is used to add interactivity to static pages.',
  },
  {
    id: 'excellent_performance',
    label: 'Excellent Initial\nPerformance',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_client',
    definition: 'Static files ensure extremely fast first loads for users.',
  },
  {
    id: 'impact_server',
    label: 'Impact on\nServer-Side',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How SSG affects server-side infrastructure and workflow.',
  },
  {
    id: 'simpler_infrastructure',
    label: 'Simpler\nInfrastructure',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_server',
    definition:
      'Static hosting requires less server maintenance and complexity.',
  },
  {
    id: 'build_process',
    label: 'Complex Build\nProcess',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'impact_server',
    definition:
      'Managing efficient builds for large sites adds backend complexity.',
  },
  {
    id: 'impact_edge',
    label: 'Impact on\nEdge Computing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How SSG interacts with edge computing trends.',
  },
  {
    id: 'dynamic_static',
    label: 'Dynamic\nStatic Sites',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_edge',
    definition:
      'Edge functions enable dynamic behaviors on top of static foundations.',
  },
  {
    id: 'incremental_static_regeneration',
    label: 'Incremental Static\nRegeneration (ISR)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_edge',
    definition:
      'Updates individual static pages without full rebuilds, often done at the edge.',
  },
  {
    id: 'implementation',
    label: 'Implementation\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How to practically implement SSG in popular frameworks.',
  },
  {
    id: 'nextjs',
    label: 'Next.js\n(getStaticProps)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Pre-render pages at build time using getStaticProps in Next.js.',
  },
  {
    id: 'gatsby',
    label: 'Gatsby\n(React Static)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'React-based static site generator using GraphQL for data fetching.',
  },
  {
    id: 'hugo',
    label: 'Hugo\n(Go Templates)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Fast static site generator written in Go, using Markdown and templates.',
  },
  {
    id: 'jekyll',
    label: 'Jekyll\n(Ruby Markdown)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Static site generator using Ruby and Markdown, ideal for blogs and documentation.',
  },
]

export const links = [
  { source: 'root', target: 'benefits' },
  { source: 'root', target: 'drawbacks' },
  { source: 'root', target: 'impact_client' },
  { source: 'root', target: 'impact_server' },
  { source: 'root', target: 'impact_edge' },
  { source: 'root', target: 'implementation' },
  { source: 'benefits', target: 'performance' },
  { source: 'benefits', target: 'security' },
  { source: 'benefits', target: 'scalability' },
  { source: 'benefits', target: 'seo' },
  { source: 'benefits', target: 'cost_effective' },
  { source: 'drawbacks', target: 'dynamic_content_limit' },
  { source: 'drawbacks', target: 'long_build_times' },
  { source: 'drawbacks', target: 'rebuild_required' },
  { source: 'impact_client', target: 'dynamic_features' },
  { source: 'impact_client', target: 'excellent_performance' },
  { source: 'impact_server', target: 'simpler_infrastructure' },
  { source: 'impact_server', target: 'build_process' },
  { source: 'impact_edge', target: 'dynamic_static' },
  { source: 'impact_edge', target: 'incremental_static_regeneration' },
  { source: 'implementation', target: 'nextjs' },
  { source: 'implementation', target: 'gatsby' },
  { source: 'implementation', target: 'hugo' },
  { source: 'implementation', target: 'jekyll' },
]
