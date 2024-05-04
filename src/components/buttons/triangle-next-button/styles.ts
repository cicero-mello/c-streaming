import styled, { css } from "styled-components"

export const Button = styled.button.attrs({
    className: "triangle-next-button"
})`
    cursor: pointer;
    height: fit-content;
    opacity: 100%;
    transition: 660ms linear;

    svg {
        fill: #080808;
        transition: 40ms ease-in-out;
        path {
            transition: 40ms ease-in-out;
        }
    }

    &:hover{
        svg {
            fill: #D9D9D9;
            path {
                stroke: #D9D9D9;
            }
        }
    }

    ${({disabled}) => disabled && css`
        cursor: unset;
        opacity: 0%;
        pointer-events: none;
    `}
`
