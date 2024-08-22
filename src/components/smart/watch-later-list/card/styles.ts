import styled, { css } from "styled-components"

export const Container = styled.div.attrs({
    className: "watch-later-card"
})<{ $closed?: boolean }> `${({ $closed }) => css`
    display: flex;
    width: 100%;
    container-type: inline-size;

    ${$closed && css`
        transition: 500ms ease-in-out;
        margin: 0px !important;
    `}
`}`

export const Component = styled.div<{$closed?: boolean }>`${({
    $closed
}) => css`
    display: flex;
    height: 195px;
    max-height: 421px;
    padding: 0px;
    border-color: #9999;
    transition: 100ms linear;

    ${$closed && css`
        transition: 500ms ease-in-out;
        height: 0px;
        filter: blur(30px) grayscale(1);
        opacity: 0;
        pointer-events: none;
    `}

    .gatsby-image-wrapper {
        filter: grayscale(0.4);
        min-width: 45%;
        max-width: 475px;
        position: relative;

        &::before, &::after {
            content: "";
            transition: 100ms linear;
            position: absolute;
            width: 25%;
            height: 100%;
            z-index: 1;
        }

        &::before {
            background: linear-gradient(
                to right, #090909 2%, #09090900
            );
        }
        &::after {
            right: 0;
            top: 0;
            background: linear-gradient(
                to left, #090909 2%, #09090900
            );
        }
    }

    @container (max-width: 512px){
        border: 1px solid #9999;
        border-radius: 2px;
        height: fit-content;
        width: 100%;

        &:hover {
            border-color: #999999;
        }

        .gatsby-image-wrapper {
            display: none;
        }

        .card-content {
            width: 100%;
            padding: 24px 24px 32px 24px;
        }

        .buttons {
            width: 100%;
            flex-wrap: wrap;
            gap: 12px;
            justify-content: end;
            .classic-button, .border-button {
                width: 100%;
                white-space: unset;
            }
        }

        .title {
            -webkit-line-clamp: 7;
        }

        ${$closed && css`
            transition: 580ms ease-out;
            max-height: 0px;
        `}
    }

    @media(max-width: 600px){
        .title { font-size: 24px; }
        .classic-button { font-size: 22px; }
    }
`}`


export const CardContent = styled.div.attrs({
    className: "card-content"
})`
    padding: 4px 0px 24px 32px;
`

export const Buttons = styled.div.attrs({
    className: "buttons"
})`
    display: flex;
    margin-top: 14px;
    gap: 18px;
    align-items:end ;
    height: min-content;

    .border-button {
        font-size: 17px;
        padding: 4px 10px;
    }

    .classic-button {
        color: #ededed;
    }
`

export const Title = styled.h2.attrs({
    className: "title"
})`
    font-size: 27px;
    color: #ededed;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`
