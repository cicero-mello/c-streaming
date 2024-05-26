import styled, { css } from "styled-components"

export const Component = styled.div.attrs((props: any) => ({
    className: "fake-video",
    $showVideo: props?.$showVideo
}))<{ $showVideo?: boolean}>`
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

    ${({ $showVideo }) => $showVideo && css`
        .gatsby-image-wrapper, .video-play-button {
            transition: 200ms linear;
            opacity: 0%;
            pointer-events: none;
        }

        video{
            opacity: 100%;
        }
    `}

    animation: initialAnimation linear 200ms;
    animation-iteration-count: 1;
    @keyframes initialAnimation {
        from { opacity: 0%; }
        to { opacity: 100%; }
    }
`

export const VideoContainerProportion = styled.div`
    position: relative;
    padding-top: 56.25%; // 16/9 trick
    width: 100%;
`

export const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
`

export const PlayButton = styled.button.attrs({
    className: "video-play-button"
})`
    height: 94px;
    width: 94px;
    background-color: #080808;
    position: absolute;
    border-radius: 31px;
    opacity: 100%;
    cursor: pointer;
    z-index: 1;

    svg{
        margin-left: 5px;
    }
`
