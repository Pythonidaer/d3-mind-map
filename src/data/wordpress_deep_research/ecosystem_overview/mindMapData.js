import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'WordPress\nEcosystem',
    shape: 'roundRect',
    color: 'root',
    definition: 'A comprehensive overview of the tools, systems, and communities that support and extend WordPress functionality.',
  },

  // Level 1
  {
    id: 'cms_vs_site_builders',
    label: 'CMS vs.\nSite Builders',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Comparison between WordPress as a CMS and platforms like Wix or Squarespace as visual website builders.',
  },
  {
    id: 'key_use_cases',
    label: 'Key\nUse Cases',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Common applications of WordPress including blogs, portfolios, business sites, and e-commerce.',
  },
  {
    id: 'community',
    label: 'Community &\nContributors',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The vibrant global community of developers, designers, and users that support WordPress.',
  },

  // Level 2 - CMS vs Site Builders
  {
    id: 'cms_features',
    label: 'CMS\nFeatures',
    parent: 'cms_vs_site_builders',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Custom post types, taxonomies, plugin architecture, and extensive admin tools make WordPress a robust CMS.',
  },
  {
    id: 'site_builder_features',
    label: 'Site Builder\nFeatures',
    parent: 'cms_vs_site_builders',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Drag-and-drop UIs, pre-built themes, and minimal configuration requirements offer simplicity and speed.',
  },

  // Level 2 - Use Cases
  {
    id: 'blogs',
    label: 'Blogs &\nPortfolios',
    parent: 'key_use_cases',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Originally designed for blogging, WordPress still excels at personal publishing and creative portfolios.',
  },
  {
    id: 'business_sites',
    label: 'Business &\nCorporate Sites',
    parent: 'key_use_cases',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'SMBs and enterprises alike use WordPress for content-rich websites, intranets, and client portals.',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce\n(WooCommerce)',
    parent: 'key_use_cases',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'WooCommerce transforms WordPress into a powerful online store with extensive product and order management.',
  },
  {
    id: 'lms_and_membership',
    label: 'LMS &\nMembership Sites',
    parent: 'key_use_cases',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Plugins like LearnDash and MemberPress support gated content, online courses, and paid subscriptions.',
  },

  // Level 2 - Community
  {
    id: 'wordcamps',
    label: 'WordCamps\n& Meetups',
    parent: 'community',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Local and global events that bring the WordPress community together for learning and contribution.',
  },
  {
    id: 'contributors',
    label: 'Core Contributors\n& Companies',
    parent: 'community',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Individuals and organizations like Automattic, Yoast, and 10up that shape WordPress development.',
  },
  {
    id: 'open_source_values',
    label: 'Open Source\nPhilosophy',
    parent: 'community',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'WordPress’s GPL license ensures free use, transparency, and collaborative growth.',
  },
]

export const links = [
  { source: 'root', target: 'cms_vs_site_builders' },
  { source: 'root', target: 'key_use_cases' },
  { source: 'root', target: 'community' },

  { source: 'cms_vs_site_builders', target: 'cms_features' },
  { source: 'cms_vs_site_builders', target: 'site_builder_features' },

  { source: 'key_use_cases', target: 'blogs' },
  { source: 'key_use_cases', target: 'business_sites' },
  { source: 'key_use_cases', target: 'ecommerce' },
  { source: 'key_use_cases', target: 'lms_and_membership' },

  { source: 'community', target: 'wordcamps' },
  { source: 'community', target: 'contributors' },
  { source: 'community', target: 'open_source_values' },
]
