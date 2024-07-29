import styled, { css } from "styled-components"

export const Component = styled.div.attrs((props: any) => ({
    className: "page-loader",
    $show: props.$show
}))<{ $show?: boolean }>`
    pointer-events: none;
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 270px;
    transition: 350ms ease-out;;

    opacity: 0;
    ${({ $show }) => $show && css`
        opacity: 1;
        margin-top: 200px;
    `}
`

export const Loader = styled.div`
    width: 70px;
    aspect-ratio: .577;
    color: white;
    display: grid;
    background:
        linear-gradient(currentColor 0 0) top   /100% 1px,
        linear-gradient(currentColor 0 0) bottom/100% 1px,
        linear-gradient(to bottom right, #0000 calc(50% - 2px),currentColor calc(50% - 1px),#0000 50%) top/100% calc(100% + 5px),
        linear-gradient(to bottom left , #0000 calc(50% - 2px),currentColor calc(50% - 1px),#0000 50%) top/100% calc(100% + 5px);
    background-repeat: no-repeat;
    animation: l17 4s infinite linear;

    &::before, &::after {
        content: "";
        grid-area: 1/1;
        background: inherit;
        border:inherit;
        animation: inherit;
    }
    &::after {
        animation-duration: 2s;
    }
    @keyframes l17 {
        100% {transform: rotate(1turn)}
    }
`
