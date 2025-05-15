import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Plugins &\nExtensibility',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Covers the structure, types, real examples, and performance/security considerations of plugins in WordPress, along with extensibility best practices.',
  },

  // LEVEL 1 — Plugin Architecture
  {
    id: 'architecture',
    label: 'Plugin\nArchitecture',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'WordPress plugins are modular units that hook into WordPress core using action and filter hooks to add or change functionality.',
  },
  {
    id: 'hooks',
    label: 'Hooks:\nActions & Filters',
    parent: 'architecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Plugins use `add_action()` and `add_filter()` to attach custom functions to predefined trigger points in WordPress.',
  },
  {
    id: 'file_structure',
    label: 'File & Folder\nStructure',
    parent: 'architecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Plugins contain a header in the main PHP file, and often include `/includes`, `/admin`, and `/public` directories to separate logic.',
  },
  {
    id: 'activation_hooks',
    label: 'Activation/\nDeactivation Hooks',
    parent: 'architecture',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Plugins can define setup or cleanup routines using `register_activation_hook()` and `register_deactivation_hook()`.',
  },

  // LEVEL 1 — Plugin Categories
  {
    id: 'plugin_categories',
    label: 'Plugin\nTypes',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Plugins are grouped by function: page builders, SEO, security, eCommerce, forms, membership, LMS, performance, backups, etc.',
  },

  // LEVEL 2 — Page Builders
  {
    id: 'page_builders',
    label: 'Page\nBuilders',
    parent: 'plugin_categories',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Visual drag-and-drop tools that override or extend the block editor for easier layout control.',
  },
  {
    id: 'elementor',
    label: 'Elementor',
    parent: 'page_builders',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Highly popular page builder plugin with frontend editing and Pro version for theming and eCommerce.',
  },
  {
    id: 'divi',
    label: 'Divi\nBuilder',
    parent: 'page_builders',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Comes with the Divi theme, features visual editor, theme builder, and extensive pre-built layouts.',
  },
  {
    id: 'beaver',
    label: 'Beaver\nBuilder',
    parent: 'page_builders',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Reliable and developer-friendly visual editor plugin with strong support and performance.',
  },

  // LEVEL 2 — SEO
  {
    id: 'seo',
    label: 'SEO Plugins',
    parent: 'plugin_categories',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Help optimize website content and structure for better search engine ranking and visibility.',
  },
  {
    id: 'yoast',
    label: 'Yoast SEO',
    parent: 'seo',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Provides on-page SEO scoring, schema markup, XML sitemaps, and social previews.',
  },
  {
    id: 'rank_math',
    label: 'Rank Math',
    parent: 'seo',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Modern SEO plugin with deep schema support, modular control, and Google integration.',
  },

  // LEVEL 2 — Security
  {
    id: 'security_plugins',
    label: 'Security\nPlugins',
    parent: 'plugin_categories',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Protect your site from malware, brute-force, and vulnerabilities.',
  },
  {
    id: 'wordfence',
    label: 'Wordfence',
    parent: 'security_plugins',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Includes firewall, malware scanner, and login protection.',
  },
  {
    id: 'sucuri',
    label: 'Sucuri',
    parent: 'security_plugins',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Cloud-based security platform for malware scanning, firewalls, and CDN integration.',
  },

  // LEVEL 2 — E-Commerce
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    parent: 'plugin_categories',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Extend WordPress with store functionality, payment gateways, and product management.',
  },
  {
    id: 'woocommerce',
    label: 'WooCommerce',
    parent: 'ecommerce',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Turns WordPress into a full-featured online store with cart, checkout, products, and payments.',
  },

  // LEVEL 2 — LMS / Education
  {
    id: 'lms',
    label: 'LMS Plugins',
    parent: 'plugin_categories',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Allow you to sell courses, manage lessons, quizzes, and user progress.',
  },
  {
    id: 'learndash',
    label: 'LearnDash',
    parent: 'lms',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Premium LMS plugin for building course platforms with quizzes, lessons, and payment tiers.',
  },
  {
    id: 'lifter',
    label: 'LifterLMS',
    parent: 'lms',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Modular LMS for creating memberships, courses, certificates, and coaching portals.',
  },

  // LEVEL 2 — Developer Plugins
  {
    id: 'dev_plugins',
    label: 'Developer\nUtilities',
    parent: 'plugin_categories',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Extend WordPress with tools for custom fields, post types, debugging, and development workflow.',
  },
  {
    id: 'acf',
    label: 'ACF',
    parent: 'dev_plugins',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Advanced Custom Fields lets you build custom UIs and structured data models for WordPress posts.',
  },
  {
    id: 'cptui',
    label: 'CPT UI',
    parent: 'dev_plugins',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Easily create and manage custom post types and taxonomies via UI.',
  },
  {
    id: 'query_monitor',
    label: 'Query Monitor',
    parent: 'dev_plugins',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Debug database queries, hooks, PHP errors, HTTP requests, and more.',
  },

  // LEVEL 2 — Backup & Migration
  {
    id: 'backup_plugins',
    label: 'Backup &\nMigration',
    parent: 'plugin_categories',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Ensure data safety and easy migration between environments.',
  },
  {
    id: 'updraftplus',
    label: 'UpdraftPlus',
    parent: 'backup_plugins',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Backup plugin with remote storage, restoration, and scheduling.',
  },
  {
    id: 'duplicator',
    label: 'Duplicator',
    parent: 'backup_plugins',
    shape: 'diamond',
    color: 'nodePositive3',
    definition: 'Migrate or clone sites with easy-to-export package bundles.',
  },

  // LEVEL 1 — Anti-patterns
  {
    id: 'plugin_antipatterns',
    label: 'Anti-\nPatterns',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Mistakes in plugin selection, usage, or extensibility patterns that hurt performance or maintainability.',
  },
  {
    id: 'plugin_sprawl',
    label: 'Plugin\nSprawl',
    parent: 'plugin_antipatterns',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Using too many overlapping plugins without understanding what they load.',
  },
  {
    id: 'outdated_plugins',
    label: 'Outdated or\nAbandoned Plugins',
    parent: 'plugin_antipatterns',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Plugins that haven’t been updated pose security risks and break compatibility.',
  },
  {
    id: 'custom_code_in_plugin',
    label: 'Poor\nSeparation of Concerns',
    parent: 'plugin_antipatterns',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Mixing business logic in themes or improperly scoped plugin code can create technical debt.',
  },
]

