import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Launching & Handoff',
    shape: 'roundRect',
    color: 'root',
    definition: 'Best practices and tools for preparing, launching, and handing off a WordPress website, including workflows, checklists, training, and maintenance plans.'
  },

  // Level 1
  {
    id: 'staging_to_production',
    label: 'Staging to\nProduction Workflow',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Steps to safely migrate a site from staging to live, minimizing downtime and avoiding errors.'
  },
  {
    id: 'final_checklist',
    label: 'Final\nChecklist',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'A thorough pre-launch checklist including SEO, performance, responsiveness, and accessibility validation.'
  },
  {
    id: 'client_training',
    label: 'Client\nTraining & Docs',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Educating the client on how to use their WordPress site, with written or video documentation.'
  },
  {
    id: 'maintenance_plan',
    label: 'Ongoing\nMaintenance Plan',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'A defined service offering or internal protocol for site updates, security, and performance tuning.'
  },

  // Level 2: Staging to Production
  {
    id: 'backup_before_launch',
    label: 'Backup Before Launch',
    parent: 'staging_to_production',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Full backup of database and files prior to deployment to avoid irreversible data loss.'
  },
  {
    id: 'sync_db_and_files',
    label: 'Sync DB & Files',
    parent: 'staging_to_production',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Export/import database, update URLs, transfer media and theme/plugin files to live server.'
  },
  {
    id: 'set_maintenance_mode',
    label: 'Set Maintenance Mode',
    parent: 'staging_to_production',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Temporarily disable frontend access during deployment to avoid disruptions or errors.'
  },

  // Level 2: Final Checklist
  {
    id: 'seo_validation',
    label: 'SEO Validation',
    parent: 'final_checklist',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Verify title tags, meta descriptions, sitemap, noindex settings, schema, and robots.txt.'
  },
  {
    id: 'performance_test',
    label: 'Performance Test',
    parent: 'final_checklist',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use Lighthouse or GTMetrix to test load speed, asset sizes, and Core Web Vitals.'
  },
  {
    id: 'accessibility_check',
    label: 'Accessibility Check',
    parent: 'final_checklist',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use tools like WAVE or Axe to ensure the site is usable by people with disabilities.'
  },

  // Level 2: Client Training
  {
    id: 'admin_walkthrough',
    label: 'Admin Walkthrough',
    parent: 'client_training',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Train the client to navigate the dashboard, create/edit content, and manage media.'
  },
  {
    id: 'custom_guides',
    label: 'Custom Docs\n& Videos',
    parent: 'client_training',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Tailored documentation or screencasts for the client’s theme, plugin usage, and workflows.'
  },
  {
    id: 'handoff_assets',
    label: 'Handoff Assets',
    parent: 'client_training',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Provide final source files, login credentials, hosting and DNS info, and documentation.'
  },

  // Level 2: Maintenance Plan
  {
    id: 'core_plugin_updates',
    label: 'Core & Plugin Updates',
    parent: 'maintenance_plan',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Keep WordPress, themes, and plugins updated to maintain security and stability.'
  },
  {
    id: 'backup_schedule',
    label: 'Backup Schedule',
    parent: 'maintenance_plan',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Daily or weekly automated backups stored securely offsite or in the cloud.'
  },
  {
    id: 'monitoring_alerts',
    label: 'Monitoring & Alerts',
    parent: 'maintenance_plan',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use uptime monitoring, error tracking, and security alerts to proactively fix issues.'
  },

  // Cons
  {
    id: 'nodeNegative1',
    label: 'Cons',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Risks or downsides to the WordPress launch and handoff process.'
  },
  {
    id: 'handoff_gaps',
    label: 'Handoff Gaps',
    parent: 'nodeNegative1',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Failing to deliver needed documentation, training, or passwords can cause major client issues.'
  },
  {
    id: 'incomplete_checklist',
    label: 'Skipped Checklist Steps',
    parent: 'nodeNegative1',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Neglecting performance, SEO, or accessibility checks can damage site usability or rankings.'
  },
]

export const links = [
  { source: 'root', target: 'staging_to_production' },
  { source: 'root', target: 'final_checklist' },
  { source: 'root', target: 'client_training' },
  { source: 'root', target: 'maintenance_plan' },
  { source: 'root', target: 'nodeNegative1' },

  { source: 'staging_to_production', target: 'backup_before_launch' },
  { source: 'staging_to_production', target: 'sync_db_and_files' },
  { source: 'staging_to_production', target: 'set_maintenance_mode' },

  { source: 'final_checklist', target: 'seo_validation' },
  { source: 'final_checklist', target: 'performance_test' },
  { source: 'final_checklist', target: 'accessibility_check' },

  { source: 'client_training', target: 'admin_walkthrough' },
  { source: 'client_training', target: 'custom_guides' },
  { source: 'client_training', target: 'handoff_assets' },

  { source: 'maintenance_plan', target: 'core_plugin_updates' },
  { source: 'maintenance_plan', target: 'backup_schedule' },
  { source: 'maintenance_plan', target: 'monitoring_alerts' },

  { source: 'nodeNegative1', target: 'handoff_gaps' },
  { source: 'nodeNegative1', target: 'incomplete_checklist' },
]
