import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Branding &\nUI Strategy',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Unified visual identity and communication design that makes startups recognizable, memorable, and trustworthy to users.',
  },

  // Positive Node 1s
  {
    id: 'visual_identity',
    label: 'Visual\nIdentity',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'The visual representation of a brand through logos, color palettes, typography, and imagery.',
  },
  {
    id: 'tone_voice',
    label: 'Tone &\nMessaging',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'The personality and voice of the brand communicated through copy, taglines, and storytelling.',
  },
  {
    id: 'ui_alignment',
    label: 'UI-Brand\nAlignment',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Ensuring interface elements reflect the startup’s brand values and identity through consistent design.',
  },
  {
    id: 'style_guides',
    label: 'Design\nSystems',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A documented system of reusable components and brand rules that maintain visual consistency.',
  },

  // Positive Node 2s — Visual Identity
  {
    id: 'logo_design',
    label: 'Logo\nDesign',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'visual_identity',
    definition:
      'A memorable and scalable mark that visually anchors the brand.',
  },
  {
    id: 'color_palette',
    label: 'Color\nPalette',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'visual_identity',
    definition:
      'A curated set of brand colors that evoke emotion and support recognition.',
  },
  {
    id: 'typography',
    label: 'Brand\nTypography',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'visual_identity',
    definition:
      'A consistent font system for headings, body text, and CTAs, enhancing readability and brand voice.',
  },

  // Positive Node 2s — Tone & Messaging
  {
    id: 'value_proposition',
    label: 'Value\nProposition',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tone_voice',
    definition:
      'A clear statement of what your startup offers, why it matters, and who it’s for.',
  },
  {
    id: 'brand_story',
    label: 'Brand\nStory',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tone_voice',
    definition:
      'Narrative that explains your origin, mission, and what makes you different.',
  },
  {
    id: 'mission_values',
    label: 'Mission &\nValues',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tone_voice',
    definition:
      'Guiding principles that shape company culture and user perception.',
  },

  // Positive Node 2s — UI Alignment
  {
    id: 'interface_personality',
    label: 'Interface\nPersonality',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ui_alignment',
    definition:
      'Use of visuals, animation, tone, and spacing to reflect the brand’s personality in product interfaces.',
  },
  {
    id: 'brand_trust',
    label: 'Trust-\nDriven Design',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ui_alignment',
    definition:
      'Design cues such as testimonials, badges, and professionalism that signal credibility.',
  },

  // Positive Node 2s — Design Systems
  {
    id: 'component_library',
    label: 'Component\nLibrary',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'style_guides',
    definition:
      'Reusable UI components (buttons, cards, forms) styled to reflect the brand.',
  },
  {
    id: 'usage_guidelines',
    label: 'Usage\nGuidelines',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'style_guides',
    definition:
      'Rules for logo use, spacing, colors, and layouts that maintain cohesion across platforms.',
  },

  // Negative Node 1
  {
    id: 'anti_patterns',
    label: 'Branding\nAnti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common mistakes in branding and UI design that confuse users or undermine trust.',
  },

  // Negative Node 2s
  {
    id: 'inconsistent_voice',
    label: 'Inconsistent\nTone',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Shifting between formal and casual or different writing styles without clarity or purpose.',
  },
  {
    id: 'visual_disjoint',
    label: 'Visual\nMismatch',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Using fonts, colors, or imagery that contradict the brand personality or confuse the user.',
  },
  {
    id: 'no_systems',
    label: 'No\nDesign System',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition:
      'Lack of a central guide results in inconsistent UI, duplicated effort, and brand dilution.',
  },
]

export const links = [
  { source: 'root', target: 'visual_identity' },
  { source: 'root', target: 'tone_voice' },
  { source: 'root', target: 'ui_alignment' },
  { source: 'root', target: 'style_guides' },
  { source: 'root', target: 'anti_patterns' },

  { source: 'visual_identity', target: 'logo_design' },
  { source: 'visual_identity', target: 'color_palette' },
  { source: 'visual_identity', target: 'typography' },

  { source: 'tone_voice', target: 'value_proposition' },
  { source: 'tone_voice', target: 'brand_story' },
  { source: 'tone_voice', target: 'mission_values' },

  { source: 'ui_alignment', target: 'interface_personality' },
  { source: 'ui_alignment', target: 'brand_trust' },

  { source: 'style_guides', target: 'component_library' },
  { source: 'style_guides', target: 'usage_guidelines' },

  { source: 'anti_patterns', target: 'inconsistent_voice' },
  { source: 'anti_patterns', target: 'visual_disjoint' },
  { source: 'anti_patterns', target: 'no_systems' },
]
