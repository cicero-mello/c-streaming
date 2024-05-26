import { randomLoremWords } from "../../shared/lorem"
import { FakeEpisodes } from "./types"

export const createFakeEpisodes = (mediaID: string): FakeEpisodes => {
    const episodesBySeasons = {
        seasonOne: Array.from({ length: 10 }).map(() => (
            randomLoremWords()
        )),
        seasonTwo: Array.from({ length: 10 }).map(() => (
            randomLoremWords()
        )),
        seasonThree: Array.from({ length: 10 }).map(() => (
            randomLoremWords()
        )),
        seasonFour: Array.from({ length: 10 }).map(() => (
            randomLoremWords()
        ))
    }

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
