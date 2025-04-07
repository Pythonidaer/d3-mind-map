import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { contentCategories, getNavData, findCategoryByParam } from '../../config/contentCategories.js';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef(null);

  const navData = useMemo(() => getNavData(), []);

  const getCategoryParamFromPath = (pathname) => {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length < 1) return null;

    const potentialParam = parts[0];

    const availableRoutes = contentCategories?.map(c => c.baseRoute) || [];

    const isKnownCategory = contentCategories?.some(
      cat => cat.baseRoute === `/${potentialParam}`
    );

    return isKnownCategory ? potentialParam : null;
  };

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const initialPath = location.pathname;
    const initialParam = getCategoryParamFromPath(initialPath); 
    if (initialParam) {
      const initialCategory = findCategoryByParam(initialParam); 
      const categoryFromNavData = navData.dynamic.find(cat => cat.id === initialCategory?.id);
      if (categoryFromNavData) return categoryFromNavData; 
    }
    return navData.defaultCategory; 
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

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

  useEffect(() => {
    const currentPath = location.pathname;
    const categoryParam = getCategoryParamFromPath(currentPath); 

    const currentSelectedIdInState = selectedCategory?.id; 
    let categoryToSelect = null;

    if (categoryParam) {
      const categoryFromUrl = findCategoryByParam(categoryParam);
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

    if (categoryToSelect) { 
        setSelectedCategory(categoryToSelect);
    }
    
  }, [location.pathname]); 

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const handleCategorySelect = (categoryId) => {
    const newSelectedCategory = navData.dynamic.find(cat => cat.id === categoryId);
    if (newSelectedCategory) {
      setSelectedCategory(newSelectedCategory);
      // Navigate to the first subcategory of the selected category
      if (newSelectedCategory.subcategories && newSelectedCategory.subcategories.length > 0) {
        const firstSubcategoryPath = newSelectedCategory.subcategories[0].path;
        navigate(firstSubcategoryPath);
      } else {
        // Fallback if category has no subcategories (edge case)
        // Navigate to a base path or handle differently if needed
        console.warn("Selected category has no subcategories to navigate to.");
        // Example: navigate based on baseRoute if available (requires adding baseRoute to navData)
      }
    }
    setIsCategoryDropdownOpen(false); // Close dropdown after selection
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsCategoryDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setIsCategoryDropdownOpen(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categoryDropdownRef]);

  return (
    <nav className={`${styles.navbar} ${!visible ? styles.navHidden : ''}`}>

      {navData.dynamic.length > 0 && (
        <div className={styles.categoryDropdownContainer} ref={categoryDropdownRef}>
          <button
            type="button"
            className={styles.categoryDropdownTrigger} 
            onClick={toggleCategoryDropdown}
            aria-haspopup="true"
            aria-expanded={isCategoryDropdownOpen}
          >
            {selectedCategory ? selectedCategory.name : 'Select Category'} <span className={styles.dropdownArrow}>▼</span> 
          </button>

          {isCategoryDropdownOpen && (
            <ul className={styles.categoryDropdownMenu}> 
              {navData.dynamic.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    className={styles.categoryDropdownItem} 
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className={styles.menuContainer}>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar1Open : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar2Open : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar3Open : ''}`}></div>
        </button>

        <div
          ref={menuRef}
          className={`${styles['nav-links']} ${isMenuOpen ? styles.mobileMenu : ''}`}
        >
          <button className={styles['close-button']} onClick={toggleMenu} aria-label="Close Menu">
            <div className={`${styles.closeLine} ${isMenuOpen ? styles.line1Active : ''}`}></div>
            <div className={`${styles.closeLine} ${isMenuOpen ? styles.line2Active : ''}`}></div>
          </button>

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