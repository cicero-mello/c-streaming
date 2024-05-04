import styled from "styled-components"

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
