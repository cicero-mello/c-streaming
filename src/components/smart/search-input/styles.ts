import styled, { css } from "styled-components"
import { FocusOrigin } from "../../../hooks"

export const Component = styled.div.attrs({
    className: "search-input"
})`
    display: flex;
    position: relative;
    align-self: center;
    width: 100%;
    max-width: 343px;
    margin: 30px;

    &:focus-within{
        input, a {
            border-color: #8D8D8D;
            color: #dcdcdc;
        }

        a {
            &::before{
                border-color: #dcdcdc;
            }

            &::after{
                background-color: #dcdcdc;
            }
        }
    }

    a {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        width: 85px;
        height: 100%;
        background-color: unset;
        border: none;
        border: 1px solid #5d5d5d;
        color: #b5b5b5;
        font-size: 15px;
        padding-right: 20px;
        border-radius: 2px;

        transition-property:
            outline,
            outline-offset,
            border-radius,
            color,
            background-color,
            border-color,
            width,
            margin
        ;
        transition-duration: 50ms, 50ms, 50ms, 100ms;
        transition-timing-function: linear;

        &::before{
            content: "";
            right: 12px;
            top: 6px;
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 20px;
            border: 1px solid #b5b5b5;
        }

        &::after{
            content: "";
            right: 6px;
            top: 17px;
            position: absolute;
            width: 8px;
            height: 1px;
            border-radius: 2px;
            background-color: #b5b5b5;
            transform: rotate(37deg);
        }

        &:hover{
            color: white;
            background-color: #515151;
            &::after{ background-color: white; }
            &::before{ border-color: white; }
        }
    }

    @media(max-width: 850px){
        max-width: 640px;

        input, a {
            margin: 0px 60px;
        }
    }

    @media(max-width: 440px){
        max-width: 640px;
        a {
            width: 36px;
            margin: 0px 30px;
            color: transparent;

            &:focus-within{
                color: transparent;
            }

            &:hover {
                color: transparent;
            }
        }

        &:has(input:focus){
            a {
                color: transparent;

                &:hover {
                    color: transparent;
                }
            }
        }

        input, :any-link {
            margin: 0px 24px;
        }
    }
`

export const Input = styled.input
<{ $focusOrigin: FocusOrigin}>`
${({ $focusOrigin }) => css`
    outline: none;
    background-color: unset;
    border: 1px solid #5d5d5d;
    width: 100%;
    caret-color: #dcdcdc;
    height: 29px;
    padding: 0px 95px 0px 10px;
    border-radius: 2px;
    color: #b5b5b5;
    transition: 100ms linear;

    font-size: 15px;

    ::before{
        content: "Search";
        position: absolute;
        background-color: red;
        width: 10px;
        height: 10px;
    }

    ${$focusOrigin === "click" && css`
        &:focus-visible {
            outline: none;
        }
    `}

`}`
