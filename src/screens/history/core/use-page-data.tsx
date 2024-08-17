import { useLayoutEffect, useState } from "react"
import { useNavigation } from "../../../hooks"
import { customLocalStorage, HistoryItem, useMediaStore } from "../../../stores"
import { PATHS } from "../../../paths"
import { PageAnimations, UsePageData } from "./types"
import { HistoryCardProps } from "../../../components"

export const usePageData = (
    animations: PageAnimations
): UsePageData => {
    const getMediaById = useMediaStore(state => state.getMediaById)
    const [historyCards, setHistoryCards] = useState<HistoryCardProps[]>([])
    const { navigate } = useNavigation()

    const historyItemToHistoryCard = (
        historyItem: HistoryItem
    ): HistoryCardProps => {
        const media = getMediaById(historyItem.mediaID)
        const episode = (!!historyItem?.episodeID ?
            customLocalStorage.getEpisodeByIDs(
                historyItem.mediaID, historyItem.episodeID
            ) : undefined
        )

        const clickActionHistoryCard = () => {
            const { mediaID, episodeID } = historyItem
            if(media?.type === "movie"){
                navigate(PATHS.MOVIE, { mediaID, episodeID })
                return
            }
            navigate(PATHS.SERIES, { mediaID, episodeID })
        }

        const closeActionHistoryCard = async () => {
            const currentHistory = customLocalStorage.getHistory()
            const isTheLastCardsToClose = currentHistory.length === 1
            if(isTheLastCardsToClose) {
                await animations.onEveryHistoryCardWasRemoved()
            }

            customLocalStorage.removeMediaFromHistory(historyItem)
            setHistoryCards(old => old.filter(card => !(
                card.mediaName === media?.name &&
                card.episode === episode
            )))
        }

        return {
            id: media?.id,
            mediaName: media?.name ?? "",
            episode: episode,
            closeAction: () => closeActionHistoryCard(),
            clickAction: () => clickActionHistoryCard(),
        }
    }

    const clearAllHistory = async () => {
        await animations.clearAllHistory()
        customLocalStorage.clearAllHistory()
        setHistoryCards([])
    }

    useLayoutEffect(() => {
        const history = customLocalStorage.getHistory()
        const historyCards = history.map(
            historyItem => historyItemToHistoryCard(historyItem)
        )
        setHistoryCards(historyCards)
    }, [])

    return {
        historyCards: historyCards,
        clearAllHistory: clearAllHistory
    }
}
