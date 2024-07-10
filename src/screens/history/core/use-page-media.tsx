import { useLayoutEffect, useState } from "react"
import { useNavigation } from "../../../hooks"
import { customLocalStorage, HistoryItem, UserHistory } from "../../../localstorage"
import { getEpisodeByIDs } from "../../../localstorage/fake-serie"
import { PATHS } from "../../../paths"
import { getMediaById } from "../../../shared/media"
import { PageHistoryCard, UsePageAnimation, UsePageMedia } from "./types"
import { getRandomID } from "../../../shared/utils"

export const usePageMedia = (
    animation: UsePageAnimation
): UsePageMedia => {
    const [historyCards, setHistoryCards] = useState<PageHistoryCard[]>([])
    const { navigate } = useNavigation()

    const updateHistoryCards = (historyInjection?: UserHistory) => {
        const history = historyInjection ?? customLocalStorage.getHistory()
        setHistoryCards(history.map(historyItem => historyItemToHistoryCard(historyItem)))
    }

    const historyItemToHistoryCard = (historyItem: HistoryItem):PageHistoryCard => {
        const media = getMediaById(historyItem.mediaID)

        const clickActionHistoryCard = () => {
            const { mediaID, episodeID } = historyItem
            if(media?.type === "movie") navigate(PATHS.MOVIE, {mediaID, episodeID })
            else navigate(PATHS.SERIES, { mediaID, episodeID })
        }

        const closeActionHistoryCard = async () => {
            const history = customLocalStorage.getHistory()
            if(history.length === 1){
                await animation.onEveryHistoryWasRemoved()
                const newHistory = customLocalStorage.removeMediaFromHistory(historyItem)
                updateHistoryCards(newHistory)
                return
            }

            const newHistory = customLocalStorage.removeMediaFromHistory(historyItem)
            updateHistoryCards(newHistory)
        }

        const episode = (!!historyItem?.episodeID ?
            getEpisodeByIDs(historyItem.mediaID, historyItem.episodeID) :
            undefined
        )

        return {
            props: {
                mediaName: media?.name ?? "",
                episode: episode,
                closeAction: () => closeActionHistoryCard(),
                clickAction: () => clickActionHistoryCard(),
            },
            key: getRandomID()
        }
    }

    useLayoutEffect(() => {
        updateHistoryCards()
    }, [])

    return {
        historyCards: historyCards
    }
}
