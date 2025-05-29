import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Security &\nPrivacy',
    definition: 'Protecting user data, system integrity, and compliance with privacy laws through secure design and operations.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1 Positive Nodes
  {
    id: 'data_protection',
    label: 'Data\nProtection',
    definition: 'Securing personal, behavioral, and analytics data from leaks or unauthorized access.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'authentication',
    label: 'Authentication &\nAuthorization',
    definition: 'Controlling access via secure sign-in mechanisms and role-based permissions.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'compliance',
    label: 'Legal\nCompliance',
    definition: 'Following legal frameworks like GDPR, CCPA, or HIPAA when collecting and storing data.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'secure_architecture',
    label: 'Secure\nArchitecture',
    definition: 'Preventing injection, XSS, CSRF, and other attack vectors via secure coding practices.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Data Protection Grandchildren
  {
    id: 'encryption',
    label: 'Encryption at\nRest & Transit',
    definition: 'Using HTTPS and secure storage (e.g., AES) for all sensitive user data.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'anonymization',
    label: 'Anonymization &\nMinimization',
    definition: 'Stripping unnecessary data and avoiding personal identification unless essential.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Auth Grandchildren
  {
    id: 'oauth2',
    label: 'OAuth2/\nOpenID Connect',
    definition: 'Delegating authentication to trusted identity providers like Google or Auth0.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'role_permissions',
    label: 'Role-Based\nPermissions',
    definition: 'Only allowing users to see or edit what their role explicitly permits.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Compliance Grandchildren
  {
    id: 'gdpr',
    label: 'GDPR,\nCCPA',
    definition: 'User consent, data export, and deletion mechanisms are legally required in many regions.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'cookie_policy',
    label: 'Cookie Consent\n& Privacy Policy',
    definition: 'Display clear cookie banners and link to privacy policies outlining tracking usage.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Secure Architecture Grandchildren
  {
    id: 'csrf_protection',
    label: 'CSRF\nPrevention',
    definition: 'Include CSRF tokens in forms and API calls to prevent cross-site request forgery.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'input_sanitization',
    label: 'Input\nSanitization',
    definition: 'Clean user input to prevent XSS and SQL injection vulnerabilities.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Cons
  {
    id: 'security_cons',
    label: 'Cons',
    definition: 'Drawbacks and limitations when implementing security and privacy features.',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'dev_overhead',
    label: 'Increased\nDev Overhead',
    definition: 'Security features often require more time, complexity, and testing resources.',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'user_friction',
    label: 'User\nFriction',
    definition: 'Extra login steps, cookie consent prompts, and form barriers may reduce UX flow.',
    shape: 'rect',
    color: 'nodeNegative2',
  }
];

export const links = [
  { source: 'root', target: 'data_protection' },
  { source: 'root', target: 'authentication' },
  { source: 'root', target: 'compliance' },
  { source: 'root', target: 'secure_architecture' },
  { source: 'root', target: 'security_cons' },

  { source: 'data_protection', target: 'encryption' },
  { source: 'data_protection', target: 'anonymization' },

  { source: 'authentication', target: 'oauth2' },
  { source: 'authentication', target: 'role_permissions' },

  { source: 'compliance', target: 'gdpr' },
  { source: 'compliance', target: 'cookie_policy' },

  { source: 'secure_architecture', target: 'csrf_protection' },
  { source: 'secure_architecture', target: 'input_sanitization' },

  { source: 'security_cons', target: 'dev_overhead' },
  { source: 'security_cons', target: 'user_friction' },
];
