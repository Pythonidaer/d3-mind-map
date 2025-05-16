import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Limitations and\nDrawbacks',
    shape: 'roundRect',
    color: 'root',
    definition: 'Known issues, trade-offs, and constraints when using Elementor for web development and content design.',
  },

  {
    id: 'performance',
    label: 'Performance\nConcerns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Elementor’s output structure and loading behavior can slow down page performance if not optimized.',
  },
  {
    id: 'dom_bloat',
    label: 'DOM Bloat',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'performance',
    definition: 'Excessive nested divs and wrappers increase page size and slow rendering.',
  },
  {
    id: 'unused_assets',
    label: 'Unused CSS/JS\nLoading',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'performance',
    definition: 'Widgets often enqueue scripts and styles whether they’re used on the page or not.',
  },
  {
    id: 'layout_shift',
    label: 'Layout Shift\nor Render Delay',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'performance',
    definition: 'Animations, third-party widgets, or poor optimization may cause CLS (Cumulative Layout Shift).',
  },

  {
    id: 'plugin_conflicts',
    label: 'Plugin and Theme\nCompatibility',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Some plugins and themes may not integrate smoothly with Elementor’s layout engine.',
  },
  {
    id: 'conflicting_scripts',
    label: 'Conflicting\nLibraries or Styles',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'plugin_conflicts',
    definition: 'Multiple plugins may enqueue competing versions of jQuery or override styles unintentionally.',
  },
  {
    id: 'theme_limitations',
    label: 'Theme Override\nLimitations',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'plugin_conflicts',
    definition: 'Themes that aren’t Elementor-optimized may resist full-width layouts or inject global styling.',
  },

  {
    id: 'lock_in',
    label: 'Vendor Lock-in\nand Portability',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Elementor’s shortcodes and editor-specific markup limit how easily content transfers to other platforms or builders.',
  },
  {
    id: 'shortcodes',
    label: 'Shortcode\nDependency',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'lock_in',
    definition: 'Content is stored using non-standard formats that don’t convert well when Elementor is removed.',
  },
  {
    id: 'non_semantic_html',
    label: 'Non-Semantic\nHTML Output',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'lock_in',
    definition: 'Many widgets render div-heavy, unstructured markup which may hinder accessibility and SEO.',
  },

  {
    id: 'scalability',
    label: 'Scalability and\nMaintenance Overhead',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Sites with many pages or complex layouts can become difficult to manage using only visual editing tools.',
  },
  {
    id: 'slow_editor',
    label: 'Editor Slows\nwith Complexity',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'scalability',
    definition: 'The Elementor editor may lag when pages have dozens of sections, widgets, or deeply nested structures.',
  },
  {
    id: 'no_bulk_edit',
    label: 'No Bulk Update\nor Component Reuse',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'scalability',
    definition: 'Design updates must be repeated manually unless Global Styles or Theme Builder is properly configured.',
  },

  {
    id: 'update_risks',
    label: 'Stability and\nUpdate Risk',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Frequent updates to Elementor or its add-ons may introduce instability or break templates unexpectedly.',
  },
  {
    id: 'breaking_changes',
    label: 'Breaking Layouts\nPost-Update',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'update_risks',
    definition: 'Elementor or WordPress updates may alter CSS/JS behavior, requiring urgent design adjustments.',
  },
  {
    id: 'addon_fragility',
    label: 'Unstable\nThird-Party Add-ons',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'update_risks',
    definition: 'Popular add-on packs may be abandoned or introduce bugs that affect multiple widgets at once.',
  }
]

export const links = [
  { source: 'performance', target: 'root' },
  { source: 'dom_bloat', target: 'performance' },
  { source: 'unused_assets', target: 'performance' },
  { source: 'layout_shift', target: 'performance' },

  { source: 'plugin_conflicts', target: 'root' },
  { source: 'conflicting_scripts', target: 'plugin_conflicts' },
  { source: 'theme_limitations', target: 'plugin_conflicts' },

  { source: 'lock_in', target: 'root' },
  { source: 'shortcodes', target: 'lock_in' },
  { source: 'non_semantic_html', target: 'lock_in' },

  { source: 'scalability', target: 'root' },
  { source: 'slow_editor', target: 'scalability' },
  { source: 'no_bulk_edit', target: 'scalability' },

  { source: 'update_risks', target: 'root' },
  { source: 'breaking_changes', target: 'update_risks' },
  { source: 'addon_fragility', target: 'update_risks' }
]
