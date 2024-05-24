import styled from "styled-components"

export const Component = styled.div.attrs({
    className: "teste"
})`
    display: flex;
    flex-direction: column;
`

export const FirstSection = styled.section`
    display: flex;
    padding: 24px 48px;
    margin: 37px 0px 80px 0px;

    .fake-video{
        height: fit-content;
        max-width: 55%;
        min-width: 640px;
    }

    .watch-later-button{
        margin: 7px 0px 27px 9px;
    }

    @media (max-width: 1100px){
        flex-wrap: wrap;
        margin: 0px 0px 14px 0px;

        .right-side{
            margin: 10px 6px;
        }
        .fake-video, .sinopsys{
            max-width: 100%;
            min-width: unset;
        }
    }

    @media (max-width: 600px){
        .sinopsys{
            font-size: 18px;
        }
        .media-title{
            font-size: 32px;
            margin-left: 0px;
        }
        .watch-later-button {
            margin-left: 0px;
        }
        .video-play-button{
            transform: scale(0.7);
        }
    }
`

export const RightSide = styled.div.attrs({
    className: "right-side"
})`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 32px;
`

export const MediaTitle = styled.h1.attrs({
    className: "media-title"
})`
    font-weight: normal;
    font-size: 37px;
    margin-left: 9px;
`

export const Sinopsys = styled.p.attrs({
    className: "sinopsys"
})`
    color: #8D8D8D;
    font-size: 23px;
    max-width: 573px;
`

export const SecondSection = styled.section`
    display: flex;
    padding: 24px 48px;
    margin-top: 60px;
    justify-content: center;
`