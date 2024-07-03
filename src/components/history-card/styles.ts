import styled, { css } from "styled-components"

export const Component = styled.div.attrs((props: any) => ({
    className: "history-card",
    $show: !!props.$show
}))<{ $show?: boolean }>`${({ $show }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    cursor: pointer;
    width: 224px;

    border: 1px solid #8D8D8D;
    border-radius: 2px;
    padding: 24px 18px;
    overflow: hidden;

    transition: 200ms linear;

    > * { color: #8D8D8D; }

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

    @keyframes close {
        99% {
            pointer-events: none;
            opacity: 0;
            padding: 0px;
            width: 0px;
            height: 0px;
            margin: -20px -12px;
            filter: blur(46px);
        }
        100% {
            pointer-events: none;
            opacity: 0;
            padding: 0px;
            width: 0px;
            height: 0px;
            margin: -20px -12px;
            filter: blur(46px);
            display: none;
        }
    }
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

export const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 24px;
    margin: 0px 24px 24px 0px;
    transition: 200ms linear;
    font-weight: bold;
`

export const SeasonAndEp = styled.h3`
    transition: 200ms linear;
`

export const EpisodeName = styled.h3`
    margin-top: 5px;
    transition: 200ms linear;
`
