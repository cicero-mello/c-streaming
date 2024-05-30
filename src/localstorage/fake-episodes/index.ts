import { randomLoremWords } from "../../shared/lorem"
import { FakeEpisodes } from "./types"

export const createFakeEpisodes = (
    mediaID: string, seasons?: number, episodes?:number
): FakeEpisodes => {
    const episodesBySeasons = Array.from({ length: seasons ?? 4 }).map(() =>
        Array.from({ length: episodes ?? 10 }).map(
            () => randomLoremWords()
        )
    )

    const jsonStringified = JSON.stringify(episodesBySeasons)
    localStorage.setItem("eps" + mediaID, jsonStringified)

    return episodesBySeasons
}

export const getFakeEpisodes = (mediaID: string): FakeEpisodes => {
    const epsLocalStorage = localStorage.getItem("eps" + mediaID)

    if(!epsLocalStorage){
        const fakeEpisodes = createFakeEpisodes(mediaID)
        return fakeEpisodes
    }

    return JSON.parse(epsLocalStorage)
}
