import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'WordPress.org vs.\nWordPress.com',
    shape: 'roundRect',
    color: 'root',
    definition:
      'A comparison between the self-hosted WordPress.org platform and the hosted WordPress.com service, covering control, customization, pricing, and use cases.',
  },

  // First-Level Positives: dotorg
  {
    id: 'dotorg',
    label: 'WordPress.org\n(Self-Hosted)',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'The open-source version of WordPress you download and install on your own hosting environment, offering full control and customization.',
  },

  // First-Level Positives: dotcom
  {
    id: 'dotcom',
    label: 'WordPress.com\n(Hosted)',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A managed platform run by Automattic that hosts WordPress sites with varying features based on pricing plans.',
  },

  // dotorg children
  {
    id: 'hosting_dotorg',
    label: 'Choose Your\nOwn Hosting',
    parent: 'dotorg',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Users must purchase and configure their own hosting from a provider like SiteGround, Bluehost, or DigitalOcean.',
  },
  {
    id: 'customization_dotorg',
    label: 'Unlimited\nCustomization',
    parent: 'dotorg',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Supports all themes and plugins, custom code, and full access to core files.',
  },
  {
    id: 'ownership_dotorg',
    label: 'Full Data\nOwnership',
    parent: 'dotorg',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'All content and code are owned by the user with no restrictions or vendor lock-in.',
  },
  {
    id: 'usecases_dotorg',
    label: 'Best For\nDevelopers/Businesses',
    parent: 'dotorg',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Ideal for developers, agencies, and advanced users who want total flexibility.',
  },

  // dotcom children
  {
    id: 'managed_dotcom',
    label: 'Managed\nHosting',
    parent: 'dotcom',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Automattic handles hosting, updates, backups, and security.',
  },
  {
    id: 'simplicity_dotcom',
    label: 'Beginner\nFriendly',
    parent: 'dotcom',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Designed for ease of use with a streamlined dashboard and no server management required.',
  },
  {
    id: 'plans_dotcom',
    label: 'Pricing\nTiers',
    parent: 'dotcom',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Offers free and paid plans with increasing levels of customization, storage, and monetization tools.',
  },
  {
    id: 'limitations_dotcom',
    label: 'Restricted\nCustomization',
    parent: 'dotcom',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Advanced features like custom themes/plugins only available on higher-tier plans.',
  },

  // Cons node
  {
    id: 'cons',
    label: 'Cons',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Drawbacks and limitations of each platform compared to the other.',
  },

  // Cons children
  {
    id: 'complexity_dotorg',
    label: 'Higher\nTechnical Burden',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'WordPress.org requires users to manage security, backups, updates, and hosting themselves.',
  },
  {
    id: 'cost_dotorg',
    label: 'Variable\nCosts',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Users must pay separately for hosting, domain, and premium themes/plugins.',
  },
  {
    id: 'lockin_dotcom',
    label: 'Platform\nLock-In Risk',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'WordPress.com users are limited by pricing tiers and must upgrade to unlock features.',
  },
  {
    id: 'plugin_limits_dotcom',
    label: 'Limited\nPlugin Access',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Plugins can only be installed on Business and eCommerce plans or higher.',
  },
]

export const links = [
  { source: 'root', target: 'dotorg' },
  { source: 'root', target: 'dotcom' },
  { source: 'root', target: 'cons' },

  { source: 'dotorg', target: 'hosting_dotorg' },
  { source: 'dotorg', target: 'customization_dotorg' },
  { source: 'dotorg', target: 'ownership_dotorg' },
  { source: 'dotorg', target: 'usecases_dotorg' },

  { source: 'dotcom', target: 'managed_dotcom' },
  { source: 'dotcom', target: 'simplicity_dotcom' },
  { source: 'dotcom', target: 'plans_dotcom' },
  { source: 'dotcom', target: 'limitations_dotcom' },

  { source: 'cons', target: 'complexity_dotorg' },
  { source: 'cons', target: 'cost_dotorg' },
  { source: 'cons', target: 'lockin_dotcom' },
  { source: 'cons', target: 'plugin_limits_dotcom' },
]
