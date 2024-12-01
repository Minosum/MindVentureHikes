'use client'
import React, { useState } from 'react'
import styles from './BurgerMenu.module.css'
import NavLinks from '../NavLinks/NavLinks'

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={`${styles.burgerMenuContainer} ${isMenuOpen ? styles.open : ''}`}>
            <div
                className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`${isMenuOpen ? styles.navLinksShow : styles.navLinksHide}`}>
                <NavLinks />
            </div>
        </div>
    )
}

export default BurgerMenu