import styled, { css } from "styled-components"

export const Component = styled.div.attrs((props: any) => ({
    className: "episode-card",
    $wasWatched: !!props?.$wasWatched
}))<{ $wasWatched?: boolean }>`
    display: flex;
    position: relative;
    max-width: 359px;
    width: 100%;
    height: 98px;
    border: 1px solid #9d9d9d;
    border-radius: 2px;
    padding: 11px 14px;
    cursor: pointer;
    transition: 100ms linear;

    .gatsby-image-wrapper{
        height: 70px;
        width: 125px;
        overflow: hidden;
        filter: grayscale(0.4);
        margin-right: 15px;
        border-radius: 1px;
        transition: 100ms linear;
    }

    &:hover{
        border-color: #EDEDED;
        .gatsby-image-wrapper{
            filter: grayscale(0.2);
        }
        .was-watched-icon{
            border-color: #EDEDED;
        }
        p{
            color: #EDEDED;
        }
    }

    ${({ $wasWatched }) => $wasWatched && css`
        .gatsby-image-wrapper{
            filter: grayscale(1);
        }
        p {
            color: #9d9d9d;
        }
    `}

    container-type: inline-size;
`

const getTitleText = (
    episode: number, season?: number, compact?: boolean
) => {
    if(!season) return `EPISODE ${episode}:`
    if(compact) return `S${season} | E${episode}:`
    return `SEASON ${season} | EPISODE ${episode}:`
}

export const Title = styled.p.attrs((props: any) => ({
    className: "episode-card-title",
    $season: props?.$season,
    $episode: props?.$episode
}))< { $season?: number, $episode: number } >`
    white-space: nowrap;
    padding-right: 20px;
    transition: 100ms linear;
    font-size: 16px;
    color: #EDEDED;

    &::before{
        content: "${( { $season, $episode }) =>
            getTitleText($episode, $season)
        }";
    }

    @container (max-width: 240px){
        &::before{
            content: "${( { $season, $episode }) =>
                getTitleText($episode, $season, true)
            }";
        }
    }
`

export const Text = styled.p`
    transition: 100ms linear;
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
    transition: 100ms linear;
    overflow: hidden;
    opacity: 0%;

    ${({ $wasWatched }) => $wasWatched && css`
        opacity: 100%;
    `}
`
