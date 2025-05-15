import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Performance\nOptimization',
    shape: 'roundRect',
    color: 'root',
    definition: 'Techniques, tools, and best practices to improve the speed, responsiveness, and efficiency of a WordPress site.',
  },

  // Level 1 positives
  {
    id: 'caching',
    label: 'Caching',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Storing generated pages or assets for reuse, reducing database queries and load time.',
  },
  {
    id: 'image_optimization',
    label: 'Image\nOptimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Reducing image file sizes using compression, lazy loading, and next-gen formats for faster delivery.',
  },
  {
    id: 'code_minification',
    label: 'Minification &\nAsset Optimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Stripping unnecessary characters and bundling assets to reduce payload size and improve speed.',
  },
  {
    id: 'cdn',
    label: 'CDN Integration',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Content Delivery Networks distribute static assets across global servers for faster user access.',
  },
  {
    id: 'lazy_loading',
    label: 'Lazy Loading',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Delaying the loading of off-screen images or content until needed to improve initial load speed.',
  },
  {
    id: 'measuring_performance',
    label: 'Measuring\nPerformance',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tools and methods to assess page speed and bottlenecks like Lighthouse and GTMetrix.',
  },

  // Level 2 children
  {
    id: 'page_caching',
    label: 'Page Caching',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'caching',
    definition: 'Stores full HTML output to serve future visitors without regenerating pages each time.',
  },
  {
    id: 'object_caching',
    label: 'Object Caching',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'caching',
    definition: 'Caches database query results to reduce repeated queries and improve performance.',
  },
  {
    id: 'browser_caching',
    label: 'Browser Caching',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'caching',
    definition: 'Stores static assets in the user\'s browser so they load instantly on repeat visits.',
  },

  {
    id: 'compression',
    label: 'Image\nCompression',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_optimization',
    definition: 'Reduces file size without noticeably degrading quality using lossy or lossless techniques.',
  },
  {
    id: 'next_gen_formats',
    label: 'WebP and\nNext-Gen Formats',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_optimization',
    definition: 'Modern image formats like WebP offer higher compression and faster load times than JPEG/PNG.',
  },
  {
    id: 'lazy_images',
    label: 'Lazy Load\nImages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'lazy_loading',
    definition: 'Defers loading of images until they enter the viewport, improving initial page load time.',
  },
  {
    id: 'lazy_iframes',
    label: 'Lazy Load\nIframes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'lazy_loading',
    definition: 'Delays the loading of embedded videos/maps until they are scrolled into view.',
  },

  {
    id: 'css_minification',
    label: 'Minify & Bundle\nCSS',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'code_minification',
    definition: 'Removes whitespace and combines stylesheets to reduce CSS payload size.',
  },
  {
    id: 'js_minification',
    label: 'Minify & Bundle\nJavaScript',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'code_minification',
    definition: 'Reduces JavaScript size and combines scripts to minimize request count.',
  },

  {
    id: 'cdn_static_assets',
    label: 'Serve Static\nAssets via CDN',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'cdn',
    definition: 'Delivers images, CSS, JS, and fonts from a globally distributed CDN edge network.',
  },
  {
    id: 'cdn_providers',
    label: 'CDN Providers',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'cdn',
    definition: 'Popular CDN services like Cloudflare, KeyCDN, and BunnyCDN used with WordPress.',
  },

  {
    id: 'lighthouse',
    label: 'Google\nLighthouse',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'measuring_performance',
    definition: 'Provides lab-based audits on performance, accessibility, SEO, and best practices.',
  },
  {
    id: 'gtmetrix',
    label: 'GTMetrix',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'measuring_performance',
    definition: 'Analyzes page load time, waterfall charts, and key metrics to identify slowdowns.',
  },

  // Negative nodes
  {
    id: 'nodeNegative1_plugins',
    label: 'Performance\nPitfalls',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common issues that can degrade WordPress performance when misconfigured or ignored.',
  },

  {
    id: 'nodeNegative2_plugin_bloat',
    label: 'Too Many Plugins',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_plugins',
    definition: 'Excessive plugins can increase page size, memory usage, and conflict with each other.',
  },
  {
    id: 'nodeNegative2_heavy_themes',
    label: 'Heavy Themes',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_plugins',
    definition: 'Poorly optimized themes with unnecessary animations, assets, or third-party libraries.',
  },
  {
    id: 'nodeNegative2_unoptimized_images',
    label: 'Unoptimized\nImages',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_plugins',
    definition: 'Large image sizes that aren’t compressed or scaled properly can significantly slow down loading.',
  },
  {
    id: 'nodeNegative2_render_blocking',
    label: 'Render-Blocking\nScripts',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_plugins',
    definition: 'CSS or JS files loaded early in the page that prevent rendering until fully downloaded.',
  },
]

export const links = [
  { source: 'root', target: 'caching' },
  { source: 'root', target: 'image_optimization' },
  { source: 'root', target: 'code_minification' },
  { source: 'root', target: 'cdn' },
  { source: 'root', target: 'lazy_loading' },
  { source: 'root', target: 'measuring_performance' },
  { source: 'root', target: 'nodeNegative1_plugins' },

  { source: 'caching', target: 'page_caching' },
  { source: 'caching', target: 'object_caching' },
  { source: 'caching', target: 'browser_caching' },

  { source: 'image_optimization', target: 'compression' },
  { source: 'image_optimization', target: 'next_gen_formats' },

  { source: 'lazy_loading', target: 'lazy_images' },
  { source: 'lazy_loading', target: 'lazy_iframes' },

  { source: 'code_minification', target: 'css_minification' },
  { source: 'code_minification', target: 'js_minification' },

  { source: 'cdn', target: 'cdn_static_assets' },
  { source: 'cdn', target: 'cdn_providers' },

  { source: 'measuring_performance', target: 'lighthouse' },
  { source: 'measuring_performance', target: 'gtmetrix' },

  { source: 'nodeNegative1_plugins', target: 'nodeNegative2_plugin_bloat' },
  { source: 'nodeNegative1_plugins', target: 'nodeNegative2_heavy_themes' },
  { source: 'nodeNegative1_plugins', target: 'nodeNegative2_unoptimized_images' },
  { source: 'nodeNegative1_plugins', target: 'nodeNegative2_render_blocking' },
]
