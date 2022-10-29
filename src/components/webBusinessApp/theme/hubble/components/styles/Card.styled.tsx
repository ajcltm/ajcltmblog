import styled from "styled-components";

interface StyledCardProps {
    readonly layout?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin : 40px 0;
    padding: 40px;
    flex-direction: ${(props) => props.layout || 'row'};

    img {
        width: 80%;
        // padding-left: 50px;
    }

    & > div {   
        flex: 1;
        padding: 10px;
    }

    @media(max-width: ${({theme}) => theme.mediaQuery.mobile}) {
        flex-direction : column;
    }
`