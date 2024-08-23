import styled, { css } from "styled-components"

export const Button = styled.button.attrs((props: any)=> ({
    className: "watch-later-button",
    $alreadySaveToWatch: props.$alreadySaveToWatch || false
}))<{ $alreadySaveToWatch: boolean }>`

    height: min-content;
    position: relative;
    cursor: pointer;
    width: fit-content;
    white-space: nowrap;
    padding: 6px 12px;
    line-height: 15px;
    font-size: 15px;
    border: 1px solid #8D8D8D;
    color: #8D8D8D;
    border-radius: 3px;
    background: none;
    font-family: "Arsenal", sans-serif;

    transition-property:
        outline,
        border-color,
        color,
        background-color,
        left,
        padding-left,
        opacity
    ;
    transition-duration: 50ms, 200ms;
    transition-timing-function: linear, ease-in-out;

    &:hover, &:focus-visible{
        color: #cccccc;
        border-color: #cccccc;

        &::before{
            border-color: #cccccc;
        }
    }

    &::before{
        content: "";
        opacity: 0%;
        overflow: hidden;
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
