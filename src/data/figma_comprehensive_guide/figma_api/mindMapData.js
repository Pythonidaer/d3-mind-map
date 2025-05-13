import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Exploring the\nFigma API',
    shape: 'roundRect',
    color: 'root',
    definition: 'Programmatic interfaces for interacting with Figma files and extending Figma functionality.',
  },

  // Positive Level 1
  {
    id: 'rest_api',
    label: 'REST\nAPI',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'HTTP endpoints for reading and writing Figma file data and assets.',
  },
  {
    id: 'plugin_api',
    label: 'Plugin\nAPI',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'In-app JavaScript APIs for building custom Figma plugins.',
  },
  {
    id: 'authentication_rate_limits',
    label: 'Auth &\nRate Limits',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Mechanisms for securing requests and handling usage quotas.',
  },
  {
    id: 'sdks_tools',
    label: 'SDKs &\nTools',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Libraries and CLI tools that simplify API consumption.',
  },
  {
    id: 'webhooks_integrations',
    label: 'Webhooks &\nIntegrations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Event-driven callbacks and third-party integrations for automated workflows.',
  },

  // Positive Level 2 elaborations
  // REST API children
  {
    id: 'file_endpoints',
    label: 'File\nEndpoints',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'rest_api',
    definition: 'Retrieve document structure, nodes, components, styles, and metadata.',
  },
  {
    id: 'image_endpoints',
    label: 'Image\nEndpoints',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'rest_api',
    definition: 'Export frames or nodes as PNG, JPG, SVG, or PDF assets.',
  },
  {
    id: 'comments_endpoints',
    label: 'Comments\nEndpoints',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'rest_api',
    definition: 'List, post, and delete comments programmatically on a file.',
  },

  // Plugin API children
  {
    id: 'ui_api',
    label: 'UI\nAPI',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'plugin_api',
    definition: 'Show custom UI panels and dialogs within the Figma app.',
  },
  {
    id: 'node_api',
    label: 'Node\nAPI',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'plugin_api',
    definition: 'Read and modify document nodes, styles, and properties.',
  },
  {
    id: 'storage_api',
    label: 'Storage\nAPI',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'plugin_api',
    definition: 'Persist plugin data locally or to team library via clientStorage.',
  },

  // Auth & Rate Limits children
  {
    id: 'personal_tokens',
    label: 'Personal\nAccess Tokens',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication_rate_limits',
    definition: 'Use personal tokens for accessing REST API with scoped permissions.',
  },
  {
    id: 'oauth2',
    label: 'OAuth2\nFlows',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication_rate_limits',
    definition: 'Implement OAuth2 authorization for user-scoped API access.',
  },
  {
    id: 'rate_limiting',
    label: 'Rate\nLimiting',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication_rate_limits',
    definition: 'Handle HTTP 429 responses and back off to respect quotas.',
  },

  // SDKs & Tools children
  {
    id: 'figma_ts_sdk',
    label: 'TypeScript\nSDK',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'sdks_tools',
    definition: 'Official @figma/js library for typed access to REST API endpoints.',
  },
  {
    id: 'figma_cli',
    label: 'Figma\nCLI',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'sdks_tools',
    definition: 'Command-line tool for exporting assets and generating token files.',
  },
  {
    id: 'third_party_sdks',
    label: 'Third-Party\nSDKs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'sdks_tools',
    definition: 'Community libraries (Python, Ruby, Go) for Figma API integration.',
  },

  // Webhooks & Integrations children
  {
    id: 'file_webhooks',
    label: 'File\nWebhooks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'webhooks_integrations',
    definition: 'Subscribe to file change events for automated sync or CI tasks.',
  },
  {
    id: 'comment_webhooks',
    label: 'Comment\nWebhooks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'webhooks_integrations',
    definition: 'Receive real-time notifications when comments are added or resolved.',
  },
  {
    id: 'integration_examples',
    label: 'Integration\nExamples',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'webhooks_integrations',
    definition: 'Common use cases: design-token sync, asset pipelines, automated QA.',
  },

  // Negative Level 1 (anti-patterns)
  {
    id: 'ignoring_api_docs',
    label: 'Ignoring\nAPI Docs',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Skipping official documentation leads to misuse of endpoints and bugs.',
  },
  {
    id: 'insecure_tokens',
    label: 'Insecure\nTokens',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Hardcoding or exposing personal tokens risks unauthorized access.',
  },
  {
    id: 'excessive_requests',
    label: 'Excessive\nRequests',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Ignoring rate limits causes throttling or temporary bans.',
  },
  {
    id: 'poor_error_handling',
    label: 'Poor\nError Handling',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Not capturing API errors or plugin exceptions leads to silent failures.',
  },

  // Negative Level 2 elaborations
  {
    id: 'undocumented_usage',
    label: 'Undocumented\nUsage',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ignoring_api_docs',
    definition: 'Relying on trial-and-error instead of spec leads to inconsistent behavior.',
  },
  {
    id: 'token_leaks',
    label: 'Token\nLeaks',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'insecure_tokens',
    definition: 'Exposed tokens in repos or logs allow unauthorized API calls.',
  },
  {
    id: 'throttled_jobs',
    label: 'Throttled\nJobs',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'excessive_requests',
    definition: 'Unmanaged retries flood the API, triggering 429 responses.',
  },
  {
    id: 'unhandled_exceptions',
    label: 'Unhandled\nExceptions',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'poor_error_handling',
    definition: 'Plugins crash silently or halt pipelines without clear diagnostics.',
  }
];

export const links = [
  // Root → Positive Level 1
  { source: 'root', target: 'rest_api' },
  { source: 'root', target: 'plugin_api' },
  { source: 'root', target: 'authentication_rate_limits' },
  { source: 'root', target: 'sdks_tools' },
  { source: 'root', target: 'webhooks_integrations' },

  // Positive Level 1 → Level 2 elaborations
  { source: 'rest_api', target: 'file_endpoints' },
  { source: 'rest_api', target: 'image_endpoints' },
  { source: 'rest_api', target: 'comments_endpoints' },

  { source: 'plugin_api', target: 'ui_api' },
  { source: 'plugin_api', target: 'node_api' },
  { source: 'plugin_api', target: 'storage_api' },

  { source: 'authentication_rate_limits', target: 'personal_tokens' },
  { source: 'authentication_rate_limits', target: 'oauth2' },
  { source: 'authentication_rate_limits', target: 'rate_limiting' },

  { source: 'sdks_tools', target: 'figma_ts_sdk' },
  { source: 'sdks_tools', target: 'figma_cli' },
  { source: 'sdks_tools', target: 'third_party_sdks' },

  { source: 'webhooks_integrations', target: 'file_webhooks' },
  { source: 'webhooks_integrations', target: 'comment_webhooks' },
  { source: 'webhooks_integrations', target: 'integration_examples' },

  // Root → Negative Level 1
  { source: 'root', target: 'ignoring_api_docs' },
  { source: 'root', target: 'insecure_tokens' },
  { source: 'root', target: 'excessive_requests' },
  { source: 'root', target: 'poor_error_handling' },

  // Negative Level 1 → Level 2 elaborations
  { source: 'ignoring_api_docs', target: 'undocumented_usage' },
  { source: 'insecure_tokens', target: 'token_leaks' },
  { source: 'excessive_requests', target: 'throttled_jobs' },
  { source: 'poor_error_handling', target: 'unhandled_exceptions' }
];
