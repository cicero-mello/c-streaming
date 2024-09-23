import styled, { css, keyframes } from "styled-components"

export const Component = styled.div.attrs(({
    className: "fake-video"
}))<{ $showVideo?: boolean}>`${({ $showVideo }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    border: 1px solid #9d9d9d;

    .gatsby-image-wrapper{
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        filter: grayscale(0.4);
        opacity: 100%;
    }

    ${$showVideo && css`
        .gatsby-image-wrapper, .video-play-button {
            transition: 200ms linear;
            opacity: 0%;
            pointer-events: none;
        }

        .fake-video-message {
            opacity: 1;
        }
    `}
`}`

const rotate = keyframes`
    to { transform: rotate(360deg); }
`

export const ScreenSaverContainer = styled.div`
    position: relative;
    padding-top: 56.25%; // 16/9 trick
    width: 100%;
    background: radial-gradient(#141414, #181818);
    overflow: hidden;

    .triangle-pong {
        position: absolute;
        top: 80px;
        left: 100px;
        height: 20%;
        width: 14%;
        opacity: 0;
        animation: 4s ${rotate} infinite linear;

        path {
            stroke: #923F3F;
        }
    }
`

export const Message = styled.p.attrs({
    className: "fake-video-message"
})`
    position: absolute;
    opacity: 0;
    width: fit-content;
    height: fit-content;
    z-index: 1;
    margin-bottom: 3%;

    text-align: center;
    align-content: center;
    color: #dbdbdb;
    text-shadow: 2px 2px 2px #3b3b3b;
    font-size: 27px;
    transition: font-size 100ms linear;

    @media (max-width: 600px){
        font-size: 22px;
    }

    @media (max-width: 330px){
        font-size: 16px;
    }
`

export const PlayButton = styled.button.attrs({
    className: "video-play-button"
})`
    height: 94px;
    width: 94px;
    background-color: rgba(8,8,8, 0.7);
    position: absolute;
    border-radius: 31px;
    cursor: pointer;
    z-index: 1;
    transition: 80ms linear;

    svg {
        margin-left: 5px;
    }

    &:focus,
    &:hover,
    &:focus-visible {
        background-color: rgba(8,8,8, 0.9);
        border-radius: 31px;
    }
`
