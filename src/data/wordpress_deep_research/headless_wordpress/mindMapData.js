import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Headless WordPress\nand APIs',
    shape: 'roundRect',
    color: 'root',
    definition: 'A modern architecture where WordPress is used solely as a backend CMS, exposing content via APIs (REST or GraphQL) to be consumed by a separate frontend.',
  },
  {
    id: 'architecture',
    label: 'Decoupled\nArchitecture',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Frontend and backend are separated, giving more flexibility, performance, and technology choices.',
  },
  {
    id: 'rest_api',
    label: 'REST API',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'A built-in JSON API in WordPress that lets developers access posts, pages, users, and other data programmatically.',
  },
  {
    id: 'graphql',
    label: 'WPGraphQL',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'A GraphQL implementation for WordPress that exposes flexible and efficient querying capabilities through a single endpoint.',
  },
  {
    id: 'frontend_frameworks',
    label: 'Frontend\nFrameworks',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'React, Vue, and other JavaScript frameworks can be used to consume API data and render dynamic UIs.',
  },
  {
    id: 'jamstack',
    label: 'JAMstack\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Headless WordPress works well with JAMstack principles: JavaScript, APIs, and pre-rendered Markup.',
  },

  // Tier 2 Positives
  {
    id: 'custom_endpoints',
    label: 'Custom REST\nEndpoints',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'rest_api',
    definition: 'Developers can register new REST endpoints for custom data or workflows via code.',
  },
  {
    id: 'schema_customization',
    label: 'Schema\nCustomization',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'graphql',
    definition: 'Expose Custom Post Types and ACF fields in the WPGraphQL schema to control frontend queries.',
  },
  {
    id: 'react_next_integration',
    label: 'React / Next.js\nIntegration',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'frontend_frameworks',
    definition: 'Frameworks like Next.js work well with headless WordPress to support SSG and SSR via fetch or GraphQL queries.',
  },
  {
    id: 'static_generation',
    label: 'Static Site\nGeneration',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'jamstack',
    definition: 'Generate static HTML files from API data to enhance performance and security.',
  },

  // Tier 3 Positives
  {
    id: 'react_fetch_usage',
    label: 'React fetch\nExample',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'custom_endpoints',
    definition: 'Use native fetch() or SWR to call REST endpoints and render WordPress content in React.',
  },
  {
    id: 'acf_graphql',
    label: 'ACF + WPGraphQL\nExample',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'schema_customization',
    definition: 'WPGraphQL can expose Advanced Custom Fields, making headless content modeling more flexible.',
  },

  // Negatives
  {
    id: 'nodeNegative1_complexity',
    label: 'Setup & Dev\nComplexity',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Requires knowledge of WordPress backend and modern frontend tooling, build systems, and API auth.',
  },
  {
    id: 'nodeNegative1_plugin_loss',
    label: 'Plugin Feature\nLoss',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Plugins designed for server-side rendering may not work on the headless frontend (e.g., shortcodes, UI widgets).',
  },

  // Tier 2 Negatives
  {
    id: 'nodeNegative2_preview',
    label: 'No Native\nPreviewing',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_plugin_loss',
    definition: 'Previewing draft posts in headless mode is complex and often requires custom token-based workflows.',
  },
  {
    id: 'nodeNegative2_auth',
    label: 'Custom\nAuthentication',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_complexity',
    definition: 'Requires token-based auth (JWT, OAuth) to restrict access to protected content or user actions.',
  },
]

export const links = [
  { source: 'root', target: 'architecture' },
  { source: 'root', target: 'rest_api' },
  { source: 'root', target: 'graphql' },
  { source: 'root', target: 'frontend_frameworks' },
  { source: 'root', target: 'jamstack' },

  { source: 'rest_api', target: 'custom_endpoints' },
  { source: 'graphql', target: 'schema_customization' },
  { source: 'frontend_frameworks', target: 'react_next_integration' },
  { source: 'jamstack', target: 'static_generation' },

  { source: 'custom_endpoints', target: 'react_fetch_usage' },
  { source: 'schema_customization', target: 'acf_graphql' },

  { source: 'root', target: 'nodeNegative1_complexity' },
  { source: 'root', target: 'nodeNegative1_plugin_loss' },

  { source: 'nodeNegative1_plugin_loss', target: 'nodeNegative2_preview' },
  { source: 'nodeNegative1_complexity', target: 'nodeNegative2_auth' },
]
