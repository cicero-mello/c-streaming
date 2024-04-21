import styled, { css } from "styled-components"

const borderButtonCustomHover = css`
    &:hover{
        background-color: #FFFFFF;
        border: #090909;
        color: #090909;
    }
`

export const Component = styled.header.attrs({
    className: "header"
})<{borderButtonDisabled: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 24px 101px;

    .border-button {
        border: 1px solid #FFFFFF;
        padding-bottom: 11px;
        border-radius: 3px;
        height: 33px;
        width: 185px;
        line-height: 0px;

        ${({borderButtonDisabled}) =>
            borderButtonDisabled ?
            css`cursor: unset;` :
            borderButtonCustomHover
        }
    }
`
