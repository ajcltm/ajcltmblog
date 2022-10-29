import React from 'react';
import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import {Container} from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global';
import { DefaultTheme } from 'styled-components';
import content from './content';

const colors = {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
};

const mediaQuery = {
    mobile : '768px'
}

type ColorsTypes = typeof colors

type MobileTypes = typeof mediaQuery

declare module 'styled-components' {
    export interface DefaultTheme {
        colors : ColorsTypes
        mediaQuery : MobileTypes
    }
}

const theme:DefaultTheme = {
    colors,
    mediaQuery
}

export default function WebBusinessContentThemeHubble() {
    return (
        <ThemeProvider theme = {theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    {content.map((item, index)=>(
                        <Card key={index} item={item} />
                    ))}
                </Container>
                <Footer />
            </>
        </ThemeProvider>
    )
}