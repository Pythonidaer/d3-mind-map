import { COLORS } from '../../../theme/colors'

export const nodes = [
  {
    id: 'root',
    label: 'Elementor\nPro Features',
    shape: 'roundRect',
    color: 'root',
    definition: 'Advanced features unlocked in Elementor Pro, including additional widgets, dynamic content, site-wide customization tools, e-commerce integration, and marketing capabilities.',
  },

  // Theme Builder
  {
    id: 'theme_builder',
    label: 'Theme\nBuilder',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Lets users visually design site-wide templates like headers, footers, single post layouts, and archives.',
  },
  {
    id: 'header_footer_templates',
    label: 'Header & Footer\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_builder',
    definition: 'Build and apply global header and footer layouts using drag-and-drop widgets.',
  },
  {
    id: 'single_post_templates',
    label: 'Single Post &\nPage Templates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_builder',
    definition: 'Create dynamic templates for posts, pages, and custom post types.',
  },
  {
    id: 'archive_404_templates',
    label: 'Archive &\n404 Templates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'theme_builder',
    definition: 'Customize layouts for category/tag archives, search results, and 404 pages.',
  },

  // Dynamic Content
  {
    id: 'dynamic_content',
    label: 'Dynamic\nContent',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Populate widgets with dynamic data from the WordPress database or custom fields.',
  },
  {
    id: 'acf_integration',
    label: 'ACF /\nCustom Fields',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'dynamic_content',
    definition: 'Pull values from custom fields created with ACF, PODs, MetaBox, or JetEngine.',
  },
  {
    id: 'dynamic_tags',
    label: 'Dynamic\nTags',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'dynamic_content',
    definition: 'Insert post titles, featured images, author names, and more into templates.',
  },

  // Pro Widgets
  {
    id: 'pro_widgets',
    label: 'Pro\nWidgets (80+)',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Unlocks a large library of widgets including marketing, layout, content, and WooCommerce elements.',
  },
  {
    id: 'marketing_widgets',
    label: 'Marketing\nWidgets',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'pro_widgets',
    definition: 'Includes Call to Action, Form, Slides, Countdown, Testimonials, and more.',
  },
  {
    id: 'theme_elements',
    label: 'Theme\nElements',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'pro_widgets',
    definition: 'Widgets for post title, featured image, breadcrumbs, site logo, and search bar.',
  },
  {
    id: 'woocommerce_widgets',
    label: 'WooCommerce\nWidgets',
    shape: 'diamond',
    color: 'nodePositive3',
    parent: 'pro_widgets',
    definition: 'Customize product pages, cart, checkout, and use product widgets like Add to Cart or Product Price.',
  },

  // Forms & Popups
  {
    id: 'form_builder',
    label: 'Form\nBuilder',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Create contact, registration, and marketing forms with advanced options and integrations.',
  },
  {
    id: 'form_actions',
    label: 'Actions After\nSubmit',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_builder',
    definition: 'Send emails, redirect users, trigger webhooks, or add to CRM platforms.',
  },
  {
    id: 'form_integrations',
    label: 'CRM & Email\nIntegrations',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'form_builder',
    definition: 'Integrate with Mailchimp, ActiveCampaign, HubSpot, ConvertKit, and more.',
  },

  {
    id: 'popup_builder',
    label: 'Popup\nBuilder',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Design and deploy popups with triggers, targeting rules, and full widget support.',
  },
  {
    id: 'popup_triggers',
    label: 'Trigger &\nConditions',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'popup_builder',
    definition: 'Show on page load, scroll, exit intent, or click, and target specific devices or user roles.',
  },
  {
    id: 'popup_design',
    label: 'Full Widget\nSupport',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'popup_builder',
    definition: 'Use any Elementor widget inside the popup, including Forms and CTAs.',
  },

  // Advanced Design
  {
    id: 'motion_effects',
    label: 'Motion Effects\n& Animations',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Add interactivity with scrolling effects, mouse tracking, parallax, and entrance animations.',
  },
  {
    id: 'custom_css',
    label: 'Custom CSS\nPer Widget',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Write CSS directly in the editor on widgets, sections, or pages.',
  },
  {
    id: 'custom_fonts_icons',
    label: 'Custom Fonts\n& Icons',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Upload and use unique fonts or icon sets site-wide.',
  },
  {
    id: 'advanced_layout',
    label: 'Advanced\nLayout Options',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Use absolute or fixed positioning, z-index control, and container flexibility.',
  },

  // WooCommerce Builder
  {
    id: 'woocommerce_builder',
    label: 'WooCommerce\nBuilder',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Customizes every part of an online store: product pages, cart, checkout, archive, and more.',
  },

  // Productivity & Support
  {
    id: 'premium_support',
    label: 'Premium\nSupport',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Access to professional support channels with faster response times.',
  }
]

export const links = [
  { source: 'theme_builder', target: 'root' },
  { source: 'header_footer_templates', target: 'theme_builder' },
  { source: 'single_post_templates', target: 'theme_builder' },
  { source: 'archive_404_templates', target: 'theme_builder' },

  { source: 'dynamic_content', target: 'root' },
  { source: 'acf_integration', target: 'dynamic_content' },
  { source: 'dynamic_tags', target: 'dynamic_content' },

  { source: 'pro_widgets', target: 'root' },
  { source: 'marketing_widgets', target: 'pro_widgets' },
  { source: 'theme_elements', target: 'pro_widgets' },
  { source: 'woocommerce_widgets', target: 'pro_widgets' },

  { source: 'form_builder', target: 'root' },
  { source: 'form_actions', target: 'form_builder' },
  { source: 'form_integrations', target: 'form_builder' },

  { source: 'popup_builder', target: 'root' },
  { source: 'popup_triggers', target: 'popup_builder' },
  { source: 'popup_design', target: 'popup_builder' },

  { source: 'motion_effects', target: 'root' },
  { source: 'custom_css', target: 'root' },
  { source: 'custom_fonts_icons', target: 'root' },
  { source: 'advanced_layout', target: 'root' },

  { source: 'woocommerce_builder', target: 'root' },
  { source: 'premium_support', target: 'root' }
]
