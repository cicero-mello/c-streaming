import styled, { css } from "styled-components"

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
