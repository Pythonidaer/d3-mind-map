import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Startup\nJourney',
    shape: 'roundRect',
    color: 'root',
    definition:
      'The complete lifecycle from initial idea to user traction, product validation, and venture-backed growth.',
  },

  // Phase 1: Idea & Planning
  {
    id: 'ideation',
    label: 'Concept &\nProblem Discovery',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Define the problem, audience, and value proposition. Validate it with conversations and market research.',
  },
  {
    id: 'validation',
    label: 'Problem-\nSolution Fit',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Test hypotheses, pain points, and potential solutions with real people before building.',
  },

  // Phase 2: MVP & First Users
  {
    id: 'mvp',
    label: 'Minimum Viable\nProduct (MVP)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Build the simplest product that tests the most important assumption about user value.',
  },
  {
    id: 'user1',
    label: 'First\nUsers',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Manually acquire early users. Focus on feedback, not scale. Track behavior, not vanity metrics.',
  },

  // Phase 3: Traction & Iteration
  {
    id: 'traction',
    label: 'User\nTraction',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Evidence of growing demand: retention, DAU/MAU, revenue, feature usage, referral loops.',
  },
  {
    id: 'iteration',
    label: 'Feedback &\nIteration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Use the Build-Measure-Learn loop to improve product fit and solve new user pain points.',
  },

  // Phase 4: Fundraising
  {
    id: 'seed',
    label: 'Seed\nFunding',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Use traction and clarity on product-market fit to raise capital to hire and grow. Typically $50K–$200K MRR or 25K+ DAUs.',
  },
  {
    id: 'series_a',
    label: 'Series A\nFunding',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Demonstrate scalable acquisition, retention, and unit economics. Typically $200K+ MRR, low churn, growth infrastructure.',
  },

  // Anti-patterns
  {
    id: 'anti_patterns',
    label: 'Common\nFailure Points',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Missteps that kill momentum, reduce trust, or burn resources before validation.',
  },
  {
    id: 'build_without_users',
    label: 'Building Before\nValidation',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Spending months building something before talking to any users.',
  },
  {
    id: 'vanity_launch',
    label: 'Public Launch\nToo Soon',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Launching to a broad audience before clear product value or onboarding is established.',
  },
  {
    id: 'chasing_funding',
    label: 'Funding Without\nTraction',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Pitching to investors without proof of demand, retention, or market readiness.',
  },
]

export const links = [
  { source: 'root', target: 'ideation' },
  { source: 'root', target: 'validation' },
  { source: 'root', target: 'mvp' },
  { source: 'root', target: 'user1' },
  { source: 'root', target: 'traction' },
  { source: 'root', target: 'iteration' },
  { source: 'root', target: 'seed' },
  { source: 'root', target: 'series_a' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'anti_patterns', target: 'build_without_users' },
  { source: 'anti_patterns', target: 'vanity_launch' },
  { source: 'anti_patterns', target: 'chasing_funding' },
]