export const links = [
  { source: 'root', target: 'architecture' },
  { source: 'architecture', target: 'hooks' },
  { source: 'architecture', target: 'file_structure' },
  { source: 'architecture', target: 'activation_hooks' },

  { source: 'root', target: 'plugin_categories' },

  { source: 'plugin_categories', target: 'page_builders' },
  { source: 'page_builders', target: 'elementor' },
  { source: 'page_builders', target: 'divi' },
  { source: 'page_builders', target: 'beaver' },

  { source: 'plugin_categories', target: 'seo' },
  { source: 'seo', target: 'yoast' },
  { source: 'seo', target: 'rank_math' },

  { source: 'plugin_categories', target: 'security_plugins' },
  { source: 'security_plugins', target: 'wordfence' },
  { source: 'security_plugins', target: 'sucuri' },

  { source: 'plugin_categories', target: 'ecommerce' },
  { source: 'ecommerce', target: 'woocommerce' },

  { source: 'plugin_categories', target: 'lms' },
  { source: 'lms', target: 'learndash' },
  { source: 'lms', target: 'lifter' },

  { source: 'plugin_categories', target: 'dev_plugins' },
  { source: 'dev_plugins', target: 'acf' },
  { source: 'dev_plugins', target: 'cptui' },
  { source: 'dev_plugins', target: 'query_monitor' },

  { source: 'plugin_categories', target: 'backup_plugins' },
  { source: 'backup_plugins', target: 'updraftplus' },
  { source: 'backup_plugins', target: 'duplicator' },

  { source: 'root', target: 'plugin_antipatterns' },
  { source: 'plugin_antipatterns', target: 'plugin_sprawl' },
  { source: 'plugin_antipatterns', target: 'outdated_plugins' },
  { source: 'plugin_antipatterns', target: 'custom_code_in_plugin' },
]
