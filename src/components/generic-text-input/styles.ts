import styled, { css } from "styled-components"

export const Component = styled.div.attrs({
    className: "generic-text-input"
})`
    position: relative;
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

export const ErrorMessage = styled.h4.attrs((props: any) => ({
    className: "error-message-generic-text-input",
    $text: props.$text ?? ""
}))< { $text?: string, }>`${({ $text }) => css`
    font-size: 17px;
    transition: 340ms ease-out;
    font-weight: bold;
    color: #c09292;
    overflow: hidden;
    height: 0px;
    margin-top: 0px;

    ${$text && css`
        margin-top: 4px;
        height: 20px;
    `}

    &::before{
        content: "${$text}";
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`}`
