import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Theme Compatibility\nand Setup',
    shape: 'roundRect',
    color: 'root',
    definition: 'Understanding the role of WordPress themes in Elementor, recommended themes, setup steps, compatibility tips, and child theme guidance.',
  },

  {
    id: 'what_is_theme',
    label: 'What is a\nWordPress Theme?',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'A theme controls your site’s base layout, structure, and styling. Elementor uses themes as the underlying foundation.',
  },
  {
    id: 'theme_vs_template',
    label: 'Theme vs Template\nvs Widget',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Clarifies the distinction: themes are global design structures, templates are page-level, and widgets are modular content blocks.',
  },

  {
    id: 'recommended_themes',
    label: 'Recommended\nThemes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Lightweight themes compatible with Elementor that offer maximum control and flexibility.',
  },
  {
    id: 'hello_elementor',
    label: 'Hello\nElementor',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'recommended_themes',
    definition: 'Barebones theme by Elementor with zero styling—ideal for Theme Builder use.',
  },
  {
    id: 'astra_theme',
    label: 'Astra',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'recommended_themes',
    definition: 'Lightweight and fast theme with header/footer controls and template kits.',
  },
  {
    id: 'oceanwp_theme',
    label: 'OceanWP /\nOthers',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'recommended_themes',
    definition: 'Popular options like OceanWP, GeneratePress, Kadence offer more design features but slightly more overhead.',
  },

  {
    id: 'theme_setup_steps',
    label: 'Theme Setup\nSteps',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'How to find your current theme, install a new one, and configure it for Elementor use.',
  },
  {
    id: 'check_current_theme',
    label: 'Check Current\nTheme',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_setup_steps',
    definition: 'Navigate to Appearance > Themes in WordPress Admin to view or change your theme.',
  },
  {
    id: 'install_new_theme',
    label: 'Install New\nTheme',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_setup_steps',
    definition: 'Upload or search for themes from the WordPress repository and activate them.',
  },
  {
    id: 'import_starter_templates',
    label: 'Import Starter\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_setup_steps',
    definition: 'Some themes (like Astra) offer demo templates you can import to jumpstart design.',
  },

  {
    id: 'elementor_compatibility',
    label: 'Elementor Theme\nCompatibility',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Best practices for selecting themes that work smoothly with Elementor.',
  },
  {
    id: 'full_width_support',
    label: 'Full-Width &\nCanvas Layouts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'elementor_compatibility',
    definition: 'Themes must support full-width templates or “Elementor Canvas” mode for maximum layout control.',
  },
  {
    id: 'disable_title_header',
    label: 'Disable Title &\nHeader',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'elementor_compatibility',
    definition: 'Themes should allow disabling post titles or headers to avoid conflicts with Elementor’s layout.',
  },
  {
    id: 'avoid_conflicts',
    label: 'Avoid Styling\nConflicts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'elementor_compatibility',
    definition: 'Avoid themes that enforce heavy styling which may override Elementor’s visual settings.',
  },

  {
    id: 'child_themes',
    label: 'Child\nThemes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Optional theme setups that let you override theme files without losing changes on update.',
  },
  {
    id: 'when_to_use_child',
    label: 'When to Use\na Child Theme',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'child_themes',
    definition: 'Use if you plan to modify PHP templates or add functions. Not required for Elementor-only sites.',
  }
]

export const links = [
  { source: 'what_is_theme', target: 'root' },
  { source: 'theme_vs_template', target: 'root' },

  { source: 'recommended_themes', target: 'root' },
  { source: 'hello_elementor', target: 'recommended_themes' },
  { source: 'astra_theme', target: 'recommended_themes' },
  { source: 'oceanwp_theme', target: 'recommended_themes' },

  { source: 'theme_setup_steps', target: 'root' },
  { source: 'check_current_theme', target: 'theme_setup_steps' },
  { source: 'install_new_theme', target: 'theme_setup_steps' },
  { source: 'import_starter_templates', target: 'theme_setup_steps' },

  { source: 'elementor_compatibility', target: 'root' },
  { source: 'full_width_support', target: 'elementor_compatibility' },
  { source: 'disable_title_header', target: 'elementor_compatibility' },
  { source: 'avoid_conflicts', target: 'elementor_compatibility' },

  { source: 'child_themes', target: 'root' },
  { source: 'when_to_use_child', target: 'child_themes' }
]
