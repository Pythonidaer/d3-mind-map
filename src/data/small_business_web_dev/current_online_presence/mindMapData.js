import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Current Online\nPresence',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Discovery questions aimed at evaluating the client’s existing website or digital footprint before redesign or development.',
  },

  {
    id: 'existing_site',
    label: 'Existing Website\nDetails',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Understanding whether they have a current site, the URL, and what platform it’s built on (e.g., Carrd, Wix, HTML).',
    parent: 'root',
  },
  {
    id: 'site_performance',
    label: 'Current Site\nPerformance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Discussing what is or isn’t working with the current site (leads, loading speed, mobile usability, etc.).',
    parent: 'root',
  },
  {
    id: 'redesign_motivation',
    label: 'Motivation\nfor Redesign',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'What prompted them to consider a redesign or rebuild—appearance, functionality, SEO, business growth, etc.',
    parent: 'root',
  },
  {
    id: 'mobile_readiness',
    label: 'Mobile\nCompatibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Checking if the current site is mobile-friendly and usable across devices.',
    parent: 'root',
  },
  {
    id: 'analytics_tools',
    label: 'Analytics\nInstalled',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Verifying if tools like Google Analytics are active, and what data has been reviewed or considered.',
    parent: 'root',
  },
]

export const links = [
  { source: 'root', target: 'existing_site' },
  { source: 'root', target: 'site_performance' },
  { source: 'root', target: 'redesign_motivation' },
  { source: 'root', target: 'mobile_readiness' },
  { source: 'root', target: 'analytics_tools' },
]
