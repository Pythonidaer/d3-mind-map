import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Critical Rendering\nPath (CRP)',
    shape: 'roundRect',
    color: 'root',
    definition:
      'The sequence of steps the browser follows to convert HTML, CSS, and JavaScript into pixels on the screen.',
  },

  // Level 1 - Positive
  {
    id: 'html_parsing',
    label: 'HTML Parsing\n& DOM Construction',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'The browser parses HTML into tokens and nodes, building the DOM tree that represents the document structure.',
    parent: 'root',
  },
  {
    id: 'css_parsing',
    label: 'CSS Parsing\n& CSSOM',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'CSS files are parsed to build the CSS Object Model, which defines visual styling and is render-blocking.',
    parent: 'root',
  },
  {
    id: 'render_tree',
    label: 'Render Tree\nConstruction',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Combines DOM and CSSOM to build a visual representation of elements that will be painted on the screen.',
    parent: 'root',
  },
  {
    id: 'layout',
    label: 'Layout\n(Reflow)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'The browser calculates exact sizes and positions for elements based on the Render Tree.',
    parent: 'root',
  },
  {
    id: 'paint',
    label: 'Paint\n(Repaint)',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Drawing the pixels to screen—styles, text, images, etc.—based on layout calculations.',
    parent: 'root',
  },

  // Level 2 - Optimizations
  {
    id: 'optimize_dom',
    label: 'Lean & Valid\nDOM Structure',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Minimize deep nesting, keep markup clean, and avoid unnecessary elements for faster parsing.',
    parent: 'html_parsing',
  },
  {
    id: 'async_scripts',
    label: 'Defer or Async\nJavaScript',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Prevent JS from blocking DOM parsing by using async/defer attributes.',
    parent: 'html_parsing',
  },
  {
    id: 'critical_css',
    label: 'Inline\nCritical CSS',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Place essential above-the-fold styles directly in the HTML <head> to speed up first render.',
    parent: 'css_parsing',
  },
  {
    id: 'minify_css',
    label: 'Minify & Split\nCSS Files',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Remove unused styles and deliver only what is needed per page to reduce CSSOM construction time.',
    parent: 'css_parsing',
  },
  {
    id: 'contain_property',
    label: 'Use CSS\ncontain Property',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Limit layout recalculations to specific elements and improve performance during reflows.',
    parent: 'layout',
  },
  {
    id: 'will_change',
    label: 'Use will-change\nfor Paint Hints',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Promote frequently changing elements to their own layer to reduce repaint costs.',
    parent: 'paint',
  },

  // Level 1 - Negative
  {
    id: 'render_blockers',
    label: 'Render-Blocking\nResources',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Unoptimized CSS or synchronous JavaScript in the <head> delays rendering by blocking CRP stages.',
    parent: 'root',
  },
  {
    id: 'layout_thrashing',
    label: 'Layout\nThrashing',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Repeated reads and writes to layout properties cause multiple reflows, hurting performance.',
    parent: 'layout',
  },
  {
    id: 'expensive_styles',
    label: 'Complex Styles\n& Paints',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Heavy use of shadows, gradients, and frequent repaints make paint operations slow and CPU-intensive.',
    parent: 'paint',
  },
];

export const links = [
  { source: 'root', target: 'html_parsing' },
  { source: 'root', target: 'css_parsing' },
  { source: 'root', target: 'render_tree' },
  { source: 'root', target: 'layout' },
  { source: 'root', target: 'paint' },
  { source: 'root', target: 'render_blockers' },

  { source: 'html_parsing', target: 'optimize_dom' },
  { source: 'html_parsing', target: 'async_scripts' },
  { source: 'css_parsing', target: 'critical_css' },
  { source: 'css_parsing', target: 'minify_css' },
  { source: 'layout', target: 'contain_property' },
  { source: 'paint', target: 'will_change' },

  { source: 'layout', target: 'layout_thrashing' },
  { source: 'paint', target: 'expensive_styles' },
];
