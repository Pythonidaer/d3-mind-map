import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Incremental Static\nRegeneration (ISR)',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Allows individual static pages to be regenerated at runtime without a full site rebuild.',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Advantages of using ISR.',
  },
  {
    id: 'fresh_content',
    label: 'Fresh Content\nWithout Rebuilds',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition:
      'Updates static pages dynamically while keeping build times fast.',
  },
  {
    id: 'reduced_build_times',
    label: 'Reduced Build\nTimes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'No need to rebuild the entire site for small changes.',
  },
  {
    id: 'high_scalability',
    label: 'High\nScalability',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'Pages are updated in the background without blocking users.',
  },
  {
    id: 'drawbacks',
    label: 'Drawbacks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Limitations and challenges of ISR.',
  },
  {
    id: 'stale_content',
    label: 'Potential for\nStale Content',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'There may be a short period where users see outdated content before regeneration.',
  },
  {
    id: 'complex_caching',
    label: 'Complex\nCaching Logic',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'drawbacks',
    definition:
      'Requires careful cache invalidation strategies to avoid inconsistencies.',
  },
  {
    id: 'implementation',
    label: 'Implementation\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How ISR is used in practice.',
  },
  {
    id: 'nextjs',
    label: 'Next.js\n(revalidate)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Use revalidate property in getStaticProps to control regeneration frequency.',
  },
]

export const links = [
  { source: 'root', target: 'benefits' },
  { source: 'root', target: 'drawbacks' },
  { source: 'root', target: 'implementation' },
  { source: 'benefits', target: 'fresh_content' },
  { source: 'benefits', target: 'reduced_build_times' },
  { source: 'benefits', target: 'high_scalability' },
  { source: 'drawbacks', target: 'stale_content' },
  { source: 'drawbacks', target: 'complex_caching' },
  { source: 'implementation', target: 'nextjs' },
]
