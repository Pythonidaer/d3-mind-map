import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Minimizing\nJavaScript Execution',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Techniques for reducing the size, frequency, and cost of JavaScript execution to improve load performance and responsiveness.',
  },

  // Level 1 - Techniques
  {
    id: 'code_splitting',
    label: 'Code\nSplitting',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Breaks large JS bundles into smaller chunks that are loaded only when needed, improving Time to Interactive.',
    parent: 'root',
  },
  {
    id: 'lazy_loading_modules',
    label: 'Lazy Loading\nModules',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Defers the loading and execution of non-critical JS until after the main content has rendered or is needed.',
    parent: 'root',
  },
  {
    id: 'tree_shaking',
    label: 'Tree\nShaking',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Removes unused code during bundling by analyzing static imports, reducing bundle size and execution time.',
    parent: 'root',
  },

  // Level 2 - Code Splitting
  {
    id: 'react_lazy',
    label: 'React.lazy +\nSuspense',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Allows dynamic import of React components with fallback UI, reducing initial render cost.',
    parent: 'code_splitting',
  },
  {
    id: 'route_based_splitting',
    label: 'Route-Based\nSplitting',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Only loads JavaScript for the route the user visits, reducing initial JS footprint.',
    parent: 'code_splitting',
  },

  // Level 2 - Lazy Loading
  {
    id: 'dynamic_imports',
    label: 'Dynamic\nImports',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Loads JS modules at runtime on demand, reducing unused JS parsing at startup.',
    parent: 'lazy_loading_modules',
  },

  // Level 2 - Tree Shaking
  {
    id: 'named_exports',
    label: 'Use\nNamed Exports',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Improves tree-shaking efficiency by making unused functions easily removable.',
    parent: 'tree_shaking',
  },
  {
    id: 'esm_libraries',
    label: 'Use ESM-\nCompatible Libraries',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Choose libraries with proper ES module exports (e.g., lodash-es) for better dead code elimination.',
    parent: 'tree_shaking',
  },

  // Level 1 - Negatives
  {
    id: 'js_bloat',
    label: 'JavaScript\nBloat',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Large JS bundles slow down parsing, increase memory usage, and delay interactivity.',
    parent: 'root',
  },
  {
    id: 'over_dynamic',
    label: 'Overusing\nDynamic Imports',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Too many dynamic chunks can create latency, break caching, and affect predictability.',
    parent: 'js_bloat',
  },
  {
    id: 'poor_exports',
    label: 'Default + Wildcard\nExports',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Using export default or wildcard imports hinders tree-shaking and keeps dead code in bundles.',
    parent: 'js_bloat',
  },
];

export const links = [
  { source: 'root', target: 'code_splitting' },
  { source: 'root', target: 'lazy_loading_modules' },
  { source: 'root', target: 'tree_shaking' },
  { source: 'root', target: 'js_bloat' },

  { source: 'code_splitting', target: 'react_lazy' },
  { source: 'code_splitting', target: 'route_based_splitting' },

  { source: 'lazy_loading_modules', target: 'dynamic_imports' },

  { source: 'tree_shaking', target: 'named_exports' },
  { source: 'tree_shaking', target: 'esm_libraries' },

  { source: 'js_bloat', target: 'over_dynamic' },
  { source: 'js_bloat', target: 'poor_exports' },
];
