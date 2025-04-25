import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'UI Component Libraries',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Pre-built UI frameworks and design systems that accelerate frontend development with reusable, styled components.',
  },
  // React Bootstrap
  {
    id: 'react_bootstrap',
    label: 'React Bootstrap',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'React components styled using Bootstrap classes for rapid UI development.',
  },
  {
    id: 'react_bootstrap_pros',
    label: 'Pros of\nReact Bootstrap',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'react_bootstrap',
    definition:
      'Familiar design system, easy onboarding, responsive by default.',
  },
  {
    id: 'react_bootstrap_cons',
    label: 'Cons of\nReact Bootstrap',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'react_bootstrap',
    definition:
      "Limited customization without overriding Bootstrap's default theming.",
  },

  // Tailwind CSS
  {
    id: 'tailwind_css',
    label: 'Tailwind CSS',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A utility-first CSS framework that enables custom designs by composing small styling classes.',
  },
  {
    id: 'tailwind_benefits',
    label: 'Benefits of\nTailwind',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'tailwind_css',
    definition:
      'Customizable designs, minimal CSS bloat (with purging), fast development cycle.',
  },
  {
    id: 'tailwind_challenges',
    label: 'Challenges of\nTailwind',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'tailwind_css',
    definition:
      'Learning curve for utility classes, potential messy markup if not organized.',
  },

  // Material UI (MUI)
  {
    id: 'material_ui',
    label: 'Material UI (MUI)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'A React component library implementing Google’s Material Design, offering customizable, accessible UI components.',
  },
  {
    id: 'mui_strengths',
    label: 'Strengths of\nMaterial UI',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'material_ui',
    definition:
      'Rich component ecosystem, theme customization, accessibility focused.',
  },
  {
    id: 'mui_weaknesses',
    label: 'Weaknesses of\nMaterial UI',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'material_ui',
    definition:
      'Can be heavy if not tree-shaken, complex theming overrides for deep customizations.',
  },

  // Next.js UI integration considerations
  {
    id: 'nextjs_ui_integration',
    label: 'Next.js\nIntegration Notes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition:
      'Important considerations when integrating UI libraries into Next.js apps.',
  },
  {
    id: 'css_import',
    label: 'Global CSS\nImports',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nextjs_ui_integration',
    definition:
      'Libraries like Bootstrap require global CSS imports in _app.js or layout.js.',
  },
  {
    id: 'ssr_issues',
    label: 'Handling SSR\nIssues',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nextjs_ui_integration',
    definition:
      'Libraries must be compatible with server-side rendering to avoid hydration mismatches (e.g., MUI with AppRouterCacheProvider).',
  },

  // Pitfalls
  {
    id: 'ui_libraries_pitfalls',
    label: 'UI Libraries\nPitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition:
      'Common mistakes when using component libraries improperly or excessively.',
  },
  {
    id: 'bundle_bloat',
    label: 'Bundle\nBloat',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ui_libraries_pitfalls',
    definition:
      'Importing full libraries rather than selectively importing components increases bundle size.',
  },
  {
    id: 'overcustomization',
    label: 'Over-Customization\nProblems',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ui_libraries_pitfalls',
    definition:
      'Overriding deep styles excessively can create maintainability and upgrade issues.',
  },
  {
    id: 'accessibility_neglect',
    label: 'Ignoring\nAccessibility',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'ui_libraries_pitfalls',
    definition:
      'Overriding or improperly modifying components can accidentally break accessibility features like keyboard navigation and screen readers.',
  },
]

export const links = [
  // Core branches
  { source: 'root', target: 'react_bootstrap' },
  { source: 'root', target: 'tailwind_css' },
  { source: 'root', target: 'material_ui' },
  { source: 'root', target: 'nextjs_ui_integration' },
  { source: 'root', target: 'ui_libraries_pitfalls' },

  // React Bootstrap children
  { source: 'react_bootstrap', target: 'react_bootstrap_pros' },
  { source: 'react_bootstrap', target: 'react_bootstrap_cons' },

  // Tailwind CSS children
  { source: 'tailwind_css', target: 'tailwind_benefits' },
  { source: 'tailwind_css', target: 'tailwind_challenges' },

  // MUI children
  { source: 'material_ui', target: 'mui_strengths' },
  { source: 'material_ui', target: 'mui_weaknesses' },

  // Next.js integration clarifications
  { source: 'nextjs_ui_integration', target: 'css_import' },
  { source: 'nextjs_ui_integration', target: 'ssr_issues' },

  // Pitfalls elaborations
  { source: 'ui_libraries_pitfalls', target: 'bundle_bloat' },
  { source: 'ui_libraries_pitfalls', target: 'overcustomization' },
  { source: 'ui_libraries_pitfalls', target: 'accessibility_neglect' },
]
