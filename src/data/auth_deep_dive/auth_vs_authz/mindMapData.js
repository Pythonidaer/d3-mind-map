import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Authentication and\nAuthorization',
    shape: 'roundRect',
    color: 'root',
    definition: 'Understanding the differences, sequence, technologies, and responsibilities involved in authentication and authorization within web applications.',
  },

  // Authentication
  {
    id: 'authentication',
    label: 'Authentication',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Verifies the identity of a user or system by checking credentials or proof of identity.',
  },
  {
    id: 'authentication_examples',
    label: 'Common Methods\nof Authentication',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication',
    definition: 'Username/password, OTP, biometrics, magic links, or OAuth via Google/GitHub.',
  },
  {
    id: 'authentication_tools',
    label: 'Authentication\nTechnologies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authentication',
    definition: 'Tools like JSON Web Tokens (JWT), OAuth 2.0, OpenID Connect, and session cookies.',
  },

  // Authorization
  {
    id: 'authorization',
    label: 'Authorization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Determines what actions a verified user can perform or what resources they can access.',
  },
  {
    id: 'authorization_examples',
    label: 'Common Patterns\nof Authorization',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization',
    definition: 'Admin can edit, user can view, guest has limited access.',
  },
  {
    id: 'authorization_strategies',
    label: 'Authorization\nStrategies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization',
    definition: 'Includes Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC).',
  },

  // Working Together
  {
    id: 'sequence_relationship',
    label: 'How They Work\nTogether',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Authentication must always happen first. Authorization decisions depend on a known identity.',
  },
  {
    id: 'timing_difference',
    label: 'Timing and\nRepetition',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'sequence_relationship',
    definition: 'Authentication usually occurs once per session. Authorization can happen repeatedly as needed.',
  },

  // Conceptual Comparison
  {
    id: 'key_differences',
    label: 'Key Differences',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Contrasts the purpose, outcome, data involved, and lifecycle of authentication and authorization.',
  },
  {
    id: 'output_difference',
    label: 'Output:\nIdentity vs Permissions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'key_differences',
    definition: 'Authentication gives you identity (e.g., user ID). Authorization gives you permissions or scopes.',
  },

  // Misunderstandings
  {
    id: 'misconceptions',
    label: 'Common\nMisconceptions',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Mistaking or misusing authentication and authorization can create serious security flaws.',
  },
  {
    id: 'authz_without_auth',
    label: 'Authorization Without\nAuthentication',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'misconceptions',
    definition: 'Allowing access without verifying the user’s identity is a major security hole.',
  },
  {
    id: 'ui_only_checks',
    label: 'UI-Only Access\nControl',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'misconceptions',
    definition: 'Enforcing authorization only in the frontend leaves sensitive routes unprotected.',
  },
]

export const links = [
  { source: 'authentication', target: 'root' },
  { source: 'authentication_examples', target: 'authentication' },
  { source: 'authentication_tools', target: 'authentication' },

  { source: 'authorization', target: 'root' },
  { source: 'authorization_examples', target: 'authorization' },
  { source: 'authorization_strategies', target: 'authorization' },

  { source: 'sequence_relationship', target: 'root' },
  { source: 'timing_difference', target: 'sequence_relationship' },

  { source: 'key_differences', target: 'root' },
  { source: 'output_difference', target: 'key_differences' },

  { source: 'misconceptions', target: 'root' },
  { source: 'authz_without_auth', target: 'misconceptions' },
  { source: 'ui_only_checks', target: 'misconceptions' },
]
