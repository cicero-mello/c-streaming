import styled, { css } from "styled-components"
import { FocusOrigin } from "../../../hooks"

export const Component = styled.div.attrs({
    className: "select-input"
})`
    position: relative;
    height: fit-content;
    max-width: 130px;
    width: 100%;

    &::after{
        pointer-events: none;
        content: "";
        position: absolute;
        right: 13px;
        bottom: 13px;
        height: 8px;
        width: 8px;
        border-bottom: 1px solid #EDEDED;
        border-right: 1px solid #EDEDED;
        transform: rotate(45deg);
    }
`

export const Select = styled.select.attrs(({
    className: "select-select-input"
}))<{ $hasLabel?: boolean, $focusOrigin: FocusOrigin }>`
${({ $hasLabel, $focusOrigin }) => css`
    cursor: pointer;
    appearance: none;
    width: 100%;
    height: 30px;

    background-color: unset;
    border-radius: 2px;
    font-size: 15px;
    border: 1px solid #8D8D8D;
    color: #EDEDED;
    caret-color: #EDEDED;
    padding: 0px 35px 0px 10px;

    ${$hasLabel && css`
        margin-top: 8px;
    `}

    ${$focusOrigin === "click" && css`
        &:focus-visible {
            outline: none;
        }
    `}
`}`

export const Option = styled.option`
    outline: none;
    appearance: none;
    border: 1px solid #8D8D8D;
    color: #EDEDED;
    font-size: 17px;
    background-color: #090909;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 17px;
    color: #EDEDED;
`
