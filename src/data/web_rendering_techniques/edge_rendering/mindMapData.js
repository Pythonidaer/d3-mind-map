import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Edge\nRendering',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Serving content by generating or caching it at edge servers near the user.',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Advantages of using edge rendering.',
  },
  {
    id: 'lower_latency',
    label: 'Lower\nLatency',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'Pages are served from locations physically closer to users.',
  },
  {
    id: 'personalization',
    label: 'Real-Time\nPersonalization',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'Dynamic content can be customized for users at the edge.',
  },
  {
    id: 'drawbacks',
    label: 'Drawbacks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Challenges with edge rendering.',
  },
  {
    id: 'limited_resources',
    label: 'Edge Resource\nConstraints',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Edge environments may have less CPU/memory than centralized servers.',
  },
  {
    id: 'implementation',
    label: 'Implementation\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How edge rendering is implemented.',
  },
  {
    id: 'vercel_edge',
    label: 'Vercel Edge\nFunctions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      "Vercel's Edge Functions allow dynamic rendering near the user.",
  },
]

export const links = [
  { source: 'root', target: 'benefits' },
  { source: 'root', target: 'drawbacks' },
  { source: 'root', target: 'implementation' },
  { source: 'benefits', target: 'lower_latency' },
  { source: 'benefits', target: 'personalization' },
  { source: 'drawbacks', target: 'limited_resources' },
  { source: 'implementation', target: 'vercel_edge' },
]
