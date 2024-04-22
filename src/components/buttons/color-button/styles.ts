import styled from "styled-components"

export const Button = styled.button.attrs({
    className: "color-button"
})`
    outline: none;
    border: unset;
    white-space: nowrap;
    cursor: pointer;
    padding: 6px 13px;
    font-size: 23px;
    border-radius: 2px;
    background-color: #4A7D2B;
    padding: 6px 21px;
    transition: 100ms linear;

    &:hover{
        background-color: #5A9A32;
    }
`