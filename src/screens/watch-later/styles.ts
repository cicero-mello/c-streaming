import styled from "styled-components"

export const Screen = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    margin-bottom: 64px;

    > .watch-later-list {
        padding: 46px 79px;
    }

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

        > .watch-later-list {
            padding: 32px 48px;
        }
    }

    @media (max-width: 440px){
        .page-title {
            margin-left: 24px;
        }
        > .watch-later-list {
            padding: 32px 24px;
        }
    }
`

export const Title = styled.h1.attrs({
    className: "page-title"
})`
    transition: 100ms linear;
    margin: 46px 24px 0px 46px;
    font-size: 37px;
`
