import styled, { css } from "styled-components"

export const Home = styled.main.attrs((props: any) => ({
    className: "home-page",
    $freePointerEvents: props.$freePointerEvents || false
}))<{$freePointerEvents: boolean}>`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({ $freePointerEvents }) => !$freePointerEvents && css`
        *{ pointer-events: none; }
    `}

    .banner-navigation{
        margin: 16px 16px 20px 16px;
    }
`

export const PageLoader = styled.div.attrs((props: any) => ({
    className: "page-loader",
    $loading: props.$loading || false
}))<{ $loading: boolean }>`
    pointer-events: none;
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    opacity: 100%;
    background-color: #090909;
    transition: 300ms ease-in;
    z-index: 2;

    ${({ $loading }) => !$loading && css`
        opacity: 0%;
    `}
`