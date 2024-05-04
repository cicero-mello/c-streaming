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
