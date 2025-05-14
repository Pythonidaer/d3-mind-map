import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Authorization in\nJavaScript Applications',
    shape: 'roundRect',
    color: 'root',
    definition: 'Strategies for controlling access to resources and actions in frontend and backend JavaScript applications.',
  },

  // Core Models
  {
    id: 'authorization_models',
    label: 'Authorization Models',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Common strategies for structuring permissions in applications.',
  },
  {
    id: 'rbac',
    label: 'Role-Based\nAccess Control (RBAC)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization_models',
    definition: 'Users are assigned roles (e.g., admin, editor), and each role has a fixed set of permissions.',
  },
  {
    id: 'abac',
    label: 'Attribute-Based\nAccess Control (ABAC)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'authorization_models',
    definition: 'Permissions are granted based on user, resource, and environmental attributes.',
  },

  // Frontend Role Awareness
  {
    id: 'frontend_authorization',
    label: 'Frontend\nAuthorization\nAwareness',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Client-side awareness of roles for shaping the UI, but not enforcing access.',
  },
  {
    id: 'conditional_ui',
    label: 'Conditional\nUI Rendering',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'frontend_authorization',
    definition: 'Hide or show features based on user roles to reduce confusion and misuse.',
  },
  {
    id: 'session_roles',
    label: 'Roles in\nSession Data',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'frontend_authorization',
    definition: 'User roles are retrieved from tokens or session data and used to inform interface logic.',
  },

  // Backend Enforcement
  {
    id: 'backend_authorization',
    label: 'Backend\nAuthorization\nEnforcement',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'All real authorization must be enforced server-side to protect sensitive operations.',
  },
  {
    id: 'middleware_checks',
    label: 'Middleware\nRole Checks',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'backend_authorization',
    definition: 'Custom functions verify user roles before allowing access to API routes.',
  },
  {
    id: 'permission_mapping',
    label: 'Permission\nMapping',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'backend_authorization',
    definition: 'Central mapping of roles to permissions keeps logic DRY and maintainable.',
  },

  // Anti-Patterns
  {
    id: 'authorization_antipatterns',
    label: 'Authorization\nAnti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common mistakes that leave access controls weak or unenforceable.',
  },
  {
    id: 'frontend_only_checks',
    label: 'Frontend-Only\nAccess Control',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'authorization_antipatterns',
    definition: 'Hiding buttons in the UI without enforcing permissions server-side is not secure.',
  },
  {
    id: 'hardcoded_roles',
    label: 'Hardcoded Role\nLogic in UI or Routes',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'authorization_antipatterns',
    definition: 'Scattering access logic across code makes it hard to maintain or audit.',
  },
]

export const links = [
  { source: 'authorization_models', target: 'root' },
  { source: 'rbac', target: 'authorization_models' },
  { source: 'abac', target: 'authorization_models' },

  { source: 'frontend_authorization', target: 'root' },
  { source: 'conditional_ui', target: 'frontend_authorization' },
  { source: 'session_roles', target: 'frontend_authorization' },

  { source: 'backend_authorization', target: 'root' },
  { source: 'middleware_checks', target: 'backend_authorization' },
  { source: 'permission_mapping', target: 'backend_authorization' },

  { source: 'authorization_antipatterns', target: 'root' },
  { source: 'frontend_only_checks', target: 'authorization_antipatterns' },
  { source: 'hardcoded_roles', target: 'authorization_antipatterns' },
]
