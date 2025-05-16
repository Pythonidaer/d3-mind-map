import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Elementor Website\nExamples',
    shape: 'roundRect',
    color: 'root',
    definition: 'A showcase of real website types built with Elementor, grouped by industry and purpose, to inspire use of templates and kits.',
  },

  // Creative and Portfolio
  {
    id: 'creative_sites',
    label: 'Creative and\nPortfolio Sites',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Used by designers, artists, and photographers to showcase visual work with galleries and bold layouts.',
  },
  {
    id: 'photography_site',
    label: 'Photography\nShowcase',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'creative_sites',
    definition: 'Elegant fullscreen layouts with image grids, carousels, and lightbox interactions.',
  },
  {
    id: 'graphic_design_portfolio',
    label: 'Graphic Design\nPortfolio',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'creative_sites',
    definition: 'Uses filterable galleries and custom post types for showcasing projects or case studies.',
  },

  // Business & Agency
  {
    id: 'business_sites',
    label: 'Business and\nAgency Sites',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Used by small to mid-sized companies for lead generation, service display, and branding.',
  },
  {
    id: 'consulting_firm',
    label: 'Consulting or\nFinance',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business_sites',
    definition: 'Professional service layouts with trust-building elements like testimonials and case studies.',
  },
  {
    id: 'digital_agency_site',
    label: 'Digital Marketing\nAgency',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business_sites',
    definition: 'Colorful, high-conversion landing pages using calls to action, stats, and visual effects.',
  },

  // E-Commerce
  {
    id: 'ecommerce_examples',
    label: 'E-Commerce\nWebsites',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Elementor-powered WooCommerce sites for online retail with custom product templates.',
  },
  {
    id: 'fashion_store',
    label: 'Fashion or\nApparel Store',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ecommerce_examples',
    definition: 'Grid-based product layouts, seasonal banners, and styled checkout flows.',
  },
  {
    id: 'one_product_shop',
    label: 'One-Product\nLanding Site',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ecommerce_examples',
    definition: 'Focused site with longform sales page, testimonials, and integrated checkout.',
  },

  // Blog and Magazine
  {
    id: 'content_sites',
    label: 'Blog and\nMagazine Sites',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Content-heavy sites using Theme Builder for dynamic posts and archives.',
  },
  {
    id: 'tech_blog',
    label: 'Tech or SaaS\nBlog',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'content_sites',
    definition: 'Clean post layouts with sidebar opt-ins and related content widgets.',
  },
  {
    id: 'online_magazine',
    label: 'Online\nMagazine',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'content_sites',
    definition: 'Category-based archive designs, author sections, and visual feature zones.',
  },

  // Nonprofit and Community
  {
    id: 'nonprofit_sites',
    label: 'Nonprofit and\nCommunity',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Mission-focused sites using emotional imagery and donation integrations.',
  },
  {
    id: 'charity_website',
    label: 'Charity or\nFundraising Site',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nonprofit_sites',
    definition: 'Donation form templates, volunteer CTAs, and goal progress indicators.',
  },
  {
    id: 'local_community',
    label: 'Local Community\nProjects',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nonprofit_sites',
    definition: 'Used by events, schools, and local orgs with maps, calendars, and social feeds.',
  }
]

export const links = [
  { source: 'creative_sites', target: 'root' },
  { source: 'photography_site', target: 'creative_sites' },
  { source: 'graphic_design_portfolio', target: 'creative_sites' },

  { source: 'business_sites', target: 'root' },
  { source: 'consulting_firm', target: 'business_sites' },
  { source: 'digital_agency_site', target: 'business_sites' },

  { source: 'ecommerce_examples', target: 'root' },
  { source: 'fashion_store', target: 'ecommerce_examples' },
  { source: 'one_product_shop', target: 'ecommerce_examples' },

  { source: 'content_sites', target: 'root' },
  { source: 'tech_blog', target: 'content_sites' },
  { source: 'online_magazine', target: 'content_sites' },

  { source: 'nonprofit_sites', target: 'root' },
  { source: 'charity_website', target: 'nonprofit_sites' },
  { source: 'local_community', target: 'nonprofit_sites' }
]
