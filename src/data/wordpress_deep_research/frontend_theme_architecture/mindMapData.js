import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Frontend\nTheme Architecture',
    shape: 'roundRect',
    color: 'root',
    definition: 'The structural design and principles behind how WordPress themes are organized, rendered, and extended on the frontend.',
  },

  // Level 1 Positives
  {
    id: 'template_hierarchy',
    label: 'Template\nHierarchy',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The logic WordPress uses to decide which template file(s) to use when rendering a page.',
  },
  {
    id: 'theme_structure',
    label: 'Theme\nStructure',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'The folder and file layout that defines how a theme is built and how assets are organized.',
  },
  {
    id: 'template_parts',
    label: 'Template\nParts',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Reusable sections of template code such as headers, footers, or custom blocks to follow DRY principles.',
  },
  {
    id: 'child_themes',
    label: 'Child Themes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'A sub-theme that inherits from a parent theme and is used to safely customize without overwriting core files.',
  },
  {
    id: 'starter_themes',
    label: 'Starter Themes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Barebones or boilerplate themes used as a starting point for building custom WordPress themes.',
  },

  // Level 2 Template Hierarchy
  {
    id: 'single_hierarchy',
    label: 'Single &\nPage Hierarchy',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_hierarchy',
    definition: 'The specific logic for rendering single posts (single.php) and pages (page.php), with fallbacks.',
  },
  {
    id: 'archive_hierarchy',
    label: 'Archive\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_hierarchy',
    definition: 'Category, tag, taxonomy, author, and date archives with multiple specificity layers.',
  },
  {
    id: 'special_templates',
    label: 'Special Pages\n(404, search)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_hierarchy',
    definition: 'Files like 404.php or search.php that render edge-case site pages.',
  },

  // Level 2 Theme Structure
  {
    id: 'functions_file',
    label: 'functions.php',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_structure',
    definition: 'The file that hooks into WordPress and loads theme support, scripts, styles, and features.',
  },
  {
    id: 'style_sheet',
    label: 'style.css',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_structure',
    definition: 'The main CSS file and also the required metadata that registers the theme with WordPress.',
  },
  {
    id: 'theme_json',
    label: 'theme.json',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_structure',
    definition: 'A configuration file used in block themes to define styles, color palettes, and layout settings globally.',
  },

  // Level 2 Template Parts
  {
    id: 'header_footer',
    label: 'Header &\nFooter',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_parts',
    definition: 'Common template parts found in nearly every theme for branding and navigation structure.',
  },
  {
    id: 'custom_blocks',
    label: 'Custom Block\nSections',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_parts',
    definition: 'Reusable visual or functional sections such as hero areas, testimonials, or callouts.',
  },

  // Level 2 Child Themes
  {
    id: 'override_templates',
    label: 'Override\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'child_themes',
    definition: 'Child themes override specific files like page.php or single.php from the parent theme.',
  },
  {
    id: 'enqueue_styles',
    label: 'Enqueue\nParent Styles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'child_themes',
    definition: 'functions.php in child themes should enqueue the parent theme’s stylesheet properly.',
  },

  // Level 2 Starter Themes
  {
    id: 'underscores',
    label: 'Underscores (_s)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'starter_themes',
    definition: 'A clean and minimal starter theme developed by Automattic to encourage best practices.',
  },
  {
    id: 'understrap',
    label: 'Understrap',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'starter_themes',
    definition: 'Combines Underscores with Bootstrap for rapid theme prototyping with utility classes.',
  },
]

export const links = [
  { source: 'root', target: 'template_hierarchy' },
  { source: 'root', target: 'theme_structure' },
  { source: 'root', target: 'template_parts' },
  { source: 'root', target: 'child_themes' },
  { source: 'root', target: 'starter_themes' },

  { source: 'template_hierarchy', target: 'single_hierarchy' },
  { source: 'template_hierarchy', target: 'archive_hierarchy' },
  { source: 'template_hierarchy', target: 'special_templates' },

  { source: 'theme_structure', target: 'functions_file' },
  { source: 'theme_structure', target: 'style_sheet' },
  { source: 'theme_structure', target: 'theme_json' },

  { source: 'template_parts', target: 'header_footer' },
  { source: 'template_parts', target: 'custom_blocks' },

  { source: 'child_themes', target: 'override_templates' },
  { source: 'child_themes', target: 'enqueue_styles' },

  { source: 'starter_themes', target: 'underscores' },
  { source: 'starter_themes', target: 'understrap' },
]
