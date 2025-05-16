import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Templates and\nWebsite Kits',
    shape: 'roundRect',
    color: 'root',
    definition: 'Elementor provides prebuilt layouts in the form of blocks, full-page templates, and full-site kits. These assets accelerate website creation and support design consistency.',
  },

  // Types of Templates
  {
    id: 'template_types',
    label: 'Template\nTypes',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Elementor offers reusable layout types including Blocks, Page Templates, Website Kits, and Theme Templates.',
  },
  {
    id: 'blocks',
    label: 'Blocks\n(Sections)',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_types',
    definition: 'Single-section prebuilt components like hero banners, testimonials, or contact forms.',
  },
  {
    id: 'page_templates',
    label: 'Page\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_types',
    definition: 'Full-page layouts that cover common page types (Home, About, Contact, Services, etc.).',
  },
  {
    id: 'website_kits',
    label: 'Website\nKits',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_types',
    definition: 'Full-site bundles that include multiple templates, header/footer, styling, and theme parts.',
  },
  {
    id: 'theme_templates',
    label: 'Theme\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_types',
    definition: 'Templates used in Theme Builder (Pro) for posts, archives, headers, footers, and 404s.',
  },

  // Usage Workflow
  {
    id: 'template_workflow',
    label: 'Workflow &\nCustomization',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Templates are inserted, edited visually, saved, and reused across the site.',
  },
  {
    id: 'insert_templates',
    label: 'Insert from\nLibrary',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_workflow',
    definition: 'Click the folder icon in Elementor to access the block, page, or kit library.',
  },
  {
    id: 'customize_templates',
    label: 'Customize via\nEditor',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_workflow',
    definition: 'After insertion, use the Elementor visual editor to customize text, images, layout, and styling.',
  },
  {
    id: 'save_templates',
    label: 'Save as\nReusable Template',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_workflow',
    definition: 'Right-click any section or page and choose "Save as Template" to reuse it later.',
  },
  {
    id: 'export_import_templates',
    label: 'Export /\nImport',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_workflow',
    definition: 'Download .json templates from one site and upload to another using Elementor’s Template Library.',
  },

  // Starter Kits & Sources
  {
    id: 'template_sources',
    label: 'Sources of\nTemplates',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Templates are available from Elementor, third-party libraries, and user-defined exports.',
  },
  {
    id: 'elementor_library',
    label: 'Elementor\nLibrary',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_sources',
    definition: 'Official collection of blocks, pages, and website kits maintained by the Elementor team.',
  },
  {
    id: 'third_party_kits',
    label: 'Third-Party\nKits',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_sources',
    definition: 'External sources like Envato Elements or TemplateMonster offer importable kits and layouts.',
  },
  {
    id: 'user_templates',
    label: 'User-Defined\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'template_sources',
    definition: 'Designers can export and reuse their own custom templates or share them across clients or projects.',
  }
]

export const links = [
  { source: 'template_types', target: 'root' },
  { source: 'blocks', target: 'template_types' },
  { source: 'page_templates', target: 'template_types' },
  { source: 'website_kits', target: 'template_types' },
  { source: 'theme_templates', target: 'template_types' },

  { source: 'template_workflow', target: 'root' },
  { source: 'insert_templates', target: 'template_workflow' },
  { source: 'customize_templates', target: 'template_workflow' },
  { source: 'save_templates', target: 'template_workflow' },
  { source: 'export_import_templates', target: 'template_workflow' },

  { source: 'template_sources', target: 'root' },
  { source: 'elementor_library', target: 'template_sources' },
  { source: 'third_party_kits', target: 'template_sources' },
  { source: 'user_templates', target: 'template_sources' }
]
