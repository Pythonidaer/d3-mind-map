import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'User Roles &\nPermissions in WordPress',
    shape: 'roundRect',
    color: 'root',
    definition: 'The WordPress permissions system assigns capabilities to roles to control what users can access and modify on the site.',
  },

  // Positive Node 1 – Default Roles
  {
    id: 'default_roles',
    label: 'Default Roles',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'WordPress includes six default user roles, each with a specific set of capabilities governing access and actions.',
  },
  {
    id: 'administrator',
    label: 'Administrator',
    parent: 'default_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Full control over the site. Can manage plugins, themes, users, and settings.',
  },
  {
    id: 'editor',
    label: 'Editor',
    parent: 'default_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Can publish, edit, and delete any posts and pages. Manages content but not plugins or settings.',
  },
  {
    id: 'author',
    label: 'Author',
    parent: 'default_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Can write, edit, and publish their own posts only.',
  },
  {
    id: 'contributor',
    label: 'Contributor',
    parent: 'default_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Can write and edit their own posts but cannot publish.',
  },
  {
    id: 'subscriber',
    label: 'Subscriber',
    parent: 'default_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Can manage their own profile. Commonly used for membership or comment access.',
  },
  {
    id: 'super_admin',
    label: 'Super Admin\n(Multisite)',
    parent: 'default_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Has full control over a WordPress Multisite network, including site creation and plugin/theme activation.',
  },

  // Positive Node 2 – Custom Roles
  {
    id: 'custom_roles',
    label: 'Custom Roles &\nCapabilities',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Custom roles allow developers to tailor permissions for specific workflows or use cases.',
  },
  {
    id: 'custom_capabilities',
    label: 'Custom Capabilities',
    parent: 'custom_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Fine-grained permissions like `edit_posts`, `publish_pages`, or `manage_options` can be added or removed.',
  },
  {
    id: 'role_editor_plugins',
    label: 'Role Editor Plugins',
    parent: 'custom_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Plugins like User Role Editor and Members allow site owners to create and manage custom roles via GUI.',
  },

  // Positive Node 3 – Advanced Use Cases
  {
    id: 'advanced_roles',
    label: 'Advanced Use Cases',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Role customization supports workflows like editorial review, course access control, and gated content systems.',
  },
  {
    id: 'membership_sites',
    label: 'Membership &\nSubscription Sites',
    parent: 'advanced_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Restrict content based on membership tiers using plugins like MemberPress or Restrict Content Pro.',
  },
  {
    id: 'ecommerce_roles',
    label: 'E-Commerce Roles',
    parent: 'advanced_roles',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'WooCommerce introduces roles like Shop Manager, enabling staff to manage orders and products without admin rights.',
  },

  // Negative Node – Anti-Patterns
  {
    id: 'nodeNegative1',
    label: 'Anti-Patterns',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Misuse of roles and capabilities can result in security flaws or broken workflows.',
  },
  {
    id: 'role_bloat',
    label: 'Excessive Roles',
    parent: 'nodeNegative1',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Creating too many roles can confuse administrators and complicate permission logic.',
  },
  {
    id: 'improper_grants',
    label: 'Over-assigning\nCapabilities',
    parent: 'nodeNegative1',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Giving non-admins permissions like `edit_users` or `install_plugins` can open up severe security risks.',
  },
  {
    id: 'plugin_conflicts',
    label: 'Role Plugin Conflicts',
    parent: 'nodeNegative1',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Using multiple role-editing plugins can result in inconsistent or overwritten role definitions.',
  },
]

export const links = [
  { source: 'root', target: 'default_roles' },
  { source: 'root', target: 'custom_roles' },
  { source: 'root', target: 'advanced_roles' },
  { source: 'root', target: 'nodeNegative1' },

  { source: 'default_roles', target: 'administrator' },
  { source: 'default_roles', target: 'editor' },
  { source: 'default_roles', target: 'author' },
  { source: 'default_roles', target: 'contributor' },
  { source: 'default_roles', target: 'subscriber' },
  { source: 'default_roles', target: 'super_admin' },

  { source: 'custom_roles', target: 'custom_capabilities' },
  { source: 'custom_roles', target: 'role_editor_plugins' },

  { source: 'advanced_roles', target: 'membership_sites' },
  { source: 'advanced_roles', target: 'ecommerce_roles' },

  { source: 'nodeNegative1', target: 'role_bloat' },
  { source: 'nodeNegative1', target: 'improper_grants' },
  { source: 'nodeNegative1', target: 'plugin_conflicts' },
]
