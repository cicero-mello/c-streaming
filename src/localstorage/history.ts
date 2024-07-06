import { MediaType, UserHistory, UserHistoryAllString } from "../shared/types"

export const getHistory = (): UserHistory[] => {
    const history = localStorage.getItem("history")
    if(!history) return []

    const historyList: UserHistoryAllString[] = JSON.parse(history)

    return historyList.map((history: UserHistoryAllString) => ({
        ...history,
        mediaType: history?.mediaType as MediaType,
        season: history?.season ? parseInt(history.season) : undefined,
        ep: history?.ep ? parseInt(history.ep) : undefined
    }))
}

export const addMediaToHistory = (props: UserHistory) => {
    const history = getHistory()

    const mediaAlreadyExists = (
        !!history.find(media => (
            media.mediaID === props.mediaID &&
            media.ep === props.ep &&
            media.season === props.season
        ))
    )

    if(mediaAlreadyExists) return

    history.unshift(props)
    const jsonStringified = JSON.stringify(history)
    localStorage.setItem("history", jsonStringified)
}

export const removeMediaFromHistory = (
    mediaID: string, ep?: number, season?: number
): UserHistory[] => {
    const history = getHistory()
    const newHistory = history.filter((media) => !(
            media.mediaID === mediaID &&
            media.ep === ep &&
            media.season === season
        )
    )

    const jsonStringified = JSON.stringify(newHistory)
    localStorage.setItem("history", jsonStringified)
    return newHistory
}


export const clearAllHistory = () => {
    localStorage.setItem("history", JSON.stringify([]))
}
