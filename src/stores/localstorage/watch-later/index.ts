import { WatchLater } from "./types"

const STORAGE_NAME = "watch-later"
/*
    watchLater: [{
        id: string,
        isSetToWatchLater: boolean
    }]
*/

export const getAllWatchLater = (): WatchLater[] => {
    if(typeof window === 'undefined') return []

    const watchLaterStringified = localStorage.getItem(STORAGE_NAME)
    if(!watchLaterStringified) return []
    return JSON.parse(watchLaterStringified)
}

export const getWatchLater = (mediaId: string): boolean => {
    const watchLater = getAllWatchLater()
    return !!watchLater.find(item => item.id === mediaId)?.isSetToWatchLater
}

export const addWatchLater = (mediaId: string, watchLater: boolean) => {
    const allWatchLater = getAllWatchLater()
    const itemExists = allWatchLater.find(item => item.id === mediaId)

    let newWatchLater: WatchLater[]
    if(itemExists) newWatchLater = allWatchLater.map(item => {
        if(item.id === mediaId) {
            return {
                id: item.id,
                isSetToWatchLater: watchLater
            }
        }
        return item
    })
    else newWatchLater = [
        ...allWatchLater,
        { id: mediaId, isSetToWatchLater: watchLater }
    ]

    const jsonStringified = JSON.stringify(newWatchLater)

    localStorage.setItem(STORAGE_NAME, jsonStringified)
}

export const removeWatchLater = (mediaId: string): WatchLater[] => {
    const watchLater = getAllWatchLater()
    const newWatchLater = watchLater.filter(item => item.id != mediaId)
    const jsonStringified = JSON.stringify(newWatchLater)
    localStorage.setItem(STORAGE_NAME, jsonStringified)

    return newWatchLater
}
