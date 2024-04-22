import styled, { css } from "styled-components"

const borderButtonCustomHover = css`
    &:hover{
        background-color: #FFFFFF;
        border: #090909;
        color: #090909;
    }
`

export const Component = styled.header.attrs((props: any)=> ({
    className: "header",
    $borderButtonDisabled: props.$borderButtonDisabled || false
}))<{ $borderButtonDisabled: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 24px 101px;

    /* .border-button {


        ${({$borderButtonDisabled}) =>
            $borderButtonDisabled ?
            css`cursor: unset;` :
            borderButtonCustomHover
        }
    } */
`
