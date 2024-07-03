import styled from "styled-components"

export const Component = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    margin-bottom: 64px;

    .history-card { width: 23%; }

    @media (max-width: 1080px){
        .history-card { width: 31%; }
    }

    @media (max-width: 854px){
        .history-card { width: 47%; }
    }

    @media (max-width: 700px){
        .history-card {
            width: 100%;
            margin-bottom: 40px;
        }
        .cards-wrapper {
            gap: 0px 24px;
        }
    }
`

export const Title = styled.h1`
    margin: 46px 24px 0px 46px;
`

export const CardsWrapper = styled.div.attrs({
    className: "cards-wrapper"
})`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 40px 24px;
    padding: 36px 79px;
    margin-top: 12px;
`
