import { customLocalStorage } from "../../localstorage"
import { MediaType, URLParams, UserHistory } from "../../shared/types"
import { PATHS } from "../../paths"
import { PageMediaProps } from "./types"

export const createPageMedia = (
    history: UserHistory[],
    navigate: (path: string, params?: URLParams) => void,
    onEveryHistoryWasRemoved: () => void
):PageMediaProps => {

    const clickActionHistoryCard = (
        id: string,
        mediaType: MediaType,
        ep?:number,
        season?:number,
    ) => {
        if(mediaType === "movie") navigate(PATHS.MOVIE, {id, ep, season})
        else navigate(PATHS.SERIES, {id, ep, season})
    }

    const closeAction = (
        mediaID: string,
        ep?: number,
        season?: number
    ) => {
        const newHistory = customLocalStorage.removeMediaFromHistory(
            mediaID, ep, season
        )
        if(newHistory.length === 0) onEveryHistoryWasRemoved()
    }

    return {
        historyCards: history.map(({
            mediaID, mediaName, season, ep, episodeName, mediaType
        }) => ({
            mediaName: mediaName,
            season: season,
            ep: ep,
            episodeName: episodeName,
            closeAction: () => closeAction(mediaID, ep, season),
            clickAction: () => clickActionHistoryCard(
                mediaID, mediaType, ep, season
            )
        }))
    }
}
