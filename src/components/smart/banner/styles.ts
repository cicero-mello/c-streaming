import styled from "styled-components"

export const WINDOW_WIDTH_TO_CLOSE_BANNER = 850

export const Component = styled.div.attrs({
    className: "banner"
})`
    max-height: 420px;
    transition: 400ms ease-in-out;
    overflow: hidden;
    opacity: 100%;

    @media(max-width: ${WINDOW_WIDTH_TO_CLOSE_BANNER}px){
        max-height: 0px;
        opacity: 0%;
        pointer-events: none;
        user-select: none;
    }
`
