import styled, { css } from "styled-components"
import { OnTransitionState } from "./types"

export const Component = styled.div.attrs({
    className: "content-suggestions"
})`
    display: flex;
    align-items: center;
    max-width: 880px;
    width: 100%;
    justify-content: space-between;

    @media(max-width: 870px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .suggestion-text{
            margin: 0px 24px 32px 24px;
            text-align: center;
        }
        .suggestions-wrapper{
            width: 100%;
            .arrow-button:first-child{
                position: absolute;
                z-index: 2;
            }
            .arrow-button:last-child{
                position: absolute;
                z-index: 2;
                right: 0;
            }
        }
        .image-wrapper{
            max-width: 100%;
            max-height: unset;
            height: 230px;
        }
        .none-button{
            max-width: calc(100% - 44px);
            margin: auto;
        }
    }

    @media(max-width: 600px){
        .suggestion-text{ font-size: 24px; }
        .suggestion-media-name{ font-size: 20px; }
        .image-wrapper{ height: 170px; }
    }
`

export const Text = styled.h2.attrs({
    className: "suggestion-text"
})`
    color: #EDEDED;
    font-size: 28px;
`

export const SuggestionsWrapper = styled.div.attrs({
    className: "suggestions-wrapper"
})<{ $freePointerEvents: boolean }>`${({
    $freePointerEvents
}) => css`
    display: flex;
    position: relative;
    align-items: center;
    gap: 0px 12px;

    .arrow-button:first-child{
        transform: rotate(180deg);
    }

    ${!$freePointerEvents && css`
        pointer-events: none;
    `}

    .none-button:hover,
    .none-button:focus,
    .none-button:focus-visible {
        .image-wrapper{
            filter: grayscale(0.4);
            border-color: #9d9d9d;
        }
    }
`}`

export const ArrowButton = styled.button.attrs({
    className: "arrow-button"
})`
    cursor: pointer;
    path { transition: 100ms linear; }

    &:hover{
        path:last-child{
            fill: white;
        }
    }

    &:active{
        path:first-child{ fill: #EDEDED; }
        path:last-child{ fill: #080808; }
    }
`

export const ImageWrapper = styled.div.attrs((props: any) => ({
    className: "image-wrapper",
    $onTransition: props?.$onTransition ?? "none"
}))<{ $onTransition: OnTransitionState }>`${({
    $onTransition
}) => css`
    display: flex;
    position: relative;
    max-width: 330px;
    max-height: 185px;
    border: 1px solid transparent;
    transition: all 100ms linear, opacity 360ms ease-in-out;
    cursor: pointer;
    filter: grayscale(0.6);

    &::before{
        content: "";
        border-radius: 20px;
        width: 0%;
        height: calc(100% + 88px);
        background-color: #090909;
        position: absolute;
        z-index: 2;
        right: 0;
        top: -10px;
        transition: 300ms ease-in-out;
    }

    ${$onTransition === "previus-to-none" && css`
        opacity: 100%;
        &::before{
            width: 0%;
            right: -12px;
            left: unset;
        }
    `}

    ${$onTransition === "next-to-none" && css`
        opacity: 100%;
        &::before{
            width: 0%;
            right: unset;
            left: -12px;
        }
    `}

    ${$onTransition === "next" && css`
        opacity: 0%;
        &::before{
            right: -10px;
            width: calc(100% + 20px);
        }
    `}

    ${$onTransition === "previus" && css`
        opacity: 0%;
        &::before{
            left: -10px;
            width: calc(100% + 20px);
        }
    `}
`}`

export const SuggestionMediaName = styled.span.attrs({
    className: "suggestion-media-name"
})`
    color: #EDEDED;
    position: absolute;
    font-size: 24px;
    top: calc(100% + 6px);

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
