import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Detailed\nRequirements',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Specific website components and assets needed for launch, covering technical, visual, and functional inputs from the client.',
  },

  {
    id: 'domain_name',
    label: 'Domain\nName',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Determine if the client owns a domain or needs help securing one, and assess naming preferences and registrar knowledge.',
    parent: 'root',
  },
  {
    id: 'logo_branding',
    label: 'Logo &\nBranding',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Ask if a logo exists and whether brand guidelines like color schemes, fonts, or moodboards are available or needed.',
    parent: 'root',
  },
  {
    id: 'content_messaging',
    label: 'Content &\nMessaging',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Understand what written content is available and whether the client needs copywriting support for service pages, bios, or taglines.',
    parent: 'root',
  },
  {
    id: 'imagery_visuals',
    label: 'Imagery &\nVisuals',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Clarify whether they have photographs of their work or team, and if stock images or a photoshoot are necessary.',
    parent: 'root',
  },
  {
    id: 'site_functionality',
    label: 'Website\nFunctionality',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Ask about specific feature needs: quote forms, maps, testimonials, image galleries, or future enhancements.',
    parent: 'root',
  },
  {
    id: 'design_preferences',
    label: 'Design\nPreferences',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Gather visual references, color preferences, layout ideas, and emotional tone to guide the design process.',
    parent: 'root',
  },
]

export const links = [
  { source: 'root', target: 'domain_name' },
  { source: 'root', target: 'logo_branding' },
  { source: 'root', target: 'content_messaging' },
  { source: 'root', target: 'imagery_visuals' },
  { source: 'root', target: 'site_functionality' },
  { source: 'root', target: 'design_preferences' },
]
