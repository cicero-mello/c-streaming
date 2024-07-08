import { customLocalStorage, HistoryItem, UserHistory } from "../../localstorage"
import { Media, URLParams } from "../../shared/types"
import { PATHS } from "../../paths"
import { PageMediaProps } from "./types"
import { getMediaById } from "../../shared/media"
import { getEpisodeByIDs } from "../../localstorage/fake-serie"

export const createPageMedia = (
    history: UserHistory,
    navigate: (path: string, params?: URLParams) => void,
    onEveryHistoryWasRemoved: () => void
):PageMediaProps => {

    const clickActionHistoryCard = (historyItem: HistoryItem, media?: Media) => {
        const { mediaID, episodeID } = historyItem

        if(media?.type === "movie") navigate(PATHS.MOVIE, {mediaID, episodeID })
        else navigate(PATHS.SERIES, { mediaID, episodeID })
    }

    const closeAction = (historyItem: HistoryItem) => {
        const newHistory = customLocalStorage.removeMediaFromHistory(historyItem)
        if(newHistory.length === 0) onEveryHistoryWasRemoved()
    }


    const historyCards = history.map((historyItem: HistoryItem) => {
        const media = getMediaById(historyItem.mediaID)
        const episode = (!!historyItem?.episodeID ?
            getEpisodeByIDs(historyItem.mediaID, historyItem.episodeID) :
            undefined
        )

        return {
            mediaName: media?.name ?? "",
            episode: episode,
            closeAction: () => closeAction(historyItem),
            clickAction: () => clickActionHistoryCard(historyItem, media)
        }
    })

    return {
        historyCards: historyCards
    }
}
