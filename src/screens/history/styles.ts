import styled, { css } from "styled-components"

export const Screen = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    margin-bottom: 64px;

    .history-card {
        width: 100%;
        margin-bottom: 40px;
    }

    .border-button, .border-red-button {
        font-size: 16px;
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
            max-width: unset;
        }
        .border-button, .border-red-button {
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
        .border-button, .border-red-button{
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
    width: fit-content;
`

export const ContentWrapper = styled.div.attrs({
    className: "content-wrapper"
})`
    display: flex;
    position: relative;
    justify-content: space-evenly;
    padding: 46px 79px;
    width: 100%;

    &:has(.history-clear-message){
        justify-content: space-between;
    }
`

interface CardsWrapperProps {
    $closeAllCards?: boolean,
    $removeHeight?: boolean,
    $hide?: boolean
}

export const CardsWrapper = styled.div.attrs({
    className: "cards-wrapper"
})<CardsWrapperProps>`${({
    $closeAllCards, $removeHeight, $hide
}) => css`
    display: flex;
    flex-wrap: wrap;
    width: 47%;
    margin-top: 12px;
    transform-origin: top left;
    opacity: 1;
    transition: 180ms linear;

    ${$closeAllCards && css`
        transition: 800ms ease-in-out;
        transform: scale(0);
        filter: blur(46px);
    `}

    ${$removeHeight && css`
        height: 0px;
    `}

    ${$hide && css`
        opacity: 0;
    `}
`}`

export const ActionsWrapper = styled.div.attrs({
    className: "action-wrapper"
})<{ $hide?: boolean }>`${({ $hide }) => css`
    display: flex;
    flex-direction: column;
    margin-left: 79px;
    position: sticky;
    height: fit-content;
    top: 120px;
    width: 305px;
    max-width: 36%;
    height: fit-content;

    .generic-text-input {
        margin-bottom: 14px;
    }

    ${$hide && css`
        animation: hideActionWrapper 400ms ease-in-out forwards;
    `}

    @keyframes hideActionWrapper {
        to { opacity: 0; }
    }
`}`

export const HistoryClearMessage = styled.p.attrs({
    className: "history-clear-message"
})`
    display: flex;
    text-align: center;
    color: #EDEDED;
    position: static;
    max-width: fit-content;
    font-size: 22px;
    animation: showHistoryClearMessage 500ms linear forwards;

    @keyframes showHistoryClearMessage {
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

export const NoResults = styled.p`
    color: #b4b4b4;
    opacity: 0;
    animation: showNoResultsHistorySearch 180ms linear forwards;
    font-size: 24px;

    @keyframes showNoResultsHistorySearch {
        to { opacity: 1; }
    }

    &::before { content: "No results for your search "; }
    &::after {
        content: ":(";
        white-space: nowrap;
    }
`
