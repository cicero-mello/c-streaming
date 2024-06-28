import styled, { css } from "styled-components"
import { BorderButtonProps } from "./types"

export const BorderButton = styled.button.attrs((props: any) => ({
    className: "border-button",
    $theme: props.$theme ?? "",
    $text: props.$text
}))<BorderButtonProps>`${({ $theme, $text, disabled }) => css`
    cursor: pointer;
    display: flex;
    width: fit-content;
    align-items: center;
    border: 1px solid #8D8D8D;
    border-radius: 2px;
    padding: 6px 12px;
    font-size: 19px;
    color: #cccccc;
    transition: 100ms linear;

    &::before {
        content: "${$text}";
        width: 100%;
    }

    ${disabled && css`
        pointer-events: none;
        opacity: 0.5;
    `}

    ${!$theme && css`
        &:hover {
            border-color: #cccccc;
            color: #EDEDED;
        }
    `}

    ${$theme === "red" && css`
        background-color: #802222;
        &:hover {
            background-color: #760b0b;
            border-color: #cccccc;
            color: #EDEDED;
        }
    `}

    ${$theme === "danger" && css`
        background-color: #8B0202;
        color: white;
        &:hover {
            background-color: #700000;
            border-color: #cccccc;
        }
    `}

    ${$theme === "green" && css`
        background-color: #48792A;
        color: white;
        &:hover {
            background-color: #498624;
            border-color: #cccccc;
        }
    `}
`}`
