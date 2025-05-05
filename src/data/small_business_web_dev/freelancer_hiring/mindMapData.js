import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Hiring a Freelance\nWeb Developer',
    shape: 'roundRect',
    color: 'root',
    definition: 'Guidance for small businesses hiring freelance developers—covering rates, skills, expectations, and best practices.',
  },

  // Rate Awareness
  {
    id: 'rates',
    label: 'Freelance\nRates',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Typical hourly and project-based rates for freelance developers in different regions and experience levels.',
    parent: 'root',
  },
  {
    id: 'rate_ranges',
    label: 'Rate Ranges',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Hourly rates vary by experience and region—from $18 to $80+; projects may range from $1,800 to $5,000+.',
    parent: 'rates',
  },
  {
    id: 'rate_factors',
    label: 'Factors\nAffecting Rates',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Skills, project scope, location, demand, and tech stack impact how much freelancers charge.',
    parent: 'rates',
  },

  // Selection Considerations
  {
    id: 'selection',
    label: 'Choosing a\nFreelancer',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'How to vet freelance developers for reliability, fit, and capability.',
    parent: 'root',
  },
  {
    id: 'portfolio_review',
    label: 'Portfolio\nReview',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Check for quality, variety, and relevance to your business’s website goals.',
    parent: 'selection',
  },
  {
    id: 'cms_experience',
    label: 'CMS\nExperience',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Look for WordPress or CMS experience if you want to manage content yourself later.',
    parent: 'selection',
  },
  {
    id: 'client_reviews',
    label: 'Client\nReviews',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use testimonials or platforms like Upwork to evaluate communication, delivery, and reliability.',
    parent: 'selection',
  },

  // Best Practices
  {
    id: 'best_practices',
    label: 'Best Practices\nWhen Hiring',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Tips for ensuring alignment and a smooth working relationship with freelancers.',
    parent: 'root',
  },
  {
    id: 'project_brief',
    label: 'Clear Project\nBrief',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Define pages, features, goals, audience, and design expectations.',
    parent: 'best_practices',
  },
  {
    id: 'budget_upfront',
    label: 'Set Budget\nUpfront',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Avoid misalignment by stating clear budget expectations before development begins.',
    parent: 'best_practices',
  },
  {
    id: 'scope_change_policy',
    label: 'Change\nManagement',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Establish how new requests are handled—hourly rate, approval process, etc.',
    parent: 'best_practices',
  },

  // Anti-Patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes when hiring or working with freelance developers.',
    parent: 'root',
  },
  {
    id: 'vague_scope',
    label: 'Vague\nScope',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Unclear requirements lead to delays, disputes, or disappointing results.',
    parent: 'anti_patterns',
  },
  {
    id: 'price_only_choice',
    label: 'Choosing Based\non Price Only',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Low cost may lead to poor quality, bad communication, or security issues.',
    parent: 'anti_patterns',
  },
]

export const links = [
  { source: 'root', target: 'rates' },
  { source: 'rates', target: 'rate_ranges' },
  { source: 'rates', target: 'rate_factors' },

  { source: 'root', target: 'selection' },
  { source: 'selection', target: 'portfolio_review' },
  { source: 'selection', target: 'cms_experience' },
  { source: 'selection', target: 'client_reviews' },

  { source: 'root', target: 'best_practices' },
  { source: 'best_practices', target: 'project_brief' },
  { source: 'best_practices', target: 'budget_upfront' },
  { source: 'best_practices', target: 'scope_change_policy' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'vague_scope' },
  { source: 'anti_patterns', target: 'price_only_choice' },
]
