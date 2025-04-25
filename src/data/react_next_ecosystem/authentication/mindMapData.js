import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Authentication',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Techniques and libraries for verifying user identities and securing application access.',
  },
  {
    id: 'nextauth_js',
    label: 'NextAuth.js\n(Auth.js)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Full-featured authentication library for Next.js, supporting OAuth, email/password, JWTs, and serverless compatibility.',
  },
  {
    id: 'oauth_providers',
    label: 'OAuth\nProviders',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Support for third-party identity providers like Google, GitHub, and Facebook for seamless sign-in experiences.',
  },
  {
    id: 'credentials_auth',
    label: 'Credentials\nAuthentication',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Custom authentication using email/password or other credential-based login methods.',
  },
  {
    id: 'jwt_sessions',
    label: 'JWT\nSessions',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Session management using JSON Web Tokens (JWTs) for stateless, scalable authentication.',
  },
  {
    id: 'csrf_protection',
    label: 'CSRF\nProtection',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Safeguards against Cross-Site Request Forgery attacks, often handled automatically by libraries like NextAuth.js.',
  },
  {
    id: 'server_client_session_handling',
    label: 'Server/Client\nSession Handling',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Managing session data on both server and client sides for consistent user authentication experience across pages.',
  },
  {
    id: 'authentication_pitfalls',
    label: 'Authentication\nPitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common mistakes like leaking sensitive tokens, poor session handling, or insufficient redirect handling after login/logout.',
  },
]

export const links = [
  { source: 'root', target: 'nextauth_js' },
  { source: 'root', target: 'oauth_providers' },
  { source: 'root', target: 'credentials_auth' },
  { source: 'root', target: 'jwt_sessions' },
  { source: 'root', target: 'csrf_protection' },
  { source: 'root', target: 'server_client_session_handling' },
  { source: 'root', target: 'authentication_pitfalls' },
]
