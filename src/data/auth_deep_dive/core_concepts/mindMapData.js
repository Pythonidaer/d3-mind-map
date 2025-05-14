import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Authentication and\nAuthorization Core Concepts',
    shape: 'roundRect',
    color: 'root',
    definition: 'Fundamental principles behind identity verification and access control in full-stack JavaScript applications.',
  },

  // Authentication
  {
    id: 'authentication',
    label: 'Authentication',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The process of verifying the identity of a user or system.',
  },
  {
    id: 'authentication_methods',
    label: 'Authentication\nMethods',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication',
    definition: 'Includes passwords, multi-factor authentication, biometrics, and one-time codes.',
  },
  {
    id: 'token_based_authentication',
    label: 'Token-Based\nAuthentication',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication',
    definition: 'Uses digitally signed tokens like JWTs to verify identity without server-side sessions.',
  },

  // Authorization
  {
    id: 'authorization',
    label: 'Authorization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Determines what an authenticated user is allowed to do or access.',
  },
  {
    id: 'authorization_models',
    label: 'Authorization\nModels',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization',
    definition: 'Role-Based (RBAC) and Attribute-Based (ABAC) models for access control.',
  },
  {
    id: 'authorization_enforcement',
    label: 'Frontend vs\nBackend Enforcement',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization',
    definition: 'Access decisions must be enforced on the server; frontend checks alone are not secure.',
  },

  // Flow Order
  {
    id: 'auth_flow',
    label: 'Authentication\nBefore Authorization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Authentication is always the first step. Authorization follows and can occur repeatedly.',
  },
  {
    id: 'sessions_vs_tokens',
    label: 'Sessions vs\nTokens',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'auth_flow',
    definition: 'Session-based = server memory; token-based = stateless, stored on the client.',
  },

  // Storage options
  {
    id: 'token_storage',
    label: 'Token\nStorage Options',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Where authentication tokens are kept in the browser and how secure those options are.',
  },
  {
    id: 'http_only_cookies',
    label: 'HTTP-only\nCookies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_storage',
    definition: 'Secure and hidden from JavaScript, suitable for storing sensitive session tokens.',
  },
  {
    id: 'local_storage_risks',
    label: 'Local Storage\nRisks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_storage',
    definition: 'Convenient but accessible via JavaScript, exposing tokens to XSS vulnerabilities.',
  },

  // Protocols
  {
    id: 'auth_protocols',
    label: 'OAuth 2.0 and\nOpenID Connect',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Open standards for delegated authentication and access control. Used in Google and NextAuth.',
  },
  {
    id: 'protocol_flows',
    label: 'OAuth\nAuthorization Flows',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'auth_protocols',
    definition: 'Flows like Authorization Code, Implicit, and PKCE for securely exchanging tokens.',
  },

  // Anti-patterns
  {
    id: 'common_mistakes',
    label: 'Common\nAnti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Missteps in implementing authentication or authorization that create security risks.',
  },
  {
    id: 'storing_tokens_in_local_storage',
    label: 'Storing Tokens\nin Local Storage',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'common_mistakes',
    definition: 'Exposes tokens to JavaScript and XSS attacks. Not recommended for sensitive data.',
  },
  {
    id: 'frontend_only_authorization',
    label: 'Frontend-Only\nAuthorization Checks',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'common_mistakes',
    definition: 'Access control must be enforced on the backend, not just hidden via the UI.',
  },
]

export const links = [
  { source: 'authentication', target: 'root' },
  { source: 'authentication_methods', target: 'authentication' },
  { source: 'token_based_authentication', target: 'authentication' },

  { source: 'authorization', target: 'root' },
  { source: 'authorization_models', target: 'authorization' },
  { source: 'authorization_enforcement', target: 'authorization' },

  { source: 'auth_flow', target: 'root' },
  { source: 'sessions_vs_tokens', target: 'auth_flow' },

  { source: 'token_storage', target: 'root' },
  { source: 'http_only_cookies', target: 'token_storage' },
  { source: 'local_storage_risks', target: 'token_storage' },

  { source: 'auth_protocols', target: 'root' },
  { source: 'protocol_flows', target: 'auth_protocols' },

  { source: 'common_mistakes', target: 'root' },
  { source: 'storing_tokens_in_local_storage', target: 'common_mistakes' },
  { source: 'frontend_only_authorization', target: 'common_mistakes' },
]
