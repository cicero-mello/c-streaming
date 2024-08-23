import { css, RuleSet } from "styled-components"
import { ButtonThemes } from "../types"

const classic = ($disabled?: boolean) => css`
    border: unset;
    white-space: nowrap;
    cursor: pointer;
    padding: 6px 13px;
    font-size: 23px;
    border-radius: 2px;
    background-color: #4A7D2B;
    padding: 6px 21px;
    overflow: hidden;

    transition-property:
        outline,
        background-color
    ;
    transition-duration: 50ms, 100ms;
    transition-timing-function: linear;

    ${$disabled && css`
        cursor: not-allowed;
        opacity: 0.5;
    `}

    ${!$disabled && css`
        &:hover {
            background-color: #5A9A32;
        }
    `}
`

export const classicThemes: Map<
    ButtonThemes, ($disabled?: boolean) => RuleSet<object>
> = new Map([
    ["classic", classic]
])
