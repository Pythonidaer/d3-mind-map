import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'ACF and Metadata',
    shape: 'roundRect',
    color: 'root',
    definition: 'Explores how Advanced Custom Fields (ACF) and metadata structures extend WordPress content architecture.'
  },

  // Positive Branches
  {
    id: 'acf_usage',
    label: 'ACF\nUsage',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Describes common scenarios for using Advanced Custom Fields to enhance post types.'
  },
  {
    id: 'field_types',
    label: 'Field\nTypes',
    parent: 'acf_usage',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Types of fields offered by ACF for collecting structured data.'
  },
  {
    id: 'content_modeling',
    label: 'Content\nModeling',
    parent: 'acf_usage',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Using ACF to structure page layouts, dynamic content, and UI components.'
  },
  {
    id: 'repeater_flexible',
    label: 'Repeater &\nFlexible Fields',
    parent: 'acf_usage',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Advanced field types in ACF used for complex or repeatable layouts.'
  },

  {
    id: 'template_integration',
    label: 'Template\nIntegration',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'How ACF fields are rendered inside PHP templates and block themes.'
  },
  {
    id: 'classic_php',
    label: 'Classic\nTheme Usage',
    parent: 'template_integration',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Displaying ACF data in PHP-based templates using `get_field()` or `the_field()`.'
  },
  {
    id: 'block_theme_usage',
    label: 'Block Theme\nUsage',
    parent: 'template_integration',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Using ACF in block themes via block JSON registration or dynamic blocks.'
  },

  {
    id: 'metadata_relationships',
    label: 'Metadata &\nRelationships',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Custom metadata relationships between posts, users, terms, or options.'
  },
  {
    id: 'post_meta',
    label: 'Post\nMeta',
    parent: 'metadata_relationships',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Data stored per post using WordPress’s meta system (`postmeta` table).'
  },
  {
    id: 'term_user_meta',
    label: 'Term &\nUser Meta',
    parent: 'metadata_relationships',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Attaching metadata to taxonomies and users (e.g. user bios, term banners).'
  },
  {
    id: 'options_pages',
    label: 'ACF\nOptions Pages',
    parent: 'metadata_relationships',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Global site settings stored as metadata using ACF Options Pages.'
  },

  {
    id: 'extending_acf',
    label: 'Extending\nACF',
    parent: 'root',
    shape: 'ellipse',
    color: 'nodePositive1',
    definition: 'Ways to extend ACF with custom field types, hooks, and conditional logic.'
  },
  {
    id: 'custom_field_types',
    label: 'Custom Field\nTypes',
    parent: 'extending_acf',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Creating your own input interfaces or JavaScript-driven field types.'
  },
  {
    id: 'conditional_logic',
    label: 'Conditional\nLogic',
    parent: 'extending_acf',
    shape: 'rect',
    color: 'nodePositive2',
    definition: 'Controlling field visibility based on values or conditions in the admin.'
  },

  // Cons Branch
  {
    id: 'cons',
    label: 'Cons',
    parent: 'root',
    shape: 'hexagon',
    color: 'nodeNegative1',
    definition: 'Limitations and drawbacks of relying heavily on ACF or metadata.'
  },
  {
    id: 'performance_impact',
    label: 'Performance\nImpact',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Excessive metadata can cause large `postmeta` tables and slower queries.'
  },
  {
    id: 'vendor_lockin',
    label: 'Vendor\nLock-in',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'Relying on ACF Pro features may restrict portability or future transitions.'
  },
  {
    id: 'data_visibility',
    label: 'Hidden Data\nStructure',
    parent: 'cons',
    shape: 'rect',
    color: 'nodeNegative2',
    definition: 'ACF metadata is often hidden in the database and lacks schema validation.'
  }
]

export const links = [
  { source: 'acf_usage', target: 'root' },
  { source: 'field_types', target: 'acf_usage' },
  { source: 'content_modeling', target: 'acf_usage' },
  { source: 'repeater_flexible', target: 'acf_usage' },

  { source: 'template_integration', target: 'root' },
  { source: 'classic_php', target: 'template_integration' },
  { source: 'block_theme_usage', target: 'template_integration' },

  { source: 'metadata_relationships', target: 'root' },
  { source: 'post_meta', target: 'metadata_relationships' },
  { source: 'term_user_meta', target: 'metadata_relationships' },
  { source: 'options_pages', target: 'metadata_relationships' },

  { source: 'extending_acf', target: 'root' },
  { source: 'custom_field_types', target: 'extending_acf' },
  { source: 'conditional_logic', target: 'extending_acf' },

  { source: 'cons', target: 'root' },
  { source: 'performance_impact', target: 'cons' },
  { source: 'vendor_lockin', target: 'cons' },
  { source: 'data_visibility', target: 'cons' }
]
