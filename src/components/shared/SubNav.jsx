import React, { useRef, useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './SubNav.module.css';

/**
 * SubNav: Horizontally scrolling sub-navigation bar for subcategories.
 * Carousel-style with left/right arrows if overflow.
 */
const SubNav = ({ subcategories, baseRoute }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  // Update arrow visibility and right fade
  const updateArrows = useCallback(() => {
    const c = containerRef.current;
    if (!c) return;
    setShowLeft(c.scrollLeft > 2);
    setShowRight(c.scrollLeft + c.offsetWidth < c.scrollWidth - 2);
    setShowRightFade(c.scrollLeft + c.offsetWidth < c.scrollWidth - 2);
    setHasOverflow(c.scrollWidth > c.offsetWidth + 1);
  }, []);

  useEffect(() => {
    updateArrows();
    const c = containerRef.current;
    if (!c) return;
    // Always start at leftmost
    c.scrollLeft = 0;
    c.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    return () => {
      c.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [subcategories]);

  // Scroll by one item (left or right), skipping spacers
  const scrollByItem = (dir) => {
    const c = containerRef.current;
    if (!c || !itemRefs.current.length) return;
    // Only consider real nav items (skip first/last which are spacers)
    const navRefs = itemRefs.current.slice(1, itemRefs.current.length - 1);
    const visibleLeft = c.scrollLeft;
    const visibleRight = visibleLeft + c.offsetWidth;
    let idx = -1;
    if (dir === 1) {
      // Find first item partially/completely out of view on the right
      idx = navRefs.findIndex(ref => ref && ref.offsetLeft + ref.offsetWidth > visibleRight + 2);
      if (idx === -1) idx = navRefs.length - 1; // fallback to last
    } else {
      // Find last item partially/completely out of view on the left
      idx = [...navRefs].reverse().findIndex(ref => ref && ref.offsetLeft < visibleLeft - 2);
      if (idx !== -1) idx = navRefs.length - 1 - idx;
      else idx = 0; // fallback to first
    }
    if (idx !== -1 && navRefs[idx]) {
      c.scrollTo({
        left: navRefs[idx].offsetLeft - navRefs[0].offsetLeft, // always relative to start
        behavior: 'smooth',
      });
    } else if (dir === -1) {
      // Always allow scroll fully left
      c.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };



  if (!subcategories || subcategories.length === 0) return null;

  return (
    <div className={styles.subnavWrapper}>
      <div className={
        styles.subnavInnerContainer + (showRightFade ? ' ' + styles.showRightFade : '')
      }>

        {hasOverflow && (
          <button
            className={styles.arrowBtn}
            aria-label="Scroll left"
            onClick={() => scrollByItem(-1)}
            tabIndex={0}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzMgNjIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzIDYyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4gPHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIzMywyIDMxLDAgMCwzMSAyLDMzIDMxLDYyIDMzLDYwIDQsMzEgIi8+IDwvc3ZnPg=="
              alt="Scroll left"
              width={28}
              height={28}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </button>
        )}
        <div
          className={
            styles.subnavContainer + (showRightFade ? ' ' + styles.showRightFade : '')
          }
          ref={containerRef}
        >
          {subcategories.map((sub, i) => (
            <NavLink
              key={sub.id}
              to={`${baseRoute}/${sub.path}`}
              className={({ isActive }) =>
                isActive ? `${styles.subnavItem} ${styles.active}` : styles.subnavItem
              }
              ref={el => itemRefs.current[i] = el}
            >
              <span>{sub.name}</span>
            </NavLink>
          ))}
        </div>
        {hasOverflow && (
          <button
            className={styles.arrowBtn}
            aria-label="Scroll right"
            onClick={() => scrollByItem(1)}
            tabIndex={0}
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzMgNjIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMzIDYyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4gPHBvbHlnb24gZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIwLDYwIDIsNjIgMzMsMzEgMzEsMjkgMiwwIDAsMiAyOSwzMSAiLz4gPC9zdmc+"
              alt="Scroll right"
              width={28}
              height={28}
              style={{ display: 'block', margin: '0 auto' }}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default SubNav;
