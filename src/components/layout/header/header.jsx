import React from 'react';
import './style.css';
import Nav from '@layout/nav/nav';
import Logo from '@ui/logo/logo';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    )
}