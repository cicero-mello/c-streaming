import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "poster"
})`
    display: flex;
    flex-direction: column;
    min-width: 171px;

    margin: 30px 19px;

    img {
        height: 260px;
        width: 171px;
    }
`

export const Name = styled.p`
    font-size: 16px;
    margin-top: 6px;
`