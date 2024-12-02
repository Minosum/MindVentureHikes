'use client'
import React, { useEffect, useState } from 'react'
import styles from './diyBurger.module.css'
import NavLinks from '../NavLinks/NavLinks';

const DiyBurger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className={styles.burgerMenuContainer}>
                <div className={styles.logoContainer}>
                    <p className={styles.logo}>Mindventure Hikes</p>
                </div>
                <div className={styles.burgerMenu} >
                    <div className={styles.menu}>
                        <p>MENU</p>
                    </div>
                    <div className={`${styles.burgerIcon} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}>
                        <div className={styles.burgerLine}></div>
                        <div className={styles.burgerLine}></div>
                        <div className={styles.burgerLine}></div>
                    </div>
                </div>

            </div>
            <div className={`${isMenuOpen ? styles.navLinksShow : styles.navLinksHide}`}>
                <NavLinks />
            </div>
        </>

    )
}

export default DiyBurger