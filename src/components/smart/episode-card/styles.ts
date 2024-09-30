import styled, { css } from "styled-components"

export const Component = styled.div.attrs({
    className: "episode-card"
})<{ $wasWatched?: boolean }>`${({ $wasWatched }) => css`
    display: flex;
    flex-direction:column ;
    width: 100%;
    max-width: 359px;

    .none-button {
        display: flex;
        text-align: unset;
        position: relative;
        max-width: 359px;
        width: 100%;
        height: 98px;
        border: 1px solid #9d9d9d;
        border-radius: 2px;
        padding: 11px 14px;
        cursor: pointer;
        overflow: hidden;
        gap: 0px 15px;
        transition-property:
            outline,
            outline-offset,
            border-color
        ;
        transition-duration: 50ms, 50ms, 100ms;
        transition-timing-function: linear;

        .gatsby-image-wrapper{
            height: 70px;
            width: 125px;
            overflow: hidden;
            filter: grayscale(0.4);
            border-radius: 1px;
            transition: 100ms linear;
        }

        &:hover,
        &:focus,
        &:focus-visible {
            border-color: #EDEDED;
            .gatsby-image-wrapper{
                filter: grayscale(0.2);
            }
            .was-watched-icon{
                border-color: #EDEDED;
            }
            span {
                color: #EDEDED;
            }
        }

        ${$wasWatched && css`
            .gatsby-image-wrapper{
                filter: grayscale(1);
            }
            span {
                color: #9d9d9d;
            }
        `}
    }
`}`

export const TopText = styled.span`
    margin: 0px 9px 9px 9px;
    color: #EDEDED;
    font-size: 20px;
`

export const Title = styled.span.attrs({
    className: "episode-card-title"
})`
    white-space: nowrap;
    padding-right: 20px;
    font-size: 16px;
    color: #EDEDED;
`

export const Text = styled.span.attrs({
    className: "episode-card-text"
})`
    max-width: 180px;
    margin-top: 2px;
    font-size: 16px;
    color: #EDEDED;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`

export const WasWatchedIcon = styled.div.attrs(
    (props: any) => ({
    className: "was-watched-icon",
    $wasWatched: !!props?.$wasWatched
}))<{ $wasWatched?: boolean }>`
    content: "";
    position: absolute;
    top: 5px;
    right: 9px;
    width: 15px;
    height: 10px;
    border-bottom: 1px solid #9d9d9d;
    border-left: 1px solid #9d9d9d;
    transform: rotate(-45deg);
    overflow: hidden;
    opacity: 0%;

    ${({ $wasWatched }) => $wasWatched && css`
        opacity: 100%;
    `}
`
