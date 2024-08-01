import styled from "styled-components"

export const Screen = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    margin-bottom: 64px;

    > .watch-later-card {
        width: 70%;
    }

    @media (max-width: 1000px){
        > .watch-later-card {
            width: 100%;
        }
    }

    @media (max-width: 600px){
        > .page-title {
            font-size: 32px;
            margin-top: 36px;
        }

        > .cards-container {
            padding: 32px 48px;
        }
    }

    @media (max-width: 440px){
        .page-title {
            margin-left: 24px;
        }
        > .cards-container {
            padding: 32px 24px;
        }
    }
`

export const CardsContainer = styled.div.attrs({
    className: "cards-container"
})`
    display: flex;
    flex-direction: column;
    padding: 46px 79px;
    transition: 100ms linear;

    .watch-later-card{
        margin-bottom: 30px;
    }
`

export const Title = styled.h1.attrs({
    className: "page-title"
})`
    transition: 100ms linear;
    margin: 46px 24px 0px 46px;
    font-size: 37px;
`

export const NoCardsMessage = styled.h2`
    animation: showNoCardsMessage 550ms linear forwards;

    @keyframes showNoCardsMessage {
        from {
            width: 0px;
            opacity: 0;
            filter: blur(46px);
        }
        to {
            width: 100%;
            opacity: 1;
            filter: blur(0px);
        }
    }
`
