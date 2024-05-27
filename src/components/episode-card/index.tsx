import React, { FC } from "react"
import { EpisodeCardProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Wrapper } from "../wrapper"
import * as S from "./styles"

export const EpisodeCard: FC<EpisodeCardProps> = ({
    onClick, text, thumbImage, altImage, wasWatched,
    season, episode
}) => (
    <S.Component onClick={onClick} $wasWatched={wasWatched}>
        <GatsbyImage image={thumbImage} alt={altImage}/>
        <Wrapper $direction="column">
            <S.Title $season={season} $episode={episode} />
            <S.Text> {text} </S.Text>
        </Wrapper>
        <S.WasWatchedIcon $wasWatched={wasWatched}/>
    </S.Component>
)
