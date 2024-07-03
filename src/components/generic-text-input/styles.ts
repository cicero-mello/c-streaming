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
    $hasLabel: props?.$hasLabel,
    $hasEye: props?.$hasEye
}))<{ $hasLabel?: boolean, $hasEye?: boolean }>`${({ $hasLabel, $hasEye }) => css`
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

    ${$hasLabel && css` margin-top: 8px; `}
    ${$hasEye && css` padding-right: 42px;`}
`}`

export const PasswordEye = styled.button.attrs((props: any) => ({
    className: "password-input-eye",
    $eyeClosed: !!props.$eyeClosed
}))< { $eyeClosed?: boolean }>`${({ $eyeClosed }) => css`
    position: absolute;
    display: flex;
    bottom: 10px;
    right: 10px;
    cursor: pointer;

    &::before {
        position: absolute;
        content: "";
        height: 6px;
        width: 6px;
        right: 9px;
        bottom: 1px;
        border-radius: 10px;
        background-color: #8D8D8D;
        transition: 180ms linear;
    }

    &::after {
        position: absolute;
        content: "";
        height: 12px;
        width: 20px;
        right: 1px;
        bottom: -3px;
        border-radius: 50%;
        border-top: 3px solid #8D8D8D;
        transition: 180ms linear;
    }

    ${$eyeClosed && css`
        &::before { background-color: transparent; }
        &::after { transform: rotateX(180deg); }
    `}
`}`

export const Label = styled.label.attrs({
    className: "label-generic-text-input"
})`
    display: flex;
    position: relative;
    flex-direction: column;
    font-size: 17px;
    color: #EDEDED;
`

export const MessagesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
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
        height: 22px;
    `}

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &::before{ content: "${$text}"; }
`}`

export const ForgetPasswordMessage = styled.h4`
    cursor: pointer;
    margin-left: auto;
    font-size: 14px;
    color: #8D8D8D;
    overflow: hidden;
    height: 24px;
    margin-top: 2px;

    transition-duration: 340ms, 100ms;
    transition-property: all, color;
    transition-timing-function: linear, linear;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &:hover { color: #EDEDED; }
    &::before{ content: "Forgot your password?"; }
`
