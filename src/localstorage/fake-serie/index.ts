import { randomLoremWords } from "../../shared/lorem"
import { lazyEpisodeIDGenerator } from "../../shared/media"
import { Serie, Episode, Season, SeasonLocalStorage } from "./types"

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

export const createFakeSerie = (
    serieID: string, anotherFakeSeries: Serie[]
): Serie => {
    const seasons: SeasonLocalStorage[] = Array.from({
        length: Math.floor(Math.random() * 2 ) + 3
    }).map((_, seasonIndex) =>
        Array.from({ length: Math.floor(Math.random() * 4 ) + 8 }).map(
            (_, episodeIndex) => ({
                id: lazyEpisodeIDGenerator(serieID, seasonIndex + 1, episodeIndex + 1),
                name: randomLoremWords(),
                wasWatched: false
            })
        )
    )

    const jsonStringified = JSON.stringify([
        {serieID: serieID, seasons: seasons},
        ...anotherFakeSeries
    ])
    localStorage.setItem(STORAGE_NAME, jsonStringified)

    return {
        serieID: serieID,
        seasons: putMoreDataOnSeasons(seasons)
    }
}

export const getAllFakeSeries = (): Serie[] => {
    const series = localStorage.getItem(STORAGE_NAME)
    if(!series) return []
    return JSON.parse(series).map((serie: Serie) => ({
        serieID: serie.serieID,
        seasons: putMoreDataOnSeasons(serie.seasons)
    }))
}

export const getFakeSerie = (serieID: string): Serie => {
    const series = getAllFakeSeries()
    const wantedSerie = series.find(serie => serie.serieID === serieID)
    if(!!wantedSerie) return {
        serieID: wantedSerie.serieID,
        seasons: putMoreDataOnSeasons(wantedSerie.seasons)
    }
    return createFakeSerie(serieID, series)
}

export const setWasWatchedOnEpisode = (
    serieID: string, episodeID: string
) => {
    const episodesWithWasWatchedChanged = (
        seasons: Season[], episodeID: string
    ): Season[] => seasons.map(episodes => episodes.map(episode => {
        if(episode.id === episodeID) return ({
            ...episode,
            wasWatched: true
        })
        return episode
    }))

    const allFakeSeries = getAllFakeSeries()

    const newAllFakeSeries: Serie[] = allFakeSeries.map((serie) => {
        if(serie.serieID === serieID) return {
            serieID: serieID,
            seasons: episodesWithWasWatchedChanged(serie.seasons, episodeID)
        }
        return serie
    })

    const jsonStringified = JSON.stringify(newAllFakeSeries)
    localStorage.setItem(STORAGE_NAME, jsonStringified)
}

export const getLastWatchedEpisodeByOrder = (
    serieID: string
): Episode => {
    let lastWatchedEpisode: Episode | undefined

    const serie = getFakeSerie(serieID)
    serie.seasons.forEach(season => season.forEach(episode => {
        if(episode.wasWatched) lastWatchedEpisode = episode
    }))

    return lastWatchedEpisode ?? serie.seasons[0][0]
}

export const getEpisodeByIDs = (
    serieID: string, episodeID: string
): Episode | undefined => {
    let wantedEpisode: Episode | undefined

    const fakeSerie = getFakeSerie(serieID)
    fakeSerie.seasons.forEach(episodes => episodes.forEach(episode => {
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

    const seasons = getFakeSerie(serieID).seasons

    const isNextEpisodeInThisSeason = !!seasons[season -1][ep]
    if(isNextEpisodeInThisSeason) return seasons[season -1][ep]

    const nextSeasonExists = !!seasons[season][0]
    if(nextSeasonExists) return seasons[season][0]

    return
}

const putMoreDataOnSeasons = (seasonsLocalStorage: SeasonLocalStorage[]): Season[] => (
    seasonsLocalStorage.map((season, seasonIndex) =>
        season.map((episode, episodeIndex) => ({
            ...episode,
            ep: episodeIndex + 1,
            season: seasonIndex + 1
        })
    ))
)
