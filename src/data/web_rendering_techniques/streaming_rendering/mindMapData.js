import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Streaming\nRendering',
    shape: 'roundRect',
    color: 'root',
    definition:
      'The server streams HTML to the browser in chunks as it is generated, improving perceived speed.',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Advantages of using streaming rendering.',
  },
  {
    id: 'faster_ttfp',
    label: 'Faster Time to\nFirst Paint (TTFP)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'Users see partial content earlier during the loading process.',
  },
  {
    id: 'progressive_loading',
    label: 'Progressive\nLoading',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Critical content loads first, non-critical content loads later.',
  },
  {
    id: 'drawbacks',
    label: 'Drawbacks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Challenges with streaming rendering.',
  },
  {
    id: 'server_complexity',
    label: 'Increased Server\nComplexity',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Streaming responses require more sophisticated server-side logic.',
  },
  {
    id: 'implementation',
    label: 'Implementation\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How to implement streaming rendering.',
  },
  {
    id: 'react_streaming',
    label: 'React 18\nStreaming APIs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'React 18 supports HTML streaming via server-side rendering features.',
  },
]

export const links = [
  { source: 'root', target: 'benefits' },
  { source: 'root', target: 'drawbacks' },
  { source: 'root', target: 'implementation' },
  { source: 'benefits', target: 'faster_ttfp' },
  { source: 'benefits', target: 'progressive_loading' },
  { source: 'drawbacks', target: 'server_complexity' },
  { source: 'implementation', target: 'react_streaming' },
]
