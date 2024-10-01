import React, { FC } from "react"
import { getAriaLabel, getTitleText } from "./core"
import { GatsbyImage } from "gatsby-plugin-image"
import { Wrapper, Button } from "@components"
import { EpisodeCardProps } from "./types"
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
            {isNextEpisode &&
                <S.TopText aria-hidden="true">
                    Next Episode:
                </S.TopText>
            }
            <Button
                theme="none"
                url={url}
                aria-label={ariaLabel}
            >
                <GatsbyImage
                    image={thumbImage}
                    alt={`Image of ${episodeName}`}
                    aria-hidden="true"
                />
                <Wrapper
                    $direction="column"
                    aria-hidden="true"
                >
                    <S.Title> {titleText} </S.Title>
                    <S.Text> {episodeName} </S.Text>
                </Wrapper>
                <S.WasWatchedIcon $wasWatched={wasWatched}/>
            </Button>
        </S.Component>
    )
}
