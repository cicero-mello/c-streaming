import styled, { css } from "styled-components"

export const Button = styled.button.attrs((props: any)=> ({
    className: "header-buttom",
    $alreadySaveToWatch: props.$alreadySaveToWatch || false
}))<{ $alreadySaveToWatch: boolean }>`
    outline: none;
    height: min-content;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    padding: 6px 12px;
    line-height: 15px;
    font-size: 15px;
    border: 1px solid #8D8D8D;
    color: #8D8D8D;
    border-radius: 3px;
    background: none;
    transition: 200ms linear;
    font-family: "Arsenal", sans-serif;
    transition: 100ms ease-in-out;

    &:hover{
        color: #cccccc;
        border-color: #cccccc;

        &::before{
            border-color: #cccccc;
        }
    }

    &::before{
        content: "";
        opacity: 0%;
        position: absolute;
        transform: rotate(45deg);
        width: 10px;
        height: 17px;
        border-bottom: 1px solid #8D8D8D;
        border-right: 1px solid #8D8D8D;
        transition: 200ms linear;
        top: 0px;
        left: 25px;
    }

    ${({$alreadySaveToWatch}) =>
        $alreadySaveToWatch &&
        css`
            padding-left: 40px;

            &::before {
                left: 14px;
                opacity: 100%;
            }
        `
    }
`