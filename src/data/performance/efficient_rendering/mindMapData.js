import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Efficient Frontend\nRendering Techniques',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Advanced strategies to improve responsiveness and visual performance in frontend applications by reducing DOM complexity, execution overhead, and unnecessary rendering.',
  },

  // Level 1 Positives
  {
    id: 'list_virtualization',
    label: 'List\nVirtualization',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Only renders visible items in long lists to reduce memory and DOM load, improving scroll performance.',
    parent: 'root',
  },
  {
    id: 'lazy_loading',
    label: 'Lazy\nLoading',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Defers loading of non-critical resources (e.g., images, components) until they are needed or in view.',
    parent: 'root',
  },
  {
    id: 'code_splitting',
    label: 'Code\nSplitting',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Breaks bundles into smaller chunks, allowing apps to load only the code required for the current view.',
    parent: 'root',
  },

  // Level 2 - Virtualization
  {
    id: 'react_virtual',
    label: 'React:\nreact-window',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Lightweight virtualization library for rendering large lists and grids in React.',
    parent: 'list_virtualization',
  },
  {
    id: 'vue_virtual',
    label: 'Vue:\nvue-virtual-scroller',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Component library for efficient list rendering with dynamic heights and direction in Vue apps.',
    parent: 'list_virtualization',
  },
  {
    id: 'angular_virtual',
    label: 'Angular:\nCDK Virtual Scroll',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Built-in Angular solution to render lists in a scrollable viewport efficiently.',
    parent: 'list_virtualization',
  },

  // Level 2 - Lazy Loading
  {
    id: 'intersection_observer',
    label: 'Intersection\nObserver API',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Efficiently tracks when elements enter the viewport to trigger loading actions like image fetches or animations.',
    parent: 'lazy_loading',
  },
  {
    id: 'native_loading',
    label: 'Native\nImage Lazy Load',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'The loading="lazy" attribute enables native browser deferral of image and iframe loading.',
    parent: 'lazy_loading',
  },

  // Level 2 - Code Splitting
  {
    id: 'react_lazy',
    label: 'React.lazy\n+ Suspense',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Lazily loads components on demand and provides fallback UI during load time using Suspense.',
    parent: 'code_splitting',
  },
  {
    id: 'dynamic_imports',
    label: 'Dynamic\nImports',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Loads JavaScript modules on demand, reducing initial bundle size and deferring unused code.',
    parent: 'code_splitting',
  },

  // Negative Nodes
  {
    id: 'excessive_lazy',
    label: 'Too Much\nLazy Loading',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Excessive fragmentation of components or assets may lead to flickering, delays, and worse UX.',
    parent: 'root',
  },
  {
    id: 'virtual_overhead',
    label: 'Virtualization\nEdge Cases',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'May introduce rendering bugs or break layout expectations when list height is hard to predict.',
    parent: 'excessive_lazy',
  },
  {
    id: 'code_split_misuse',
    label: 'Overused\nCode Splitting',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Splitting at the wrong level can increase perceived latency if too many chunks must load simultaneously.',
    parent: 'excessive_lazy',
  },
];

export const links = [
  { source: 'root', target: 'list_virtualization' },
  { source: 'root', target: 'lazy_loading' },
  { source: 'root', target: 'code_splitting' },
  { source: 'root', target: 'excessive_lazy' },

  { source: 'list_virtualization', target: 'react_virtual' },
  { source: 'list_virtualization', target: 'vue_virtual' },
  { source: 'list_virtualization', target: 'angular_virtual' },

  { source: 'lazy_loading', target: 'intersection_observer' },
  { source: 'lazy_loading', target: 'native_loading' },

  { source: 'code_splitting', target: 'react_lazy' },
  { source: 'code_splitting', target: 'dynamic_imports' },

  { source: 'excessive_lazy', target: 'virtual_overhead' },
  { source: 'excessive_lazy', target: 'code_split_misuse' },
];
