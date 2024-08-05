import { randomLoremWords } from "../../shared/lorem"
import { lazyEpisodeIDGenerator } from "../../shared/media"
import { Serie, Episode, Season, SeasonLocalStorage, SerieLocalStorage } from "./types"

const STORAGE_NAME = "series"
/*
    series: [{
        serieID: string,
        seasons: {
            id: string,
            name: string,
            wasWatched: boolean
        }
    }]
*/

const addNewSerieLocalStorage = (
    newSerie: SerieLocalStorage, oldSeries?: SerieLocalStorage[]
) => {
    const jsonStringified = (oldSeries ?
        JSON.stringify([newSerie, ...oldSeries]) :
        JSON.stringify([newSerie])
    )
    localStorage.setItem(STORAGE_NAME, jsonStringified)
}

const createSerieLocalStorage = (
    serieID: string
): SerieLocalStorage => {
    const randomNumberOfSeasons = Math.floor(Math.random() * 2 ) + 3
    const getRandomNumberOfEpisodes = () => Math.floor(Math.random() * 4 ) + 8

    const seasons: SeasonLocalStorage[] = Array.from({
        length: randomNumberOfSeasons
    }).map((_, seasonIndex) =>
        Array.from({ length: getRandomNumberOfEpisodes() }).map(
            (_, episodeIndex) => ({
                name: randomLoremWords(),
                wasWatched: false,
                id: lazyEpisodeIDGenerator(serieID,
                    seasonIndex + 1,
                    episodeIndex + 1
                )
            })
        )
    )

    return {
        serieID: serieID,
        seasons: seasons
    }
}

const getAllSeriesLocalStorage = (): SerieLocalStorage[] => {
    const seriesLocalStorage = localStorage.getItem(STORAGE_NAME)
    if(!seriesLocalStorage) return []

    return JSON.parse(seriesLocalStorage)
}

export const getSerie = (serieID: string): Serie => {
    const seriesLocalStorage = getAllSeriesLocalStorage()
    const wantedSerie = seriesLocalStorage.find(serie => serie.serieID === serieID)
    if(!!wantedSerie) return serieLocalStorageToSerie(wantedSerie)

    const serieLocalStorage = createSerieLocalStorage(serieID)
    addNewSerieLocalStorage(serieLocalStorage, seriesLocalStorage)
    return serieLocalStorageToSerie(serieLocalStorage)
}

//TODO fazer lógica envolvendo o histórico e parar de usar essas 2 funções abaixo
export const setWasWatchedOnEpisode = (
    serieID: string, episodeID: string
) => {
    const getSeasonsWithWasWatchedChanged = (
        seasons: SeasonLocalStorage[], episodeID: string
    ): SeasonLocalStorage[] => seasons.map(episodes => episodes.map(episode => {
        if(episode.id === episodeID) return ({
            ...episode,
            wasWatched: true
        })
        return episode
    }))

    const allSeriesLocalStorage = getAllSeriesLocalStorage()

    const allNewSeries: SerieLocalStorage[] = allSeriesLocalStorage.map(
        (serieLocalStorage) => {
            if(serieLocalStorage.serieID === serieID) return {
                serieID: serieID,
                seasons: getSeasonsWithWasWatchedChanged(
                    serieLocalStorage.seasons, episodeID
                )
            }
        return serieLocalStorage
    })

    const jsonStringified = JSON.stringify(allNewSeries)
    localStorage.setItem(STORAGE_NAME, jsonStringified)
}

export const getLastWatchedEpisodeByOrder = (
    serieID: string
): Episode => {
    let lastWatchedEpisode: Episode | undefined

    const serie = getSerie(serieID)
    serie.seasons.forEach(season => season.forEach(episode => {
        if(episode.wasWatched) lastWatchedEpisode = episode
    }))

    return lastWatchedEpisode ?? serie.seasons[0][0]
}

export const getEpisodeByIDs = (
    serieID: string, episodeID: string
): Episode | undefined => {
    let wantedEpisode: Episode | undefined

    const serie = getSerie(serieID)
    serie.seasons.forEach(episodes => episodes.forEach(episode => {
        if(episode.id === episodeID) wantedEpisode = episode
    }))

    return wantedEpisode
}

export const getNextEpisode = (
    serieID: string, episodeID: string
): Episode | undefined => {
    const episode = getEpisodeByIDs(serieID, episodeID)
    if(!episode) return
    const { ep, season } = episode

    const seasons = getSerie(serieID).seasons

    const isNextEpisodeInThisSeason = !!seasons[season -1][ep]
    if(isNextEpisodeInThisSeason) return seasons[season -1][ep]

    const nextSeasonExists = !!seasons[season][0]
    if(nextSeasonExists) return seasons[season][0]

    return
}

const serieLocalStorageToSerie = (
    serieLocalStorage: SerieLocalStorage
): Serie => {

    const addEpAndSeasonNumberInEachEpisode = (
        seasonsLocalStorage: SeasonLocalStorage[]
    ): Season[] => (
        seasonsLocalStorage.map((season, seasonIndex) =>
            season.map((episode, episodeIndex) => ({
                ...episode,
                ep: episodeIndex + 1,
                season: seasonIndex + 1
            })
        ))
    )

    return {
        serieID: serieLocalStorage.serieID,
        seasons: addEpAndSeasonNumberInEachEpisode(
            serieLocalStorage.seasons
        )
    }
}
