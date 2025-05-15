import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'WP-CLI',
    shape: 'roundRect',
    color: 'root',
    definition: 'WP-CLI is the official command-line interface for WordPress. It enables users to manage WordPress installations efficiently through terminal commands.',
  },

  // Positive Level 1
  {
    id: 'features',
    label: 'Core Features',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Key functions WP-CLI provides for managing WordPress core, plugins, themes, users, and the database.',
  },
  {
    id: 'automation',
    label: 'Automation\n& Scripting',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'WP-CLI can be integrated into scripts for automation tasks across single or multiple WordPress sites.',
  },
  {
    id: 'developer_tools',
    label: 'Developer\nUtilities',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Tools for developers such as scaffolding themes/plugins and performing search-replace operations.',
  },

  // Features children
  {
    id: 'core_management',
    label: 'Core Management',
    parent: 'features',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Install, update, and configure WordPress core via CLI commands.',
  },
  {
    id: 'plugin_theme',
    label: 'Plugins & Themes',
    parent: 'features',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Install, activate, deactivate, and update plugins or themes from the command line.',
  },
  {
    id: 'user_management',
    label: 'User Management',
    parent: 'features',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Create, update, delete, and list WordPress users quickly through the CLI.',
  },
  {
    id: 'database_tasks',
    label: 'Database Tasks',
    parent: 'features',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Export, import, optimize, or reset the WordPress database using WP-CLI commands.',
  },

  // Automation children
  {
    id: 'cron_jobs',
    label: 'Cron Jobs',
    parent: 'automation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Set up scheduled tasks using cron with WP-CLI for maintenance and updates.',
  },
  {
    id: 'batch_site_admin',
    label: 'Batch Site\nAdministration',
    parent: 'automation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Run bulk operations (e.g., updates) across multiple sites via shell scripts.',
  },

  // Developer Tools children
  {
    id: 'scaffold',
    label: 'Scaffold Plugins\n& Themes',
    parent: 'developer_tools',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use scaffold commands to generate starter files for plugins, themes, or custom post types.',
  },
  {
    id: 'search_replace',
    label: 'Search & Replace',
    parent: 'developer_tools',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Powerful search-replace capability across the database without needing a GUI.',
  },

  // Cons
  {
    id: 'cons',
    label: 'Cons',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Limitations and potential pitfalls of using WP-CLI for WordPress site management.',
  },
  {
    id: 'learning_curve',
    label: 'Steep Learning\nCurve',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Beginners may find the command-line interface intimidating compared to the WP admin dashboard.',
  },
  {
    id: 'no_gui',
    label: 'No GUI',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'WP-CLI lacks a visual interface, which can slow onboarding or debugging for non-technical users.',
  },
  {
    id: 'mistakes_are_costly',
    label: 'No Undo',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Incorrect commands can overwrite or delete content without confirmation prompts.',
  },
]

export const links = [
  { source: 'root', target: 'features' },
  { source: 'root', target: 'automation' },
  { source: 'root', target: 'developer_tools' },
  { source: 'root', target: 'cons' },

  { source: 'features', target: 'core_management' },
  { source: 'features', target: 'plugin_theme' },
  { source: 'features', target: 'user_management' },
  { source: 'features', target: 'database_tasks' },

  { source: 'automation', target: 'cron_jobs' },
  { source: 'automation', target: 'batch_site_admin' },

  { source: 'developer_tools', target: 'scaffold' },
  { source: 'developer_tools', target: 'search_replace' },

  { source: 'cons', target: 'learning_curve' },
  { source: 'cons', target: 'no_gui' },
  { source: 'cons', target: 'mistakes_are_costly' },
]
