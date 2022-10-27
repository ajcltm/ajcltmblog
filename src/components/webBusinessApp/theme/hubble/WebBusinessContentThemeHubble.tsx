import React from 'react';
import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import {Container} from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global';
import { DefaultTheme } from 'styled-components';

const colors = {
    header: '#ebfbff',
    body: '#fff',
    footer: '#00333'
};

type ColorsTypes = typeof colors

declare module 'styled-components' {
    export interface DefaultTheme {
        colors : ColorsTypes
    }
}

const theme:DefaultTheme = {
    colors
}

export default function WebBusinessContentThemeHubble() {
    return (
        <ThemeProvider theme = {theme}>
            <>
                <GlobalStyles />
                <Header />
                <Container>
                    <h1>Hello World</h1>
                </Container>
            </>
        </ThemeProvider>
    )
}