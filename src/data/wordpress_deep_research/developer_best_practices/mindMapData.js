import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Developer\nBest Practices',
    shape: 'roundRect',
    color: 'root',
    definition: 'Essential principles and workflows that WordPress developers should follow to ensure clean, secure, scalable, and maintainable code across themes, plugins, and custom projects.',
  },

  // Positive Level 1
  {
    id: 'structure_naming',
    label: 'Structure &\nNaming Conventions',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Consistent naming and organized folder structures improve collaboration and reduce confusion in themes and plugins.',
  },
  {
    id: 'clean_code',
    label: 'Clean Code\n& Reusability',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Writing readable, maintainable, and reusable code aligned with WordPress and PHP standards.',
  },
  {
    id: 'debugging',
    label: 'Debugging\nTechniques',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Using built-in WP constants, browser dev tools, and plugins to troubleshoot and resolve issues during development.',
  },
  {
    id: 'documentation_handoff',
    label: 'Documentation\n& Handoff',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Providing clear written guides and onboarding documents for clients or teams to use, manage, and maintain the final product.',
  },

  // Positive Level 2: Structure & Naming
  {
    id: 'theme_structure',
    label: 'Theme Folder\nStructure',
    parent: 'structure_naming',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Organizing files inside themes using logical folders: template-parts, assets, includes, etc.',
  },
  {
    id: 'file_naming',
    label: 'Consistent\nFile Naming',
    parent: 'structure_naming',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use lowercase-hyphenated naming (e.g., single-post.php, enqueue-scripts.js) to improve clarity and prevent conflicts.',
  },

  // Positive Level 2: Clean Code
  {
    id: 'wp_standards',
    label: 'WordPress\nCoding Standards',
    parent: 'clean_code',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Following WP coding standards for PHP, JS, and CSS ensures compatibility and professional code.',
  },
  {
    id: 'modularity',
    label: 'Modular\nFunctions',
    parent: 'clean_code',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Break functions into smaller parts and avoid duplicate logic across templates or plugins.',
  },

  // Positive Level 2: Debugging
  {
    id: 'wp_debug',
    label: 'WP_DEBUG &\nLogging',
    parent: 'debugging',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use WP_DEBUG and WP_DEBUG_LOG in wp-config.php to capture PHP errors and warnings in development.',
  },
  {
    id: 'browser_devtools',
    label: 'Browser Dev\nTools',
    parent: 'debugging',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Use browser developer tools to inspect HTML, CSS, and JS issues during frontend development.',
  },

  // Positive Level 2: Docs & Handoff
  {
    id: 'readme_docs',
    label: 'README Files\n& Code Comments',
    parent: 'documentation_handoff',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Every plugin or theme should include a README explaining features, setup, and usage. Inline comments help too.',
  },
  {
    id: 'client_training',
    label: 'Client Training\n& Admin Notes',
    parent: 'documentation_handoff',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Provide training docs or videos, and leave helpful WP Admin notes or tooltips for long-term use.',
  },

  // Negative
  {
    id: 'cons',
    label: 'Cons',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Challenges and risks when best practices are ignored or rushed.',
  },
  {
    id: 'spaghetti_code',
    label: 'Spaghetti\nCode',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Unstructured, unscalable code that’s hard to debug, test, or maintain.',
  },
  {
    id: 'hardcoded_paths',
    label: 'Hardcoded\nURLs or Paths',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Avoid using full URLs or absolute paths; use WP functions to remain portable and scalable.',
  },
  {
    id: 'no_comments',
    label: 'No Comments\nor Docs',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Codebases without any documentation, inline comments, or setup instructions make collaboration and handoff painful.',
  },
]

export const links = [
  { source: 'root', target: 'structure_naming' },
  { source: 'root', target: 'clean_code' },
  { source: 'root', target: 'debugging' },
  { source: 'root', target: 'documentation_handoff' },
  { source: 'root', target: 'cons' },

  { source: 'structure_naming', target: 'theme_structure' },
  { source: 'structure_naming', target: 'file_naming' },

  { source: 'clean_code', target: 'wp_standards' },
  { source: 'clean_code', target: 'modularity' },

  { source: 'debugging', target: 'wp_debug' },
  { source: 'debugging', target: 'browser_devtools' },

  { source: 'documentation_handoff', target: 'readme_docs' },
  { source: 'documentation_handoff', target: 'client_training' },

  { source: 'cons', target: 'spaghetti_code' },
  { source: 'cons', target: 'hardcoded_paths' },
  { source: 'cons', target: 'no_comments' },
]
