import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Frontend\nPerformance',
    shape: 'roundRect',
    color: 'root',
    definition:
      'How the client-side of a web application loads and responds, directly affecting user experience, perception, and retention.',
  },

  // Positive Node 1
  {
    id: 'load_speed_impact',
    label: 'Page Load\nSpeed Impact',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'User patience is limited—slow page loads (e.g. >3 seconds) often result in high bounce rates and lost conversions.',
    parent: 'root',
  },
  {
    id: 'mobile_first',
    label: 'Mobile-First\nConcerns',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Users on mobile devices with varying network speeds need optimized resources and efficient rendering for a smooth experience.',
    parent: 'root',
  },
  {
    id: 'crp_awareness',
    label: 'Critical\nRendering Path',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Understanding the browser’s sequence of steps (HTML parsing to paint) helps identify rendering bottlenecks early.',
    parent: 'root',
  },

  // Positive Node 2
  {
    id: 'initial_render_optimizations',
    label: 'Initial Render\nOptimizations',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Improving the perceived load time through techniques like inlining critical CSS, deferring non-blocking assets, and minimizing render-blocking scripts.',
    parent: 'crp_awareness',
  },
  {
    id: 'dom_efficiency',
    label: 'Efficient\nDOM Structure',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Avoiding deep nesting and unnecessary DOM nodes reduces parsing, layout, and paint time, boosting responsiveness.',
    parent: 'crp_awareness',
  },
  {
    id: 'css_rendering_impact',
    label: 'CSS Render-Blocking\nStrategies',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Minimizing and deferring CSS where possible improves render speed and prevents the Flash of Unstyled Content (FOUC).',
    parent: 'crp_awareness',
  },

  // Positive Node 3
  {
    id: 'font_loading',
    label: 'Font Loading\nOptimization',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Use font-display: swap and preload font files to prevent layout shifts and delays in text rendering.',
    parent: 'initial_render_optimizations',
  },
  {
    id: 'js_positioning',
    label: 'Script Placement\nand Attributes',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Placing scripts at the bottom or using async/defer prevents them from blocking HTML parsing and rendering.',
    parent: 'initial_render_optimizations',
  },
  {
    id: 'critical_css',
    label: 'Inlining\nCritical CSS',
    shape: 'diamond',
    color: 'nodePositive3',
    definition:
      'Including above-the-fold styles directly in the HTML <head> ensures faster first paint and better perceived performance.',
    parent: 'css_rendering_impact',
  },

  // Negative Node 1
  {
    id: 'frontend_bottlenecks',
    label: 'Frontend\nBottlenecks',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Poorly optimized client-side code can severely impact user experience—even with a fast backend.',
    parent: 'root',
  },

  // Negative Node 2
  {
    id: 'dom_bloat',
    label: 'Excessive DOM\nComplexity',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Too many nodes or deep nesting increases parsing and rendering time, especially on lower-powered devices.',
    parent: 'frontend_bottlenecks',
  },
  {
    id: 'blocking_scripts',
    label: 'Render-Blocking\nScripts',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'JavaScript in the <head> without async/defer blocks HTML parsing, stalling the page from becoming interactive.',
    parent: 'frontend_bottlenecks',
  },
  {
    id: 'unused_css',
    label: 'Large or Unused\nCSS Files',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Downloading and parsing unnecessary styles wastes time and memory, delaying meaningful paint.',
    parent: 'frontend_bottlenecks',
  },
];

export const links = [
  { source: 'root', target: 'load_speed_impact' },
  { source: 'root', target: 'mobile_first' },
  { source: 'root', target: 'crp_awareness' },
  { source: 'root', target: 'frontend_bottlenecks' },

  { source: 'crp_awareness', target: 'initial_render_optimizations' },
  { source: 'crp_awareness', target: 'dom_efficiency' },
  { source: 'crp_awareness', target: 'css_rendering_impact' },

  { source: 'initial_render_optimizations', target: 'font_loading' },
  { source: 'initial_render_optimizations', target: 'js_positioning' },
  { source: 'css_rendering_impact', target: 'critical_css' },

  { source: 'frontend_bottlenecks', target: 'dom_bloat' },
  { source: 'frontend_bottlenecks', target: 'blocking_scripts' },
  { source: 'frontend_bottlenecks', target: 'unused_css' },
];
