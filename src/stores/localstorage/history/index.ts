import { debounce } from "@utils"
import { getSerie } from "../serie"
import { Episode } from "../serie/types"
import { GetLastWatchedEpisodeParams, HistoryItem } from "./types"

const STORAGE_NAME = "history"
/*
    history: [{
        mediaId: string,
        episodeID?: string,
        viewDate: number // Date.now()
    }]
*/

export const getHistory = (): HistoryItem[] => {
    if(typeof window === 'undefined') return []

    const history = localStorage.getItem(STORAGE_NAME)
    if(!history) return []
    return JSON.parse(history)
}

export const addMediaToHistory = (props: Omit<HistoryItem, "viewDate">) => debounce(() => {
    const history = getHistory()

    const mediaWasTheLastAdded = !!history && history.length > 0 && (
        history[0].mediaId === props.mediaId &&
        history[0].episodeID === props.episodeID
    )

    if(mediaWasTheLastAdded) return

    history.unshift({
        ...props,
        viewDate: Date.now()
    })

    const jsonStringified = JSON.stringify(history)
    localStorage.setItem(STORAGE_NAME, jsonStringified)
}, 200)

export const removeMediaFromHistory = ({
    mediaId, viewDate, episodeID
}: HistoryItem): HistoryItem[] => {
    const history = getHistory()
    const newHistory = history.filter((media) => !(
            media.viewDate === viewDate &&
            media.mediaId === mediaId &&
            media.episodeID === episodeID
        )
    )

    const jsonStringified = JSON.stringify(newHistory)
    localStorage.setItem(STORAGE_NAME, jsonStringified)
    return newHistory
}

export const clearAllHistory = () => {
    if(typeof window === 'undefined') return

    localStorage.setItem("history", JSON.stringify([]))
}

export const episodeWasWatched = (
    episodeID: string, history?: HistoryItem[]
): boolean => {
    const allHistory = history ?? getHistory()

    const episodeOnHistory = allHistory.find(item => item.episodeID === episodeID)
    if(!episodeOnHistory) return false
    return true
}

export const getHistoryItemWithHigherViewDate = (
    historyItems: HistoryItem[]
): HistoryItem => (
    historyItems.reduce((lastItem, currentItem) => (
        currentItem.viewDate > lastItem.viewDate ?
        currentItem : lastItem
    ), historyItems[0])
)

export const getLastWatchedEpisode = ({
    serieId: serieIdParam,
    serie: serieParam,
    history: historyParam
}: GetLastWatchedEpisodeParams): Episode | undefined => {
    const serieId = serieIdParam ?? serieParam?.serieId
    if(!serieId) return undefined

    const serie = serieParam ?? getSerie(serieId)

    const allSerieEpisodes = serie.seasons.map(
        season => season.map(episode => episode)
    ).flat(1)

    const allHistory = historyParam ?? getHistory()

    const lastWatchedHistoryItems = allHistory.map(
        item => !!allSerieEpisodes.find(
            episode => episode.id === item.episodeID
        ) ? item : undefined
    ).filter(historyItem => historyItem != undefined)

    if(lastWatchedHistoryItems.length === 0) return undefined

    const lastWatchedHistoryItem = getHistoryItemWithHigherViewDate(
        lastWatchedHistoryItems
    )

    return allSerieEpisodes.find(
        episode => episode.id === lastWatchedHistoryItem.episodeID
    )
}
