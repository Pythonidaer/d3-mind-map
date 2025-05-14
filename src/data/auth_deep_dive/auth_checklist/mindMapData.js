import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Security Best \n Practices in Authentication\n and Authorization',
    shape: 'roundRect',
    color: 'root',
    definition: 'Essential security techniques and precautions to safeguard authentication and authorization systems in web applications.',
  },

  // Password Handling
  {
    id: 'password_handling',
    label: 'Secure Password\nHandling',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How to safely collect, store, and validate user passwords.',
  },
  {
    id: 'hash_and_salt',
    label: 'Hashing and\nSalting',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'password_handling',
    definition: 'Use bcrypt or Argon2 with unique salts to store passwords securely.',
  },
  {
    id: 'never_store_plaintext',
    label: 'Never Store\nPlaintext Passwords',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'password_handling',
    definition: 'Storing raw passwords is a severe vulnerability. Always hash before saving.',
  },

  // Token Management
  {
    id: 'token_management',
    label: 'Token\nManagement',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How to securely issue, verify, and store tokens for authentication.',
  },
  {
    id: 'http_only_cookies',
    label: 'Use HTTP-Only\nCookies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_management',
    definition: 'Prevents JavaScript access to tokens, reducing XSS exposure.',
  },
  {
    id: 'verify_tokens_backend',
    label: 'Verify Tokens\non the Backend',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_management',
    definition: 'Always validate token signature, audience, and expiration server-side.',
  },

  // Web Vulnerability Prevention
  {
    id: 'web_threats',
    label: 'Prevent Web\nVulnerabilities',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Defend against common attacks like XSS, CSRF, and session hijacking.',
  },
  {
    id: 'csrf_protection',
    label: 'CSRF\nMitigation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'web_threats',
    definition: 'Use CSRF tokens or SameSite cookies for state-changing requests.',
  },
  {
    id: 'xss_sanitization',
    label: 'XSS Input\nSanitization',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'web_threats',
    definition: 'Escape and sanitize user input to prevent script injection.',
  },

  // HTTPS Everywhere
  {
    id: 'secure_transport',
    label: 'Secure\nCommunication',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'All communication should be encrypted via HTTPS to prevent interception.',
  },
  {
    id: 'ssl_certificates',
    label: 'SSL/TLS\nCertificates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'secure_transport',
    definition: 'Use modern TLS standards and renew certificates regularly.',
  },

  // Auditing and Maintenance
  {
    id: 'maintenance',
    label: 'Auditing and\nOngoing Maintenance',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Ensure long-term security through updates, testing, and review.',
  },
  {
    id: 'dependency_updates',
    label: 'Update Auth\nLibraries',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'maintenance',
    definition: 'Keep authentication packages (e.g., NextAuth, Passport) updated to receive patches.',
  },
  {
    id: 'security_audits',
    label: 'Perform\nSecurity Audits',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'maintenance',
    definition: 'Review code, routes, and access patterns for vulnerabilities regularly.',
  },
]

export const links = [
  { source: 'password_handling', target: 'root' },
  { source: 'hash_and_salt', target: 'password_handling' },
  { source: 'never_store_plaintext', target: 'password_handling' },

  { source: 'token_management', target: 'root' },
  { source: 'http_only_cookies', target: 'token_management' },
  { source: 'verify_tokens_backend', target: 'token_management' },

  { source: 'web_threats', target: 'root' },
  { source: 'csrf_protection', target: 'web_threats' },
  { source: 'xss_sanitization', target: 'web_threats' },

  { source: 'secure_transport', target: 'root' },
  { source: 'ssl_certificates', target: 'secure_transport' },

  { source: 'maintenance', target: 'root' },
  { source: 'dependency_updates', target: 'maintenance' },
  { source: 'security_audits', target: 'maintenance' },
]
