import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Feature Integration\nwith Authentication\nand Authorization',
    shape: 'roundRect',
    color: 'root',
    definition: 'How authentication and authorization connect to core application features like billing, user profiles, emails, and analytics.',
  },

  // User Profile Management
  {
    id: 'user_profiles',
    label: 'User Profile\nManagement',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Authentication links each session to a unique user profile and related application data.',
  },
  {
    id: 'identity_linking',
    label: 'Identity-to-Data\nLinking',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'user_profiles',
    definition: 'Each user ID should securely map to all app content and relationships (e.g., posts, settings, messages).',
  },
  {
    id: 'role_driven_ui',
    label: 'Role-Driven\nUI Adjustments',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'user_profiles',
    definition: 'Authorization controls visibility and access to features like dashboards, modals, and admin tools.',
  },

  // Email Integration
  {
    id: 'email_integration',
    label: 'Email\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Email is essential for account recovery, verification, and security alerts.',
  },
  {
    id: 'password_resets',
    label: 'Password Reset\nFlows',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'email_integration',
    definition: 'Secure reset links must be token-based, time-limited, and tied to the user’s identity.',
  },
  {
    id: 'account_verification',
    label: 'Account\nVerification',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'email_integration',
    definition: 'Email links confirm ownership before activating new accounts or changing credentials.',
  },

  // Payments and Subscriptions
  {
    id: 'payments',
    label: 'Payments and\nSubscriptions',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Payment systems must only allow authenticated, authorized users to purchase or manage plans.',
  },
  {
    id: 'billing_permissions',
    label: 'Billing Access\nControl',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'payments',
    definition: 'Only verified users with the correct roles should be able to initiate or cancel subscriptions.',
  },
  {
    id: 'payment_user_mapping',
    label: 'Map Payments to\nUser Identity',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'payments',
    definition: 'Transactions must be tied to secure internal user IDs to track billing history and entitlements.',
  },

  // Analytics and Logging
  {
    id: 'analytics',
    label: 'Analytics and\nAudit Logging',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Auth-aware tracking supports compliance, user behavior analytics, and fraud detection.',
  },
  {
    id: 'user_tracking',
    label: 'Session/User-Based\nAnalytics',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'analytics',
    definition: 'Metrics should be linked to anonymized or scoped user sessions.',
  },
  {
    id: 'audit_logs',
    label: 'Audit Trails for\nSensitive Actions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'analytics',
    definition: 'Auth systems should log key changes (e.g., permission changes, login events, failed attempts).',
  },
]

export const links = [
  { source: 'user_profiles', target: 'root' },
  { source: 'identity_linking', target: 'user_profiles' },
  { source: 'role_driven_ui', target: 'user_profiles' },

  { source: 'email_integration', target: 'root' },
  { source: 'password_resets', target: 'email_integration' },
  { source: 'account_verification', target: 'email_integration' },

  { source: 'payments', target: 'root' },
  { source: 'billing_permissions', target: 'payments' },
  { source: 'payment_user_mapping', target: 'payments' },

  { source: 'analytics', target: 'root' },
  { source: 'user_tracking', target: 'analytics' },
  { source: 'audit_logs', target: 'analytics' },
]
