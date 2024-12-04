import React from 'react'
import styles from './NavBar.module.css'
import NavLinks from '../NavLinks/NavLinks'
import ModalForm from '../ModalForm/ModalForm'
import { RiInstagramFill } from "react-icons/ri";
import Link from 'next/link';
const NavBar = () => {

    return (
        <header className={styles.navBar}>
            <div className={styles.navBarContainer}>
                {/* <h1 className={styles.titleAnimation}>WELCOME TO<br></br></h1> */}
                <h1 className={styles.navTitle}>Mindventure <br></br> Hikes</h1>
                <div className={styles.navMessageContainer}>
                    <p className={styles.navMessage}>MindVenture is where adventure meets connection. Through hiking, wellness and charity initiatives, we inspire people to explore nature, connect with others, and give back to communities in need. Together, let’s make a difference and create unforgettable journeys.</p>
                </div>
                <div className={styles.joinTripButtonContainer}>
                    <ModalForm
                        iframeSrc="https://docs.google.com/forms/d/e/1FAIpQLSehOYe_vgiQ0s8Qk7UM36n7pX2aL78qhd2XgN5DWtxacnmfNA/viewform?embedded=true"
                    />
                    <div className={styles.socials}>
                        <Link className={styles.linkStyles} target="_blank" href="https://www.instagram.com/mindventurehikes/">
                        <RiInstagramFill size={30} /></Link>
                        
                    </div>

                </div>

                <div className={styles.navBarLinks}>
                    <NavLinks />
                </div>
            </div>
        </header>
    )
}

export default NavBar