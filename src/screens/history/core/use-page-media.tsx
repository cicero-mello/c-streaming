import { useLayoutEffect, useState } from "react"
import { useNavigation } from "../../../hooks"
import { customLocalStorage, HistoryItem } from "../../../localstorage"
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

    const historyItemToHistoryCard = (historyItem: HistoryItem):PageHistoryCard => {
        const media = getMediaById(historyItem.mediaID)
        const episode = (!!historyItem?.episodeID ?
            getEpisodeByIDs(historyItem.mediaID, historyItem.episodeID) :
            undefined
        )

        const clickActionHistoryCard = () => {
            const { mediaID, episodeID } = historyItem
            if(media?.type === "movie") navigate(PATHS.MOVIE, {mediaID, episodeID })
            else navigate(PATHS.SERIES, { mediaID, episodeID })
        }

        const closeActionHistoryCard = async () => {
            const currentHistory = customLocalStorage.getHistory()
            if(currentHistory.length === 1) await animation.onEveryHistoryWasRemoved()

            customLocalStorage.removeMediaFromHistory(historyItem)
            setHistoryCards(old => old.filter(card => !(
                card.props.mediaName === media?.name &&
                card.props.episode === episode
            )))
        }

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
        const history = customLocalStorage.getHistory()
        setHistoryCards(history.map(historyItem => historyItemToHistoryCard(historyItem)))
    }, [])

    return {
        historyCards: historyCards
    }
}
