import { css, RuleSet } from "styled-components"
import { ButtonThemes } from "../types"

const menuItem = ($disabled?: boolean) => css`
    cursor: pointer;
    pointer-events: unset;
    padding: 0px 11px;
    width: 100%;
    font-size: 16px;
    justify-content: unset;
    text-align: start;

    transition-property:
        background-color,
        color,
        opacity
    ;
    transition-duration: 100ms;
    transition-timing-function: linear;

    ${$disabled && css`
        cursor: not-allowed;
        opacity: 0.5;
    `}

    ${!$disabled && css`
        &:hover {
            outline: none;
            background-color: white;
            color: #080808;
        }

        &:focus-visible {
            padding: 0;
            margin: 0px 11px;
            width: fit-content;
            outline-offset: 4px;
        }
    `}
`

export const menuItemThemes: Map<
    ButtonThemes, ($disabled?: boolean) => RuleSet<object>
> = new Map([
    ["menu-item", menuItem]
])
