import React from 'react'
import styles from './HeroMessage.module.css'

const HeroMessage = () => {
    return (
        <div className={styles.navMessageContainer}>
            <p className={styles.navMessage}>MindVenture is where adventure meets connection. Through hiking, wellness and charity initiatives, we inspire people to explore nature, connect with others, and give back to communities in need. Together, let’s make a difference and create unforgettable journeys.</p>
        </div>
    )
}

export default HeroMessage