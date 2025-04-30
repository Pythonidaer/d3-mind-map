import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Community &\nAdoption of Storybook',
    definition:
      'Storybook’s popularity, open-source ecosystem, community support, and widespread industry adoption.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1
  {
    id: 'open_source',
    label: 'Open Source',
    definition:
      'Actively maintained on GitHub with contributions from thousands of developers.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'community_support',
    label: 'Community Support',
    definition:
      'Help is available via GitHub, Discord, discussions, and detailed docs.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'industry_adoption',
    label: 'Industry Adoption',
    definition:
      'Used by top companies and projects across the frontend ecosystem.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'resources',
    label: 'Learning Resources',
    definition:
      'Tutorials, examples, documentation, and live sandboxes available for all experience levels.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2 - Open Source
  {
    id: 'github_metrics',
    label: 'GitHub Metrics',
    definition: 'Tens of thousands of stars and millions of weekly downloads.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'steering_committee',
    label: 'Steering Committee',
    definition:
      'Guided by a dedicated group of core maintainers ensuring roadmap progress.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Community Support
  {
    id: 'support_channels',
    label: 'Support Channels',
    definition:
      'Includes Discord, GitHub Discussions, Issues, and Stack Overflow.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'docs_comprehensiveness',
    label: 'Official Docs',
    definition:
      'Extensive, up-to-date documentation for all major features and use cases.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Industry Adoption
  {
    id: 'adopted_by_major_orgs',
    label: 'Trusted by Leading Companies',
    definition: 'Used by Airbnb, Shopify, GitHub, IBM, and thousands more.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'open_source_projects',
    label: 'Popular OSS Usage',
    definition:
      'Standard tool in many open-source frontend projects and design systems.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Learning Resources
  {
    id: 'official_tutorials',
    label: 'Official Tutorials',
    definition:
      'Storybook offers guided tutorials for React, Vue, Angular, and more.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'sandbox_examples',
    label: 'CodeSandbox Examples',
    definition:
      'Interactive playgrounds for experimenting with stories and addons.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'open_source' },
  { source: 'root', target: 'community_support' },
  { source: 'root', target: 'industry_adoption' },
  { source: 'root', target: 'resources' },

  { source: 'open_source', target: 'github_metrics' },
  { source: 'open_source', target: 'steering_committee' },

  { source: 'community_support', target: 'support_channels' },
  { source: 'community_support', target: 'docs_comprehensiveness' },

  { source: 'industry_adoption', target: 'adopted_by_major_orgs' },
  { source: 'industry_adoption', target: 'open_source_projects' },

  { source: 'resources', target: 'official_tutorials' },
  { source: 'resources', target: 'sandbox_examples' },
]
