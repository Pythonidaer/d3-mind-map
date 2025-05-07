import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Startup Metrics &\nFunding Readiness',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Key performance indicators, milestones, and financial metrics used to evaluate startup growth and secure investment.',
  },

  // Positive Node 1s
  {
    id: 'traction',
    label: 'User Traction\n& Growth',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Evidence of market interest through rising usage, active users, or revenue over time.',
  },
  {
    id: 'engagement_retention',
    label: 'Engagement &\nRetention',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Metrics that reflect how often and deeply users interact with the product, and whether they stick around.',
  },
  {
    id: 'unit_economics',
    label: 'Unit\nEconomics',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Financial sustainability of acquiring and serving each customer, including CAC and LTV.',
  },
  {
    id: 'market_potential',
    label: 'Market Size &\nOpportunity',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'How large the opportunity is, including TAM, SAM, and SOM figures that indicate scalability.',
  },
  {
    id: 'funding_stages',
    label: 'Funding\nMilestones',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Readiness indicators and metrics for Pre-Seed, Seed, and Series A rounds.',
  },

  // Positive Node 2s — Traction
  {
    id: 'mrr',
    label: 'MRR &\nGrowth Rates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'traction',
    definition:
      'Monthly recurring revenue and percentage growth over time. Key for SaaS valuation.',
  },
  {
    id: 'network_effects',
    label: 'Network\nEffects',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'traction',
    definition:
      'More users create more value for each other (e.g., referrals, marketplaces).',
  },

  // Positive Node 2s — Engagement & Retention
  {
    id: 'dau_mau',
    label: 'DAU/MAU\nRatios',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'engagement_retention',
    definition:
      'Measures daily vs. monthly usage. Strong indicator of stickiness.',
  },
  {
    id: 'feature_usage',
    label: 'Feature\nEngagement',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'engagement_retention',
    definition:
      'How often core features are used. Helps prove product-market fit.',
  },

  // Positive Node 2s — Unit Economics
  {
    id: 'cac_ltv',
    label: 'CAC vs.\nLTV',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'unit_economics',
    definition:
      'Customer Acquisition Cost vs. Customer Lifetime Value. Ideally LTV is 3x CAC.',
  },
  {
    id: 'burn_rate',
    label: 'Burn Rate &\nRunway',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'unit_economics',
    definition:
      'Rate of spending vs. cash on hand. Determines how long the startup can operate before next raise.',
  },

  // Positive Node 2s — Market Size
  {
    id: 'tam_sam_som',
    label: 'TAM, SAM,\nSOM',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'market_potential',
    definition:
      'Total Addressable Market, Serviceable Available Market, and Serviceable Obtainable Market. Shows size and focus.',
  },

  // Positive Node 2s — Funding Milestones
  {
    id: 'seed_stage',
    label: 'Seed Stage\nReadiness',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'funding_stages',
    definition:
      'Product-market fit, user traction, strong team, and early revenue or engagement metrics.',
  },
  {
    id: 'series_a',
    label: 'Series A\nCriteria',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'funding_stages',
    definition:
      'Sustainable growth, solid retention, scalability, and $200K+ MRR or strong DAU/MAU growth.',
  },

  // Negative Node 1
  {
    id: 'anti_patterns',
    label: 'Funding\nAnti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Misleading, inflated, or insufficient metrics that signal unpreparedness or risk to investors.',
  },

  // Negative Node 2s
  {
    id: 'vanity_metrics',
    label: 'Vanity\nMetrics',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Metrics that look impressive but don’t reflect business viability (e.g., total downloads, likes).',
  },
  {
    id: 'growth_without_fit',
    label: 'Growth Without\nRetention',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Spending to grow users without ensuring they stick around or convert is unsustainable.',
  },
  {
    id: 'no_unit_economics',
    label: 'No Clear\nUnit Economics',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Lack of CAC, LTV, or burn metrics makes funding riskier and planning uncertain.',
  },
]

export const links = [
  { source: 'root', target: 'traction' },
  { source: 'root', target: 'engagement_retention' },
  { source: 'root', target: 'unit_economics' },
  { source: 'root', target: 'market_potential' },
  { source: 'root', target: 'funding_stages' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'traction', target: 'mrr' },
  { source: 'traction', target: 'network_effects' },

  { source: 'engagement_retention', target: 'dau_mau' },
  { source: 'engagement_retention', target: 'feature_usage' },

  { source: 'unit_economics', target: 'cac_ltv' },
  { source: 'unit_economics', target: 'burn_rate' },

  { source: 'market_potential', target: 'tam_sam_som' },

  { source: 'funding_stages', target: 'seed_stage' },
  { source: 'funding_stages', target: 'series_a' },

  { source: 'anti_patterns', target: 'vanity_metrics' },
  { source: 'anti_patterns', target: 'growth_without_fit' },
  { source: 'anti_patterns', target: 'no_unit_economics' },
]
