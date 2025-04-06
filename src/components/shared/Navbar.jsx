import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { getNavData, findCategoryByParam } from '../../config/contentCategories.js'; // Corrected import path

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Helper to parse category param from pathname
  const getCategoryParamFromPath = (pathname) => {
    const parts = pathname.split('/').filter(Boolean); // Split and remove empty strings
    // Expecting format like ['', 'category', 'subcategory'] or ['', 'about']
    if (parts.length >= 1 && (parts[0] === 'paradigm' || parts[0] === 'fundamental')) {
      return parts[0];
    }
    return null; // Return null if not a content page path
  };

  // --- Navigation Data and State ---
  // Get structured nav data from config (memoized)
  const navData = useMemo(() => getNavData(), []);

  // State for the currently selected main category in the dropdown
  // Initialize state lazily based on the INITIAL URL pathname
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const initialPath = location.pathname;
    const initialParam = getCategoryParamFromPath(initialPath);
    if (initialParam) {
      const initialCategory = findCategoryByParam(initialParam); 
      // Need the full category object from navData for state
      const categoryFromNavData = navData.dynamic.find(cat => cat.id === initialCategory?.id);
      if (categoryFromNavData) return categoryFromNavData; 
    }
    return navData.defaultCategory; // Fallback to default
  });

  // --- Effects ---
  // Effect for hiding/showing navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Effect for closing mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        const hamburgerButton = document.querySelector(`.${styles.hamburger}`);
        if (!hamburgerButton || !hamburgerButton.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, styles.hamburger]);

  // Effect to sync selectedCategory state with URL CHANGES (after initial load)
  useEffect(() => {
    // This effect now only handles navigation *after* the initial render
    const currentPath = location.pathname;
    const categoryParam = getCategoryParamFromPath(currentPath);

    const currentSelectedIdInState = selectedCategory?.id; 
    let categoryToSelect = null;

    if (categoryParam) {
      // We are on a content page (URL has a category)
      const categoryFromUrl = findCategoryByParam(categoryParam);
      // Update state only if the URL's category is different from the current state
      if (categoryFromUrl && categoryFromUrl.id !== currentSelectedIdInState) {
        categoryToSelect = navData.dynamic.find(cat => cat.id === categoryFromUrl.id) || navData.defaultCategory;
      }
    } else {
      // We are NOT on a content page (e.g., /about, /)
      // DO NOTHING here - let the state retain its previous value when navigating TO a non-content page.
      // The state will only reset to default if the page is initially loaded/refreshed
      // on a non-content page (handled by useState initializer).
      // Example: Navigate /fundamental/syntax -> /about : Dropdown stays on Fundamentals
      //          Refresh /about : Dropdown resets to Paradigms (by useState)
    }

    // Update state only if a change is needed
    if (categoryToSelect) { 
        setSelectedCategory(categoryToSelect);
    }
    
    // DEPENDENCY ARRAY: React only to pathname changes. 
    // categoryParam is derived from pathname, so no need to list it separately.
  }, [location.pathname]); // Only depend on pathname

  // --- Handlers ---
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCategoryChange = (event) => {
    const selectedId = event.target.value;
    const newSelectedCategory = navData.dynamic.find(cat => cat.id === selectedId);
    console.log("Dropdown changed: Found category:", newSelectedCategory); // Debug log
    if (newSelectedCategory) {
      setSelectedCategory(newSelectedCategory);
    }
  };

  // Helper to close menu on link click
  const handleLinkClick = () => setIsMenuOpen(false);

  // --- Render ---
  return (
    <nav className={`${styles.navbar} ${!visible ? styles.navHidden : ''}`}>
      {/* Simple Brand Link to Home/About */}
      <NavLink to="/" className={styles.brand} onClick={handleLinkClick}>
        Mind Maps {/* Changed Brand Text */}
      </NavLink>

      {/* Category Selector Dropdown */}
      {navData.dynamic.length > 0 && (
        <div className={styles.categorySelectorContainer}>
          <select
            className={styles.categorySelector}
            value={selectedCategory?.id || ''}
            onChange={handleCategoryChange}
            aria-label="Select Content Category"
          >
            {navData.dynamic.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className={styles.menuContainer}>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar1Open : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar2Open : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar3Open : ''}`}></div>
        </button>

        {/* Links Container (Desktop and Mobile) */}
        <div
          ref={menuRef}
          className={`${styles['nav-links']} ${isMenuOpen ? styles.mobileMenu : ''}`}
        >
          {/* Close Button for Mobile */}
          <button className={styles['close-button']} onClick={toggleMenu} aria-label="Close Menu">
            <div className={`${styles.closeLine} ${isMenuOpen ? styles.line1Active : ''}`}></div>
            <div className={`${styles.closeLine} ${isMenuOpen ? styles.line2Active : ''}`}></div>
          </button>

          {/* Static Links */}
          {navData.static.map((page) => (
            <NavLink
              key={page.id}
              to={page.path}
              className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              onClick={handleLinkClick}
            >
              <span>{page.name}</span>
            </NavLink>
          ))}

          {/* Dynamic Subcategory Links (based on selectedCategory) */}
          {selectedCategory && selectedCategory.subcategories.map((sub) => (
            <NavLink
              key={sub.id}
              to={sub.path}
              className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
              onClick={handleLinkClick}
            >
              <span>{sub.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;