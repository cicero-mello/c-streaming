import React, { FC } from "react"
import { EpisodeCardProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Wrapper } from "../wrapper"
import * as S from "./styles"

export const EpisodeCard: FC<EpisodeCardProps> = ({
    onClick, episodeName, thumbImage, altImage, wasWatched,
    season, episode, topText
}) => (
    <S.Component>
        {topText && <S.TopText> {topText} </S.TopText>}
        <S.Card onClick={onClick} $wasWatched={wasWatched}>
            <GatsbyImage image={thumbImage} alt={altImage}/>
            <Wrapper $direction="column">
                <S.Title $season={season} $episode={episode} />
                <S.Text> {episodeName} </S.Text>
            </Wrapper>
            <S.WasWatchedIcon $wasWatched={wasWatched}/>
        </S.Card>
    </S.Component>
)
