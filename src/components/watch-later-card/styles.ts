import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "watch-later-card"
})`
    display: flex;
    flex-direction: column;
    border: 1px solid #939393;
    border-radius: 2px;
    align-items: center;
    padding: 38px 20px 18px 20px;
    max-width: 260px;
    width: 100%;

    .gatsby-image-wrapper {
        height: 144px;
        max-width: 200px;
        width: 100%;

        border: 1px solid #939393;
        border-radius: 2px;
        filter: grayscale(0.4);
    }
`

export const Title = styled.h3`
    font-size: 22px;
    color: #F1F1F1;
    text-align: center;
    margin: 18px;
`
