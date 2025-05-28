import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Responsive &\nAdaptive Design',
    shape: 'roundRect',
    color: 'root',
    definition: 'Design strategies that ensure websites function effectively across varying screen sizes, devices, and input types.'
  },

  // First-Level Positives
  {
    id: 'responsive_design',
    label: 'Responsive\nDesign',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Fluid layouts that adapt automatically to different screen sizes using flexible grids and CSS media queries.'
  },
  {
    id: 'adaptive_design',
    label: 'Adaptive\nDesign',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Fixed-layout designs created for specific screen widths and delivered based on device detection.'
  },
  {
    id: 'design_principles',
    label: 'Core\nPrinciples',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Design philosophies such as flexibility, accessibility, mobile-first thinking, and progressive enhancement.'
  },
  {
    id: 'testing_methods',
    label: 'Testing &\nValidation',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Methods for ensuring layout consistency and interaction stability across all supported environments.'
  },

  // Second-Level Responsive
  {
    id: 'fluid_grids',
    label: 'Fluid\nGrids',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Grids based on relative units (%, rem) instead of fixed pixels to allow seamless resizing.'
  },
  {
    id: 'media_queries',
    label: 'Media\nQueries',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'CSS techniques used to apply different styles depending on viewport width, height, orientation, etc.'
  },
  {
    id: 'flexbox_grid',
    label: 'Flexbox &\nCSS Grid',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Modern layout systems enabling complex responsive structures with cleaner, scalable code.'
  },

  // Second-Level Adaptive
  {
    id: 'breakpoints',
    label: 'Breakpoint-Based\nLayouts',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Layouts defined for specific device widths (e.g. 320px, 768px, 1024px, 1440px) using media queries.'
  },
  {
    id: 'device_detection',
    label: 'Device Type\nDetection',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Using user agent or server-side detection to serve appropriate layouts and assets.'
  },
  {
    id: 'image_optimization',
    label: 'Image\nOptimization',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Serving appropriate image sizes via `srcset`, WebP, or CDNs to reduce bandwidth and loading time.'
  },

  // Second-Level Principles
  {
    id: 'mobile_first',
    label: 'Mobile-First\nApproach',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Design begins with smallest viewport constraints and scales up for larger screens.'
  },
  {
    id: 'content_priority',
    label: 'Content\nPrioritization',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Focusing layout and hierarchy on what matters most for users in constrained viewports.'
  },
  {
    id: 'progressive_enhancement',
    label: 'Progressive\nEnhancement',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Start with a simple core experience, then enhance with more advanced interactions for capable browsers.'
  },

  // Second-Level Testing
  {
    id: 'real_device_testing',
    label: 'Real Device\nTesting',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Testing designs on actual phones, tablets, and desktops to evaluate responsiveness and usability.'
  },
  {
    id: 'browser_devtools',
    label: 'DevTools\nEmulation',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Using browser tools like Chrome’s device toolbar to simulate responsiveness and debug layout issues.'
  },
  {
    id: 'accessibility_checks',
    label: 'Accessibility\nChecks',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Verifying that responsive layouts retain semantic clarity, tab order, and content structure across breakpoints.'
  },

  // Cons
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Drawbacks, tradeoffs, and implementation challenges in responsive/adaptive design.'
  },
  {
    id: 'design_overhead',
    label: 'Design & Dev\nOverhead',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Creating multiple breakpoints and ensuring consistency increases workload and QA complexity.'
  },
  {
    id: 'performance_penalty',
    label: 'Performance\nPenalties',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Serving unnecessarily large resources or running heavy layout recalculations impacts mobile speed.'
  },
  {
    id: 'layout_inconsistencies',
    label: 'Layout\nInconsistencies',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Subtle bugs or rendering differences can emerge across devices and browser engines.'
  },
  {
    id: 'device_fragmentation',
    label: 'Device\nFragmentation',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Wide range of screen sizes and input methods makes universal testing and perfection difficult.'
  }
];

export const links = [
  { source: 'root', target: 'responsive_design' },
  { source: 'root', target: 'adaptive_design' },
  { source: 'root', target: 'design_principles' },
  { source: 'root', target: 'testing_methods' },
  { source: 'root', target: 'cons' },

  { source: 'responsive_design', target: 'fluid_grids' },
  { source: 'responsive_design', target: 'media_queries' },
  { source: 'responsive_design', target: 'flexbox_grid' },

  { source: 'adaptive_design', target: 'breakpoints' },
  { source: 'adaptive_design', target: 'device_detection' },
  { source: 'adaptive_design', target: 'image_optimization' },

  { source: 'design_principles', target: 'mobile_first' },
  { source: 'design_principles', target: 'content_priority' },
  { source: 'design_principles', target: 'progressive_enhancement' },

  { source: 'testing_methods', target: 'real_device_testing' },
  { source: 'testing_methods', target: 'browser_devtools' },
  { source: 'testing_methods', target: 'accessibility_checks' },

  { source: 'cons', target: 'design_overhead' },
  { source: 'cons', target: 'performance_penalty' },
  { source: 'cons', target: 'layout_inconsistencies' },
  { source: 'cons', target: 'device_fragmentation' }
];
