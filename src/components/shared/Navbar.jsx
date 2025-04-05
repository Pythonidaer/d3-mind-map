import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${!visible ? styles.navHidden : ''}`}>
      <Link to="/about" className={styles.brand}>
        JavaScript Paradigms
      </Link>
      <div className={styles.menuContainer}>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar1Open : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar2Open : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar3Open : ''}`}></div>
        </button>
        <div
          className={`${styles['nav-links']} ${
            isMenuOpen ? styles.mobileMenu : ''
          }`}
        >
          <button className={styles['close-button']} onClick={toggleMenu} aria-label="Close Menu">
            <div className={`${styles.closeLine} ${isMenuOpen ? styles.line1Active : ''}`}></div>
            <div className={`${styles.closeLine} ${isMenuOpen ? styles.line2Active : ''}`}></div>
          </button>
          <Link to="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/paradigm/functional" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            Functional
          </Link>
          <Link to="/paradigm/declarative" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            Declarative
          </Link>
          <Link to="/paradigm/oop" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            OOP
          </Link>
          <Link to="/paradigm/procedural" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            Procedural
          </Link>
          <Link to="/paradigm/imperative" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            Imperative
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;