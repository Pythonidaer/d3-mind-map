import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Client-Side\nRendering (CSR)',
    shape: 'roundRect',
    color: 'root',
    definition:
      'HTML is generated in the browser using JavaScript after the initial page load.',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Advantages of using Client-Side Rendering.',
  },
  {
    id: 'rich_interactivity',
    label: 'Rich\nInteractivity',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Enables highly dynamic, app-like experiences without full page reloads.',
  },
  {
    id: 'reduced_server_load',
    label: 'Reduced\nServer Load',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Servers mainly handle API requests after initial load, offloading rendering work to clients.',
  },
  {
    id: 'faster_navigation',
    label: 'Faster\nPage Navigation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Once loaded, moving between pages feels instant because only new data is fetched.',
  },
  {
    id: 'drawbacks',
    label: 'Drawbacks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Disadvantages and challenges of Client-Side Rendering.',
  },
  {
    id: 'seo_challenges',
    label: 'SEO\nChallenges',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Search engines may struggle to index JavaScript-rendered content correctly.',
  },
  {
    id: 'slow_initial_load',
    label: 'Slow\nInitial Load',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Users may see a blank page while JavaScript downloads and executes.',
  },
  {
    id: 'device_dependency',
    label: 'Device and\nConnection Dependent',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      "Performance relies heavily on the user's device power and network quality.",
  },
  {
    id: 'impact_client',
    label: 'Impact on\nClient-Side',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How CSR affects client-side development.',
  },
  {
    id: 'javascript_heavy',
    label: 'Heavy\nJavaScript Use',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_client',
    definition:
      'Client-side code must handle data fetching, DOM updates, and user interactions.',
  },
  {
    id: 'performance_optimization',
    label: 'Performance\nOptimization Critical',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_client',
    definition:
      'Optimization strategies like code splitting, lazy loading, and efficient state management are crucial.',
  },
  {
    id: 'impact_server',
    label: 'Impact on\nServer-Side',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How CSR affects server infrastructure and backend design.',
  },
  {
    id: 'simplified_server',
    label: 'Simplified\nServer Logic',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_server',
    definition:
      'Servers primarily expose APIs; no need to generate HTML for each page view.',
  },
  {
    id: 'impact_edge',
    label: 'Impact on\nEdge Computing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How CSR interacts with edge computing advancements.',
  },
  {
    id: 'dynamic_content_edge',
    label: 'Dynamic Content\nat the Edge',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'impact_edge',
    definition:
      'APIs or microservices at the edge can provide faster responses for dynamic data needs.',
  },
  {
    id: 'implementation',
    label: 'Implementation\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How to practically implement CSR in modern frameworks.',
  },
  {
    id: 'react',
    label: 'React\n(useEffect, SWR)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Use hooks like useEffect to fetch data client-side; manage client state dynamically.',
  },
  {
    id: 'vue',
    label: 'Vue.js\n(Lifecycle Hooks)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Use lifecycle hooks (e.g., mounted) to trigger data fetching and DOM updates.',
  },
  {
    id: 'angular',
    label: 'Angular\n(Services and Observables)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Inject services into components and subscribe to data streams for reactive updates.',
  },
]

export const links = [
  { source: 'root', target: 'benefits' },
  { source: 'root', target: 'drawbacks' },
  { source: 'root', target: 'impact_client' },
  { source: 'root', target: 'impact_server' },
  { source: 'root', target: 'impact_edge' },
  { source: 'root', target: 'implementation' },
  { source: 'benefits', target: 'rich_interactivity' },
  { source: 'benefits', target: 'reduced_server_load' },
  { source: 'benefits', target: 'faster_navigation' },
  { source: 'drawbacks', target: 'seo_challenges' },
  { source: 'drawbacks', target: 'slow_initial_load' },
  { source: 'drawbacks', target: 'device_dependency' },
  { source: 'impact_client', target: 'javascript_heavy' },
  { source: 'impact_client', target: 'performance_optimization' },
  { source: 'impact_server', target: 'simplified_server' },
  { source: 'impact_edge', target: 'dynamic_content_edge' },
  { source: 'implementation', target: 'react' },
  { source: 'implementation', target: 'vue' },
  { source: 'implementation', target: 'angular' },
]
