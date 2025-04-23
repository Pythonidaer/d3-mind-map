// mindMapData.js
import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Anti-Patterns',
    definition: 'Common mistakes and bad practices in TypeScript development',
    shape: 'roundRect',
    color: 'root',
  },
  {
    id: 'overusing_any',
    label: 'Overusing Any',
    definition: 'Relying on the any type undermines static type safety',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'ignoring_errors',
    label: 'Ignoring Errors',
    definition:
      'Suppressing or overlooking compiler warnings instead of fixing root causes',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'mixing_modules_namespaces',
    label: 'Mixing Modules &\nNamespaces',
    definition:
      'Inconsistent code organization leads to confusion in module resolution',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'overcomplicating_types',
    label: 'Overcomplicating \nTypes',
    definition:
      'Creating overly complex type definitions that hinder readability and maintenance',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  {
    id: 'disabled_strict_mode',
    label: 'Disabled\nStrict Mode',
    definition: 'Turning off strict compiler options to bypass type errors',
    shape: 'hexagon',
    color: 'nodeNegative1',
  },
  // Level 2: Children of Ignoring Errors
  {
    id: 'ts_ignore_comments',
    label: 'TS-Ignore\nComments',
    definition: 'Overuse of // @ts-ignore or // @ts-nocheck to silence errors',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'unaddressed_warnings',
    label: 'Unaddressed\nWarnings',
    definition: 'Compiler warnings left unresolved accumulate technical debt',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  // Level 3: Child of TS-Ignore Comments
  {
    id: 'unchecked_runtime_failures',
    label: 'Unchecked\nRuntime Failures',
    definition: 'Errors suppressed at compile time can cause runtime crashes',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
  // Level 2: Children of Mixing Modules & Namespaces
  {
    id: 'inconsistent_imports',
    label: 'Inconsistent\nImports',
    definition:
      'Mixing ES imports and namespace imports leads to refactor risks',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  {
    id: 'global_pollution',
    label: 'Global\nPollution',
    definition:
      'Namespaces inject symbols into the global scope, affecting tree-shaking',
    shape: 'rect',
    color: 'nodeNegative2',
  },
  // Level 3: Child of Global Pollution
  {
    id: 'bundle_size_surprises',
    label: 'Bundle Size\nSurprises',
    definition: 'Unexpectedly large bundles due to global namespace retention',
    shape: 'diamond',
    color: 'nodeNegative3',
  },
]

export const links = [
  { source: 'root', target: 'overusing_any' },
  { source: 'root', target: 'ignoring_errors' },
  { source: 'root', target: 'mixing_modules_namespaces' },
  { source: 'root', target: 'overcomplicating_types' },
  { source: 'root', target: 'disabled_strict_mode' },
  // Links for Ignoring Errors
  { source: 'ignoring_errors', target: 'ts_ignore_comments' },
  { source: 'ignoring_errors', target: 'unaddressed_warnings' },
  { source: 'ts_ignore_comments', target: 'unchecked_runtime_failures' },
  // Links for Mixing Modules & Namespaces
  { source: 'mixing_modules_namespaces', target: 'inconsistent_imports' },
  { source: 'mixing_modules_namespaces', target: 'global_pollution' },
  { source: 'global_pollution', target: 'bundle_size_surprises' },
]

export default { nodes, links }
