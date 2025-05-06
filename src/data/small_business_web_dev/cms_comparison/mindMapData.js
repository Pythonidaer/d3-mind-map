import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'CMS Comparison\nfor Small Business',
    shape: 'roundRect',
    color: 'root',
    definition: 'A comparison of leading Content Management Systems (CMS) for non-technical users managing small business websites, focusing on ease of use, cost, flexibility, and scalability.',
  },

  // Primary CMS Options
  {
    id: 'wordpress',
    label: 'WordPress',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Popular open-source CMS with user-friendly UI, plugin ecosystem, and wide community support.',
    parent: 'root',
  },
  {
    id: 'drupal',
    label: 'Drupal',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Highly customizable and secure CMS suitable for complex, large-scale, or regulated websites.',
    parent: 'root',
  },
  {
    id: 'joomla',
    label: 'Joomla',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Balanced CMS offering more power than WordPress but with a steeper learning curve.',
    parent: 'root',
  },

  // WordPress Breakdown
  {
    id: 'wordpress_features',
    label: 'Key\nFeatures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Drag-and-drop builders, plugin marketplace, SEO tools, responsive themes, and user roles.',
    parent: 'wordpress',
  },
  {
    id: 'wordpress_costs',
    label: 'Typical\nCosts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Free core, with optional hosting ($3–50/mo), domains ($10–20/yr), and paid themes/plugins.',
    parent: 'wordpress',
  },
  {
    id: 'wordpress_usability',
    label: 'User\nFriendliness',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Extremely beginner-friendly; visual editor and wide availability of training resources.',
    parent: 'wordpress',
  },

  // Drupal Breakdown
  {
    id: 'drupal_features',
    label: 'Key\nFeatures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Flexible content modeling, strong security, API-first design, and multilingual support.',
    parent: 'drupal',
  },
  {
    id: 'drupal_costs',
    label: 'Typical\nCosts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Free core, but higher development/maintenance costs due to technical complexity.',
    parent: 'drupal',
  },
  {
    id: 'drupal_usability',
    label: 'User\nFriendliness',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Steep learning curve, more suitable for developers; administrative interface can overwhelm non-technical users.',
    parent: 'drupal',
  },

  // Joomla Breakdown
  {
    id: 'joomla_features',
    label: 'Key\nFeatures',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Extensible with templates and extensions, good multilingual and SEO support.',
    parent: 'joomla',
  },
  {
    id: 'joomla_costs',
    label: 'Typical\nCosts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Free to use with modest hosting costs; optional paid extensions may add to total cost.',
    parent: 'joomla',
  },
  {
    id: 'joomla_usability',
    label: 'User\nFriendliness',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Moderately beginner-friendly; easier than Drupal but more complex than WordPress.',
    parent: 'joomla',
  },

  // Comparison Anti-Patterns
  {
    id: 'cms_anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes such as choosing an overly complex CMS or not budgeting for long-term costs.',
    parent: 'root',
  },
  {
    id: 'wrong_cms_fit',
    label: 'Wrong CMS\nfor Needs',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Selecting Drupal when WordPress would suffice, or vice versa, leading to cost or usability issues.',
    parent: 'cms_anti_patterns',
  },
  {
    id: 'ignoring_upkeep',
    label: 'Ignoring\nOngoing Needs',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Choosing a CMS without planning for maintenance, updates, or learning curve.',
    parent: 'cms_anti_patterns',
  },
]

export const links = [
  { source: 'root', target: 'wordpress' },
  { source: 'root', target: 'drupal' },
  { source: 'root', target: 'joomla' },
  { source: 'root', target: 'cms_anti_patterns' },

  { source: 'wordpress', target: 'wordpress_features' },
  { source: 'wordpress', target: 'wordpress_costs' },
  { source: 'wordpress', target: 'wordpress_usability' },

  { source: 'drupal', target: 'drupal_features' },
  { source: 'drupal', target: 'drupal_costs' },
  { source: 'drupal', target: 'drupal_usability' },

  { source: 'joomla', target: 'joomla_features' },
  { source: 'joomla', target: 'joomla_costs' },
  { source: 'joomla', target: 'joomla_usability' },

  { source: 'cms_anti_patterns', target: 'wrong_cms_fit' },
  { source: 'cms_anti_patterns', target: 'ignoring_upkeep' },
]
