import styled, { css, keyframes } from "styled-components"
import { ErrorCode } from "./types"

export const Component = styled.main.attrs({
    className: "error"
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 240px);

    @media (max-height: 660px){
        height: calc(100vh - 140px);
    }
`

export const ErrorCodeMessage = styled.h1<{
    $errorCode: ErrorCode
}>`${({ $errorCode }) => css`

    position: relative;
    font-size: 180px;
    color: transparent;
    animation: 1700ms ${skewGlitch} infinite linear alternate;

    @media (max-width: 600px){
        font-size: 100px;
    }

    &::before{
        position: absolute;
        content: "${$errorCode}";
        color: red;
        color: #581616;
        animation: 500ms ${horizontalMovementGlitch} infinite step-start;
        clip-path: polygon(0 0, 100% 0, 100% 59%, 0 42%);
    }

    &::after{
        content: "${$errorCode}";
        position: absolute;
        left: 0;
        color: #581616;
        animation: 450ms ${horizontalMovementGlitch} infinite step-start reverse;
        clip-path: polygon(0 44%, 100% 61%, 100% 100%, 0 100%);
    }
`}`

const horizontalMovementGlitch = keyframes`
    0% {
        margin-left: 2px;
    }
    10% {
        margin-left: -12px;
        filter: blur(2px);
    }
    30% {
        margin-left: 8px;
    }
    80% {
        margin-left: -4px;
        filter: blur(2px);
    }
    100% {
        margin-left: 12px;
    }
`

const skewGlitch = keyframes`
    0% { transform: skewX(-20deg); }
    50% { transform: skewX(-10deg); }
    80% { transform: skewX(-10deg); }
    81% { transform: skewX(40deg); }
    100% { transform: skewX(-20deg); }
`
