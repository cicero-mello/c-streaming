import { PageMediaProps } from "./types"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { customLocalStorage } from "../../localstorage"
import { PATHS } from "../../paths"
import { URLParams } from "../../shared/types"
import * as media from "../../shared/media"

export const createPageMedia = (
    data: object,
    navigate: (path: string, params?: URLParams) => void | Promise<void> ,
    serieID: string,
    episodeID?: string
): PageMediaProps | undefined => {
    const allBannerMediasFromQuery = media.getBannerGatsbyImages(data)
    if(allBannerMediasFromQuery.length <= 0) return

    const fakeVideoMideaFromMock = media.getMediaById(serieID)
    const mediaToFakeVideo = allBannerMediasFromQuery.find(
        media => media.name === fakeVideoMideaFromMock?.imageName
    )

    if(!mediaToFakeVideo || !fakeVideoMideaFromMock) return

    const suggestionMedias = media.createSuggestionMedias(
        allBannerMediasFromQuery, fakeVideoMideaFromMock?.id ?? ""
    )
    const fakeSerie = customLocalStorage.getFakeSerie(serieID)
    const lastWatchedEpisode = customLocalStorage.getLastWatchedEpisodeByOrder(serieID)
    const currentEpisode = customLocalStorage.getEpisodeByIDs(serieID, episodeID ?? lastWatchedEpisode.id)

    if(!currentEpisode?.id) return
    const nextEpisode = customLocalStorage.getNextEpisode(serieID, currentEpisode.id)

    return {
        fakeVideo: {
            thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
            imageName: fakeVideoMideaFromMock.imageName,
            onClickWatch: () => {
                customLocalStorage.setWasWatchedOnEpisode( serieID, currentEpisode.id)
            }
        },
        mediaTitle: {
            title: fakeVideoMideaFromMock.name,
            mediaId: fakeVideoMideaFromMock.id,
            episodeName: `S.${currentEpisode.season} | Ep.${currentEpisode.ep}: ${
                currentEpisode.name
            }`
        },
        sinopsys: fakeVideoMideaFromMock.synopsis,
        suggestionMedias: suggestionMedias,
        nextEpisode: nextEpisode && {
            thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
            season: nextEpisode.season != currentEpisode.season ? nextEpisode.season : undefined,
            episode: nextEpisode.ep,
            text: nextEpisode.name,
            altImage: `Image of S.${nextEpisode.season} E.${nextEpisode.ep} from ${
                fakeVideoMideaFromMock.name
            }`,
            onClick: () => navigate(PATHS.SERIES, {
                mediaID: serieID,
                episodeID: nextEpisode.id
            })
        },
        listEpisodeCards: fakeSerie.seasons.map((episodes, indexSeason) => ({
            topText: `SEASON ${indexSeason + 1}`,
            episodeCards: episodes.map((episode) => ({
                thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
                altImage: fakeVideoMideaFromMock.imageName,
                episode: episode.ep,
                text: episode.name,
                wasWatched: episode.wasWatched,
                onClick: () => navigate(PATHS.SERIES, {
                    mediaID: serieID,
                    episodeID: episode.id
                })
            }))
        })),
        episodeID: currentEpisode.id
    }
}
