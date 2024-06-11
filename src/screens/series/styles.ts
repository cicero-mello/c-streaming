import styled, { css } from "styled-components"

export const Component = styled.main`
    display: flex;
    flex-direction: column;
`

export const FirstSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px 48px 38px 48px;

    .fake-video{
        height: fit-content;
        max-width: 60%;
        min-width: 640px;
    }

    .watch-later-button{
        margin: 9px 0px 37px 9px;
    }

    .episode-card{
        opacity: 0.7;
        transition: opacity 100ms linear;
        &:hover{
            opacity: 1;
        }
    }

    @media (max-width: 1100px){
        .top-wrapper{
            flex-wrap: wrap;
        }
        .fake-video{
            max-width: 100%;
            min-width: unset;
        }
        .right-side{
            width: 100%;
            justify-content: space-between;
            padding: 10px 6px 0px 6px;
            flex-direction: row;
        }
        .watch-later-button{
            margin-bottom: 0px;
        }
        .sinopsys{
            margin-top: 27px;
        }
        .media-title{
            width: 50%;
            padding-right: 32px;
        }
        .episode-card{
            width: 50%;
            justify-content: flex-end;
            align-items: center;
            margin-top: 9px;
            padding-right: 15px;
            flex-direction: row;
            max-width: unset;
            > h5 {
                width: min-content;
                text-align: end;
                margin: 0px 9px 0px 0px;
            }
        }
        .last-episode-message{
            text-align: end;
            margin: 6px 15px 0px 0px;
        }
    }

    @media(max-width: 800px){
        .right-side{
            width: 100%;
            flex-direction: column;
        }
        .media-title{
            width: 100%;
            padding-right: 32px;
        }
        .episode-card{
            width: 100%;
            opacity: 0.9;
            margin-top: 24px;
            flex-direction: column;
            align-items: flex-end;
            > h5 {
                width: unset;
                text-align: start;
                margin: 4px 0px 9px 9px;
            }
        }
        .sinopsys {
            display: none;
        }
        .sinopsys-800-media-width {
            display: unset;
        }
        .last-episode-message{
            align-self: flex-end;
            margin: 23px 0px 0px 0px;
        }
    }

    @media (max-width: 600px){
        padding: 24px 24px 38px 24px;
        .media-title {
            padding: 0px;
            > .title{
                font-size: 32px;
                margin-left: 0px;
            }
        }
        .sinopsys-800-media-width{
            font-size: 18px;
            margin-top: 20px;
        }
        .media-episode-name{
            margin-left: 0px;
            font-size: 19px;
        }
        .watch-later-button {
            margin-left: 0px;
            margin-top: 8px;
        }
        .video-play-button{
            transform: scale(0.7);
        }
        .episode-card {
            align-items: flex-start;
            margin-top: 14px;
            padding: 0px;
            opacity: 0.95;
            > .card {
                max-width: 100%;
                > .wrapper{
                    width: 70%;
                    > .episode-card-text {
                        max-width: 100%;
                    }
                }
            }
            > h5 {
                font-size: 18px;
                margin: 11px 0px 6px 0px;
            }
        }
        .last-episode-message{
            align-self: center;
            text-align: center;
            font-size: 20px;
            margin-top: 30px;
        }
    }
`

export const TopWrapper = styled.div.attrs({
    className: "top-wrapper"
})`
    display: flex;
`

export const RightSide = styled.div.attrs({
    className: "right-side"
})`
    display: flex;
    width: 40%;
    flex-direction: column;
    align-self: flex-start;
    padding-left: 36px;
`

const sinopsysCSS = css`
    color: #8D8D8D;
    font-size: 23px;
    text-align: justify;
`

export const Sinopsys = styled.p.attrs({
    className: "sinopsys"
})`
    margin-top: 33px;
    ${sinopsysCSS}
`

export const Sinopspys800MediaWidth = styled.p.attrs({
    className: "sinopsys-800-media-width"
})`
    display: none;
    margin-top: 27px;
    ${sinopsysCSS}
`

export const LastEpisodeMessage = styled.input.attrs({
    className: "last-episode-message",
    type: "checkbox"
})`
    appearance: none;
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    font-size: 24px;

    &::before {
        content: "Amazing, you've reached the last episode!";
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
            45deg,
            red, orange, yellow, green, blue,
            indigo, purple, red, orange, yellow,
            green, blue, indigo, purple, red
        );
        text-shadow: 0 0 0px #ffffff91;
        animation: 10s slideX linear infinite forwards;
    }
    &:checked::before{
        -webkit-background-clip: unset;
        -webkit-text-fill-color: unset;
        text-shadow: unset;
        background-image: unset;
        animation: unset;
        color: #e3e3e3;
    }

    @keyframes slideX {
        from { background-position: 0px 0px; }
        to { background-position: 4000px 0px; }
    }
`

export const SecondSection = styled.section`
    display: flex;
    padding: 53px 48px 78px 48px;
    padding: 77px 48px 102px 48px;
    justify-content: center;
    opacity: 0.7;
    height: 100%;
    transition: opacity 200ms linear;

    &:hover{
        opacity: 1;
    }

    @media(max-width: 1100px){
        padding-bottom: 85px;
    }

    @media(max-width: 870px){
        padding: 53px 48px 85px 48px;
    }

    @media(max-width: 600px){
        opacity: 1;
        padding: 46px 24px 85px 24px;
    }
`
