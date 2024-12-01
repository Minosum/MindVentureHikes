
import React from 'react'
import styles from './NavBar.module.css'
import NavLinks from '../NavLinks/NavLinks'

const NavBar = () => {

    return (
        <header className={styles.navBar}>
            <div className={styles.navBarContainer}>
                <h1 className={styles.titleAnimation}>Welcome to.. <br></br></h1>
                <h1 className={styles.navTitle}>Mindventure <br></br> Hikes</h1>
                <div className={styles.navMessageContainer}>
                <p className={styles.navMessage}>MindVenture is where adventure meets connection. Through hiking, wellness and charity initiatives, we inspire people to explore nature, connect with others, and give back to communities in need. Together, let’s make a difference and create unforgettable journeys.</p>

                </div>
                <div className={styles.navBarLinks}>
                    <NavLinks />
                </div>
            </div>
        </header>
    )
}

export default NavBar