import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Understanding the\nBusiness',
    shape: 'roundRect',
    color: 'root',
    definition: 'Initial discovery questions to understand a painting or plastering client’s business, services, and goals for their website.',
  },

  {
    id: 'services_offered',
    label: 'Services\nOffered',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Identifying the full range of painting or plastering services to inform site structure and copy.',
    parent: 'root',
  },
  {
    id: 'target_audience',
    label: 'Target\nAudience',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Understanding who the business serves (homeowners, property managers, commercial clients, etc.).',
    parent: 'root',
  },
  {
    id: 'geographic_area',
    label: 'Geographic\nArea',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Clarifying service regions for local SEO and mapping features.',
    parent: 'root',
  },
  {
    id: 'unique_selling_points',
    label: 'Unique\nSelling Points',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'What differentiates their business—craftsmanship, eco-friendly materials, reputation, etc.',
    parent: 'root',
  },
  {
    id: 'business_goals',
    label: 'Business\nGoals',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'What the client hopes to achieve with the website: lead generation, visibility, professionalism, etc.',
    parent: 'root',
  },
]

export const links = [
  { source: 'root', target: 'services_offered' },
  { source: 'root', target: 'target_audience' },
  { source: 'root', target: 'geographic_area' },
  { source: 'root', target: 'unique_selling_points' },
  { source: 'root', target: 'business_goals' },
]
