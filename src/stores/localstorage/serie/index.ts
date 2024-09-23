import { randomLoremWords } from "../../../shared/lorem"
import { Serie, Episode, Season, SeasonLocalStorage, SerieLocalStorage, GetNextEpisodeParams } from "./types"

const STORAGE_NAME = "series"
/*
    series: [{
        serieID: string,
        seasons: [{
            id: string,
            name: string
        }]
    }]
*/

const addNewSerieLocalStorage = (
    newSerie: SerieLocalStorage, oldSeries?: SerieLocalStorage[]
) => {
    if(typeof window === 'undefined') return

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
    if(typeof window === 'undefined') return []

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

export const getEpisodeByIDs = (
    serieID: string, episodeID: string, serie?: Serie
): Episode | undefined => {
    let wantedEpisode: Episode | undefined

    const currentSerie = serie ?? getSerie(serieID)
    currentSerie.seasons.forEach(episodes => episodes.forEach(episode => {
        if(episode.id === episodeID) wantedEpisode = episode
    }))

    return wantedEpisode
}

export const getNextEpisode = (
    serieID: string, episodeID: string, serie?: Serie
): GetNextEpisodeParams | undefined => {
    const episode = getEpisodeByIDs(serieID, episodeID, serie)
    if(!episode) return
    const { ep, season } = episode

    const seasons = serie?.seasons ?? getSerie(serieID).seasons

    const isNextEpisodeInThisSeason = !!seasons[season -1][ep]
    if(isNextEpisodeInThisSeason) return {
        episode: seasons[season -1][ep],
        isNextEpisodeInAnotherSeason: false
    }

    const nextSeasonExists = !!seasons?.[season]?.[0]

    if(nextSeasonExists) return {
        episode: seasons[season][0],
        isNextEpisodeInAnotherSeason: true
    }

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

const lazyEpisodeIDGenerator = (
    serieID: string, season: number, episode: number
) => (
    serieID.substring(season.toString().length + episode.toString().length)
    + season + episode
)
