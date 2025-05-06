import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Website Maintenance\n& Support',
    shape: 'roundRect',
    color: 'root',
    definition: 'Ongoing services that ensure a website remains secure, functional, up-to-date, and aligned with business needs.',
  },

  // Components of Maintenance
  {
    id: 'key_components',
    label: 'Key Maintenance\nComponents',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Essential tasks involved in maintaining and supporting a website post-launch.',
    parent: 'root',
  },
  {
    id: 'updates',
    label: 'Core & Plugin\nUpdates',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Keeping the CMS, themes, and plugins up-to-date to prevent bugs and security risks.',
    parent: 'key_components',
  },
  {
    id: 'backups',
    label: 'Regular\nBackups',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Creating copies of your website to restore data in case of corruption or cyberattacks.',
    parent: 'key_components',
  },
  {
    id: 'security',
    label: 'Security\nMonitoring',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Scanning for malware, managing SSL certificates, and protecting against unauthorized access.',
    parent: 'key_components',
  },
  {
    id: 'support',
    label: 'Technical\nSupport',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Help with resolving errors, adding content, or performing updates when issues arise.',
    parent: 'key_components',
  },

  // Pricing Models
  {
    id: 'pricing_models',
    label: 'Pricing\nModels',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Different ways maintenance services may be billed to small businesses.',
    parent: 'root',
  },
  {
    id: 'monthly_plans',
    label: 'Monthly or\nAnnual Plans',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Prepaid plans that cover updates, monitoring, and support over time.',
    parent: 'pricing_models',
  },
  {
    id: 'hourly_support',
    label: 'Hourly\nSupport',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Pay-as-you-go model for occasional tasks or troubleshooting.',
    parent: 'pricing_models',
  },
  {
    id: 'setup_fee',
    label: 'Initial\nSetup Fee',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Some providers charge a one-time fee to prepare the website for long-term maintenance.',
    parent: 'pricing_models',
  },

  // DIY vs Professional
  {
    id: 'diy_vs_pro',
    label: 'DIY vs\nProfessional',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Trade-offs between handling maintenance yourself or hiring a professional.',
    parent: 'root',
  },
  {
    id: 'diy_tasks',
    label: 'Tasks You\nCan Do Yourself',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Updating text, images, and basic content through the CMS interface.',
    parent: 'diy_vs_pro',
  },
  {
    id: 'pro_tasks',
    label: 'Tasks for\nProfessionals',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Security patches, error resolution, plugin conflicts, and server configuration.',
    parent: 'diy_vs_pro',
  },
  {
    id: 'risk_of_diy',
    label: 'Risk of\nNeglect',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Neglecting updates or backups can lead to outages, data loss, or hacked websites.',
    parent: 'diy_vs_pro',
  },

  // Anti-Patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes in managing website maintenance that cause long-term issues.',
    parent: 'root',
  },
  {
    id: 'no_backups',
    label: 'No\nBackups',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Failing to regularly back up your site means recovery is impossible if data is lost.',
    parent: 'anti_patterns',
  },
  {
    id: 'outdated_plugins',
    label: 'Outdated\nPlugins',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Running old or vulnerable plugins increases the risk of your site being compromised.',
    parent: 'anti_patterns',
  },
]

export const links = [
  { source: 'root', target: 'key_components' },
  { source: 'key_components', target: 'updates' },
  { source: 'key_components', target: 'backups' },
  { source: 'key_components', target: 'security' },
  { source: 'key_components', target: 'support' },

  { source: 'root', target: 'pricing_models' },
  { source: 'pricing_models', target: 'monthly_plans' },
  { source: 'pricing_models', target: 'hourly_support' },
  { source: 'pricing_models', target: 'setup_fee' },

  { source: 'root', target: 'diy_vs_pro' },
  { source: 'diy_vs_pro', target: 'diy_tasks' },
  { source: 'diy_vs_pro', target: 'pro_tasks' },
  { source: 'diy_vs_pro', target: 'risk_of_diy' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'no_backups' },
  { source: 'anti_patterns', target: 'outdated_plugins' },
]
