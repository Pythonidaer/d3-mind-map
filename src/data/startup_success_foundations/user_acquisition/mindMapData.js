import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'User\nAcquisition',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Strategies and tactics startups use to attract their first users and build momentum toward product-market fit and growth.',
  },

  // Positive Node 1s
  {
    id: 'seo',
    label: 'Search Engine\nOptimization (SEO)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Improving website visibility in organic search results by optimizing technical structure and content relevance.',
  },
  {
    id: 'social_media',
    label: 'Social Media\nMarketing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Using platforms like Twitter, LinkedIn, Instagram, or TikTok to build brand awareness, engage audiences, and drive traffic.',
  },
  {
    id: 'paid_ads',
    label: 'Paid\nAdvertising',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Paying for targeted reach via search engines or social platforms to drive traffic and conversions quickly.',
  },
  {
    id: 'content_marketing',
    label: 'Content\nMarketing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Creating blogs, videos, or guides that provide value to your audience and improve organic reach and credibility.',
  },
  {
    id: 'referral_programs',
    label: 'Referral\nPrograms',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Incentivizing existing users to invite others by offering rewards or benefits, creating viral loops.',
  },

  // Positive Node 2s — SEO
  {
    id: 'keyword_strategy',
    label: 'Keyword\nStrategy',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'seo',
    definition:
      'Targeting terms your ideal users search for and aligning content to those queries.',
  },
  {
    id: 'technical_seo',
    label: 'Technical\nSEO',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'seo',
    definition:
      'Improving crawlability, mobile performance, page speed, and metadata for better search indexing.',
  },

  // Positive Node 2s — Social Media
  {
    id: 'platform_fit',
    label: 'Platform-Audience\nFit',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'social_media',
    definition:
      'Choosing platforms based on where your ideal users spend their time (e.g. LinkedIn for B2B, TikTok for Gen Z).',
  },
  {
    id: 'community_engagement',
    label: 'Community\nEngagement',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'social_media',
    definition:
      'Liking, commenting, and conversing with users to build relationships and organic reach.',
  },

  // Positive Node 2s — Paid Ads
  {
    id: 'ad_copy',
    label: 'Effective\nAd Copy',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'paid_ads',
    definition:
      'Writing clear, value-driven text that hooks the audience and encourages action.',
  },
  {
    id: 'targeting',
    label: 'Precise\nTargeting',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'paid_ads',
    definition:
      'Narrowing ad reach by demographics, interests, and behavior to maximize ROI.',
  },

  // Positive Node 2s — Content Marketing
  {
    id: 'lead_magnets',
    label: 'Lead\nMagnets',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'content_marketing',
    definition:
      'Offering valuable resources like eBooks or templates in exchange for email signups.',
  },
  {
    id: 'distribution',
    label: 'Content\nDistribution',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'content_marketing',
    definition:
      'Sharing content across email, social, communities, and SEO channels to increase visibility.',
  },

  // Positive Node 2s — Referrals
  {
    id: 'easy_referral_flow',
    label: 'Frictionless\nReferral Flow',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'referral_programs',
    definition:
      'Simple referral mechanics embedded in the product or onboarding experience.',
  },
  {
    id: 'dual_rewards',
    label: 'Reward Referrer\nand Referred',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'referral_programs',
    definition:
      'Incentivizing both parties creates a win-win and drives more conversions.',
  },

  // Negative Node 1s
  {
    id: 'anti_patterns',
    label: 'Acquisition\nAnti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common user acquisition mistakes that waste money, stall growth, or repel users.',
  },

  // Negative Node 2s
  {
    id: 'no_targeting',
    label: 'Poor\nTargeting',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Running ads or campaigns without defining a clear target audience results in low conversion rates.',
  },
  {
    id: 'content_dumping',
    label: 'Content\nWithout Strategy',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Publishing random blogs or posts without aligning to audience interests or search intent.',
  },
  {
    id: 'ignored_referrals',
    label: 'Underused\nReferral Loops',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Failing to leverage existing users for word-of-mouth growth limits organic momentum.',
  },
]

export const links = [
  { source: 'root', target: 'seo' },
  { source: 'root', target: 'social_media' },
  { source: 'root', target: 'paid_ads' },
  { source: 'root', target: 'content_marketing' },
  { source: 'root', target: 'referral_programs' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'seo', target: 'keyword_strategy' },
  { source: 'seo', target: 'technical_seo' },

  { source: 'social_media', target: 'platform_fit' },
  { source: 'social_media', target: 'community_engagement' },

  { source: 'paid_ads', target: 'ad_copy' },
  { source: 'paid_ads', target: 'targeting' },

  { source: 'content_marketing', target: 'lead_magnets' },
  { source: 'content_marketing', target: 'distribution' },

  { source: 'referral_programs', target: 'easy_referral_flow' },
  { source: 'referral_programs', target: 'dual_rewards' },

  { source: 'anti_patterns', target: 'no_targeting' },
  { source: 'anti_patterns', target: 'content_dumping' },
  { source: 'anti_patterns', target: 'ignored_referrals' },
]
