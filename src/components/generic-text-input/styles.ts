import styled, { css } from "styled-components"

export const Component = styled.div.attrs({
    className: "generic-text-input"
})`
    max-width: 342px;
    width: 100%;
`

export const Input = styled.input.attrs((props: any) => ({
    className: "input-generic-text-input",
    $hasLabel: props?.$hasLabel
}))<{ $hasLabel?: boolean }>`
    outline: none;
    appearance: none;
    border: 1px solid #8D8D8D;
    height: 30px;
    background-color: unset;
    border-radius: 2px;
    font-size: 15px;
    color: #EDEDED;
    caret-color: #EDEDED;
    padding: 0px 10px;

    ${({ $hasLabel }) => $hasLabel && css`
        margin-top: 8px;
    `}
`

export const Label = styled.label.attrs({
    className: "label-generic-text-input"
})`
    display: flex;
    flex-direction: column;
    font-size: 17px;
    color: #EDEDED;
`
