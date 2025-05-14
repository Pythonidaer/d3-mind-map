import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Best Practices\nfor Authentication and\n Authorization',
    shape: 'roundRect',
    color: 'root',
    definition: 'A concise set of battle-tested principles for building secure, reliable, and scalable authentication and authorization systems.',
  },

  // Authentication Practices
  {
    id: 'authentication_best_practices',
    label: 'Authentication\nPractices',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How to design and implement strong user identity verification flows.',
  },
  {
    id: 'password_hashing',
    label: 'Use Strong\nPassword Hashing',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication_best_practices',
    definition: 'Hash with bcrypt, Argon2, or PBKDF2. Never store passwords in plain text.',
  },
  {
    id: 'multi_factor',
    label: 'Offer Multi-Factor\nAuthentication',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication_best_practices',
    definition: 'Require a second verification factor (e.g., OTP, TOTP, device prompt) for added protection.',
  },

  // Authorization Practices
  {
    id: 'authorization_best_practices',
    label: 'Authorization\nPractices',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Principles for safely granting access to actions, resources, or APIs.',
  },
  {
    id: 'least_privilege',
    label: 'Principle of\nLeast Privilege',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization_best_practices',
    definition: 'Users should only have the minimum access needed to perform their role.',
  },
  {
    id: 'backend_checks',
    label: 'Always Check\nPermissions on Backend',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization_best_practices',
    definition: 'Frontend UI visibility is not enough. Secure actions require backend enforcement.',
  },

  // Token and Session Management
  {
    id: 'token_best_practices',
    label: 'Token and\nSession Practices',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Secure management of tokens, sessions, and login persistence.',
  },
  {
    id: 'http_only_secure',
    label: 'Use HTTP-only\nSecure Cookies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_best_practices',
    definition: 'Protect tokens from JavaScript access. Use HTTPS with SameSite cookies.',
  },
  {
    id: 'rotate_tokens',
    label: 'Expire and Rotate\nTokens Periodically',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_best_practices',
    definition: 'Limit token lifespan and allow secure refresh to prevent hijacking.',
  },

  // Auditing and Maintenance
  {
    id: 'audit_maintenance',
    label: 'Audit and\nMaintenance',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Keep systems secure long-term by reviewing and updating frequently.',
  },
  {
    id: 'log_auth_events',
    label: 'Log Auth Events\nand Permission Changes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'audit_maintenance',
    definition: 'Track access changes, login attempts, and security-sensitive actions.',
  },
  {
    id: 'update_dependencies',
    label: 'Update Auth\nDependencies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'audit_maintenance',
    definition: 'Apply patches and review changelogs for identity-related libraries.',
  },
]

export const links = [
  { source: 'authentication_best_practices', target: 'root' },
  { source: 'password_hashing', target: 'authentication_best_practices' },
  { source: 'multi_factor', target: 'authentication_best_practices' },

  { source: 'authorization_best_practices', target: 'root' },
  { source: 'least_privilege', target: 'authorization_best_practices' },
  { source: 'backend_checks', target: 'authorization_best_practices' },

  { source: 'token_best_practices', target: 'root' },
  { source: 'http_only_secure', target: 'token_best_practices' },
  { source: 'rotate_tokens', target: 'token_best_practices' },

  { source: 'audit_maintenance', target: 'root' },
  { source: 'log_auth_events', target: 'audit_maintenance' },
  { source: 'update_dependencies', target: 'audit_maintenance' },
]
