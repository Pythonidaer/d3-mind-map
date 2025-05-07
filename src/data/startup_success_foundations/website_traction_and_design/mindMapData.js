import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Website Traction\n& Design',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Strategies and design principles for using a website to attract early users, improve engagement, and strengthen startup brand presence.',
  },

  // Positive Node 1s
  {
    id: 'usability_principles',
    label: 'Usability\nPrinciples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Core aspects of making a website functional, accessible, and easy to use across devices and demographics.',
  },
  {
    id: 'ux_focus',
    label: 'User\nExperience (UX)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Design strategies that guide how users interact with the product to achieve satisfaction and success.',
  },
  {
    id: 'ui_principles',
    label: 'User Interface\n(UI) Design',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'The visual and interactive elements of a website, including layout, colors, typography, and branding.',
  },
  {
    id: 'conversion_optimization',
    label: 'Conversion Rate\nOptimization (CRO)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Tactics to increase the percentage of visitors who complete key actions like sign-ups or purchases.',
  },
  {
    id: 'branding_consistency',
    label: 'Branding &\nConsistency',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'The integration of a startup’s visual identity, tone, and values into every aspect of the website.',
  },

  // Positive Node 2s — Usability
  {
    id: 'accessibility',
    label: 'Accessibility\nStandards',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'usability_principles',
    definition:
      'Designing sites that are usable by people with disabilities, including screen reader compatibility and keyboard navigation.',
  },
  {
    id: 'mobile_usability',
    label: 'Mobile\nUsability',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'usability_principles',
    definition:
      'Ensuring seamless functionality and readability across all screen sizes and devices.',
  },
  {
    id: 'clarity_and_readability',
    label: 'Clarity &\nReadability',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'usability_principles',
    definition:
      'Making content and navigation intuitive and easy to digest for new users.',
  },

  // Positive Node 2s — UX
  {
    id: 'lean_ux',
    label: 'Lean UX\nApproach',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ux_focus',
    definition:
      'Collaborative and iterative design practice that focuses on early validation with minimal deliverables.',
  },
  {
    id: 'onboarding_flows',
    label: 'User\nOnboarding',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ux_focus',
    definition:
      'Guided flows that help first-time users understand the product’s value and features.',
  },
  {
    id: 'responsive_behavior',
    label: 'Responsive\nDesign',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ux_focus',
    definition:
      'Adaptive layouts and components that adjust to the user’s device and context.',
  },

  // Positive Node 2s — UI
  {
    id: 'visual_consistency',
    label: 'Visual\nConsistency',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ui_principles',
    definition:
      'Repetition of layout, fonts, and UI elements to strengthen familiarity and reduce user friction.',
  },
  {
    id: 'navigation',
    label: 'Intuitive\nNavigation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ui_principles',
    definition:
      'Logical menus, internal links, and visual cues to guide users through the site easily.',
  },
  {
    id: 'content_structure',
    label: 'Content\nHierarchy',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ui_principles',
    definition:
      'Well-structured presentation of information so users can prioritize and locate content efficiently.',
  },

  // Positive Node 2s — CRO
  {
    id: 'clear_cta',
    label: 'Clear\nCTAs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'conversion_optimization',
    definition:
      'Well-placed, action-oriented buttons or links encouraging users to engage with the product.',
  },
  {
    id: 'a_b_testing',
    label: 'A/B Testing\nPractices',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'conversion_optimization',
    definition:
      'Experimenting with variants of content or layout to determine which yields better conversions.',
  },
  {
    id: 'social_proof',
    label: 'Testimonials &\nTrust Signals',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'conversion_optimization',
    definition:
      'Using reviews, client logos, or user counts to boost credibility and trust in the product.',
  },

  // Positive Node 2s — Branding
  {
    id: 'visual_identity',
    label: 'Visual\nIdentity',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'branding_consistency',
    definition:
      'Logo, typography, color palette, and imagery that form a recognizable and trustworthy brand image.',
  },
  {
    id: 'style_guides',
    label: 'Style Guide\nUsage',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'branding_consistency',
    definition:
      'Documentation of how branding should be applied across all pages and marketing materials.',
  },
  {
    id: 'tone_and_messaging',
    label: 'Tone &\nMessaging',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'branding_consistency',
    definition:
      'A consistent voice that communicates the brand’s mission, values, and appeal to its audience.',
  },

  // Negative Node 1
  {
    id: 'anti_patterns',
    label: 'Design\nAnti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common design mistakes that hinder user engagement, increase bounce rates, or cause confusion.',
  },

  // Negative Node 2s
  {
    id: 'cluttered_layouts',
    label: 'Cluttered\nLayouts',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Overuse of content, graphics, or CTAs that overwhelm users and dilute core messaging.',
  },
  {
    id: 'inconsistent_branding',
    label: 'Inconsistent\nBranding',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Using different fonts, colors, or tone across pages, weakening credibility and user trust.',
  },
  {
    id: 'slow_loading',
    label: 'Slow Page\nLoading',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Poor performance or unoptimized assets that lead to high bounce rates and reduced engagement.',
  },
]

export const links = [
  { source: 'root', target: 'usability_principles' },
  { source: 'root', target: 'ux_focus' },
  { source: 'root', target: 'ui_principles' },
  { source: 'root', target: 'conversion_optimization' },
  { source: 'root', target: 'branding_consistency' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'usability_principles', target: 'accessibility' },
  { source: 'usability_principles', target: 'mobile_usability' },
  { source: 'usability_principles', target: 'clarity_and_readability' },

  { source: 'ux_focus', target: 'lean_ux' },
  { source: 'ux_focus', target: 'onboarding_flows' },
  { source: 'ux_focus', target: 'responsive_behavior' },

  { source: 'ui_principles', target: 'visual_consistency' },
  { source: 'ui_principles', target: 'navigation' },
  { source: 'ui_principles', target: 'content_structure' },

  { source: 'conversion_optimization', target: 'clear_cta' },
  { source: 'conversion_optimization', target: 'a_b_testing' },
  { source: 'conversion_optimization', target: 'social_proof' },

  { source: 'branding_consistency', target: 'visual_identity' },
  { source: 'branding_consistency', target: 'style_guides' },
  { source: 'branding_consistency', target: 'tone_and_messaging' },

  { source: 'anti_patterns', target: 'cluttered_layouts' },
  { source: 'anti_patterns', target: 'inconsistent_branding' },
  { source: 'anti_patterns', target: 'slow_loading' },
]
