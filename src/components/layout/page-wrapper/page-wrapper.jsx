import React from 'react';
import MainPage from '@page/main-page/main-page';
import Header from '@layout/header/header';
import Footer from '@layout/footer/footer';
import './style.css';

export default function PageWrapper() {
    return (
        <>
            <Header />
            <main className='page-wrapper--main'>
                <MainPage />
            </main>
            <Footer />
        </>
    )
}