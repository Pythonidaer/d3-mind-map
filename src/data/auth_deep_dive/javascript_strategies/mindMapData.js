import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'JavaScript\nAuthentication Strategies',
    shape: 'roundRect',
    color: 'root',
    definition: 'Explores authentication methods and storage techniques used in full-stack JavaScript applications, including modern token-based systems and standard protocols.',
  },

  // Traditional Authentication
  {
    id: 'traditional_authentication',
    label: 'Traditional\nAuthentication',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Uses server-side sessions stored in memory or databases, with a session ID in the user’s cookie.',
  },
  {
    id: 'session_cookie_storage',
    label: 'Session Cookie\nStorage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'traditional_authentication',
    definition: 'Stores session ID in a secure HTTP cookie. The server uses this to retrieve session data.',
  },

  // Token-Based Authentication
  {
    id: 'token_authentication',
    label: 'Token-Based\nAuthentication',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Stateless authentication using tokens (usually JWTs) that contain user claims and can be verified without a server-side session.',
  },
  {
    id: 'jwt_structure',
    label: 'JWT Structure',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_authentication',
    definition: 'A JSON Web Token consists of a header, payload (with user claims), and a signature.',
  },
  {
    id: 'jwt_storage_locations',
    label: 'JWT\nStorage Options',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_authentication',
    definition: 'Can be stored in localStorage, sessionStorage, or secure HTTP-only cookies.',
  },

  // OAuth and OpenID Connect
  {
    id: 'oauth_oidc',
    label: 'OAuth 2.0 and\nOpenID Connect',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Protocols that delegate authentication (OIDC) and authorization (OAuth) between services.',
  },
  {
    id: 'oauth_flows',
    label: 'Authorization\nFlows',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'oauth_oidc',
    definition: 'Includes Authorization Code Flow, Implicit Flow, and PKCE — used in SPAs and server-side apps.',
  },

  // Storage and Security
  {
    id: 'token_storage_considerations',
    label: 'Storage\nConsiderations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Choosing how and where to store tokens affects both usability and security.',
  },
  {
    id: 'http_only_cookie',
    label: 'HTTP-only\nSecure Cookies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_storage_considerations',
    definition: 'Cannot be accessed by JavaScript. More secure against XSS. Ideal for production use.',
  },
  {
    id: 'local_storage_risks',
    label: 'Local Storage\nRisks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_storage_considerations',
    definition: 'Vulnerable to XSS attacks. Tokens may be exposed if malicious JavaScript is injected.',
  },

  // Anti-patterns
  {
    id: 'auth_strategy_antipatterns',
    label: 'Authentication\nAnti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Poor storage choices or insecure token handling can undermine authentication security.',
  },
  {
    id: 'store_token_in_js_accessible',
    label: 'Storing Tokens in\nJavaScript-Accessible Storage',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'auth_strategy_antipatterns',
    definition: 'Exposes tokens to JavaScript and makes them vulnerable to theft via XSS.',
  },
  {
    id: 'skipping_token_verification',
    label: 'Skipping Token\nVerification',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'auth_strategy_antipatterns',
    definition: 'Failing to validate the JWT signature and expiration allows forged or expired tokens to be accepted.',
  },
]

export const links = [
  { source: 'traditional_authentication', target: 'root' },
  { source: 'session_cookie_storage', target: 'traditional_authentication' },

  { source: 'token_authentication', target: 'root' },
  { source: 'jwt_structure', target: 'token_authentication' },
  { source: 'jwt_storage_locations', target: 'token_authentication' },

  { source: 'oauth_oidc', target: 'root' },
  { source: 'oauth_flows', target: 'oauth_oidc' },

  { source: 'token_storage_considerations', target: 'root' },
  { source: 'http_only_cookie', target: 'token_storage_considerations' },
  { source: 'local_storage_risks', target: 'token_storage_considerations' },

  { source: 'auth_strategy_antipatterns', target: 'root' },
  { source: 'store_token_in_js_accessible', target: 'auth_strategy_antipatterns' },
  { source: 'skipping_token_verification', target: 'auth_strategy_antipatterns' },
]
