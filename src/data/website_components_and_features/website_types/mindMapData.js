import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Website\nTypes',
    shape: 'roundRect',
    color: 'root',
    definition: 'Common categories of websites, each with distinct goals, audiences, and feature sets. Understanding these types guides design and feature decisions.',
  },

  // Level 1
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Websites designed to sell physical or digital products with shopping and checkout capabilities.',
  },
  {
    id: 'blog',
    label: 'Blog',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Content-focused sites that prioritize articles, categories, and publishing workflows.',
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Personal or agency sites showcasing creative or professional work.',
  },
  {
    id: 'business',
    label: 'Business',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Corporate or service-oriented sites meant to establish trust and generate leads.',
  },
  {
    id: 'educational',
    label: 'Educational',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Sites delivering structured learning experiences, courses, or academic resources.',
  },
  {
    id: 'media_news',
    label: 'Media & News',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Editorial websites publishing high-frequency news or multimedia content.',
  },
  {
    id: 'social_platforms',
    label: 'Social\nPlatforms',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Websites where user-generated content and interaction drive the core experience.',
  },
  {
    id: 'nonprofit',
    label: 'Nonprofit',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Mission-driven sites focused on donations, awareness, or volunteer coordination.',
  },

  // E-Commerce Children
  {
    id: 'product_pages',
    label: 'Product\nPages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ecommerce',
    definition: 'Detail views with pricing, descriptions, and images.',
  },
  {
    id: 'shopping_cart',
    label: 'Shopping\nCart',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ecommerce',
    definition: 'Allows users to collect and review items before checkout.',
  },
  {
    id: 'checkout_flow',
    label: 'Checkout\nFlow',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'ecommerce',
    definition: 'Multi-step forms for billing, shipping, and payment.',
  },

  // Blog Children
  {
    id: 'article_templates',
    label: 'Article\nTemplates',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'blog',
    definition: 'Layouts for titles, authorship, publish dates, and content formatting.',
  },
  {
    id: 'category_archives',
    label: 'Category\nArchives',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'blog',
    definition: 'Pages listing articles grouped by topic or tag.',
  },
  {
    id: 'comment_sections',
    label: 'Comment\nSections',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'blog',
    definition: 'User engagement tools to provide feedback or discussion.',
  },

  // Portfolio Children
  {
    id: 'case_studies',
    label: 'Case\nStudies',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'portfolio',
    definition: 'Narrative breakdowns of projects showing process and outcomes.',
  },
  {
    id: 'image_galleries',
    label: 'Image\nGalleries',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'portfolio',
    definition: 'Grids or lightboxes for visual work samples.',
  },
  {
    id: 'about_and_contact',
    label: 'About and\nContact',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'portfolio',
    definition: 'Biographical and outreach sections often including a contact form.',
  },

  // Business Children
  {
    id: 'services_pages',
    label: 'Services\nPages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business',
    definition: 'Descriptions of offerings and differentiators.',
  },
  {
    id: 'lead_capture',
    label: 'Lead\nCapture',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business',
    definition: 'Forms or CTAs that convert visitors into prospects.',
  },
  {
    id: 'testimonials_section',
    label: 'Testimonials\nSection',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'business',
    definition: 'Social proof via quotes or client logos.',
  },

  // Educational Children
  {
    id: 'course_listings',
    label: 'Course\nListings',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'educational',
    definition: 'Catalog of available courses or learning tracks.',
  },
  {
    id: 'student_dashboards',
    label: 'Student\nDashboards',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'educational',
    definition: 'Personalized portals showing progress and enrolled content.',
  },
  {
    id: 'lesson_pages',
    label: 'Lesson\nPages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'educational',
    definition: 'Structured units with video, reading, quizzes, or downloads.',
  },

  // Media & News Children
  {
    id: 'breaking_news_banner',
    label: 'Breaking News\nBanner',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'media_news',
    definition: 'Sticky header or alert highlighting time-sensitive headlines.',
  },
  {
    id: 'video_embed_features',
    label: 'Video Embed\nFeatures',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'media_news',
    definition: 'In-article or standalone video players with metadata.',
  },
  {
    id: 'tag_based_navigation',
    label: 'Tag-Based\nNavigation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'media_news',
    definition: 'Links and menus organized by tags or coverage areas.',
  },

  // Social Platform Children
  {
    id: 'user_profiles',
    label: 'User\nProfiles',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'social_platforms',
    definition: 'Personalized identity pages with activity history.',
  },
  {
    id: 'feed_components',
    label: 'Feed\nComponents',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'social_platforms',
    definition: 'Dynamic streams of posts, comments, and media.',
  },
  {
    id: 'notifications_and_messaging',
    label: 'Notifications and\nMessaging',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'social_platforms',
    definition: 'Real-time alerts and private conversations.',
  },

  // Nonprofit Children
  {
    id: 'donation_forms',
    label: 'Donation\nForms',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nonprofit',
    definition: 'Simplified checkout to accept one-time or recurring gifts.',
  },
  {
    id: 'mission_pages',
    label: 'Mission\nPages',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nonprofit',
    definition: 'Explains values, goals, and initiatives.',
  },
  {
    id: 'volunteer_signups',
    label: 'Volunteer\nSignups',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nonprofit',
    definition: 'Forms and listings for local or virtual opportunities.',
  }
];

export const links = [
  { source: 'root', target: 'ecommerce' },
  { source: 'root', target: 'blog' },
  { source: 'root', target: 'portfolio' },
  { source: 'root', target: 'business' },
  { source: 'root', target: 'educational' },
  { source: 'root', target: 'media_news' },
  { source: 'root', target: 'social_platforms' },
  { source: 'root', target: 'nonprofit' },

  { source: 'ecommerce', target: 'product_pages' },
  { source: 'ecommerce', target: 'shopping_cart' },
  { source: 'ecommerce', target: 'checkout_flow' },

  { source: 'blog', target: 'article_templates' },
  { source: 'blog', target: 'category_archives' },
  { source: 'blog', target: 'comment_sections' },

  { source: 'portfolio', target: 'case_studies' },
  { source: 'portfolio', target: 'image_galleries' },
  { source: 'portfolio', target: 'about_and_contact' },

  { source: 'business', target: 'services_pages' },
  { source: 'business', target: 'lead_capture' },
  { source: 'business', target: 'testimonials_section' },

  { source: 'educational', target: 'course_listings' },
  { source: 'educational', target: 'student_dashboards' },
  { source: 'educational', target: 'lesson_pages' },

  { source: 'media_news', target: 'breaking_news_banner' },
  { source: 'media_news', target: 'video_embed_features' },
  { source: 'media_news', target: 'tag_based_navigation' },

  { source: 'social_platforms', target: 'user_profiles' },
  { source: 'social_platforms', target: 'feed_components' },
  { source: 'social_platforms', target: 'notifications_and_messaging' },

  { source: 'nonprofit', target: 'donation_forms' },
  { source: 'nonprofit', target: 'mission_pages' },
  { source: 'nonprofit', target: 'volunteer_signups' }
];
