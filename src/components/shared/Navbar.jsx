import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      // Show navbar if scrolling up or near the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`${styles.navbar} ${!visible ? styles.navHidden : ''}`}>
      <Link to='/about' className={styles.brand}>
        JavaScript Paradigms
      </Link>
      <div className={styles.menuContainer}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776;
        </div>
        <div
          className={`${styles['nav-links']} ${
            isMenuOpen ? styles.mobileMenu : ''
          }`}
        >
          <div className={styles['close-button']} onClick={toggleMenu}>
            X
          </div>
          <Link to='/about' className={styles.link}>
            About
          </Link>
          <Link to='/paradigm/functional' className={styles.link}>
            Functional
          </Link>
          <Link to='/paradigm/declarative' className={styles.link}>
            Declarative
          </Link>
          <Link to='/paradigm/oop' className={styles.link}>
            OOP
          </Link>
          <Link to='/paradigm/procedural' className={styles.link}>
            Procedural
          </Link>
          <Link to='/paradigm/imperative' className={styles.link}>
            Imperative
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
