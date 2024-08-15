import { debounce } from "../../../shared/utils"
import { HistoryItem } from "./types"

const STORAGE_NAME = "history"
/*
    history: [{
        mediaID: string,
        episodeID?: string,
        viewDate: number // Date.now()
    }]
*/

export const getHistory = (): HistoryItem[] => {
    const history = localStorage.getItem(STORAGE_NAME)
    if(!history) return []
    return JSON.parse(history)
}

export const addMediaToHistory = (props: Omit<HistoryItem, "viewDate">) => debounce(() => {
    const history = getHistory()

    const mediaWasTheLastAdded = !!history && history.length > 0 && (
        history[0].mediaID === props.mediaID &&
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
    mediaID, viewDate, episodeID
}: HistoryItem): HistoryItem[] => {
    const history = getHistory()
    const newHistory = history.filter((media) => !(
            media.viewDate === viewDate &&
            media.mediaID === mediaID &&
            media.episodeID === episodeID
        )
    )

    const jsonStringified = JSON.stringify(newHistory)
    localStorage.setItem(STORAGE_NAME, jsonStringified)
    return newHistory
}

export const clearAllHistory = () => {
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
