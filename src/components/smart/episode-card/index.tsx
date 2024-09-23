import React, { FC } from "react"
import { EpisodeCardProps } from "./types"
import { GatsbyImage } from "gatsby-plugin-image"
import { Wrapper } from "../../dumb/wrapper"
import { Button } from ".."
import { getAriaLabel, getTitleText } from "./core"
import * as S from "./styles"

export const EpisodeCard: FC<EpisodeCardProps> = ({
    episodeName, thumbImage, wasWatched,
    season, episode, isNextEpisode, url,
    ...rest
}) => {
    const titleText = getTitleText(episode, season)
    const ariaLabel = getAriaLabel(
        episode, season, isNextEpisode, wasWatched
    )

    return (
        <S.Component $wasWatched={wasWatched} {...rest}>
            {isNextEpisode && <S.TopText> Next Episode: </S.TopText>}
            <Button
                theme="none"
                url={url}
                aria-label={ariaLabel}
            >
                <GatsbyImage
                    image={thumbImage}
                    alt={`Image of ${episodeName}`}
                />
                <Wrapper $direction="column">
                    <S.Title> {titleText} </S.Title>
                    <S.Text> {episodeName} </S.Text>
                </Wrapper>
                <S.WasWatchedIcon $wasWatched={wasWatched}/>
            </Button>
        </S.Component>
    )
}
