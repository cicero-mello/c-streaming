import styled, { css } from "styled-components"
import { BannerAnimationState } from "./types"

export const Component = styled.div.attrs((props: any) => ({
    className: "banner",
    $animationState: props.$animationState || "open"
}))<{ $animationState: BannerAnimationState }>`
    display: flex;
    height: 350.4px;
    padding: 10px 34px;
    width: 100%;

    .gatsby-image{
        width: 337.6px;
        min-width: 337.6px;
        transition: 340ms ease-in-out;
    }

    ${({$animationState}) => $animationState === "closed" && css`
        .gatsby-image {
            width: 0px;
            min-width: 0px;
        }

        .info-wrapper {
            opacity: 0%;
            margin-right: 337.6px;
        }
    `}

`

export const InfoAndButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(90deg, #303030, black);
    min-width: 100px;
    padding: 44px 49.6px 29px 49.6px;
    margin-left: 20px;
`

export const InfoWrapper = styled.div.attrs({
    className: "info-wrapper"
})`
    opacity: 100%;
    transition: 340ms ease-in-out;
`

export const MediaName = styled.h1`
    max-width: 85%;
    font-weight: normal;
    white-space: nowrap;
    font-size: 37px;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const Synopsis = styled.p`
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

    :first-child{
        margin: 0px 18px 4px 18px;
    }

    :last-child{
        padding: 6px 26px;
    }
`