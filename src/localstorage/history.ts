import { MediaType, UserHistory } from "../shared/types"

export const getHistory = (): UserHistory[] => {
    const history = localStorage.getItem("history")
    if(!history) return []

    const historyList: UserHistory[] = JSON.parse(history)

    //TODO
    return historyList
    // return historyList.map((history: UserHistory) => ({
    //     ...history
    // }))
}

export const addMediaToHistory = (props: UserHistory) => {
    const history = getHistory()

    const mediaAlreadyExists = (
        !!history.find(media => (
            media.mediaID === props.mediaID &&
            media.episodeID === props.episodeID
        ))
    )

    if(mediaAlreadyExists) return

    history.unshift(props)
    const jsonStringified = JSON.stringify(history)
    localStorage.setItem("history", jsonStringified)
}

export const removeMediaFromHistory = (
    mediaID: string, episodeID?: string
): UserHistory[] => {
    const history = getHistory()
    const newHistory = history.filter((media) => !(
            media.mediaID === mediaID &&
            media.episodeID === episodeID
        )
    )

    const jsonStringified = JSON.stringify(newHistory)
    localStorage.setItem("history", jsonStringified)
    return newHistory
}


export const clearAllHistory = () => {
    localStorage.setItem("history", JSON.stringify([]))
}
