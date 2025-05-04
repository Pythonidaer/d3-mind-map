import React, { useState, useEffect, useRef, useMemo } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { contentCategories, getNavData, findCategoryByParam } from '../../config/contentCategories.js';
import ThemeToggle from './ThemeToggle';
import SubNav from './SubNav';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

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
      if (initialCategory) return initialCategory;
    }
    // Default to first category in contentCategories if not found
    return contentCategories[0];
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
        categoryToSelect = categoryFromUrl;
      }
    }
    if (categoryToSelect) { 
      setSelectedCategory(categoryToSelect);
    }
  }, [location.pathname]); 

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const handleCategorySelect = (categoryId) => {
  // Always use contentCategories for the canonical data
  const newSelectedCategory = contentCategories.find(cat => cat.id === categoryId);
  if (newSelectedCategory) {
    setSelectedCategory(newSelectedCategory);
    if (newSelectedCategory.subcategories && newSelectedCategory.subcategories.length > 0) {
      const firstSubcategoryPath = newSelectedCategory.subcategories[0].path;
      const target = `${newSelectedCategory.baseRoute}/${firstSubcategoryPath}`;
      console.log("Navigating to:", target);
      navigate(target);
    } else {
      console.warn("Selected category has no subcategories to navigate to.");
    }
  }
  setIsCategoryDropdownOpen(false);
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

  const isMobile = useIsMobile(1100);
  // Filter subcategories for subnav
  const subNavSubcategories = selectedCategory?.subcategories?.filter(
    (sub) => sub.addToSubNav
  ) || [];

  return (
    <nav className={`${styles.navbar} ${!visible ? styles.navHidden : ''}`}>
      <div>
        { !isMobile ? (
          <div className={styles.navMainRow}>
            <div className={styles.navGrid}>
              {/* Left: Brand/Dropdown */}
              <div className={styles.leftCol}>
                {contentCategories.length > 0 && (
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
                        {contentCategories.map((category) => (
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
              </div>
              {/* Center: Nav links */}
              <div className={styles.centerCol}>
                <div className={styles['nav-links']}>
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
                  {selectedCategory && selectedCategory.subcategories && selectedCategory.subcategories.filter(sub => sub.addToNav).map((sub) => (
                    <NavLink
                      key={sub.id}
                      to={`${selectedCategory.baseRoute}/${sub.path}`}
                      className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                      onClick={handleLinkClick}
                    >
                      <span>{sub.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
              {/* Right: ThemeToggle (desktop only) */}
              <div className={styles.rightCol}>
                <div className={styles.themeToggleDesktop}><ThemeToggle /></div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.mobileBar}>
            {/* Left: Category Dropdown */}
            <div className={styles.categoryDropdownContainer} ref={categoryDropdownRef}>
              {contentCategories.length > 0 && (
                <button
                  type="button"
                  className={styles.categoryDropdownTrigger}
                  onClick={toggleCategoryDropdown}
                  aria-haspopup="true"
                  aria-expanded={isCategoryDropdownOpen}
                >
                  {selectedCategory ? selectedCategory.name : 'Select Category'} <span className={styles.dropdownArrow}>▼</span>
                </button>
              )}
              {isCategoryDropdownOpen && (
                <ul className={styles.categoryDropdownMenu}>
                  {contentCategories.map((category) => (
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
            <div className={styles.rightMobileGroup}>
              <div className={styles.themeToggleMobile}><ThemeToggle /></div>
              <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
                <div className={`${styles.bar} ${isMenuOpen ? styles.bar1Open : ''}`}></div>
                <div className={`${styles.bar} ${isMenuOpen ? styles.bar2Open : ''}`}></div>
                <div className={`${styles.bar} ${isMenuOpen ? styles.bar3Open : ''}`}></div>
              </button>
            </div>
            {/* Slide-out menu for nav links */}
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
              {selectedCategory && selectedCategory.subcategories && selectedCategory.subcategories.map((sub) => (
                <NavLink
                  key={sub.id}
                  to={`${selectedCategory.baseRoute}/${sub.path}`}
                  className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
                  onClick={handleLinkClick}
                >
                  <span>{sub.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
        {!isMobile && subNavSubcategories.length > 0 && (
          <SubNav
            subcategories={subNavSubcategories}
            baseRoute={selectedCategory?.baseRoute || ''}
          />
        )}
      </div>
    </nav>
  );
};
export default Navbar;