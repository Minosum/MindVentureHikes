import React from 'react'
import styles from './NavBar.module.css'
import NavLinks from '../NavLinks/NavLinks'

interface ValueItem {
    title: string;
    description: string;
}

interface NavBarProps {
    heading: string;
    description: string | ValueItem[]; // Now accepts array of { title, description }
    descriptionTwo?: string;
    style?: React.CSSProperties;
}

const NavBar: React.FC<NavBarProps> = ({ heading, description, descriptionTwo }) => {

    return (
        <header className={styles.navBar}>
            <div className={styles.navBarContainer}>
                <h1 className={styles.navTitle}>Mindventure <br></br> Hikes</h1>
                <div className={styles.navMessageContainer}>
                    <div className={styles.navMessage}>
                        <h1>{heading}</h1>
                        <div className='descriptionTwo'>
                        <p>{descriptionTwo}</p>
                        </div>
                        {Array.isArray(description) ? (
                            description.map((item, index) => (
                                <div className='descriptionContainer' key={index}>
                                    <h2 className='title'>{item.title}</h2>
                                    <p className='description'>{item.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>{description}</p>
                        )}
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