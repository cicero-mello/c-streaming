import { RefObject } from "react"
import styled, { css, keyframes } from "styled-components"

export const CLOSE_ANIMATION_TIME = 400

export const prepareToClose = (
    componentRef: RefObject<HTMLDivElement>
) => {
    const { current } = componentRef
    if(!current) return
    current.style.height = current.offsetHeight + "px"
    current.style.width = current.offsetWidth + "px"
}

const closeCard = keyframes`
    to {
        opacity: 0;
        height: 0px;
        margin: 0px 0px;
        filter: blur(46px);
    }
`

const hideElement = keyframes`
    to {
        position: absolute;
        width: 0px;
    }
`

export const Component = styled.div.attrs({
    className: "history-card"
})<{ $closing?: boolean }>`${({ $closing }) => css`
    > a {
        display: flex;
        position: relative;
        flex-direction: column;
        cursor: pointer;
        width: 100%;
        border: 1px solid #8D8D8D;
        border-radius: 2px;
        padding: 24px 18px;
        overflow: hidden;

        transition-property:
            outline,
            outline-offset,
            border-radius,
            color,
            border-color
        ;
        transition-duration: 50ms, 50ms, 50ms, 100ms;
        transition-timing-function: linear;

        > * {
            color: #b4b4b4;
        }

        &::before{
            content: "";
            position: absolute;
            top: -10px;
            right: -10px;
            width: 150%;
            height: 150%;
            background: radial-gradient(
                at right top, #222222, black
            );
            z-index: -1;
        }

        &:hover:not(:has(button:hover)){
            border-color: #EDEDED;
            > * { color: #EDEDED; }
        }
    }

    ${$closing && css`
        pointer-events: none;
        animation:
            ${closeCard} ${CLOSE_ANIMATION_TIME}ms forwards ease-in-out,
            ${hideElement} 10ms ${CLOSE_ANIMATION_TIME + 10}ms forwards
        ;
    `}
`}`

export const CloseButton = styled.button`
    display: flex;
    z-index: 1;
    position: absolute;
    width: 16px;
    height: 18px;
    top: 12px;
    right: 12px;
    cursor: pointer;

    &::before, &::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 100%;
        border-radius: 2px;
        right: 8px;
        background-color: #8D8D8D;
        transition: 100ms linear;
    }

    &::before { transform: rotate(45deg); }
    &::after { transform: rotate(-45deg); }

    &:hover {
        &::before, &::after {
            background-color: #EDEDED;
        }
    }
`

export const Title = styled.h3.attrs({
    className: "history-card-title"
})`
    font-size: 20px;
    margin-bottom: 24px;
    margin: 0px 24px 24px 0px;
    transition: 100ms linear;
    font-weight: bold;

`

export const SeasonAndEp = styled.h3`
    transition: 200ms linear;
`

export const EpisodeName = styled.h3`
    margin-top: 5px;
    transition: 100ms linear;
`
