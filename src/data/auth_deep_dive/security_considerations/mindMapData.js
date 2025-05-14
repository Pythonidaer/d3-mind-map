import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Security Considerations\nfor Authentication and \nAuthorization',
    shape: 'roundRect',
    color: 'root',
    definition: 'Risks, attack vectors, and common vulnerabilities associated with improperly implemented authentication and authorization systems.',
  },

  // Credential and Identity Risks
  {
    id: 'credential_risks',
    label: 'Credential and\nIdentity Risks',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Dangers related to weak, reused, or stolen user credentials.',
  },
  {
    id: 'password_reuse',
    label: 'Password\nReuse and Breaches',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'credential_risks',
    definition: 'Users reusing credentials across sites allows credential stuffing attacks.',
  },
  {
    id: 'insecure_password_storage',
    label: 'Insecure Password\nStorage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'credential_risks',
    definition: 'Plaintext or weakly hashed passwords can be extracted in a database breach.',
  },

  // Token and Session Attacks
  {
    id: 'token_attacks',
    label: 'Token and\nSession Attacks',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Vulnerabilities related to authentication tokens, cookies, and session hijacking.',
  },
  {
    id: 'xss_token_theft',
    label: 'Token Theft via\nXSS',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_attacks',
    definition: 'Exposed tokens in JavaScript-accessible storage can be stolen by malicious scripts.',
  },
  {
    id: 'csrf_session_exploitation',
    label: 'Session Hijack via\nCSRF',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'token_attacks',
    definition: 'If cookies lack SameSite or CSRF protection, attackers can perform unwanted actions.',
  },

  // Authorization Bypass
  {
    id: 'authorization_bypass',
    label: 'Authorization\nBypass Risks',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Cases where permissions are enforced in the UI but not on the backend.',
  },
  {
    id: 'frontend_only_checks',
    label: 'Frontend-Only\nAccess Control',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization_bypass',
    definition: 'Hiding UI elements without securing backend logic allows malicious requests.',
  },
  {
    id: 'improper_role_validation',
    label: 'Improper Role or\nPermission Checks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization_bypass',
    definition: 'Forgetting to check roles or trusting unvalidated session data exposes sensitive endpoints.',
  },

  // Social Engineering
  {
    id: 'social_engineering',
    label: 'Social\nEngineering',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tricking users or staff into providing sensitive access or credentials.',
  },
  {
    id: 'phishing_attacks',
    label: 'Phishing and\nFake Login Screens',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'social_engineering',
    definition: 'Fake interfaces steal real user credentials — especially for common providers like Google or Microsoft.',
  },

  // Misconfigurations
  {
    id: 'misconfigurations',
    label: 'Security\nMisconfigurations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Insecure defaults or incorrect deployment settings that weaken security.',
  },
  {
    id: 'no_https',
    label: 'Missing HTTPS\nor SSL Misuse',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'misconfigurations',
    definition: 'Sending tokens or credentials over unencrypted HTTP allows interception.',
  },
  {
    id: 'token_not_validated',
    label: 'Not Validating\nTokens or Sessions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'misconfigurations',
    definition: 'Trusting tokens without verifying their signature, expiration, or audience.',
  },
]

export const links = [
  { source: 'credential_risks', target: 'root' },
  { source: 'password_reuse', target: 'credential_risks' },
  { source: 'insecure_password_storage', target: 'credential_risks' },

  { source: 'token_attacks', target: 'root' },
  { source: 'xss_token_theft', target: 'token_attacks' },
  { source: 'csrf_session_exploitation', target: 'token_attacks' },

  { source: 'authorization_bypass', target: 'root' },
  { source: 'frontend_only_checks', target: 'authorization_bypass' },
  { source: 'improper_role_validation', target: 'authorization_bypass' },

  { source: 'social_engineering', target: 'root' },
  { source: 'phishing_attacks', target: 'social_engineering' },

  { source: 'misconfigurations', target: 'root' },
  { source: 'no_https', target: 'misconfigurations' },
  { source: 'token_not_validated', target: 'misconfigurations' },
]
