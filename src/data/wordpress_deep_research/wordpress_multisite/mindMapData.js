import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'WordPress\nMultisite',
    shape: 'roundRect',
    color: 'root',
    definition: 'A feature in WordPress that allows multiple sites to be created and managed from a single WordPress installation, sharing themes, plugins, and users.',
  },

  // Positive Level 1
  {
    id: 'use_cases',
    label: 'Use\nCases',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Common situations where Multisite is used: educational networks, enterprise portals, or agencies managing multiple sites.',
  },
  {
    id: 'central_management',
    label: 'Centralized\nManagement',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Manage themes, plugins, and users globally from one dashboard as a Super Admin.',
  },
  {
    id: 'shared_codebase',
    label: 'Shared\nCodebase',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'All subsites use the same WordPress core, themes, and plugins, simplifying maintenance.',
  },
  {
    id: 'domain_flexibility',
    label: 'Domain\nMapping',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Each subsite can have its own domain, subdomain, or subdirectory URL, with optional DNS and SSL mapping.',
  },

  // Positive Level 2
  {
    id: 'education_networks',
    label: 'University &\nSchool Sites',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'use_cases',
    definition: 'Departments, faculty, and clubs can each have their own site within one WordPress install.',
  },
  {
    id: 'enterprise_multibrand',
    label: 'Enterprise\nMultibranding',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'use_cases',
    definition: 'Corporations can manage regional, product, or internal portals through one admin dashboard.',
  },
  {
    id: 'agency_client_sites',
    label: 'Agencies w/\nClient Sites',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'use_cases',
    definition: 'Web agencies use Multisite to spin up and maintain multiple client websites quickly.',
  },
  {
    id: 'super_admin_roles',
    label: 'Super Admin\nPrivileges',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'central_management',
    definition: 'Grants control over network-wide settings, users, themes, and plugins — separate from regular site admins.',
  },
  {
    id: 'plugin_themes_control',
    label: 'Plugin/Theme\nGovernance',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'central_management',
    definition: 'Install and activate themes or plugins across all sites or on a per-site basis.',
  },
  {
    id: 'shared_resources_efficiency',
    label: 'Resource\nEfficiency',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'shared_codebase',
    definition: 'One codebase means easier upgrades, less duplication, and lower hosting complexity.',
  },
  {
    id: 'subdomain_vs_directory',
    label: 'Subdomain vs.\nSubdirectory',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'domain_flexibility',
    definition: 'Sites can appear as subdomains (site.example.com) or subdirectories (example.com/site).',
  },
  {
    id: 'domain_mapping_ssl',
    label: 'DNS &\nSSL Mapping',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'domain_flexibility',
    definition: 'Map custom domains with proper DNS settings and SSL configuration per site.',
  },

  // Negative Level 1
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Multisite introduces complexity, shared risks, plugin limits, and hosting constraints.',
  },

  // Negative Level 2
  {
    id: 'global_failure_risk',
    label: 'Shared Point\nof Failure',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'A crash or hack on the core WordPress install affects every subsite in the network.',
  },
  {
    id: 'plugin_incompatibility',
    label: 'Plugin\nLimitations',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Not all plugins are compatible with Multisite or support per-site activation.',
  },
  {
    id: 'complex_migrations',
    label: 'Harder to\nMigrate Out',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Extracting individual subsites from a network requires advanced migration and DB work.',
  },
  {
    id: 'limited_hosting_support',
    label: 'Hosting\nRestrictions',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Many budget/shared hosts do not support Multisite or limit its features.',
  },

  // Negative Level 3
  {
    id: 'ssl_per_site_trouble',
    label: 'SSL per-site\nComplications',
    shape: 'diamond',
    color: 'nodeNegative3',
    parent: 'domain_mapping_ssl',
    definition: 'Each mapped domain needs its own certificate; auto-renewals across multiple subsites can be tricky.',
  },
  {
    id: 'user_permission_conflicts',
    label: 'User Role\nConfusion',
    shape: 'diamond',
    color: 'nodeNegative3',
    parent: 'plugin_incompatibility',
    definition: 'Some plugins fail to handle multisite roles properly, causing inconsistent behavior across sites.',
  },
]

export const links = [
  { source: 'root', target: 'use_cases' },
  { source: 'root', target: 'central_management' },
  { source: 'root', target: 'shared_codebase' },
  { source: 'root', target: 'domain_flexibility' },
  { source: 'root', target: 'cons' },

  { source: 'use_cases', target: 'education_networks' },
  { source: 'use_cases', target: 'enterprise_multibrand' },
  { source: 'use_cases', target: 'agency_client_sites' },

  { source: 'central_management', target: 'super_admin_roles' },
  { source: 'central_management', target: 'plugin_themes_control' },

  { source: 'shared_codebase', target: 'shared_resources_efficiency' },

  { source: 'domain_flexibility', target: 'subdomain_vs_directory' },
  { source: 'domain_flexibility', target: 'domain_mapping_ssl' },
  { source: 'domain_mapping_ssl', target: 'ssl_per_site_trouble' },

  { source: 'cons', target: 'global_failure_risk' },
  { source: 'cons', target: 'plugin_incompatibility' },
  { source: 'cons', target: 'complex_migrations' },
  { source: 'cons', target: 'limited_hosting_support' },

  { source: 'plugin_incompatibility', target: 'user_permission_conflicts' },
]
