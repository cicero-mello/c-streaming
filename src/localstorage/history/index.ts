import { debounce } from "../../shared/utils"
import { HistoryItem, UserHistory } from "./types"

const STORAGE_NAME = "history"
/*
    history: [{
        mediaID: string,
        episodeID?: string,
        viewDate: number // Date.now()
    }]
*/

export const getHistory = (): UserHistory => {
    const history = localStorage.getItem(STORAGE_NAME)
    if(!history) return []
    return JSON.parse(history)
}

export const addMediaToHistory = (props: Omit<HistoryItem, "viewDate">) => debounce(() => {
    const history = getHistory()
    console.log("caiu no add")
    console.log(history[history.length - 1])
    console.log(props)

    const mediaWasTheLastAdded = !!history && history.length > 0 && (
        history[0].mediaID === props.mediaID &&
        history[0].episodeID === props.episodeID
    )
    console.log(mediaWasTheLastAdded)
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
}: HistoryItem): UserHistory => {
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
