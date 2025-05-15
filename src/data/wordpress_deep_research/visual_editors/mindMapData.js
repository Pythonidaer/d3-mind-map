import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Visual\nEditors',
    shape: 'roundRect',
    color: 'root',
    definition: 'Drag-and-drop visual editing tools used to build WordPress pages and layouts without writing code.'
  },

  {
    id: 'gutenberg',
    label: 'Gutenberg\nBlock Editor',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The default block-based WordPress editor introduced in version 5.0, supporting content creation and full site editing.'
  },
  {
    id: 'third_party_builders',
    label: 'Third-Party\nPage Builders',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'External plugins like Elementor, Divi, and Beaver Builder that provide enhanced visual editing experiences.'
  },
  {
    id: 'reusable_blocks',
    label: 'Reusable\nBlocks/Templates',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Modular blocks or templates that can be reused across multiple pages for consistency and efficiency.'
  },
  {
    id: 'block_patterns',
    label: 'Block\nPatterns',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Pre-designed combinations of blocks used to quickly create common layouts and content structures.'
  },
  {
    id: 'theme_builders',
    label: 'Theme\nBuilders',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Tools that enable full site editing—headers, footers, archives—using a drag-and-drop interface.'
  },

  // Expanded Elementor branch
  {
    id: 'elementor',
    label: 'Elementor',
    shape: 'ellipse',
    color: 'nodePositive2',
    parent: 'third_party_builders',
    definition: 'A powerful page builder plugin for WordPress with live editing, a robust widget system, and Pro tools for custom themes, popups, and WooCommerce.'
  },
  {
    id: 'elementor_features',
    label: 'Features\n(Free & Pro)',
    shape: 'rect',
    color: 'nodePositive3',
    parent: 'elementor',
    definition: 'Includes drag-and-drop editor, widgets, global styles. Pro adds Theme Builder, Popup Builder, WooCommerce integration, and role-based editing.'
  },
  {
    id: 'elementor_theme_builder',
    label: 'Theme\nBuilder',
    shape: 'rect',
    color: 'nodePositive3',
    parent: 'elementor',
    definition: 'Lets users design headers, footers, archive pages, and post templates using dynamic fields and conditions.'
  },
  {
    id: 'elementor_popup',
    label: 'Popup\nBuilder',
    shape: 'rect',
    color: 'nodePositive3',
    parent: 'elementor',
    definition: 'Enables creation of modals, banners, and slide-ins triggered by user behavior without needing separate plugins.'
  },
  {
    id: 'elementor_performance',
    label: 'Performance\n& Drawbacks',
    shape: 'hexagon',
    color: 'nodeNegative2',
    parent: 'elementor',
    definition: 'Can cause DOM bloat, slow loads, and page speed issues if overused or misconfigured; recent versions improved this with containers and asset control.'
  },
  {
    id: 'elementor_dev',
    label: 'Developer\nExtensibility',
    shape: 'rect',
    color: 'nodePositive3',
    parent: 'elementor',
    definition: 'Offers APIs for custom widgets, hooks for dynamic content, and integration with ACF, Pods, Toolset.'
  },

  // Additional page builders
  {
    id: 'divi',
    label: 'Divi',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'third_party_builders',
    definition: 'All-in-one theme and page builder with highly visual editing and large template library; uses shortcodes under the hood.'
  },
  {
    id: 'beaver_builder',
    label: 'Beaver\nBuilder',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'third_party_builders',
    definition: 'Reliable, lightweight visual builder with clean output and developer-friendly extensions.'
  },
  {
    id: 'wpbakery',
    label: 'WPBakery',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'third_party_builders',
    definition: 'Legacy builder often bundled with premium themes; shortcode-based and less modern than newer builders.'
  },

  // Anti-patterns
  {
    id: 'visual_editor_issues',
    label: 'Anti-Patterns',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Common pitfalls in visual editor usage that can lead to poor performance, UX, or maintainability.'
  },
  {
    id: 'bloat',
    label: 'Excessive\nDOM Bloat',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'visual_editor_issues',
    definition: 'Adding too many nested widgets or layout containers can result in slow, hard-to-maintain HTML.'
  },
  {
    id: 'builder_lockin',
    label: 'Builder\nLock-In',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'visual_editor_issues',
    definition: 'Shortcodes or proprietary structures may make switching editors difficult and require content migration.'
  }
]

export const links = [
  { source: 'root', target: 'gutenberg' },
  { source: 'root', target: 'third_party_builders' },
  { source: 'root', target: 'reusable_blocks' },
  { source: 'root', target: 'block_patterns' },
  { source: 'root', target: 'theme_builders' },
  { source: 'root', target: 'visual_editor_issues' },

  // Elementor
  { source: 'third_party_builders', target: 'elementor' },
  { source: 'elementor', target: 'elementor_features' },
  { source: 'elementor', target: 'elementor_theme_builder' },
  { source: 'elementor', target: 'elementor_popup' },
  { source: 'elementor', target: 'elementor_performance' },
  { source: 'elementor', target: 'elementor_dev' },

  // Other builders
  { source: 'third_party_builders', target: 'divi' },
  { source: 'third_party_builders', target: 'beaver_builder' },
  { source: 'third_party_builders', target: 'wpbakery' },

  // Anti-patterns
  { source: 'visual_editor_issues', target: 'bloat' },
  { source: 'visual_editor_issues', target: 'builder_lockin' }
]
