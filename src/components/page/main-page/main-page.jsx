import React from 'react';
import About from '@block/about/about'
import Advantages from '@block/advantages/advantages'
import advantages from '@mocks/advantages';

export default function MainPage() {
    return (
        <>
            <About />
            <Advantages advantages={advantages} />
        </>
    );
}
