import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Startup\nCase Studies',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Detailed breakdowns of successful startup launches, including early growth tactics, product validation, MVP strategies, and funding milestones.',
  },

  // Positive Node 1s
  {
    id: 'airbnb',
    label: 'Airbnb\n(2008)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Marketplace startup that disrupted hospitality through peer-to-peer lodging and high-leverage growth hacks.',
  },
  {
    id: 'dropbox',
    label: 'Dropbox\n(2007)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'File-sharing platform that scaled via viral loops, clear product value, and efficient onboarding.',
  },
  {
    id: 'slack',
    label: 'Slack\n(2013)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Team communication app that gained massive early traction through focused beta testing and workplace virality.',
  },

  // Airbnb Subnodes
  {
    id: 'airbnb_events',
    label: 'Targeted\nEvents',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'airbnb',
    definition:
      'Launched during major conferences where hotels were booked up, offering alternatives to stranded travelers.',
  },
  {
    id: 'airbnb_craigslist',
    label: 'Craigslist\nLeverage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'airbnb',
    definition:
      'Used a growth hack to auto-post listings to Craigslist, reaching users without a budget.',
  },
  {
    id: 'airbnb_images',
    label: 'Professional\nPhotos',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'airbnb',
    definition:
      'Increased trust by offering photography services to make listings visually appealing and credible.',
  },

  // Dropbox Subnodes
  {
    id: 'dropbox_referrals',
    label: 'Referral\nProgram',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'dropbox',
    definition:
      'Offered free storage for both the inviter and invitee, creating a viral feedback loop.',
  },
  {
    id: 'dropbox_demo',
    label: 'Explainer\nVideo',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'dropbox',
    definition:
      'Created a simple video showing the product to boost understanding and conversions.',
  },
  {
    id: 'dropbox_beta',
    label: 'Beta\nValidation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'dropbox',
    definition:
      'Waitlist and invite-only strategy validated interest and created scarcity-driven buzz.',
  },

  // Slack Subnodes
  {
    id: 'slack_beta',
    label: 'Closed\nBeta Launch',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'slack',
    definition:
      'Invited select teams to test and give feedback before public release.',
  },
  {
    id: 'slack_freemium',
    label: 'Freemium\nModel',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'slack',
    definition:
      'Offered full value for small teams for free, encouraging viral team-based growth.',
  },
  {
    id: 'slack_focus',
    label: 'Feature\nFocus',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'slack',
    definition:
      'Prioritized file-sharing, search, and integrations—key pain points in team communication.',
  },

  // Negative Node 1
  {
    id: 'anti_patterns',
    label: 'What Most\nStartups Miss',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Lessons from these cases that highlight what failing startups typically overlook or misunderstand.',
  },

  // Negative Node 2s
  {
    id: 'no_distribution',
    label: 'Neglecting\nDistribution',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Many founders overbuild the product and underinvest in growth channels or launch strategy.',
  },
  {
    id: 'bad_messaging',
    label: 'Unclear\nPositioning',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Failing to explain what the product does, who it’s for, or why it matters leads to confusion and drop-off.',
  },
  {
    id: 'no_validation',
    label: 'Skipping\nValidation',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Not testing with real users before launch results in wasted effort on features no one needs.',
  },
]

export const links = [
  { source: 'root', target: 'airbnb' },
  { source: 'root', target: 'dropbox' },
  { source: 'root', target: 'slack' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'airbnb', target: 'airbnb_events' },
  { source: 'airbnb', target: 'airbnb_craigslist' },
  { source: 'airbnb', target: 'airbnb_images' },

  { source: 'dropbox', target: 'dropbox_referrals' },
  { source: 'dropbox', target: 'dropbox_demo' },
  { source: 'dropbox', target: 'dropbox_beta' },

  { source: 'slack', target: 'slack_beta' },
  { source: 'slack', target: 'slack_freemium' },
  { source: 'slack', target: 'slack_focus' },

  { source: 'anti_patterns', target: 'no_distribution' },
  { source: 'anti_patterns', target: 'bad_messaging' },
  { source: 'anti_patterns', target: 'no_validation' },
]
