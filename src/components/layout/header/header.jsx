import React from 'react';
import styles from './style.module.css';
import Nav from '@layout/nav/nav';
import Logo from '@ui/logo/logo';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
        </header>
    )
}