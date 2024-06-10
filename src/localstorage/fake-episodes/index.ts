import { randomLoremWords } from "../../shared/lorem"
import { EpisodeInfo, FakeSeasons } from "./types"

export const createFakeSeasons = (
    mediaID: string, seasons?: number, episodes?:number
): FakeSeasons => {
    const episodesBySeasons: FakeSeasons = Array.from({
        length: seasons ?? Math.floor(Math.random() * 2 ) + 3
    }).map(() =>
        Array.from({
            length: episodes ?? Math.floor(Math.random() * 4 ) + 8
        }).map(
            () => ({
                name: randomLoremWords(),
                wasWatched: false
            })
        )
    )

    const jsonStringified = JSON.stringify(episodesBySeasons)
    localStorage.setItem("eps" + mediaID, jsonStringified)

    return episodesBySeasons
}

export const getFakeSeasons = (mediaID: string): FakeSeasons => {
    const seasonsLocalStorage = localStorage.getItem("eps" + mediaID)

    if(!seasonsLocalStorage){
        const fakeSeasons = createFakeSeasons(mediaID)
        return fakeSeasons
    }

    return JSON.parse(seasonsLocalStorage)
}

export const setWasWatchedOnEpisode = (
    mediaID: string, season: number, ep: number
) => {
    const fakeSeasons = getFakeSeasons(mediaID)
    fakeSeasons[season - 1][ep - 1].wasWatched = true

    const jsonStringified = JSON.stringify(fakeSeasons)
    localStorage.setItem("eps" + mediaID, jsonStringified)
}

export const getLastWatchedEpisodeInfo = (
    seasons: FakeSeasons
): EpisodeInfo | undefined => {
    let lastWatchedEpisode

    seasons.every((season, seasonIndex) => {
        return season.every((episode, episodeIndex) => {
            if(!episode.wasWatched) {
                lastWatchedEpisode = {
                    ep: episodeIndex + 1,
                    season: seasonIndex + 1,
                    ...episode
                }
                return false
            }
            return true
        })
    })

    return lastWatchedEpisode
}
