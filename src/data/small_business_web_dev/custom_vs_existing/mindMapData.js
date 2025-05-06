import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Custom vs\nExisting CMS',
    shape: 'roundRect',
    color: 'root',
    definition: 'A comparison between building a custom content management system from scratch versus using an established platform like WordPress, Drupal, or Joomla.',
  },

  // Level 1
  {
    id: 'custom_cms',
    label: 'Custom-Built CMS',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'A CMS developed from scratch to meet specific business requirements, offering total control and custom functionality.',
    parent: 'root',
  },
  {
    id: 'existing_cms',
    label: 'Existing CMS',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Pre-built, open-source platforms like WordPress, Drupal, or Joomla with ready-to-use tools and communities.',
    parent: 'root',
  },

  // Level 2: Custom CMS
  {
    id: 'custom_advantages',
    label: 'Advantages',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Security, compliance, unique functionality, performance optimization, and tailored workflows.',
    parent: 'custom_cms',
  },
  {
    id: 'custom_disadvantages',
    label: 'Disadvantages',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Higher costs, longer timelines, need for skilled developers, maintenance burden, and vendor lock-in risk.',
    parent: 'custom_cms',
  },

  // Level 2: Existing CMS
  {
    id: 'existing_advantages',
    label: 'Advantages',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Lower cost, fast setup, plugins/themes, community support, and frequent updates.',
    parent: 'existing_cms',
  },
  {
    id: 'existing_disadvantages',
    label: 'Disadvantages',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Plugin bloat, limited customization, reliance on third-party ecosystems, and potential security issues if mismanaged.',
    parent: 'existing_cms',
  },

  // Level 3: Considerations
  {
    id: 'key_considerations',
    label: 'Key\nConsiderations',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'When choosing between custom and existing CMS, consider cost, timeline, scalability, and technical resources.',
    parent: 'root',
  },
  {
    id: 'cost_vs_control',
    label: 'Cost vs\nControl',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Custom CMS offers control at a premium; existing CMS offers savings with some limitations.',
    parent: 'key_considerations',
  },
  {
    id: 'long_term_needs',
    label: 'Long-Term\nNeeds',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Anticipate future content complexity, integrations, team size, and growth.',
    parent: 'key_considerations',
  },

  // Anti-Patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Poorly aligned CMS choices that lead to high costs or usability issues.',
    parent: 'root',
  },
  {
    id: 'overengineering',
    label: 'Over-Engineering',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Building a custom CMS for basic needs when WordPress would suffice.',
    parent: 'anti_patterns',
  },
  {
    id: 'underplanning',
    label: 'Under-Planning',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Choosing an existing CMS without thinking through future complexity or extensibility.',
    parent: 'anti_patterns',
  },
]

export const links = [
  { source: 'root', target: 'custom_cms' },
  { source: 'root', target: 'existing_cms' },
  { source: 'root', target: 'key_considerations' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'custom_cms', target: 'custom_advantages' },
  { source: 'custom_cms', target: 'custom_disadvantages' },

  { source: 'existing_cms', target: 'existing_advantages' },
  { source: 'existing_cms', target: 'existing_disadvantages' },

  { source: 'key_considerations', target: 'cost_vs_control' },
  { source: 'key_considerations', target: 'long_term_needs' },

  { source: 'anti_patterns', target: 'overengineering' },
  { source: 'anti_patterns', target: 'underplanning' },
]
