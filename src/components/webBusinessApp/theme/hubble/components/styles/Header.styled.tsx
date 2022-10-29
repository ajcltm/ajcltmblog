import styled from 'styled-components';


export const StyledHeader = styled.header`
    background-color: ${({ theme })=> theme.colors.header};
    padding : 40px 0;
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;


    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    & > div > h1 {
        font-size:50px;
    }

    & > div > svg {
        padding: 20px;
    }

    @media (max-width: ${( {theme} ) => theme.mediaQuery.mobile}) {
        flex-direction: column;
    }
`

export const Logo = styled.img`
    @media (max-width: ${( {theme} ) => theme.mediaQuery.mobile}) {
        margin-bottom: 40px;
    }
`

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${( {theme} ) => theme.mediaQuery.mobile}) {
        margin: 40px 0 30px;
    }

`