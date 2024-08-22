import styled, { css } from "styled-components"

export const Component = styled.div.attrs({
    className: "carousel-wrapper"
})`
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
`

export const Carousel = styled.div.attrs({
    className: "carousel-scroll"
})`
    display: flex;
    overflow-x: hidden;
    margin: 0px 21px;
`

export const TriangleNextButton = styled.button.attrs({
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

    &:disabled {
        cursor: unset;
        opacity: 0%;
        pointer-events: none;
    }
`
