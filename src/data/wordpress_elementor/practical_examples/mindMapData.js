import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Practical Use\nCases',
    shape: 'roundRect',
    color: 'root',
    definition: 'Real-world examples of how users leverage Elementor templates, blocks, and kits for different types of projects and design workflows.',
  },

  // Personal & Portfolio Use
  {
    id: 'personal_sites',
    label: 'Personal and\nPortfolio Sites',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use templates and kits to quickly assemble CVs, portfolios, or personal landing pages.',
  },
  {
    id: 'resume_layout',
    label: 'Resume or\nBio Pages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'personal_sites',
    definition: 'One-page layouts using blocks like intro, experience, education, and contact.',
  },
  {
    id: 'creative_portfolio',
    label: 'Creative\nPortfolios',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'personal_sites',
    definition: 'Template galleries or filterable grids for showcasing design, photography, or art.',
  },

  // Small Business Use
  {
    id: 'business_sites',
    label: 'Small Business\nWebsites',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Common business structures made easier with Website Kits and global styles.',
  },
  {
    id: 'service_pages',
    label: 'Service and\nPricing Pages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business_sites',
    definition: 'Use pricing tables, testimonials, and call-to-action blocks from the template library.',
  },
  {
    id: 'lead_capture',
    label: 'Lead Capture\nLanding Pages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business_sites',
    definition: 'Use prebuilt forms, popups, and countdown templates to build conversion-focused flows.',
  },

  // Blogging and Content
  {
    id: 'blogging_use',
    label: 'Blog and\nContent Templates',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Writers and publishers use Theme Templates and dynamic blocks for structured content delivery.',
  },
  {
    id: 'single_post_template',
    label: 'Single Post\nTemplate',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'blogging_use',
    definition: 'Create custom layouts with dynamic fields for featured image, post title, date, and author.',
  },
  {
    id: 'archive_templates',
    label: 'Category or\nArchive Templates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'blogging_use',
    definition: 'Customize how lists of posts appear with post grid widgets and filters.',
  },

  // E-Commerce
  {
    id: 'ecommerce_use',
    label: 'E-Commerce\nTemplates',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'WooCommerce stores benefit from product layout templates and conversion blocks.',
  },
  {
    id: 'product_page',
    label: 'Product Page\nLayouts',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ecommerce_use',
    definition: 'Customize product title, image gallery, price, reviews, and upsells using Pro widgets.',
  },
  {
    id: 'cart_checkout',
    label: 'Cart and\nCheckout Pages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ecommerce_use',
    definition: 'Use WooCommerce Builder to style cart, checkout, and thank-you pages.',
  },

  // Agencies & Freelancers
  {
    id: 'agency_use',
    label: 'Agencies and\nFreelancers',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use custom saved templates and kits to streamline repeatable design for clients.',
  },
  {
    id: 'shared_libraries',
    label: 'Template\nLibraries',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'agency_use',
    definition: 'Create internal libraries of headers, footers, FAQs, service pages, and more.',
  },
  {
    id: 'client_hand_off',
    label: 'Client Handoff\nand Cloning',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'agency_use',
    definition: 'Export .json templates or full Website Kits to reuse and reskin across projects.',
  }
]

export const links = [
  { source: 'personal_sites', target: 'root' },
  { source: 'resume_layout', target: 'personal_sites' },
  { source: 'creative_portfolio', target: 'personal_sites' },

  { source: 'business_sites', target: 'root' },
  { source: 'service_pages', target: 'business_sites' },
  { source: 'lead_capture', target: 'business_sites' },

  { source: 'blogging_use', target: 'root' },
  { source: 'single_post_template', target: 'blogging_use' },
  { source: 'archive_templates', target: 'blogging_use' },

  { source: 'ecommerce_use', target: 'root' },
  { source: 'product_page', target: 'ecommerce_use' },
  { source: 'cart_checkout', target: 'ecommerce_use' },

  { source: 'agency_use', target: 'root' },
  { source: 'shared_libraries', target: 'agency_use' },
  { source: 'client_hand_off', target: 'agency_use' }
]
