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
        <Link href="mindventure@mindventure.com" className={styles.emailLink}>
          <span>mindventure@mindventure.com</span>
          <Mail className="icon" />
        </Link>
      </div>

      <div className={styles.footerSocial}>
        <span>Follow us</span>
        <Link href="#" aria-label="Instagram" className={styles.socialIcon}>
          <InstagramSvg />
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default FootingComponent