import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Budget &\nTimeline',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Clarifying financial expectations and time constraints helps align project scope, priorities, and feasibility for delivery.',
  },

  {
    id: 'budget_range',
    label: 'Budget\nRange',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Understand how much the client is willing to invest and whether they’re expecting a basic build or custom functionality.',
    parent: 'root',
  },
  {
    id: 'timeline_expectations',
    label: 'Timeline\nExpectations',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Identify desired launch dates or internal deadlines to help plan milestones and prevent scope misalignment.',
    parent: 'root',
  },
]

export const links = [
  { source: 'root', target: 'budget_range' },
  { source: 'root', target: 'timeline_expectations' },
]
