import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Widgets\nLibrary',
    shape: 'roundRect',
    color: 'root',
    definition: 'Comprehensive categorization of all widgets available in Elementor Free and Pro, organized by purpose and functionality.',
  },

  // Free Widgets
  {
    id: 'free_widgets',
    label: 'Free\nWidgets',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Widgets included in the free version of Elementor for layout, media, interaction, and text formatting.',
  },
  {
    id: 'free_design_widgets',
    label: 'Design &\nStructure',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'free_widgets',
    definition: 'Widgets used for building page structure and layout (e.g., Section, Inner Section, Divider).',
  },
  {
    id: 'free_content_widgets',
    label: 'Content &\nMedia',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'free_widgets',
    definition: 'Widgets for displaying text, images, videos, icons, and embedded elements.',
  },
  {
    id: 'free_interactive_widgets',
    label: 'Interactive &\nUtility',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'free_widgets',
    definition: 'Widgets like Tabs, Accordion, Counter, Button, and other user-triggered components.',
  },

  // Pro Widgets
  {
    id: 'pro_widgets',
    label: 'Pro\nWidgets',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Exclusive widgets in Elementor Pro for forms, dynamic data, marketing, and WooCommerce customization.',
  },
  {
    id: 'pro_marketing_widgets',
    label: 'Marketing &\nConversion',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pro_widgets',
    definition: 'Widgets like Call to Action, Slides, Countdown, Testimonial Carousel, and Price Table.',
  },
  {
    id: 'pro_theme_elements',
    label: 'Theme\nElements',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pro_widgets',
    definition: 'Widgets for inserting dynamic post content like title, excerpt, featured image, author, and post navigation.',
  },
  {
    id: 'pro_ecommerce_widgets',
    label: 'WooCommerce\nWidgets',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pro_widgets',
    definition: 'Product-based widgets such as Add to Cart, Product Price, Product Description, Cart, Checkout, and My Account.',
  },
  {
    id: 'pro_form_widgets',
    label: 'Forms &\nInputs',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'pro_widgets',
    definition: 'Drag-and-drop form fields, integrations with CRM tools, and conditional logic.',
  },

  // Use Cases
  {
    id: 'use_cases',
    label: 'Use Case\nExamples',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Examples of when to use specific widgets in real-world design scenarios.',
  },
  {
    id: 'hero_section_widgets',
    label: 'Hero Sections\n(Banner)',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'use_cases',
    definition: 'Common widgets: Heading, Text Editor, Button, Background, Icon Box, Slides (Pro).',
  },
  {
    id: 'services_section_widgets',
    label: 'Services or\nFeatures',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'use_cases',
    definition: 'Common widgets: Icon Box, Image Box, Tabs, Accordion, Counter.',
  },
  {
    id: 'cta_section_widgets',
    label: 'Call to Action\nAreas',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'use_cases',
    definition: 'Widgets: Button, Call to Action (Pro), Countdown (Pro), Testimonials.',
  },
  {
    id: 'blog_widgets',
    label: 'Blog / Post\nLayouts',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'use_cases',
    definition: 'Pro widgets: Posts, Loop Grid, Post Title, Post Excerpt, Post Content, Author Box.',
  },
  {
    id: 'ecommerce_widgets',
    label: 'E-commerce\nSections',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'use_cases',
    definition: 'WooCommerce widgets for product listings, cart, checkout, and related items.',
  }
]

export const links = [
  { source: 'free_widgets', target: 'root' },
  { source: 'free_design_widgets', target: 'free_widgets' },
  { source: 'free_content_widgets', target: 'free_widgets' },
  { source: 'free_interactive_widgets', target: 'free_widgets' },

  { source: 'pro_widgets', target: 'root' },
  { source: 'pro_marketing_widgets', target: 'pro_widgets' },
  { source: 'pro_theme_elements', target: 'pro_widgets' },
  { source: 'pro_ecommerce_widgets', target: 'pro_widgets' },
  { source: 'pro_form_widgets', target: 'pro_widgets' },

  { source: 'use_cases', target: 'root' },
  { source: 'hero_section_widgets', target: 'use_cases' },
  { source: 'services_section_widgets', target: 'use_cases' },
  { source: 'cta_section_widgets', target: 'use_cases' },
  { source: 'blog_widgets', target: 'use_cases' },
  { source: 'ecommerce_widgets', target: 'use_cases' }
]
