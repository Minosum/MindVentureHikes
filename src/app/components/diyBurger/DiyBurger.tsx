'use client'
import React, { useEffect, useState } from 'react'
import styles from './diyBurger.module.css'
import NavLinks from '../NavLinks/NavLinks';
import logo from '../../assets/mindventureLogo.png'
import Image from 'next/image';

const DiyBurger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <>
            <div className={`${styles.burgerMenuContainer} ${isMenuOpen ? styles.burgerMenuContainerOpen : ''}`}>
                <div className={styles.logoContainer}>
                    <div>
                        <Image
                            src={logo}
                            width={50}
                            height={50}
                            alt="Logo of Mindventure"
                        />
                    </div>
                    <p className={styles.logo}><a href="/" className={styles.noStyleLink}>Mindventure Hikes</a></p>
                </div>
                <div className={styles.burgerMenu} >
                    {/* <div className={styles.menu}>
                        <p>MENU</p>
                    </div> */}
                    <div className={`${styles.burgerIcon} ${isMenuOpen ? styles.open : ''}`}
                        onClick={toggleMenu}>
                        <div className={styles.burgerLine}></div>
                        <div className={styles.burgerLine}></div>
                        <div className={styles.burgerLine}></div>
                    </div>
                </div>

            </div>
            <div className={`${isMenuOpen ? styles.navLinksShow : styles.navLinksHide}`}>
                <NavLinks closeMenu={closeMenu}/>
            </div>
        </>

    )
}

export default DiyBurger