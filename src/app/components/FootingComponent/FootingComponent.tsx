import React from 'react'
import { Mail, } from "lucide-react"
import InstagramSvg from '@/app/assets/InstagramSvg';
import styles from './FootinComponent.module.css'


import Link from 'next/link'

const FootingComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <h2 className={styles.footerTitle}>Mindventure Hikes</h2>

                <p className={styles.footerCopyright}>© 2025 Mindventure Hikes</p>

                <div className={styles.footerEmail}>
                    <a href="mailto:mindventurehikes@gmail.com" className={styles.emailLink}>
                        <span>mindventurehikes@gmail.com</span>
                        <Mail className="icon" />
                    </a>
                </div>

                <div className={styles.footerSocial}>
                    <span>Follow us</span>
                    <Link href="https://www.instagram.com/mindventure.co?igsh=MWZzNWwxZnJoazN6MA==" target="_blank" aria-label="Instagram" className={styles.socialIcon}>
                        <InstagramSvg />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default FootingComponent