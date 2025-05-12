import { COLORS } from '../../../theme/colors';

export const nodes = [
  {
    id: 'root',
    label: 'Navigation\nPatterns',
    shape: 'roundRect',
    color: 'root',
    definition: 'Design options and behaviors that define how users navigate a website. Includes header, footer, sidebars, menus, mobile UX, breadcrumbs, and internal links.',
  },

  // Level 1 Positive
  {
    id: 'nodePositive1_headers',
    label: 'Header\nDesign',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Fixed, sticky, dynamic, or stylistic header variations that affect usability, branding, and discoverability.',
  },
  {
    id: 'nodePositive1_footers',
    label: 'Footer\nDesign',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Footer strategies to improve navigation, trust, SEO, and engagement through structured layouts and legal/info elements.',
  },
  {
    id: 'nodePositive1_sidebars',
    label: 'Sidebar\nNavigation',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Left/right sidebars for global nav, contextual actions, filters, or supporting links.',
  },
  {
    id: 'nodePositive1_menus',
    label: 'Menu\nSystems',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Dropdowns, mega menus, and vertical menus—each with different use cases and discoverability levels.',
  },
  {
    id: 'nodePositive1_mobile_nav',
    label: 'Mobile\nNavigation',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Patterns like hamburger menus, bottom nav bars, and off-canvas systems optimized for small screens.',
  },
  {
    id: 'nodePositive1_breadcrumbs',
    label: 'Breadcrumb\nNavigation',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Hierarchical trails that help users retrace steps, orient themselves, and improve SEO.',
  },
  {
    id: 'nodePositive1_internal_links',
    label: 'Internal\nLinking',
    shape: 'ellipse',
    color: 'nodePositive1',
    parent: 'root',
    definition: 'Hyperlinks connecting pages within a site to improve UX, SEO, equity distribution, and crawlability.',
  },

  // Level 2 children of headers
  {
    id: 'nodePositive2_fixed_header',
    label: 'Fixed\nHeader',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_headers',
    definition: 'Always stays at the top. Best for branding and key links. Matches eye-scanning patterns.',
  },
  {
    id: 'nodePositive2_sticky_header',
    label: 'Sticky\nHeader',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_headers',
    definition: 'Follows the user on scroll. Great for persistent navigation and CTAs.',
  },
  {
    id: 'nodePositive2_dynamic_header',
    label: 'Dynamic\nHeader',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_headers',
    definition: 'Changes based on user behavior/context. Can show live content, minimize, or adapt.',
  },

  // Level 2 children of menus
  {
    id: 'nodePositive2_dropdown_menu',
    label: 'Dropdown\nMenu',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_menus',
    definition: 'Reveals subitems on hover or click. Great for conserving space. Watch for usability on mobile.',
  },
  {
    id: 'nodePositive2_mega_menu',
    label: 'Mega\nMenu',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_menus',
    definition: 'Large menu showing many categories. Ideal for e-commerce or large content sites.',
  },
  {
    id: 'nodePositive2_vertical_menu',
    label: 'Vertical\nMenu',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_menus',
    definition: 'Persistent sidebar-style menu. Better for apps, dashboards, or deep nav trees.',
  },

  // Level 2 children of mobile nav
  {
    id: 'nodePositive2_hamburger_menu',
    label: 'Hamburger\nMenu',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_mobile_nav',
    definition: 'Icon-triggered menu for compact nav. Common on mobile; controversial for discoverability.',
  },
  {
    id: 'nodePositive2_bottom_nav',
    label: 'Bottom\nNavigation',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_mobile_nav',
    definition: 'Places key actions within thumb reach. Common in mobile apps.',
  },
  {
    id: 'nodePositive2_off_canvas',
    label: 'Off-Canvas\nMenu',
    shape: 'rect',
    color: 'nodePositive2',
    parent: 'nodePositive1_mobile_nav',
    definition: 'Hidden nav slides in from screen edge. Saves space while allowing full site nav.',
  },

  // Negative node structure
  {
    id: 'nodeNegative1_cons',
    label: 'Cons',
    shape: 'hexagon',
    color: 'nodeNegative1',
    parent: 'root',
    definition: 'Navigation anti-patterns and drawbacks impacting usability, accessibility, or discoverability.',
  },
  {
    id: 'nodeNegative2_hidden_navigation',
    label: 'Hidden\nNavigation',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_cons',
    definition: 'Menus hidden behind icons reduce visibility and increase task failure rates, especially on desktop.',
  },
  {
    id: 'nodeNegative2_overcrowded_menus',
    label: 'Overcrowded\nMenus',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_cons',
    definition: 'Menus with too many options can overwhelm users and hinder decision-making.',
  },
  {
    id: 'nodeNegative2_inconsistent_layouts',
    label: 'Inconsistent\nLayouts',
    shape: 'rect',
    color: 'nodeNegative2',
    parent: 'nodeNegative1_cons',
    definition: 'Changing nav placement or behavior across pages reduces familiarity and usability.',
  }
];

export const links = [
  { source: 'root', target: 'nodePositive1_headers' },
  { source: 'root', target: 'nodePositive1_footers' },
  { source: 'root', target: 'nodePositive1_sidebars' },
  { source: 'root', target: 'nodePositive1_menus' },
  { source: 'root', target: 'nodePositive1_mobile_nav' },
  { source: 'root', target: 'nodePositive1_breadcrumbs' },
  { source: 'root', target: 'nodePositive1_internal_links' },
  { source: 'root', target: 'nodeNegative1_cons' },

  { source: 'nodePositive1_headers', target: 'nodePositive2_fixed_header' },
  { source: 'nodePositive1_headers', target: 'nodePositive2_sticky_header' },
  { source: 'nodePositive1_headers', target: 'nodePositive2_dynamic_header' },

  { source: 'nodePositive1_menus', target: 'nodePositive2_dropdown_menu' },
  { source: 'nodePositive1_menus', target: 'nodePositive2_mega_menu' },
  { source: 'nodePositive1_menus', target: 'nodePositive2_vertical_menu' },

  { source: 'nodePositive1_mobile_nav', target: 'nodePositive2_hamburger_menu' },
  { source: 'nodePositive1_mobile_nav', target: 'nodePositive2_bottom_nav' },
  { source: 'nodePositive1_mobile_nav', target: 'nodePositive2_off_canvas' },

  { source: 'nodeNegative1_cons', target: 'nodeNegative2_hidden_navigation' },
  { source: 'nodeNegative1_cons', target: 'nodeNegative2_overcrowded_menus' },
  { source: 'nodeNegative1_cons', target: 'nodeNegative2_inconsistent_layouts' }
];
