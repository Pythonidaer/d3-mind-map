import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Project\nDiscussion Best Practices',
    shape: 'roundRect',
    color: 'root',
    definition: 'How to effectively communicate website needs, pricing, and scope with a freelance developer or agency.',
  },

  // Scoping
  {
    id: 'scoping',
    label: 'Project\nScoping',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'The process of outlining what the website needs to do, who it’s for, and how it should look and function.',
    parent: 'root',
  },
  {
    id: 'communication_channels',
    label: 'Communication\nChannels',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Agree on how and how often you’ll talk—email, video calls, shared docs, etc.',
    parent: 'scoping',
  },
  {
    id: 'project_brief',
    label: 'Detailed Project\nBrief',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Summarize goals, audience, design ideas, pages, features, and brand preferences in writing.',
    parent: 'scoping',
  },
  {
    id: 'clarifying_questions',
    label: 'Clarifying\nQuestions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Ask targeted questions to uncover hidden requirements, constraints, or expectations.',
    parent: 'scoping',
  },

  // Managing Change
  {
    id: 'handling_changes',
    label: 'Handling\nScope Changes',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'How to adjust pricing and expectations when the client requests something new mid-project.',
    parent: 'root',
  },
  {
    id: 'change_policy',
    label: 'Change\nPolicy',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Define how new features or edits are billed—hourly, fixed add-ons, or re-scoping.',
    parent: 'handling_changes',
  },
  {
    id: 'change_requests',
    label: 'Formal Change\nRequests',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use written approval or forms to track changes so expectations stay aligned.',
    parent: 'handling_changes',
  },

  // Pricing Transparency
  {
    id: 'pricing',
    label: 'Pricing\nTransparency',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Strategies to make pricing understandable and trustworthy to clients.',
    parent: 'root',
  },
  {
    id: 'simple_explanations',
    label: 'Simple\nExplanations',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Avoid jargon and explain what the client is paying for in clear terms.',
    parent: 'pricing',
  },
  {
    id: 'tiered_pricing',
    label: 'Tiered\nOptions',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Offer multiple pricing levels with varying features or support.',
    parent: 'pricing',
  },
  {
    id: 'use_scenarios',
    label: 'Use\nScenarios',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Illustrate each pricing tier with real-world examples or case studies.',
    parent: 'pricing',
  },

  // Anti-Patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Common mistakes when defining or discussing project requirements and pricing.',
    parent: 'root',
  },
  {
    id: 'no_scope',
    label: 'No Written\nScope',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Skipping a clear project brief leads to misalignment, rework, and pricing confusion.',
    parent: 'anti_patterns',
  },
  {
    id: 'avoiding_pricing',
    label: 'Avoiding\nPricing Talks',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Failing to talk clearly about cost leads to sticker shock and broken trust.',
    parent: 'anti_patterns',
  },
]

export const links = [
  { source: 'root', target: 'scoping' },
  { source: 'scoping', target: 'communication_channels' },
  { source: 'scoping', target: 'project_brief' },
  { source: 'scoping', target: 'clarifying_questions' },

  { source: 'root', target: 'handling_changes' },
  { source: 'handling_changes', target: 'change_policy' },
  { source: 'handling_changes', target: 'change_requests' },

  { source: 'root', target: 'pricing' },
  { source: 'pricing', target: 'simple_explanations' },
  { source: 'pricing', target: 'tiered_pricing' },
  { source: 'pricing', target: 'use_scenarios' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'no_scope' },
  { source: 'anti_patterns', target: 'avoiding_pricing' },
]
