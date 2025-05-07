import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Web Performance\nOptimization Summary',
    shape: 'roundRect',
    color: 'root',
    definition:
      'A full-stack synthesis of frontend, backend, and data-layer strategies to build fast, responsive, and scalable applications.',
  },

  // LEVEL 1 – Primary Categories
  {
    id: 'frontend',
    label: 'Frontend\nPerformance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Optimizing what users directly interact with: rendering, responsiveness, layout, and load speed.',
    parent: 'root',
  },
  {
    id: 'javascript',
    label: 'JavaScript\nExecution',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Reducing script size and execution time using code splitting, lazy loading, and tree shaking.',
    parent: 'root',
  },
  {
    id: 'react',
    label: 'React-Specific\nOptimizations',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Improving performance in React apps with memoization, lazy components, and controlled re-renders.',
    parent: 'root',
  },
  {
    id: 'rendering',
    label: 'Efficient\nRendering',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Techniques like list virtualization and conditional rendering to reduce unnecessary DOM updates.',
    parent: 'root',
  },
  {
    id: 'assets',
    label: 'Frontend\nAssets',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Optimizing images, CSS, and font delivery using compression, formats like WebP, and deferral strategies.',
    parent: 'root',
  },
  {
    id: 'backend',
    label: 'Backend\nPerformance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Server-side speed improvements via SSR, SSG, caching, and request handling techniques.',
    parent: 'root',
  },
  {
    id: 'database',
    label: 'Database\nPerformance',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Query optimization, indexing, schema design, and choosing the right DB type for workload efficiency.',
    parent: 'root',
  },
  {
    id: 'conclusion',
    label: 'Best Practices\n& Conclusion',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'A unified performance philosophy: test, measure, collaborate, and optimize across the stack.',
    parent: 'root',
  },

  // LEVEL 2 – Subcategories under Frontend
  {
    id: 'crp',
    label: 'Critical\nRendering Path',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Sequence from HTML parsing to paint. Optimize DOM, CSSOM, layout, and rendering steps.',
    parent: 'frontend',
  },
  {
    id: 'lazy_loading',
    label: 'Lazy\nLoading',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Defers off-screen assets (images, components) using IntersectionObserver or loading="lazy".',
    parent: 'frontend',
  },

  // LEVEL 2 – Subcategories under JavaScript
  {
    id: 'code_splitting',
    label: 'Code\nSplitting',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Break up large JS bundles so only what’s needed is loaded.',
    parent: 'javascript',
  },
  {
    id: 'tree_shaking',
    label: 'Tree\nShaking',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Removes unused JS during build using named exports and static analysis.',
    parent: 'javascript',
  },

  // LEVEL 2 – Subcategories under React
  {
    id: 'memoization',
    label: 'Memoization\n(useMemo/useCallback)',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Prevent re-renders or recalculations unless dependencies change.',
    parent: 'react',
  },
  {
    id: 'react_memo',
    label: 'React.memo\nand PureComponent',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Avoid re-rendering React components that receive the same props.',
    parent: 'react',
  },

  // LEVEL 2 – Subcategories under Rendering
  {
    id: 'virtualization',
    label: 'List\nVirtualization',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Render only visible portions of long lists to reduce DOM load.',
    parent: 'rendering',
  },

  // LEVEL 2 – Subcategories under Assets
  {
    id: 'image_webp',
    label: 'WebP &\nResponsive Images',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use modern formats and serve size-appropriate images via srcset or <picture>.',
    parent: 'assets',
  },
  {
    id: 'critical_css',
    label: 'Critical CSS\nInlining',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Inline above-the-fold CSS to reduce render-blocking.',
    parent: 'assets',
  },

  // LEVEL 2 – Backend
  {
    id: 'ssr_ssg',
    label: 'SSR / SSG\nStrategies',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Render HTML on the server or at build time to speed first paint and SEO.',
    parent: 'backend',
  },
  {
    id: 'caching',
    label: 'Server-Side\nCaching',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Reduce repeated processing by caching HTML, fragments, or API responses.',
    parent: 'backend',
  },

  // LEVEL 2 – Database
  {
    id: 'query_optimization',
    label: 'Query\nOptimization',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use SELECT fields, indexes, and optimized joins to reduce latency.',
    parent: 'database',
  },
  {
    id: 'schema_design',
    label: 'Schema\nDesign',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Design DB structure for scalability, normalization, or denormalization as needed.',
    parent: 'database',
  },

  // LEVEL 2 – Conclusion
  {
    id: 'test_and_measure',
    label: 'Test and\nMeasure Everything',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Use DevTools, Lighthouse, WebPageTest, or custom metrics before and after changes.',
    parent: 'conclusion',
  },
  {
    id: 'cross_team',
    label: 'Cross-Team\nCollaboration',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Performance is shared by frontend, backend, and infrastructure teams.',
    parent: 'conclusion',
  },
  {
    id: 'avoid_guessing',
    label: 'Avoid Blind\nOptimization',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Do not optimize based on assumptions—always benchmark and test impact.',
    parent: 'conclusion',
  },
];

export const links = [
  { source: 'root', target: 'frontend' },
  { source: 'root', target: 'javascript' },
  { source: 'root', target: 'react' },
  { source: 'root', target: 'rendering' },
  { source: 'root', target: 'assets' },
  { source: 'root', target: 'backend' },
  { source: 'root', target: 'database' },
  { source: 'root', target: 'conclusion' },

  { source: 'frontend', target: 'crp' },
  { source: 'frontend', target: 'lazy_loading' },

  { source: 'javascript', target: 'code_splitting' },
  { source: 'javascript', target: 'tree_shaking' },

  { source: 'react', target: 'memoization' },
  { source: 'react', target: 'react_memo' },

  { source: 'rendering', target: 'virtualization' },

  { source: 'assets', target: 'image_webp' },
  { source: 'assets', target: 'critical_css' },

  { source: 'backend', target: 'ssr_ssg' },
  { source: 'backend', target: 'caching' },

  { source: 'database', target: 'query_optimization' },
  { source: 'database', target: 'schema_design' },

  { source: 'conclusion', target: 'test_and_measure' },
  { source: 'conclusion', target: 'cross_team' },
  { source: 'conclusion', target: 'avoid_guessing' },
];
