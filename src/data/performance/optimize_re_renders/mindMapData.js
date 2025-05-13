import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Optimize Assets',
    shape: 'roundRect',
    color: 'root',
    definition: 'Strategies for minimizing asset sizes and delivery overhead to speed up page load times.',
  },

  // Primary techniques
  {
    id: 'image_optimization',
    label: 'Image Optimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Reducing image file sizes and using modern formats to improve load performance.',
  },
  {
    id: 'css_optimization',
    label: 'CSS Optimization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Minifying and deferring CSS to avoid render-blocking and reduce payload.',
  },
  {
    id: 'http_protocols',
    label: 'HTTP/2 & HTTP/3',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Leveraging modern protocols for multiplexing, header compression, and server push.',
  },
  {
    id: 'sprites',
    label: 'CSS Sprites',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Combining multiple small images into a single file to reduce HTTP requests.',
  },

  // Benefits
  {
    id: 'benefits',
    label: 'Benefits / Pros',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Positive outcomes of asset optimization.',
  },

  // Challenges
  {
    id: 'cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Drawbacks or trade-offs when optimizing assets.',
  },

  // Anti-Patterns
  {
    id: 'anti_patterns',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common mistakes that negate optimization benefits.',
  },

  // Image Optimization children
  {
    id: 'framework_auto_opt',
    label: 'Framework \nAuto-Optimization',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_optimization',
    definition: 'Next.js, Gatsby, and others auto-convert images to WebP and resize on demand.',
  },
  {
    id: 'manual_compression',
    label: 'Manual \nCompression Tools',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'image_optimization',
    definition: 'Use ImageOptim, TinyPNG, and Squoosh to losslessly compress images before deployment.',
  },

  // CSS Optimization children
  {
    id: 'defer_css',
    label: 'Defer Non-Critical CSS',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'css_optimization',
    definition: 'Use rel="preload" or media attributes to load CSS after initial render.',
  },
  {
    id: 'inline_css',
    label: 'Inline Critical CSS',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'css_optimization',
    definition: 'Embed above-the-fold styles directly in HTML to eliminate render-blocking.',
  },
  {
    id: 'css_minification',
    label: 'CSS Minification',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'css_optimization',
    definition: 'Remove whitespace and comments to reduce stylesheet size.',
  },

  // HTTP protocols children
  {
    id: 'enable_http2_3',
    label: 'Enable HTTP/2 \n& HTTP/3',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'http_protocols',
    definition: 'Configure server for multiplexing, header compression, and optional server push.',
  },

  // Sprites children
  {
    id: 'combine_images',
    label: 'Combine Images \ninto Sprites',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'sprites',
    definition: 'Merge icons and small graphics into a single file with CSS background-position.',
  },

  // Benefits children
  {
    id: 'faster_loads',
    label: 'Faster Load Times',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'Smaller assets and fewer requests reduce time to first render.',
  },
  {
    id: 'reduced_bandwidth',
    label: 'Reduced Bandwidth',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'Optimized files and fewer downloads lower data transfer costs.',
  },
  {
    id: 'better_responsiveness',
    label: 'Better \nResponsiveness',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'benefits',
    definition: 'Quick asset delivery leads to smoother user interactions.',
  },

  // Cons children
  {
    id: 'setup_overhead',
    label: 'Setup Overhead',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Initial configuration of tools and build pipelines takes time.',
  },
  {
    id: 'build_complexity',
    label: 'Increased Build\n Complexity',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Multiple optimization steps complicate the CI/CD pipeline.',
  },
  {
    id: 'management_overhead',
    label: 'Asset Management\n Overhead',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'cons',
    definition: 'Keeping track of sprites, critical CSS, and compressed versions adds maintenance.',
  },

  // Anti-Patterns children
  {
    id: 'uncompressed_assets',
    label: 'Serving \nUncompressed\n Assets',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Skipping compression leads to unnecessarily large downloads.',
  },
  {
    id: 'inline_all_css',
    label: 'Inlining All CSS',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Embedding entire styles causes large HTML payloads and caching issues.',
  },
  {
    id: 'excessive_sprites',
    label: 'Excessive Spriting',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'anti_patterns',
    definition: 'Too many icons in one sprite file can bloat the asset and slow initial load.',
  },
];

export const links = [
  { source: 'root', target: 'image_optimization' },
  { source: 'image_optimization', target: 'framework_auto_opt' },
  { source: 'image_optimization', target: 'manual_compression' },

  { source: 'root', target: 'css_optimization' },
  { source: 'css_optimization', target: 'defer_css' },
  { source: 'css_optimization', target: 'inline_css' },
  { source: 'css_optimization', target: 'css_minification' },

  { source: 'root', target: 'http_protocols' },
  { source: 'http_protocols', target: 'enable_http2_3' },

  { source: 'root', target: 'sprites' },
  { source: 'sprites', target: 'combine_images' },

  { source: 'root', target: 'benefits' },
  { source: 'benefits', target: 'faster_loads' },
  { source: 'benefits', target: 'reduced_bandwidth' },
  { source: 'benefits', target: 'better_responsiveness' },

  { source: 'root', target: 'cons' },
  { source: 'cons', target: 'setup_overhead' },
  { source: 'cons', target: 'build_complexity' },
  { source: 'cons', target: 'management_overhead' },

  { source: 'root', target: 'anti_patterns' },
  { source: 'anti_patterns', target: 'uncompressed_assets' },
  { source: 'anti_patterns', target: 'inline_all_css' },
  { source: 'anti_patterns', target: 'excessive_sprites' },
];