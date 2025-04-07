// src/config/contentCategories.js

export const contentCategories = [
  {
    id: 'paradigms',             // Unique ID for the category
    name: 'Paradigms',           // Name for display (e.g., in Navbar dropdown label)
    baseRoute: '/paradigm',      // Base URL path segment for this category
    dataPath: 'paradigms',       // Corresponding folder name in src/data/
    addToNav: true,              // Include this category in Navbar navigation
    subcategories: [
      { id: 'functional', name: 'Functional', path: 'functional', addToNav: true },
      { id: 'declarative', name: 'Declarative', path: 'declarative', addToNav: true },
      { id: 'oop', name: 'Object-Oriented', path: 'oop', addToNav: true },
      { id: 'procedural', name: 'Procedural', path: 'procedural', addToNav: true },
      { id: 'imperative', name: 'Imperative', path: 'imperative', addToNav: true },
    ],
  },
  {
    id: 'fundamentals',
    name: 'Fundamentals',
    baseRoute: '/fundamental',    // Distinct base route for this category
    dataPath: 'fundamentals',
    addToNav: true,
    subcategories: [
       { id: 'core', name: 'Core', path: 'core', addToNav: true },
       { id: 'data', name: 'Data', path: 'data', addToNav: true },
       { id: 'browser', name: 'Browser', path: 'browser', addToNav: true },
       { id: 'async', name: 'Async', path: 'async', addToNav: true },
       { id: 'advanced', name: 'Advanced', path: 'advanced', addToNav: true },
       { id: 'tooling_and_testing', name: 'Tooling & Testing', path: 'tooling_and_testing', addToNav: false },
       // Future fundamental topics (like 'variables', 'data-types') added here
    ],
  },
  {
    id: 'solid',
    name: 'SOLID',
    baseRoute: '/solid',
    dataPath: 'solid',
    addToNav: true,
    subcategories: [
      { id: 'srp', name: 'SRP', path: 'srp', addToNav: true },
      { id: 'ocp', name: 'OCP', path: 'ocp', addToNav: true },
      { id: 'lsp', name: 'LSP', path: 'lsp', addToNav: true },
      { id: 'isp', name: 'ISP', path: 'isp', addToNav: true },
      { id: 'dip', name: 'DIP', path: 'dip', addToNav: true },
    ],
  },
  // Add future categories like 'Testing', 'SOLID' here following the same structure
];

// Static pages configuration
export const staticPages = [
    { id: 'about', name: 'About', route: '/about', addToNav: true },
    // Add other static pages here if any
];

// --- Helper Functions ---

/**
 * Finds the full configuration for a content page based on URL parameters.
 * @param {string} categoryParam - The category part of the URL (e.g., 'paradigm').
 * @param {string} subcategoryParam - The subcategory part of the URL (e.g., 'functional').
 * @returns {object|null} Object containing category and subcategory config, or null if not found.
 */
export function getContentConfig(categoryParam, subcategoryParam) {
  // Match category by the URL segment (e.g., 'paradigm' from '/paradigm/functional')
  const category = contentCategories.find(cat => cat.baseRoute === `/${categoryParam}`);
  if (!category) {
    console.error(`Category config not found for param: ${categoryParam}`);
    return null;
  }

  // Match subcategory by its path segment (e.g., 'functional')
  const subcategory = category.subcategories.find(sub => sub.path === subcategoryParam);
  if (!subcategory) {
    console.error(`Subcategory config not found for param: ${subcategoryParam} in category ${categoryParam}`);
    return null; // If URL is invalid (e.g., /paradigm/nonexistent), return null
  }

  return { category, subcategory };
}

/**
 * Finds the category configuration based on the category URL parameter.
 * Used by Navbar to sync its state with the current content page's category.
 * @param {string} categoryParam - The category part of the URL (e.g., 'paradigm').
 * @returns {object|null} The category configuration object or null.
 */
export function findCategoryByParam(categoryParam) {
    return contentCategories.find(cat => cat.baseRoute === `/${categoryParam}`) || null;
}


/**
 * Generates structured data specifically for building the Navbar UI.
 * @returns {object} Object with 'dynamic' and 'static' arrays for nav items.
 */
export function getNavData() {
    const dynamicNavItems = contentCategories
        .filter(cat => cat.addToNav)
        .map(cat => ({
            // Info for the dropdown label/selector
            id: cat.id, // e.g., 'paradigms'
            name: cat.name, // "Paradigms"
            // Info for the links within the dropdown
            subcategories: cat.subcategories
                .filter(sub => sub.addToNav)
                .map(sub => ({
                    id: sub.id, // e.g., 'functional'
                    name: sub.name, // "Functional"
                    path: `${cat.baseRoute}/${sub.path}` // "/paradigm/functional"
                }))
        }));

    const staticNavItems = staticPages
        .filter(page => page.addToNav)
        .map(page => ({
            id: page.id, // "about"
            name: page.name, // "About"
            path: page.route, // "/about"
            isStatic: true
        }));

    // Determine the default category to show in Navbar (first one defined)
    const defaultCategory = dynamicNavItems.length > 0 ? dynamicNavItems[0] : null;

    return { dynamic: dynamicNavItems, static: staticNavItems, defaultCategory };
}
