import { HistoryCardProps } from "../../../components"
import { useNavigation } from "../../../hooks"
import { customLocalStorage, HistoryItem } from "../../../localstorage"
import { getEpisodeByIDs } from "../../../localstorage/fake-serie"
import { PATHS } from "../../../paths"
import { getMediaById } from "../../../shared/media"
import { Media } from "../../../shared/types"
import { UsePageAnimation, UsePageMedia } from "./types"

export const usePageMedia = (
    animation: UsePageAnimation
): UsePageMedia => {
    const { navigate } = useNavigation()

    const getHistoryCards = (): HistoryCardProps[] => {
        const clickActionHistoryCard = (historyItem: HistoryItem, media?: Media) => {
            const { mediaID, episodeID } = historyItem
            if(media?.type === "movie") navigate(PATHS.MOVIE, {mediaID, episodeID })
            else navigate(PATHS.SERIES, { mediaID, episodeID })
        }

        const closeActionHistoryCard = async (historyItem: HistoryItem) => {
            const history = customLocalStorage.getHistory()
            if(history.length === 1) await animation.onEveryHistoryWasRemoved()

            const newHistory = customLocalStorage.removeMediaFromHistory(historyItem)
            if(newHistory.length === 0) {
                customLocalStorage.clearAllHistory()
                animation.onEveryHistoryWasRemoved()
            }
        }

        const history = customLocalStorage.getHistory()
        const historyCards = history.map((historyItem: HistoryItem) => {
            const media = getMediaById(historyItem.mediaID)
            const episode = (!!historyItem?.episodeID ?
                getEpisodeByIDs(historyItem.mediaID, historyItem.episodeID) :
                undefined
            )
            return {
                mediaName: media?.name ?? "",
                episode: episode,
                closeAction: () => closeActionHistoryCard(historyItem),
                clickAction: () => clickActionHistoryCard(historyItem, media)
            }
        })

        return historyCards
    }


    return {
        historyCards: getHistoryCards()
    }
}
