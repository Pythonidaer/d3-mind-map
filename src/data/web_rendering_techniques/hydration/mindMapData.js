import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Hydration',
    shape: 'roundRect',
    color: 'root',
    definition:
      'The process of making static server-rendered HTML interactive by attaching client-side JavaScript.',
  },
  {
    id: 'necessity',
    label: 'Necessity',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Why hydration is essential for SSR and SSG applications.',
  },
  {
    id: 'attach_event_listeners',
    label: 'Attach Event\nListeners',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'necessity',
    definition:
      'Hydration enables user interaction by binding JavaScript event handlers to pre-rendered HTML.',
  },
  {
    id: 'restore_state',
    label: 'Restore Application\nState',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'necessity',
    definition:
      'Restores dynamic behaviors by syncing client state with pre-rendered HTML.',
  },
  {
    id: 'variations',
    label: 'Variations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Different approaches to optimize the hydration process.',
  },
  {
    id: 'streaming_ssr',
    label: 'Streaming SSR',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'variations',
    definition:
      'Server streams HTML to the browser progressively, improving perceived load speed.',
  },
  {
    id: 'progressive_rehydration',
    label: 'Progressive\nRehydration',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'variations',
    definition:
      'Hydrates critical page areas first, deferring hydration of lower-priority components.',
  },
  {
    id: 'partial_rehydration',
    label: 'Partial\nRehydration',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'variations',
    definition:
      'Only hydrates interactive parts of a page, leaving static areas untouched.',
  },
  {
    id: 'trisomorphic_rendering',
    label: 'Trisomorphic\nRendering',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'variations',
    definition:
      'Combines server, client, and service worker rendering for SPA-like experiences after initial SSR load.',
  },
  {
    id: 'relation_data_fetching',
    label: 'Relation to\nData Fetching',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How hydration interacts with data sources.',
  },
  {
    id: 'uses_initial_data',
    label: 'Uses Initial\nServer Data',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'relation_data_fetching',
    definition:
      'Hydration reuses pre-fetched server/build-time data to avoid unnecessary refetches.',
  },
  {
    id: 'optional_refetch',
    label: 'Optional\nClient Refetch',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'relation_data_fetching',
    definition:
      'Client may refetch data post-hydration for real-time updates if needed.',
  },
  {
    id: 'relation_data_sources',
    label: 'Relation to\nData Sources',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Where the data comes from during hydration.',
  },
  {
    id: 'database_content',
    label: 'Database/\nBackend Content',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'relation_data_sources',
    definition:
      'Server fetches database content at render time; hydration ensures client has access to it.',
  },
  {
    id: 'cdn_content',
    label: 'Content Delivery\nNetworks (CDNs)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'relation_data_sources',
    definition:
      'HTML and assets served from CDNs are hydrated for dynamic behavior.',
  },
  {
    id: 'api_data',
    label: 'External\nAPI Data',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'relation_data_sources',
    definition:
      'Data fetched from APIs can be embedded into initial HTML and revalidated after hydration.',
  },
  {
    id: 'user_uploads',
    label: 'User\nUploads',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'relation_data_sources',
    definition:
      'Post-hydration, users can submit uploads, triggering server-side processing and updates.',
  },
  {
    id: 'codebase_data',
    label: 'Initial Codebase\nData',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'relation_data_sources',
    definition:
      'Pre-baked codebase content included in static pages and hydrated client-side.',
  },
  {
    id: 'implementation',
    label: 'Implementation\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How major frameworks handle hydration.',
  },
  {
    id: 'react',
    label: 'React\n(hydrateRoot)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Uses hydrateRoot to attach React logic to pre-rendered HTML DOM.',
  },
  {
    id: 'vue',
    label: 'Vue.js\n(Client Mount)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Vue matches the server-rendered HTML and attaches reactivity upon client mount.',
  },
  {
    id: 'angular',
    label: 'Angular\n(provideClientHydration)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'implementation',
    definition:
      'Angular reuses the server-rendered DOM and activates it for interaction using hydration APIs.',
  },
]

export const links = [
  { source: 'root', target: 'necessity' },
  { source: 'root', target: 'variations' },
  { source: 'root', target: 'relation_data_fetching' },
  { source: 'root', target: 'relation_data_sources' },
  { source: 'root', target: 'implementation' },
  { source: 'necessity', target: 'attach_event_listeners' },
  { source: 'necessity', target: 'restore_state' },
  { source: 'variations', target: 'streaming_ssr' },
  { source: 'variations', target: 'progressive_rehydration' },
  { source: 'variations', target: 'partial_rehydration' },
  { source: 'variations', target: 'trisomorphic_rendering' },
  { source: 'relation_data_fetching', target: 'uses_initial_data' },
  { source: 'relation_data_fetching', target: 'optional_refetch' },
  { source: 'relation_data_sources', target: 'database_content' },
  { source: 'relation_data_sources', target: 'cdn_content' },
  { source: 'relation_data_sources', target: 'api_data' },
  { source: 'relation_data_sources', target: 'user_uploads' },
  { source: 'relation_data_sources', target: 'codebase_data' },
  { source: 'implementation', target: 'react' },
  { source: 'implementation', target: 'vue' },
  { source: 'implementation', target: 'angular' },
]
