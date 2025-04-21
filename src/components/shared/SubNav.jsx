import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './SubNav.module.css';

/**
 * SubNav: Horizontally scrolling sub-navigation bar for subcategories.
 * @param {Array} subcategories - List of subcategory objects to display
 * @param {string} baseRoute - Base route for the current category
 */
const SubNav = ({ subcategories, baseRoute }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active subcategory from URL
  const activeSubPath = location.pathname.split('/')[2] || '';

  const handleClick = (subPath) => {
    navigate(`${baseRoute}/${subPath}`);
  };

  if (!subcategories || subcategories.length === 0) return null;

  return (
    <div className={styles.subnavWrapper}>
      <div className={styles.subnavInnerContainer}>
        <div className={styles.subnavContainer}>
          {subcategories.map((sub) => (
            <NavLink
              key={sub.id}
              to={`${baseRoute}/${sub.path}`}
              className={({ isActive }) =>
                isActive ? `${styles.subnavItem} ${styles.active}` : styles.subnavItem
              }
            >
              <span>{sub.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNav;
