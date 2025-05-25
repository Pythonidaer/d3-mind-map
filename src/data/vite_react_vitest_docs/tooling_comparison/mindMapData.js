import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Tooling &\nPlatforms',
    definition:
      'Comparison of documentation generators and site frameworks for publishing developer-facing content.',
    color: 'root',
    shape: 'roundRect'
  },

  // Docusaurus
  {
    id: 'docusaurus',
    label: 'Docusaurus',
    definition:
      'React-based static site generator with built-in versioning, sidebar nav, plugins, and support for MDX content.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'docusaurus_features',
    label: 'Features &\nCustomization',
    definition:
      'Supports custom themes, plugin-based architecture, i18n, Algolia search, and code highlighting.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'docusaurus_versioning',
    label: 'Versioning &\nDeployment',
    definition:
      'Includes docs versioning out of the box. Easy deployment to GitHub Pages, Netlify, or custom domains.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'docusaurus_fit',
    label: 'Best for\nInternal Docs',
    definition:
      'Ideal for teams building multi-version documentation portals with React/MDX content.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Docz
  {
    id: 'docz',
    label: 'Docz',
    definition:
      'Zero-config documentation toolkit for documenting React components using MDX. Built on Gatsby.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'docz_props',
    label: 'Component\nDocs',
    definition:
      'Includes live previews, PropTypes tables, and interactive code blocks. Designed for UI libraries.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'docz_limitations',
    label: 'Limitations &\nMaintenance',
    definition:
      'Less active community and limited SSG flexibility. Not suited for large doc sites.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'docz_use_case',
    label: 'Best for\nComponent Teams',
    definition:
      'Good for documenting small to medium React libraries where live editing is a priority.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // VitePress
  {
    id: 'vitepress',
    label: 'VitePress',
    definition:
      'Vue-powered documentation site generator from the Vite team. Lightweight, fast, and Markdown-first.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'vitepress_speed',
    label: 'Speed &\nBundle Size',
    definition:
      'Optimized for small output size and fast build performance. Ideal for minimal setups.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'vitepress_react',
    label: 'Using with\nReact',
    definition:
      'React components can be embedded via wrappers despite VitePress being Vue-native.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'vitepress_use_case',
    label: 'Best for\nVite Ecosystems',
    definition:
      'Ideal for projects built with Vite that prioritize speed and Markdown simplicity.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Storybook
  {
    id: 'storybook',
    label: 'Storybook',
    definition:
      'Interactive component explorer and documentation builder for UI libraries.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'storybook_isolation',
    label: 'UI\nIsolation',
    definition:
      'Showcase and test UI components in isolation with adjustable props and states.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'storybook_docs',
    label: 'Docs Mode &\nMDX',
    definition:
      'Combine stories with Markdown or MDX to generate documentation alongside previews.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'storybook_use_case',
    label: 'Best for\nDesign Systems',
    definition:
      'Ideal for documenting shared components and design patterns in multi-framework teams.',
    color: 'nodePositive2',
    shape: 'rect'
  },

  // Code-Based Generators
  {
    id: 'doc_generators',
    label: 'Documentation\nGenerators',
    definition:
      'Tools that extract structured documentation directly from source code comments or tests.',
    color: 'nodePositive1',
    shape: 'ellipse'
  },
  {
    id: 'jsdoc',
    label: 'JSDoc',
    definition:
      'Comment-driven documentation generator for JavaScript projects. Outputs HTML or Markdown.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'typedoc',
    label: 'Typedoc',
    definition:
      'Documentation generator for TypeScript codebases. Leverages static types for better output accuracy.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'tsdoc',
    label: 'TSDoc',
    definition:
      'Standardized comment format for TypeScript tooling. Used as a convention for Typedoc-compatible output.',
    color: 'nodePositive2',
    shape: 'rect'
  },
  {
    id: 'testdoc',
    label: 'Testdoc',
    definition:
      'Converts test names and structures into Markdown or spec-style documentation files.',
    color: 'nodePositive2',
    shape: 'rect'
  }
];

export const links = [
  { source: 'root', target: 'docusaurus' },
  { source: 'docusaurus', target: 'docusaurus_features' },
  { source: 'docusaurus', target: 'docusaurus_versioning' },
  { source: 'docusaurus', target: 'docusaurus_fit' },

  { source: 'root', target: 'docz' },
  { source: 'docz', target: 'docz_props' },
  { source: 'docz', target: 'docz_limitations' },
  { source: 'docz', target: 'docz_use_case' },

  { source: 'root', target: 'vitepress' },
  { source: 'vitepress', target: 'vitepress_speed' },
  { source: 'vitepress', target: 'vitepress_react' },
  { source: 'vitepress', target: 'vitepress_use_case' },

  { source: 'root', target: 'storybook' },
  { source: 'storybook', target: 'storybook_isolation' },
  { source: 'storybook', target: 'storybook_docs' },
  { source: 'storybook', target: 'storybook_use_case' },

  { source: 'root', target: 'doc_generators' },
  { source: 'doc_generators', target: 'jsdoc' },
  { source: 'doc_generators', target: 'typedoc' },
  { source: 'doc_generators', target: 'tsdoc' },
  { source: 'doc_generators', target: 'testdoc' }
];
