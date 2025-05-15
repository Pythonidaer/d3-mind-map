import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'WordPress\nCommunity & Contributors',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Explores the people, events, and systems that support the open-source development of WordPress, including contributors, companies, WordCamps, and other community-driven initiatives.',
  },

  // Core Contributors
  {
    id: 'core_contributors',
    label: 'Core\nContributors',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Individuals who contribute directly to WordPress core code, design, testing, documentation, translations, and accessibility.',
  },
  {
    id: 'companies_contributing',
    label: 'Company\nSupport',
    parent: 'core_contributors',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Companies like Automattic, Yoast, and Bluehost sponsor employees or donate resources to WordPress core and events.',
  },
  {
    id: 'noncode_contributions',
    label: 'Non-Code\nContributions',
    parent: 'core_contributors',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Contributions beyond coding, including translating, accessibility, marketing, documentation, training, and community building.',
  },

  // Events
  {
    id: 'events',
    label: 'Community\nEvents',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Events that bring together WordPress users, developers, and contributors to learn, share, and collaborate.',
  },
  {
    id: 'wordcamps',
    label: 'WordCamps',
    parent: 'events',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Local, regional, or global informal WordPress conferences organized by volunteers, covering topics from beginner to advanced.',
  },
  {
    id: 'meetups',
    label: 'Meetups\n& NextGen Events',
    parent: 'events',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Regular local gatherings of WordPress enthusiasts, plus experimental formats under the NextGen events umbrella.',
  },
  {
    id: 'contributor_day',
    label: 'Contributor\nDay',
    parent: 'events',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'A special event (often part of WordCamps) where attendees actively contribute to WordPress in various ways.',
  },

  // Recognition & Impact
  {
    id: 'props_and_credits',
    label: '"Props"\nSystem',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A system for recognizing contributors in commit messages, credits screen, and release posts.',
  },
  {
    id: 'wordpress_foundation',
    label: 'WordPress\nFoundation',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A nonprofit that supports WordPress community initiatives, trademarks, education, and global access.',
  },
  {
    id: 'community_impact',
    label: 'Global\nImpact',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'WordPress’s community-led model fosters learning, mentorship, inclusivity, and worldwide participation.',
  },
]

export const links = [
  { source: 'root', target: 'core_contributors' },
  { source: 'core_contributors', target: 'companies_contributing' },
  { source: 'core_contributors', target: 'noncode_contributions' },
  { source: 'root', target: 'events' },
  { source: 'events', target: 'wordcamps' },
  { source: 'events', target: 'meetups' },
  { source: 'events', target: 'contributor_day' },
  { source: 'root', target: 'props_and_credits' },
  { source: 'root', target: 'wordpress_foundation' },
  { source: 'root', target: 'community_impact' },
]
