import styled, { css } from "styled-components"

export const Component = styled.div.attrs((props: any) => ({
    className: "fake-video",
    $showVideo: props.$showVideo || false
}))<{ $showVideo: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    border: 1px solid #9d9d9d;
    overflow: hidden;

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

export const Video = styled.video`
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

    &:hover{
        
    }
`
