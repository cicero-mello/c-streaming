import React, { FC, useEffect, useMemo } from "react"
import { useUrlState } from "../../hooks"
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
    const [urlState] = useUrlState()

    const media = useMediaStore(state => state.getMediaById(
        urlState.mediaId ?? ""
    ))

    const history = useMemo(() => (
        customLocalStorage.getHistory()
    ), [])

    const serie = useMemo(() => (
        !media ? undefined :
        customLocalStorage.getSerie(media.id)
    ), [media])

    const currentEpisode = useMemo(() => {
        if(!serie) return undefined
        if(!!urlState.episodeID){
            return customLocalStorage.getEpisodeByIDs(
                serie.serieID,
                urlState.episodeID,
                serie
            )
        }
        return (
            customLocalStorage.getLastWatchedEpisode({
                history, serie
            }) ?? serie.seasons[0][0]
        )
    }, [serie, urlState, history])

    const nextEpisode = useMemo(() => (
        (!serie || !currentEpisode) ? undefined :
        customLocalStorage.getNextEpisode(
            serie.serieID,
            currentEpisode.id,
            serie
        )
    ), [serie, currentEpisode])

    useEffect(() => {
        if(!media || !currentEpisode) return
        customLocalStorage.addMediaToHistory({
            mediaId: media.id,
            episodeID: currentEpisode.id
        })
    }, [media, currentEpisode])

    const invalidParameters = (
        !media
        || !currentEpisode
        || !serie
    )

    return invalidParameters ? <Error errorCode="400" /> : (
        <S.Component>
            <S.FirstSection>
                <S.TopWrapper>
                    <FakeVideo
                        thumbImage={media.bannerImage as IGatsbyImageData}
                        videoName={
                            `${media.name}: ` +
                            `Season ${currentEpisode.season}` +
                            `Episode ${currentEpisode.ep}, `
                        }
                    />
                    <S.RightSide>
                        <MediaTitle
                            watchLaterText="Watch Series Later"
                            mediaId={media.id}
                            title={media.name}
                            episode={currentEpisode}
                        />
                        <S.Sinopspys800MediaWidth
                            tabIndex={0}
                            aria-label={`Synopsis: ${media.synopsis}`}
                        >
                            {media.synopsis}
                        </S.Sinopspys800MediaWidth>
                        {nextEpisode ?
                            <EpisodeCard
                                isNextEpisode={true}
                                thumbImage={media.bannerImage as IGatsbyImageData}
                                episode={nextEpisode.episode.ep}
                                episodeName={nextEpisode.episode.name}
                                season={nextEpisode.isNextEpisodeInAnotherSeason ?
                                    nextEpisode.episode.season : undefined
                                }
                                url={{
                                    path: PATHS.SERIES,
                                    params: {
                                        mediaId: media.id,
                                        episodeID: nextEpisode.episode.id
                                    }
                                }}
                                wasWatched={customLocalStorage.episodeWasWatched(
                                    nextEpisode.episode.id,
                                    history
                                )}
                            />
                            :
                            <S.LastEpisodeMessage
                                aria-label="Amazing, you've reached the last episode!"
                                role="note"
                            />
                        }
                    </S.RightSide>
                </S.TopWrapper>
                <S.Sinopsys
                    tabIndex={0}
                    aria-label={`Synopsis: ${media.synopsis}`}
                >
                    {media.synopsis}
                </S.Sinopsys>
            </S.FirstSection>
            <Line />
            {serie.seasons.map((season, seasonIndex) =>
                <EpisodesCarousel
                    key={`episodes-carousel-key-${seasonIndex}`}
                    topText={`SEASON ${seasonIndex + 1}`}
                    episodes={season.map(episode => ({
                        thumbImage: media.bannerImage as IGatsbyImageData,
                        episode: episode.ep,
                        episodeName: episode.name,
                        url: {
                            path: PATHS.SERIES,
                            params: { mediaId: media.id, episodeID: episode.id }
                        },
                        wasWatched: customLocalStorage.episodeWasWatched(
                            episode.id,
                            history
                        ),
                    }))}
                />
            )}
            <S.SecondSection>
                <MediaSuggestions exceptionMediaID={media.id} />
            </S.SecondSection>
        </S.Component>
    )
}
