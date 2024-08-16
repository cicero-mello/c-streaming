import React, { FC, useEffect, useMemo } from "react"
import { useNavigation } from "../../hooks"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { customLocalStorage } from "../../stores"
import { useMediaStore } from "../../stores"
import { PATHS } from "../../paths"
import {
    EpisodeCard, FakeVideo, Line, MediaTitle,
    EpisodesCarousel, MediaSuggestions, Error
} from "../../components"
import * as S from "./styles"

export const Series: FC = () => {
    const { getUrlParams, navigate } = useNavigation()
    const { mediaID, episodeID }= getUrlParams()
    const media = useMediaStore(state => state.getMediaById(
        mediaID ?? ""
    ))

    const history = useMemo(() =>
        customLocalStorage.getHistory()
    , [])

    const serie = useMemo(() =>
        !media ? undefined :
        customLocalStorage.getSerie(media.id)
    , [media])

    const currentEpisode = useMemo(() => {
        if(!serie) return undefined

        if(!episodeID) return customLocalStorage.getLastWatchedEpisode({
            history, serie
        }) ?? serie.seasons[0][0]

        return customLocalStorage.getEpisodeByIDs(
            serie.serieID,
            episodeID,
            serie
        )
    }, [serie, episodeID])

    const nextEpisode = useMemo(() =>
        (!serie || !currentEpisode) ? undefined :
        customLocalStorage.getNextEpisode(
            serie.serieID,
            currentEpisode.id,
            serie
        )
    , [serie, currentEpisode])

    useEffect(() => {
        if(!media || !currentEpisode) return
        customLocalStorage.addMediaToHistory({
            mediaID: media.id,
            episodeID: currentEpisode.id
        })
    }, [media, currentEpisode])

    const invalidParameters = !(
        media &&
        currentEpisode &&
        serie
    )

    return invalidParameters ? <Error errorCode="400" /> : (
        <S.Component>
            <S.FirstSection>
                <S.TopWrapper>
                    <FakeVideo
                        thumbImage={media.bannerImage as IGatsbyImageData}
                        altThumbImage={`Image of ${media.name}`}
                    />
                    <S.RightSide>
                        <MediaTitle
                            watchLaterText="Watch Series Later"
                            mediaId={media.id}
                            title={media.name}
                            episodeName={
                                "S." + currentEpisode?.season +
                                " | Ep." + currentEpisode?.ep +
                                ": " + currentEpisode?.name
                            }
                        />
                        <S.Sinopspys800MediaWidth>
                            {media.synopsis}
                        </S.Sinopspys800MediaWidth>
                        {nextEpisode ?
                            <EpisodeCard
                                topText="Next Episode:"
                                thumbImage={media.bannerImage as IGatsbyImageData}
                                altImage={`Image of ${media.name}`}
                                episode={nextEpisode.episode.ep}
                                episodeName={nextEpisode.episode.name}
                                season={nextEpisode.isNextEpisodeInAnotherSeason ?
                                    nextEpisode.episode.season : undefined
                                }
                                onClick={() => navigate(PATHS.SERIES,{
                                    mediaID: mediaID,
                                    episodeID: nextEpisode.episode.id
                                })}
                                wasWatched={customLocalStorage.episodeWasWatched(
                                    nextEpisode.episode.id,
                                    history
                                )}
                            />
                            :
                            <S.LastEpisodeMessage />
                        }
                    </S.RightSide>
                </S.TopWrapper>
                <S.Sinopsys>
                    {media.synopsis}
                </S.Sinopsys>
            </S.FirstSection>
            <Line />
            {serie.seasons.map((season, seasonIndex) =>
                <EpisodesCarousel
                    key={`episodes-carousel-key-${seasonIndex}`}
                    topText={`SEASON ${seasonIndex + 1}`}
                    episodes={
                        season.map(episode => ({
                            thumbImage: media.bannerImage as IGatsbyImageData,
                            altImage: `Image of ${media.name}`,
                            episode: episode.ep,
                            episodeName: episode.name,
                            wasWatched: customLocalStorage.episodeWasWatched(
                                episode.id,
                                history
                            ),
                            onClick: () => navigate(PATHS.SERIES, {
                                mediaID: mediaID,
                                episodeID: episode.id
                            })
                        }))
                    }
                />
            )}
            <S.SecondSection>
                <MediaSuggestions exceptionMediaID={media.id} />
            </S.SecondSection>
        </S.Component>
    )
}
