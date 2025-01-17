import styled, { css } from "styled-components"
import { ItemAnimationState } from "./types"

export const Component = styled.div.attrs((props: any) => ({
    className: "banner-item",
    $animationState: props.$animationState || "open"
}))<{ $animationState: ItemAnimationState }>`${({
    $animationState
}) => css`
    display: flex;
    height: 350.4px;
    padding: 10px 34px;
    width: 100%;

    .gatsby-image-wrapper {
        overflow: unset;
    }

    .gatsby-image {
        width: 337.6px;
        min-width: 337.6px;
        transition: 340ms ease-in-out;
    }

    ${$animationState === "closed" && css`
        .gatsby-image {
            width: 0px;
            min-width: 0px;
        }

        .info-wrapper {
            opacity: 0%;
            margin-right: 337.6px;
        }
    `}
`}`

export const InfoAndButtons = styled.div.attrs({
    className: "info-and-buttons",
    role: "presentation"
})`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(90deg, #303030, black);
    min-width: 100px;
    padding: 44px 49.6px 29px 49.6px;
    margin-left: 20px;
    overflow: hidden;
`

export const InfoWrapper = styled.div.attrs({
    className: "info-wrapper"
})`
    opacity: 100%;
    transition: 340ms ease-in-out;
`

export const MediaName = styled.span.attrs({
    className: "media-name",
    role: "presentation"
})`
    max-width: 85%;
    white-space: nowrap;
    font-size: 37px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: fit-content;
    font-style: normal;
`

export const Synopsis = styled.p.attrs({
    className: "synopsis",
    role: "presentation"
})`
    font-size: 23px;
    color: #9B9B9B;
    margin-top: 11px;
    max-height: 180px;

    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const ButtonsWrapper = styled.div.attrs({
    className: "buttons-wrapper"
})`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    transition: 340ms ease-in-out;
    opacity: 100%;

    >:first-child{ margin: 0px 18px 4px 18px; }
    >:last-child{ padding: 6px 26px; }
`
