import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Frontend\nAssets Optimization',
    shape: 'roundRect',
    color: 'root',
    definition:
      'Techniques to reduce the size, number, and load impact of static assets like images, CSS, and fonts to improve frontend performance.',
  },

  // Level 1 - Categories
  {
    id: 'image_optimization',
    label: 'Image\nOptimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Improving image formats, compression, delivery, and responsiveness to reduce bandwidth and paint time.',
    parent: 'root',
  },
  {
    id: 'css_optimization',
    label: 'CSS\nOptimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Minifying, deferring, and modularizing CSS to avoid render-blocking and reduce file sizes.',
    parent: 'root',
  },
  {
    id: 'http_protocols',
    label: 'HTTP/2 & HTTP/3',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Leveraging newer web protocols that improve parallel downloads, reduce overhead, and speed up asset delivery.',
    parent: 'root',
  },
  {
    id: 'sprites',
    label: 'CSS\nSprites',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition:
      'Combines multiple small images into one file to reduce HTTP requests, improving load speed.',
    parent: 'root',
  },

  // Level 2 - Image Optimization
  {
    id: 'webp_format',
    label: 'WebP\nFormat',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'A modern image format offering superior compression and quality for photos and graphics.',
    parent: 'image_optimization',
  },
  {
    id: 'responsive_images',
    label: 'Responsive\nImages',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Using srcset and <picture> to serve different image sizes based on device and screen resolution.',
    parent: 'image_optimization',
  },
  {
    id: 'image_compression',
    label: 'Image\nCompression',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Reduces file size using tools like Squoosh or TinyPNG without significant visual loss.',
    parent: 'image_optimization',
  },

  // Level 2 - CSS Optimization
  {
    id: 'critical_css',
    label: 'Inline\nCritical CSS',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Embedding styles needed for above-the-fold content directly in the head to speed up first paint.',
    parent: 'css_optimization',
  },
  {
    id: 'defer_non_critical',
    label: 'Defer\nNon-Critical CSS',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Loads secondary stylesheets after the main render path to avoid blocking.',
    parent: 'css_optimization',
  },
  {
    id: 'minify_css',
    label: 'Minify and\nPurge CSS',
    shape: 'rect',
    color: 'nodePositive2',
    definition:
      'Removes whitespace, comments, and unused classes to reduce CSS bundle size.',
    parent: 'css_optimization',
  },

  // Negatives
  {
    id: 'asset_overload',
    label: 'Asset\nOverload',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition:
      'Heavy, unoptimized images, styles, and fonts delay rendering and waste bandwidth.',
    parent: 'root',
  },
  {
    id: 'unused_assets',
    label: 'Unused or\nDuplicate Assets',
    shape: 'rect',
    color: 'nodeNegative2',
    definition:
      'Bundling unnecessary fonts, styles, or image variants increases load time for no benefit.',
    parent: 'asset_overload',
  },
];

export const links = [
  { source: 'root', target: 'image_optimization' },
  { source: 'root', target: 'css_optimization' },
  { source: 'root', target: 'http_protocols' },
  { source: 'root', target: 'sprites' },
  { source: 'root', target: 'asset_overload' },

  { source: 'image_optimization', target: 'webp_format' },
  { source: 'image_optimization', target: 'responsive_images' },
  { source: 'image_optimization', target: 'image_compression' },

  { source: 'css_optimization', target: 'critical_css' },
  { source: 'css_optimization', target: 'defer_non_critical' },
  { source: 'css_optimization', target: 'minify_css' },

  { source: 'asset_overload', target: 'unused_assets' },
];
