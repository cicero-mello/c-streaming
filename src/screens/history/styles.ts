import styled, { css } from "styled-components"

export const Component = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    margin-bottom: 64px;

    .history-card {
        width: 100%;
        margin-bottom: 40px;
    }

    .border-button {
        font-size: 16px;
        white-space: nowrap;
        height: min-content;
    }

    @media (max-width: 800px){
        .content-wrapper {
            flex-wrap: wrap-reverse;
        }
        .action-wrapper {
            position: static;
            justify-content: space-between;
            margin-left: 0px;
            margin-bottom: 34px;
            flex-direction: row;
            width: 110%;
        }
        .border-button {
            margin-top: 27px;
            margin-left: 24px;
        }
        .cards-wrapper {
            width: 100%;
        }
        .history-card {
            margin-bottom: 30px;
        }
    }

    @media (max-width: 600px){
        .content-wrapper {
            padding: 32px 48px;
        }
        .page-title {
            font-size: 32px;
            margin-top: 36px;
        }
        .action-wrapper {
            margin-bottom: 29px;
        }
    }

    @media (max-width: 440px){
        .page-title {
            margin-left: 24px;
        }
        .content-wrapper {
            padding: 32px 24px;
        }
        .action-wrapper {
            flex-wrap: wrap;
            margin-bottom: 24px;
        }
        .border-button {
            margin: 0px 0px 24px 0px;
            width: 100%;
        }
        .generic-text-input {
            max-width: unset;
        }
        .history-card {
            margin-bottom: 24px;
        }
        .history-card-title {
            font-size: 19px;
            margin-bottom: 20px;
        }
        .border-button {
            white-space: unset;
        }
    }
`

export const Title = styled.h1.attrs({
    className: "page-title"
})`
    margin: 46px 24px 0px 46px;
    font-size: 37px;
`

export const ContentWrapper = styled.div.attrs({
    className: "content-wrapper"
})`
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 46px 79px;
    width: 100%;
`

export const CardsWrapper = styled.div.attrs((props: any) => ({
    className: "cards-wrapper",
    $closeAllCards: !!props.$closeAllCards,
    $removeHeight: !!props.$removeHeight
}))<{ $closeAllCards?: boolean, $removeHeight?: boolean }>`${({
    $closeAllCards, $removeHeight
}) => css`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin-top: 12px;
    transform-origin: top left;

    ${$closeAllCards && css`
        transition: 800ms ease-in-out;
        transform: scale(0);
        filter: blur(46px);
    `}

    ${$removeHeight && css`
        height: 0px;
    `}
`}`

export const ActionsWrapper = styled.div.attrs({
    className: "action-wrapper"
})`
    display: flex;
    flex-direction: column;
    margin-left: 79px;
    position: sticky;
    height: fit-content;
    top: 120px;
    width: 305px;
    height: fit-content;

    .generic-text-input {
        margin-bottom: 14px;
    }
`

export const HistoryClearMessage = styled.h2.attrs((props: any) => ({
    className: "history-clear-message"
}))<{ $show?: boolean }>`${({ $show }) => css`
    display: flex;
    width: 70%;
    position: absolute;
    text-align: center;
    transition: 500ms linear;

    color: #EDEDED;

    opacity: 0;
    filter: blur(46px);

    ${$show && css`
        opacity: 1;
        filter: blur(0px);
    `}
`}`
