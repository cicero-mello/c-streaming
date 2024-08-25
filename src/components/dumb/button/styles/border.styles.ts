import { css, RuleSet } from "styled-components"
import { ButtonThemes } from "../types"

const border = ($disabled?: boolean) => css`
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: fit-content;
    align-items: center;
    border: 1px solid #8D8D8D;
    border-radius: 2px;
    padding: 6px 12px;
    font-size: 19px;
    color: #cccccc;
    overflow: hidden;

    transition-property:
        border-color,
        color,
        background-color
    ;
    transition-duration: 100ms;
    transition-timing-function: linear;

    ${$disabled && css`
        cursor: not-allowed;
        opacity: 0.5;
    `}

    ${!$disabled && css`
        &:hover {
            border-color: #cccccc;
            color: #EDEDED;
        }
    `}
`

const borderRed = ($disabled?: boolean) => css`
    ${border($disabled)}

    background-color: #802222;

    ${!$disabled && css`
        &:hover {
            background-color: #760b0b;
            border-color: #cccccc;
            color: #EDEDED;
        }
    `}
`

const borderDanger = ($disabled?: boolean) =>css`
    ${border($disabled)}

    background-color: #8B0202;
    color: white;

    ${!$disabled && css`
        &:hover {
            background-color: #700000;
            border-color: #cccccc;
        }
    `}
`

const borderGreen = ($disabled?: boolean) => css`
    ${border($disabled)}

    background-color: #48792A;
    color: white;

    ${!$disabled && css`
        &:hover {
            background-color: #498624;
            border-color: #cccccc;
        }
    `}
`

const borderLogo = ($disabled?: boolean) => css`
    ${border($disabled)}

    white-space: nowrap;
    padding: 6px 13px 11px 13px;
    font-size: 29px;
    border-color: #FFFFFF;
    border-radius: 3px;
    line-height: 0px;
    color: white;

    transition-property:
        width,
        background-color,
        border,
        color
    ;
    transition-duration: 300ms, 300ms;
    transition-timing-function: linear, ease;

    ${!$disabled && css`
        &:hover {
            background-color: #FFFFFF;
            border: #090909;
            color: #090909;
        }
    `}
`

export const borderThemes: Map<
    ButtonThemes, ($disabled?: boolean) => RuleSet<object>
> = new Map ([
    ["border", border],
    ["border-red",borderRed],
    ["border-danger", borderDanger],
    ["border-green",borderGreen],
    ["border-logo", borderLogo]
])
