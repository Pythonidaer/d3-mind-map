import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Single-Page vs.\nMulti-Page Applications',
    shape: 'roundRect',
    color: 'root',
    definition: 'A comparison between SPAs and MPAs, highlighting their architecture, use cases, tradeoffs, and design patterns.',
  },

  // Level 1
  {
    id: 'spa_definition',
    label: 'Single-Page\nApplications (SPA)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Apps that load a single HTML page and dynamically update content without full page reloads.',
  },
  {
    id: 'mpa_definition',
    label: 'Multi-Page\nApplications (MPA)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Traditional websites where each route corresponds to a full HTML page request and reload.',
  },
  {
    id: 'routing_behavior',
    label: 'Routing\nBehavior',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How navigation and URL changes are handled in SPAs vs MPAs.',
  },
  {
    id: 'performance_impacts',
    label: 'Performance\nImpacts',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Page load times, caching, and responsiveness across architectures.',
  },
  {
    id: 'seo_and_accessibility',
    label: 'SEO &\nAccessibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How search engines and assistive tools interact with dynamic vs. static sites.',
  },
  {
    id: 'use_cases',
    label: 'Use\nCases',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'When to choose SPA or MPA based on product, audience, or content structure.',
  },
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Pitfalls, tradeoffs, and technical debt introduced by misuse of either approach.',
  },

  // SPA Children
  {
    id: 'spa_client_rendering',
    label: 'Client-Side\nRendering',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'spa_definition',
    definition: 'JavaScript-driven rendering that updates views without fetching entire pages.',
  },
  {
    id: 'spa_frameworks',
    label: 'Popular SPA\nFrameworks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'spa_definition',
    definition: 'React, Vue, Svelte, and Angular dominate modern SPA architecture.',
  },

  // MPA Children
  {
    id: 'mpa_server_rendering',
    label: 'Server-Side\nRendering',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'mpa_definition',
    definition: 'Each page is fully rendered on the server and delivered on request.',
  },
  {
    id: 'mpa_cms_examples',
    label: 'Typical MPA\nPlatforms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'mpa_definition',
    definition: 'WordPress, Drupal, Shopify, and traditional Rails/PHP sites.',
  },

  // Routing
  {
    id: 'spa_dynamic_routing',
    label: 'SPA Dynamic\nRouting',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'routing_behavior',
    definition: 'Client-side routers handle path changes and inject views dynamically.',
  },
  {
    id: 'mpa_full_reload',
    label: 'MPA Full\nPage Loads',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'routing_behavior',
    definition: 'Each route results in a new HTML page fetched from the server.',
  },

  // Performance
  {
    id: 'spa_initial_bundle',
    label: 'SPA Initial\nBundle Size',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'performance_impacts',
    definition: 'SPAs may suffer from slower first load due to large JavaScript bundles.',
  },
  {
    id: 'mpa_caching_strategy',
    label: 'MPA Caching\nStrategy',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'performance_impacts',
    definition: 'Browser and CDN caching help MPAs deliver faster repeat visits.',
  },

  // SEO & Accessibility
  {
    id: 'spa_indexing_challenges',
    label: 'SPA Indexing\nChallenges',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'seo_and_accessibility',
    definition: 'Content rendered by JS may not be properly indexed unless pre-rendered.',
  },
  {
    id: 'mpa_accessibility_defaults',
    label: 'MPA Accessibility\nDefaults',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'seo_and_accessibility',
    definition: 'MPAs offer more predictable semantics and screen reader compatibility out of the box.',
  },

  // Use Cases
  {
    id: 'spa_app_like_ui',
    label: 'App-like\nExperience',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'use_cases',
    definition: 'Ideal for dashboards, productivity tools, and SaaS products.',
  },
  {
    id: 'mpa_content_sites',
    label: 'Content-Heavy\nWebsites',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'use_cases',
    definition: 'Best for blogs, documentation, marketing sites, and static content.',
  },

  // Cons
  {
    id: 'spa_js_blockers',
    label: 'SPA JS\nDependency',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Users without JavaScript or on slow connections may be blocked or receive a blank screen.',
  },
  {
    id: 'mpa_context_loss',
    label: 'MPA Context\nLoss on Nav',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Lack of persistent state between pages, requiring redundant network requests.',
  },
  {
    id: 'spa_scroll_handling',
    label: 'SPA Scroll\nRestoration',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'SPAs may forget scroll positions or interrupt accessibility navigation without effort.',
  }
];

export const links = [
  { source: 'root', target: 'spa_definition' },
  { source: 'root', target: 'mpa_definition' },
  { source: 'root', target: 'routing_behavior' },
  { source: 'root', target: 'performance_impacts' },
  { source: 'root', target: 'seo_and_accessibility' },
  { source: 'root', target: 'use_cases' },
  { source: 'root', target: 'cons' },

  { source: 'spa_definition', target: 'spa_client_rendering' },
  { source: 'spa_definition', target: 'spa_frameworks' },

  { source: 'mpa_definition', target: 'mpa_server_rendering' },
  { source: 'mpa_definition', target: 'mpa_cms_examples' },

  { source: 'routing_behavior', target: 'spa_dynamic_routing' },
  { source: 'routing_behavior', target: 'mpa_full_reload' },

  { source: 'performance_impacts', target: 'spa_initial_bundle' },
  { source: 'performance_impacts', target: 'mpa_caching_strategy' },

  { source: 'seo_and_accessibility', target: 'spa_indexing_challenges' },
  { source: 'seo_and_accessibility', target: 'mpa_accessibility_defaults' },

  { source: 'use_cases', target: 'spa_app_like_ui' },
  { source: 'use_cases', target: 'mpa_content_sites' },

  { source: 'cons', target: 'spa_js_blockers' },
  { source: 'cons', target: 'mpa_context_loss' },
  { source: 'cons', target: 'spa_scroll_handling' }
];
