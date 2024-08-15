import React, { FC, useEffect, useMemo } from "react"
import { useNavigation } from "../../hooks"
import {
    EpisodeCard, FakeVideo, Line,
    MediaTitle, EpisodesCarousel,
    MediaSuggestions,
    InvalidParameters
} from "../../components"
import { customLocalStorage } from "../../stores"
import { useMediaStore } from "../../stores"
import { PATHS } from "../../paths"
import * as S from "./styles"
import { IGatsbyImageData } from "gatsby-plugin-image"

export const Series: FC = () => {
    console.log("render serie")
    const { getUrlParams, navigate } = useNavigation()
    const { mediaID, episodeID }= getUrlParams()
    const media = useMediaStore(state => state.getMediaById(
        mediaID ?? ""
    ))

    const serie = useMemo(() =>
        !media ? undefined :
        customLocalStorage.getSerie(media.id)
    , [media])

    const currentEpisode = useMemo(() =>
        !serie ? undefined :
        customLocalStorage.getEpisodeByIDs(
            serie.serieID,
            episodeID ?? serie.seasons[0][0].id,
            serie
        )
    , [serie])

    const nextEpisode = useMemo(() =>
        (!serie || !currentEpisode) ? undefined :
        customLocalStorage.getNextEpisode(
            serie.serieID,
            currentEpisode.id,
            serie
        )
    , [serie, currentEpisode])

    const history = useMemo(() =>
        customLocalStorage.getHistory()
    , [])

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

    return invalidParameters ? <InvalidParameters /> : (
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
