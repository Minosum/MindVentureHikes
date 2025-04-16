'use client';
import React from 'react'
import styles from './NavLinks.module.css'
import Link from 'next/link';

interface NavLinksProps {
    closeMenu?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ closeMenu }) => {
    return (
        <nav className={styles.navLinks}>
            <Link href="/" onClick={closeMenu}>About Us</Link>
            <Link href="/our-story" onClick={closeMenu}>Our Story</Link>
            <Link href="/what-we-do" onClick={closeMenu}>What We Do</Link>
            <Link href="/our-values" onClick={closeMenu}>Our Values</Link>
        </nav>
    )
}

export default NavLinks