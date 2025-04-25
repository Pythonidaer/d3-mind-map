import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Hybrid\nRendering',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Combining multiple rendering strategies (CSR, SSR, SSG, ISR) in a single application.',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Advantages of hybrid rendering.',
  },
  {
    id: 'optimize_per_page',
    label: 'Optimize Per\nPage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Different pages can use different rendering methods based on their needs.',
  },
  {
    id: 'balanced_performance',
    label: 'Balanced\nPerformance',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Allows for balancing SEO, interactivity, and scalability across the app.',
  },
  {
    id: 'drawbacks',
    label: 'Drawbacks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Challenges with hybrid rendering.',
  },
  {
    id: 'architecture_complexity',
    label: 'Higher\nArchitecture Complexity',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Managing multiple rendering methods increases development and maintenance complexity.',
  },
  {
    id: 'implementation',
    label: 'Implementation\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How hybrid rendering is done.',
  },
  {
    id: 'nextjs_mixed',
    label: 'Next.js\nMixed Strategies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Use getStaticProps, getServerSideProps, and client-side fetches together.',
  },
]

export const links = [
  { source: 'root', target: 'benefits' },
  { source: 'root', target: 'drawbacks' },
  { source: 'root', target: 'implementation' },
  { source: 'benefits', target: 'optimize_per_page' },
  { source: 'benefits', target: 'balanced_performance' },
  { source: 'drawbacks', target: 'architecture_complexity' },
  { source: 'implementation', target: 'nextjs_mixed' },
]
