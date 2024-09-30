import styled, { keyframes } from "styled-components"

const show = keyframes`
    from {
        opacity: 0;
        margin-top: 270px;
    }
    to {
        opacity: 1;
        margin-top: 200px;
    }
`

export const Component = styled.div.attrs({
    className: "page-loader",
    role: "presentation"
})`
    pointer-events: none;
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 270px;
    transition: 350ms ease-out;;
    animation: ${show} 350ms ease-out forwards;
`

const rotate = keyframes`
    to { transform: rotate(1turn) }
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
    animation: ${rotate} 4s infinite linear;

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
`
