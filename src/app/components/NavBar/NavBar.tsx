'use client'
import React, { useState } from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.navBarContainer}>
                <h1 className={styles.titleAnimation}>Welcome to <br></br></h1>
                <h1 className={styles.navTitle}>Mindventure <br></br> Hikes</h1>
                

                {/* Burger Menu Button */}
                
                    <div
                        className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
               


                <nav className={`${styles.navLinks} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <a href="#home" onClick={toggleMenu}>About Us</a>
                    <a href="#about" onClick={toggleMenu}>Charity Hikes</a>
                    <a href="#services" onClick={toggleMenu}>Collaborate With Us</a>
                    <a href="#contact" onClick={toggleMenu}>International Tours</a>
                </nav>
            </div>
        </header>
    )
}

export default NavBar