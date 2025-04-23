// mindMapData.js
import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Best\nPractices',
    definition: 'Guidelines for effective TypeScript projects',
    shape: 'roundRect',
    color: 'root',
  },

  {
    id: 'module_organization',
    label: 'Module\nOrganization',
    definition:
      'Group code by feature or domain for clarity and separation of concerns',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'naming_conventions',
    label: 'Naming\nConventions',
    definition:
      'Use consistent and descriptive names for files, classes, functions, and types',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'barrel_files',
    label: 'Barrel\nFiles',
    definition: 'Use index.ts to re-export modules for simpler imports',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'monorepo',
    label: 'Monorepo',
    definition:
      'Consider monorepo for shared code and easier dependency management',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'linting_formatting',
    label: 'Linting &\nFormatting',
    definition: 'Enforce consistent styling with ESLint and Prettier',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'error_handling',
    label: 'Error\nHandling',
    definition:
      'Define custom error types and use try-catch for robust error management',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'strict_settings',
    label: 'Strict\nSettings',
    definition:
      'Enable strictOptions in tsconfig.json (strictNullChecks, noImplicitAny) to catch more issues',
    shape: 'ellipse',
    color: 'nodePositive1',
  },
  {
    id: 'documentation',
    label: 'Documentation',
    definition: 'Use TSDoc comments to document APIs and types',
    shape: 'ellipse',
    color: 'nodePositive1',
  },

  // Level 2
  {
    id: 'feature_folders',
    label: 'Feature-First\nFolders',
    definition: 'Structure code by domain (e.g., users/, auth/, posts/)',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'filename_conventions',
    label: 'File Naming\nConventions',
    definition:
      'Use kebab-case or camelCase consistently for files and folders',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'eslint_rules',
    label: 'Custom ESLint\nRules',
    definition:
      'Use custom rules to enforce architectural and coding guidelines',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'prettier_hooks',
    label: 'Prettier\nHooks',
    definition: 'Format code on commit using Husky or lint-staged',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'custom_errors',
    label: 'Custom\nErrors',
    definition: 'Extend Error class to create domain-specific error types',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'try_catch_patterns',
    label: 'Try-Catch\nPatterns',
    definition: 'Apply consistent error boundaries around risky operations',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tsconfig_best',
    label: 'tsconfig\nBest Practices',
    definition: 'Recommended flags: strict, noImplicitAny, noUnusedLocals',
    shape: 'rect',
    color: 'nodePositive2',
  },
  {
    id: 'tsdoc_examples',
    label: 'TSDoc\nExamples',
    definition:
      'Use /** @param */ and /** @returns */ to describe function behavior',
    shape: 'rect',
    color: 'nodePositive2',
  },

  // Level 3
  {
    id: 'error_union_types',
    label: 'Union\nError Types',
    definition:
      'Model app-level errors with union types (e.g., NetworkError | AuthError)',
    shape: 'diamond',
    color: 'nodePositive3',
  },
  {
    id: 'scoped_barrel_files',
    label: 'Scoped\nBarrels',
    definition: 'Group index.ts files per domain to maintain modularity',
    shape: 'diamond',
    color: 'nodePositive3',
  },
]

export const links = [
  { source: 'root', target: 'module_organization' },
  { source: 'root', target: 'naming_conventions' },
  { source: 'root', target: 'barrel_files' },
  { source: 'root', target: 'monorepo' },
  { source: 'root', target: 'linting_formatting' },
  { source: 'root', target: 'error_handling' },
  { source: 'root', target: 'strict_settings' },
  { source: 'root', target: 'documentation' },

  { source: 'module_organization', target: 'feature_folders' },
  { source: 'naming_conventions', target: 'filename_conventions' },
  { source: 'linting_formatting', target: 'eslint_rules' },
  { source: 'linting_formatting', target: 'prettier_hooks' },
  { source: 'error_handling', target: 'custom_errors' },
  { source: 'error_handling', target: 'try_catch_patterns' },
  { source: 'error_handling', target: 'error_union_types' },
  { source: 'strict_settings', target: 'tsconfig_best' },
  { source: 'documentation', target: 'tsdoc_examples' },
  { source: 'barrel_files', target: 'scoped_barrel_files' },
]

export default { nodes, links }
