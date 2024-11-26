import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <header className={styles.navbar}>
            <div className={styles.navBarContainer}>
                <h1>Mindventure <br></br> Hikes</h1>
                <nav className={styles.navLinks}>
                    <a href="#home">About Us</a>
                    <a href="#about">Charity Hikes</a>
                    <a href="#services">Colabrate With Us</a>
                    <a href="#contact">International Tours</a>
                </nav>
            </div>

        </header>
    )
}

export default NavBar