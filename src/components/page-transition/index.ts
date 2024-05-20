import styled from "styled-components"

export const PageTransition = styled.div.attrs({
    className: "page-transition"
})`
    pointer-events: unset;
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 80px);
    margin-top: 80px;
    background-color: #090909;
    z-index: 2;
    transition: 400ms linear;
    opacity: 100%;
`
