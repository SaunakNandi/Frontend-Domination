import styled from "styled-components";

// & > div, & > ul this apply css to direct div and direct ul
export const Flex=styled.footer`
    display:flex;
    align-items:center;
    & > div,
    & > ul{
        flex: 1;
    };
    @media(max-width: ${({theme})=> theme.mobile}){
        flex-direction:column;
        text-align:center;
    }
`