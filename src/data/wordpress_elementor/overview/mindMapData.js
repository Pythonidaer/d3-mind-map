import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Elementor\nOverview',
    shape: 'roundRect',
    color: 'root',
    definition: 'High-level introduction to Elementor as a WordPress visual builder, covering its purpose, visual editing philosophy, and freemium model.',
  },

  {
    id: 'visual_editing',
    label: 'Visual\nEditing',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Elementor’s core principle—drag-and-drop interface with real-time WYSIWYG updates for intuitive website creation.',
  },
  {
    id: 'freemium_model',
    label: 'Freemium\nModel',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Elementor offers both a free version with core features and a Pro version with advanced tools for professionals and businesses.',
  },
  {
    id: 'plugin_architecture',
    label: 'Plugin\nArchitecture',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Elementor is a WordPress plugin compatible with many themes and plugins, using sections, containers, and widgets as its structure.',
  },
  {
    id: 'free_vs_pro',
    label: 'Free vs Pro:\nKey Features',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Comparison of features available in the free version versus the Pro version, including theme building, popups, forms, and WooCommerce tools.',
  },

  {
    id: 'widgets_overview',
    label: 'Widgets\nOverview',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Elementor uses a modular system of widgets as the building blocks of content and layout. Widgets are categorized by purpose and availability.',
  },

  {
    id: 'theme_compatibility',
    label: 'Theme\nCompatibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Elementor works best with lightweight themes like Hello Elementor or Astra, ensuring minimal styling conflicts and optimal performance.',
  },

  {
    id: 'workflow_features',
    label: 'Workflow &\nProductivity',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Features such as revision history, Navigator, copy/paste styling, keyboard shortcuts, and autosave streamline the building process.',
  },

  {
    id: 'performance_considerations',
    label: 'Performance\nConsiderations',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Elementor can introduce bloat if not optimized properly, leading to slower page loads if paired with excessive widgets or add-ons.',
  },
  {
    id: 'plugin_conflicts',
    label: 'Plugin & Theme\nConflicts',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Not all plugins or themes are fully compatible with Elementor; some may cause rendering issues or override Elementor styling.',
  },
]

export const links = [
  { source: 'visual_editing', target: 'root' },
  { source: 'freemium_model', target: 'root' },
  { source: 'plugin_architecture', target: 'root' },
  { source: 'free_vs_pro', target: 'root' },
  { source: 'widgets_overview', target: 'root' },
  { source: 'theme_compatibility', target: 'root' },
  { source: 'workflow_features', target: 'root' },
  { source: 'performance_considerations', target: 'root' },
  { source: 'plugin_conflicts', target: 'root' },
]
