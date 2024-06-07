import { PageMediaProps } from "./types"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { customLocalStorage } from "../../localstorage"
import { PATHS } from "../../paths"
import { URLParams } from "../../shared/types"
import { EpisodeCardsProps } from "../../components"
import * as media from "../../shared/media"

const epsInfo = (id: string, currentSeason?: number , currentEp?: number) => {
    const fakeSeasons = customLocalStorage.getFakeSeasons(id)
    const lastWatchedEpisode = customLocalStorage.getLastWatchedEpisodeInfo(fakeSeasons)
    const season = currentSeason ?? lastWatchedEpisode?.season ?? 1
    const episode = currentEp ?? lastWatchedEpisode?.ep ?? 1

    const isNextEpisodeInThisSeason = !!fakeSeasons[season - 1][episode]
    const nextSeasonExists = fakeSeasons.length > season

    const currentEpisode = {
        ep: episode,
        season: season,
        name: fakeSeasons[season -1][episode -1].name
    }

    if(isNextEpisodeInThisSeason) return {
        seasons: fakeSeasons,
        currentEpisode: currentEpisode,
        nextEpisode: {
            ep: episode + 1,
            season: season,
            name: fakeSeasons[season - 1][episode].name
        }
    }

    if(nextSeasonExists) return {
        seasons: fakeSeasons,
        currentEpisode: currentEpisode,
        nextEpisode: {
            ep: 1,
            season: season + 1,
            name: fakeSeasons[season][0].name
        }
    }

    return {
        seasons: fakeSeasons,
        currentEpisode: currentEpisode
    }
}

export const createPageMedia = (
    data: object,
    navigate: (path: string, params?: URLParams) => void | Promise<void> ,
    id?: string,
    currentSeason?: number,
    currentEp?: number,
): PageMediaProps | undefined => {
    if(!id) return

    const allBannerMediasFromQuery = media.getBannerGatsbyImages(data)
    if(allBannerMediasFromQuery.length <= 0) return

    const fakeVideoMideaFromMock = media.getMediaById(id)
    const mediaToFakeVideo = allBannerMediasFromQuery.find(
        media => media.name === fakeVideoMideaFromMock?.imageName
    )

    const suggestionMedias = media.createSuggestionMedias(
        allBannerMediasFromQuery, fakeVideoMideaFromMock?.id ?? ""
    )

    if(!mediaToFakeVideo || !fakeVideoMideaFromMock) return

    const {
        seasons, currentEpisode, nextEpisode
    } = epsInfo(id, currentSeason, currentEp)

    const listEpisodeCards:EpisodeCardsProps[] = seasons.map((season, indexS) => ({
        topText: `SEASON ${indexS + 1}`,
        episodeCards: season.map((ep, indexEp) => ({
            thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
            altImage: fakeVideoMideaFromMock.imageName,
            episode: indexEp + 1,
            text: ep.name,
            wasWatched: ep.wasWatched,
            onClick: () => navigate(PATHS.SERIES, {
                ep: indexEp + 1,
                season: indexS + 1,
                id: id
            }),
        }))
    }))

    return {
        fakeVideo: {
            thumbImage: mediaToFakeVideo.childImageSharp.gatsbyImageData as IGatsbyImageData,
            imageName: fakeVideoMideaFromMock.imageName,
            onClickWatch: () => { }
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
                id: fakeVideoMideaFromMock.id,
                season: nextEpisode.season,
                ep: nextEpisode.ep
            })
        },
        listEpisodeCards: listEpisodeCards
    }
}
