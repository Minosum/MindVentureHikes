import React from 'react'
import styles from './NavLinks.module.css'

const NavLinks = () => {
    return (
        <nav className={styles.navLinks}>
            <a href="#home">About Us</a>
            <a href="#about">Charity Hikes</a>
            <a href="#services">Collaborate With Us</a>
            <a href="#contact">International Tours</a>
        </nav>
    )
}

export default NavLinks