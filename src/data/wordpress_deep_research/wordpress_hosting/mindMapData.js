import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'WordPress\nHosting',
    shape: 'roundRect',
    color: 'root',
    definition: 'Overview of hosting options and infrastructure for running WordPress, including shared, managed, cloud, local environments, FTP, migration, and best practices.',
  },

  // Positive Nodes (Level 1)
  {
    id: 'types_of_hosting',
    label: 'Types of\nHosting',
    parent: 'root',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'The three main hosting types for WordPress: shared, managed, and cloud, each with different performance and scalability.',
  },
  {
    id: 'local_environments',
    label: 'Local\nEnvironments',
    parent: 'root',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Tools for setting up WordPress locally for development before deploying to production.',
  },
  {
    id: 'ftp_and_cpanel',
    label: 'FTP &\ncPanel',
    parent: 'root',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Server access and file management tools used for managing WordPress installations.',
  },
  {
    id: 'migration_backup',
    label: 'Migration &\nBackup',
    parent: 'root',
    color: 'nodePositive1',
    shape: 'ellipse',
    definition: 'Methods and plugins for moving or duplicating WordPress sites between environments and backing up data.',
  },

  // Children of types_of_hosting
  {
    id: 'shared_hosting',
    label: 'Shared\nHosting',
    parent: 'types_of_hosting',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Multiple websites share server resources. Affordable but can suffer from slow performance or security risks.',
  },
  {
    id: 'managed_hosting',
    label: 'Managed\nHosting',
    parent: 'types_of_hosting',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Hosting optimized for WordPress with automatic updates, security, and backups. E.g., WP Engine, Kinsta.',
  },
  {
    id: 'cloud_hosting',
    label: 'Cloud\nHosting',
    parent: 'types_of_hosting',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Scalable hosting with dynamic resources on virtual servers. Offers high performance and flexibility.',
  },

  // Children of local_environments
  {
    id: 'localwp',
    label: 'LocalWP',
    parent: 'local_environments',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'A popular local development tool with GUI, used to quickly spin up WordPress instances.',
  },
  {
    id: 'xampp',
    label: 'XAMPP',
    parent: 'local_environments',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Cross-platform development stack for Apache, MySQL, PHP, and Perl — can host WordPress locally.',
  },

  // Children of ftp_and_cpanel
  {
    id: 'ftp_clients',
    label: 'FTP Clients\n(FileZilla)',
    parent: 'ftp_and_cpanel',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Software like FileZilla allows direct file transfer and editing access to WordPress directories.',
  },
  {
    id: 'cpanel',
    label: 'cPanel\nDashboard',
    parent: 'ftp_and_cpanel',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Hosting admin interface used to manage files, domains, databases, SSL, and email settings.',
  },

  // Children of migration_backup
  {
    id: 'manual_migration',
    label: 'Manual\nMigration',
    parent: 'migration_backup',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Uses FTP and phpMyAdmin to manually transfer files and databases between servers.',
  },
  {
    id: 'migration_plugins',
    label: 'Migration\nPlugins',
    parent: 'migration_backup',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Plugins like Duplicator or All-in-One WP Migration simplify full-site transfers and URL rewriting.',
  },
  {
    id: 'staging_sites',
    label: 'Staging\nSites',
    parent: 'migration_backup',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Development environments separate from production used to test changes safely.',
  },
  {
    id: 'backup_strategies',
    label: 'Backup\nStrategies',
    parent: 'migration_backup',
    color: 'nodePositive2',
    shape: 'rect',
    definition: 'Scheduled backups stored off-site (e.g., Dropbox, Google Drive) to restore WordPress sites in case of failure.',
  },

  // Negative Nodes (Cons)
  {
    id: 'cons',
    label: 'Cons',
    parent: 'root',
    color: 'nodeNegative1',
    shape: 'hexagon',
    definition: 'Challenges or limitations associated with WordPress hosting options.',
  },
  {
    id: 'plugin_conflicts',
    label: 'Plugin\nConflicts',
    parent: 'cons',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Hosting restrictions or caching systems can break plugin functionality or cause compatibility issues.',
  },
  {
    id: 'shared_limitations',
    label: 'Shared Hosting\nLimitations',
    parent: 'cons',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Performance suffers when resources are consumed by other tenants. Vulnerable to cross-site contamination.',
  },
  {
    id: 'manual_migration_risk',
    label: 'Manual\nMigration Errors',
    parent: 'cons',
    color: 'nodeNegative2',
    shape: 'rect',
    definition: 'Requires technical skill and careful coordination to avoid downtime or data loss.',
  },
]

export const links = [
  { source: 'root', target: 'types_of_hosting' },
  { source: 'root', target: 'local_environments' },
  { source: 'root', target: 'ftp_and_cpanel' },
  { source: 'root', target: 'migration_backup' },
  { source: 'root', target: 'cons' },

  { source: 'types_of_hosting', target: 'shared_hosting' },
  { source: 'types_of_hosting', target: 'managed_hosting' },
  { source: 'types_of_hosting', target: 'cloud_hosting' },

  { source: 'local_environments', target: 'localwp' },
  { source: 'local_environments', target: 'xampp' },

  { source: 'ftp_and_cpanel', target: 'ftp_clients' },
  { source: 'ftp_and_cpanel', target: 'cpanel' },

  { source: 'migration_backup', target: 'manual_migration' },
  { source: 'migration_backup', target: 'migration_plugins' },
  { source: 'migration_backup', target: 'staging_sites' },
  { source: 'migration_backup', target: 'backup_strategies' },

  { source: 'cons', target: 'plugin_conflicts' },
  { source: 'cons', target: 'shared_limitations' },
  { source: 'cons', target: 'manual_migration_risk' },
]
