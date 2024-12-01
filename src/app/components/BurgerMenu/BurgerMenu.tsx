'use client'
import React, { useEffect, useState } from 'react'
import styles from './BurgerMenu.module.css'
import NavLinks from '../NavLinks/NavLinks'

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // Close the menu when scrolling
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]); // Dependency array includes isMenuOpen to ensure the latest state is used

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