import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Full Scope\nof Storybook Features',
    definition:
      'All major capabilities that make Storybook a powerful tool: framework support, UI explorer, theming, deployment, and integrations.',
    shape: 'roundRect',
    color: 'root',
  },

  // Level 1
  {
    id: 'framework_support',
    label: 'Framework Support',
    definition:
      'Supports React, Vue, Angular, Svelte, Web Components, and more.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'ui_explorer',
    label: 'UI Explorer',
    definition:
      'Interface for browsing, testing, and interacting with components and their stories.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'addons_ecosystem',
    label: 'Addons Ecosystem',
    definition:
      'Rich library of official and community plugins that extend Storybook’s functionality.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'design_system',
    label: 'Design System\nIntegration',
    definition:
      'Helps maintain reusable, consistent UI libraries across products and teams.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'theming',
    label: 'Theming',
    definition:
      'Customize Storybook’s appearance and component previews to match brand identity.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'deployment',
    label: 'Deployment',
    definition:
      'Can be deployed as static site to Netlify, Vercel, GitHub Pages, or Chromatic.',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2 - Framework Support
  {
    id: 'frameworks_common',
    label: 'Popular Frameworks',
    definition:
      'Supports React, Vue, Angular, Svelte, SolidJS, Web Components.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'frameworks_flexibility',
    label: 'Architecture Flexibility',
    definition: 'Can be adopted in monorepos or microfrontend architectures.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - UI Explorer
  {
    id: 'explorer_sidebar',
    label: 'Sidebar Navigation',
    definition:
      'Organizes components by folder/title structure for quick access.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'explorer_controls',
    label: 'Story Controls Panel',
    definition: 'Displays component preview and interactive controls for Args.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Addons Ecosystem
  {
    id: 'addons_official',
    label: 'Official Addons',
    definition:
      'Controls, Docs, Actions, Viewport, a11y, Interactions, and more.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'addons_custom',
    label: 'Custom Addons',
    definition: 'Teams can build and maintain their own plugins.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Design System
  {
    id: 'design_tokens',
    label: 'Tokens & Guidelines',
    definition: 'Supports documentation of design tokens and usage rules.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'figma_integration',
    label: 'Figma Sync',
    definition:
      'Embed Storybook in Figma or vice versa for design-code collaboration.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Theming
  {
    id: 'theme_custom_ui',
    label: 'Custom UI Themes',
    definition: 'Override sidebar, background, typography, and branding.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'theme_switcher',
    label: 'Theme Switcher Addon',
    definition: 'Allows toggling between light/dark mode or custom themes.',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 2 - Deployment
  {
    id: 'static_site',
    label: 'Static Site Export',
    definition: 'Builds Storybook into shareable HTML/CSS/JS.',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'chromatic_features',
    label: 'Chromatic Features',
    definition:
      'Offers CI, publishing, and UI review workflows built for Storybook.',
    shape: 'rect',
    color: 'nodePositive2',
  },
]

export const links = [
  { source: 'root', target: 'framework_support' },
  { source: 'root', target: 'ui_explorer' },
  { source: 'root', target: 'addons_ecosystem' },
  { source: 'root', target: 'design_system' },
  { source: 'root', target: 'theming' },
  { source: 'root', target: 'deployment' },

  { source: 'framework_support', target: 'frameworks_common' },
  { source: 'framework_support', target: 'frameworks_flexibility' },

  { source: 'ui_explorer', target: 'explorer_sidebar' },
  { source: 'ui_explorer', target: 'explorer_controls' },

  { source: 'addons_ecosystem', target: 'addons_official' },
  { source: 'addons_ecosystem', target: 'addons_custom' },

  { source: 'design_system', target: 'design_tokens' },
  { source: 'design_system', target: 'figma_integration' },

  { source: 'theming', target: 'theme_custom_ui' },
  { source: 'theming', target: 'theme_switcher' },

  { source: 'deployment', target: 'static_site' },
  { source: 'deployment', target: 'chromatic_features' },
]
