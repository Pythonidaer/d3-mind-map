import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'New Website\nObjectives',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Clarifying what the client hopes to achieve with their new website and how success will be measured.',
  },

  {
    id: 'primary_goals',
    label: 'Primary\nGoals',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Identifying top objectives: more leads, inquiries, brand presence, project showcases, or online reputation.',
    parent: 'root',
  },
  {
    id: 'kpis_success',
    label: 'KPIs &\nSuccess Metrics',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Defining how success will be tracked—form submissions, calls, traffic volume, or engagement.',
    parent: 'root',
  },
  {
    id: 'marketing_integration',
    label: 'Marketing\nIntegration',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Determining how the website fits into broader marketing efforts (social media, print ads, referrals).',
    parent: 'root',
  },
]

export const links = [
  { source: 'root', target: 'primary_goals' },
  { source: 'root', target: 'kpis_success' },
  { source: 'root', target: 'marketing_integration' },
]
