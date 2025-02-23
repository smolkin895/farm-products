import React from 'react';
import MainPage from '@page/main-page/main-page';
import Header from '@layout/header/header';
import Footer from '@layout/footer/footer';
import styles from './style.module.css';

export default function PageWrapper() {
    return (
        <>
            <Header />
            <main className={styles.page_wrapper}>
                <MainPage />
            </main>
            <Footer />
        </>
    )
}