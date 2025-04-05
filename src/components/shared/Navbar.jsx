import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, styles.hamburger]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${!visible ? styles.navHidden : ''}`}>
      <NavLink to="/about" className={styles.brand}>
        JavaScript Paradigms
      </NavLink>
      <div className={styles.menuContainer}>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar1Open : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar2Open : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar3Open : ''}`}></div>
        </button>
        <div
          ref={menuRef}
          className={`${styles['nav-links']} ${
            isMenuOpen ? styles.mobileMenu : ''
          }`}
        >
          <button className={styles['close-button']} onClick={toggleMenu} aria-label="Close Menu">
            <div className={`${styles.closeLine} ${isMenuOpen ? styles.line1Active : ''}`}></div>
            <div className={`${styles.closeLine} ${isMenuOpen ? styles.line2Active : ''}`}></div>
          </button>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>About</span>
          </NavLink>
          <NavLink 
            to="/paradigm/functional" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Functional</span>
          </NavLink>
          <NavLink 
            to="/paradigm/declarative" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Declarative</span>
          </NavLink>
          <NavLink 
            to="/paradigm/oop" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>OOP</span>
          </NavLink>
          <NavLink 
            to="/paradigm/procedural" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Procedural</span>
          </NavLink>
          <NavLink 
            to="/paradigm/imperative" 
            className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Imperative</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;