import React from 'react'
import styles from './JoinUs.module.css'
import { pageData } from '@/app/data/pageData'

const JoinUs = () => {
    return (
        <div className={styles.joinUsContainer}>
            <h1 className={styles.joinUsTitle}>Join Us</h1>
            <p>{pageData.joinUs.description}</p>
            <p>{pageData.joinUs.closing}</p>
        </div>
    )
}

export default JoinUs