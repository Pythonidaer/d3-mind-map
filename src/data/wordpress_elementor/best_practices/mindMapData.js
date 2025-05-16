import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Elementor\nBest Practices',
    shape: 'roundRect',
    color: 'root',
    definition: 'Guidelines and workflow strategies to optimize Elementor use, performance, scalability, and maintainability.',
  },

  {
    id: 'performance_optimization',
    label: 'Performance\nOptimization',
    shape: 'hexagon',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Ensure Elementor pages load quickly and minimize unnecessary scripts or layout shifts.',
  },
  {
    id: 'use_lightweight_theme',
    label: 'Use Lightweight\nThemes',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'performance_optimization',
    definition: 'Use themes like Hello Elementor or Astra to avoid CSS and JS bloat from traditional themes.',
  },
  {
    id: 'lazy_load_assets',
    label: 'Enable Lazy Load\nand Caching',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'performance_optimization',
    definition: 'Use a caching plugin and enable lazy load for images and videos to improve performance scores.',
  },
  {
    id: 'limit_animations',
    label: 'Avoid Heavy\nAnimations',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'performance_optimization',
    definition: 'Use scroll effects and motion sparingly to prevent layout shifts and script overhead.',
  },

  {
    id: 'template_strategy',
    label: 'Template and\nDesign Strategy',
    shape: 'hexagon',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use saved templates, kits, and global styles to speed up design and ensure consistency.',
  },
  {
    id: 'use_theme_builder',
    label: 'Use Theme Builder\nfor Reusability',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_strategy',
    definition: 'Use Theme Builder to create dynamic layouts like headers, footers, posts, and archives.',
  },
  {
    id: 'save_common_blocks',
    label: 'Save Common\nSections as Templates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_strategy',
    definition: 'Convert reusable sections like CTAs and testimonials into saved blocks for easy reuse.',
  },
  {
    id: 'global_styles',
    label: 'Define Global\nFonts and Colors',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_strategy',
    definition: 'Set up consistent typography and color palettes site-wide to maintain brand alignment.',
  },

  {
    id: 'workflow_efficiency',
    label: 'Workflow and\nEditor Efficiency',
    shape: 'hexagon',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Improve speed and comfort while designing within Elementor’s editor.',
  },
  {
    id: 'navigator_use',
    label: 'Use Navigator for\nSection Management',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'workflow_efficiency',
    definition: 'Use the Navigator tool to organize complex layouts and nested widget trees.',
  },
  {
    id: 'keyboard_shortcuts',
    label: 'Learn Editor\nShortcuts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'workflow_efficiency',
    definition: 'Use built-in keyboard shortcuts like Cmd+Z (undo), Cmd+E (finder), and Cmd+Shift+S (save).',
  },
  {
    id: 'autosave_use',
    label: 'Use Revisions and\nAutosave',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'workflow_efficiency',
    definition: 'Recover past versions and auto-saves in case of accidental changes or crashes.',
  },

  {
    id: 'plugin_selection',
    label: 'Plugin and Add-On\nSelection',
    shape: 'hexagon',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Choose plugins that are well-supported, frequently updated, and known to work well with Elementor.',
  },
  {
    id: 'avoid_plugin_overlap',
    label: 'Avoid Feature\nOverlap',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'plugin_selection',
    definition: 'Avoid installing multiple plugins that add duplicate widgets or styles.',
  },
  {
    id: 'vet_third_party',
    label: 'Vet Third-Party\nAdd-ons Carefully',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'plugin_selection',
    definition: 'Only use add-ons that have strong documentation, recent updates, and good community feedback.',
  },

  {
    id: 'site_maintenance',
    label: 'Update and\nMaintenance Practices',
    shape: 'hexagon',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Keep Elementor and its ecosystem stable and up to date through smart update habits.',
  },
  {
    id: 'use_staging',
    label: 'Test Updates\nin Staging',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'site_maintenance',
    definition: 'Use a staging environment to preview plugin or theme changes before pushing to production.',
  },
  {
    id: 'backup_before_update',
    label: 'Backup Before\nUpdating Elementor',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'site_maintenance',
    definition: 'Ensure a full site backup is made before updating Elementor or its add-ons.',
  }
]

export const links = [
  { source: 'performance_optimization', target: 'root' },
  { source: 'use_lightweight_theme', target: 'performance_optimization' },
  { source: 'lazy_load_assets', target: 'performance_optimization' },
  { source: 'limit_animations', target: 'performance_optimization' },

  { source: 'template_strategy', target: 'root' },
  { source: 'use_theme_builder', target: 'template_strategy' },
  { source: 'save_common_blocks', target: 'template_strategy' },
  { source: 'global_styles', target: 'template_strategy' },

  { source: 'workflow_efficiency', target: 'root' },
  { source: 'navigator_use', target: 'workflow_efficiency' },
  { source: 'keyboard_shortcuts', target: 'workflow_efficiency' },
  { source: 'autosave_use', target: 'workflow_efficiency' },

  { source: 'plugin_selection', target: 'root' },
  { source: 'avoid_plugin_overlap', target: 'plugin_selection' },
  { source: 'vet_third_party', target: 'plugin_selection' },

  { source: 'site_maintenance', target: 'root' },
  { source: 'use_staging', target: 'site_maintenance' },
  { source: 'backup_before_update', target: 'site_maintenance' }
]
