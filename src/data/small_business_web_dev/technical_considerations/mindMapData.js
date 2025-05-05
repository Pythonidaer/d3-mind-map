import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Technical\nConsiderations',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Key technical questions to align the website’s platform, performance, SEO, and infrastructure with the client’s needs and future scalability.',
  },

  {
    id: 'basic_seo',
    label: 'Basic SEO\nExpectations',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Understanding the client’s knowledge of SEO and expectations around optimizing visibility for search engines.',
    parent: 'root',
  },
  {
    id: 'cms_platform',
    label: 'CMS Platform\nPreferences',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Ask if the client has familiarity with or preference for specific content management systems (e.g., WordPress, Joomla, Drupal).',
    parent: 'root',
  },
  {
    id: 'hosting_preferences',
    label: 'Hosting\nPreferences',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Determine whether the client has existing hosting or needs guidance selecting a shared, managed, or VPS solution.',
    parent: 'root',
  },
]

export const links = [
  { source: 'root', target: 'basic_seo' },
  { source: 'root', target: 'cms_platform' },
  { source: 'root', target: 'hosting_preferences' },
]
