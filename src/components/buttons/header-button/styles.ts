import styled, { css } from "styled-components"

export const Button = styled.button.attrs({
    className: "header-button"
})`
    white-space: nowrap;
    padding: 6px 13px 11px 13px;
    font-size: 29px;
    border: 1px solid #FFFFFF;
    border-radius: 3px;
    background: none;
    transition: 300ms;
    font-family: "Arsenal", sans-serif;
    height: 33px;
    width: 185px;
    line-height: 0px;
    overflow: hidden;

    &::after{
        content: "C-Streaming";
    }

    ${({ disabled }) => !disabled && css`
        &:hover{
            cursor: pointer;
            background-color: #FFFFFF;
            border: #090909;
            color: #090909;
        }
    `}
`
