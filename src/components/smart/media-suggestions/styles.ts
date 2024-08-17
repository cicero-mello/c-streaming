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
            button:first-child{
                position: absolute;
                z-index: 2;
            }
            button:last-child{
                position: absolute;
                z-index: 2;
                right: 0;
            }
        }
        .image-wrapper{
            max-width: 100%;
            height: 230px;
            max-height: unset;
        }
    }

    @media(max-width: 600px){
        .suggestion-text{ font-size: 24px; }
        .suggestion-media-name{ font-size: 20px; }
        .image-wrapper{ height: 170px; }
    }
`

export const Text = styled.h1.attrs({
    className: "suggestion-text"
})`
    color: #EDEDED;
    font-size: 28px;
`

export const SuggestionsWrapper = styled.div.attrs({
    className: "suggestions-wrapper"
})`
    display: flex;
    position: relative;
    align-items: center;
    button:first-child{
        transform: rotate(180deg);
    }
`

export const Button = styled.button`
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
    $onTransition: props?.$onTransition ?? "none",
    $freePointerEvents: props?.$freePointerEvents ?? false
}))<{ $onTransition: OnTransitionState; $freePointerEvents: boolean }>`${({
    $onTransition, $freePointerEvents
}) => css`
    display: flex;
    position: relative;
    max-width: 330px;
    max-height: 185px;
    margin: 0px 12px;
    border: 1px solid transparent;
    transition: all 100ms linear, opacity 360ms ease-in-out;
    cursor: pointer;
    filter: grayscale(0.6);

    &:hover{
        filter: grayscale(0.4);
        border-color: #9d9d9d;
    }

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

    ${$onTransition === "previus-none" && css`
        opacity: 100%;
        &::before{
            width: 0%;
            right: -12px;
            left: unset;
        }
    `}

    ${$onTransition === "next-none" && css`
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

    ${!$freePointerEvents && css`
        pointer-events: none;
    `}
`}`

export const SuggestionMediaName = styled.h2.attrs({
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
