import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "poster"
})`
    display: flex;
    flex-direction: column;
    width: 171px;
    padding-bottom: 10px;

    .gatsby-image {
        cursor: pointer;
        height: 260px;
        width: 171px;
        outline: 1px solid #080808;
        transition: 60ms linear;

        &:hover {
            outline-color: #E9E9E9;
        }
    }

    &:has(p:hover){
        .gatsby-image {
            outline-color: #E9E9E9;
        }
    }
`

export const Name = styled.p`
    cursor: pointer;
    font-size: 16px;
    margin-top: 6px;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
