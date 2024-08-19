import { useLayoutEffect, useMemo, useState } from "react"
import { customLocalStorage, useMediaStore } from "../../stores"
import { getRandomID } from "../../shared/utils"
import { HistoryCardProps } from "../../components"
import { PageFlowControl, UseHistoryCards } from "./types"
import { useNavigation } from "../../hooks"
import { PATHS } from "../../paths"

export const useHistoryCards = (
    pageFlowControl: PageFlowControl
): UseHistoryCards => {
    const { navigate } = useNavigation()
    const getMediaById = useMediaStore(state => state.getMediaById)
    const historyItems = useMemo(() => (
        customLocalStorage.getHistory()
    ), [])
    const [historyCards, setHistoryCards] = useState<HistoryCardProps[]>([])

    useLayoutEffect(() => {
        const newHistoryCards: HistoryCardProps[] = historyItems.map(historyItem => {
            const media = getMediaById(historyItem.mediaID)
            if(!media) return

            const episode = (!historyItem?.episodeID ? undefined :
                customLocalStorage.getEpisodeByIDs(
                    historyItem.mediaID, historyItem.episodeID
                )
            )

            return {
                id: getRandomID(),
                mediaName: media.name,
                episode: episode,
                onClickCard: () => {
                    if(media.type === "movie"){
                        navigate(PATHS.MOVIE, {mediaID: media.id, episodeID: episode?.id})
                        return
                    }
                    navigate(PATHS.SERIES, { mediaID: media.id, episodeID: episode?.id })
                },
                onClickClose: async () => {
                    const currentHistory = customLocalStorage.getHistory()
                    const isTheLastCardsToClose = currentHistory.length === 1
                    if(isTheLastCardsToClose) {
                        await pageFlowControl.eachHistoryCardWasRemoved()
                    }
                    setHistoryCards(oldCards => oldCards.filter(card => !(
                        card.mediaName === media?.name &&
                        card.episode === episode
                    )))
                    customLocalStorage.removeMediaFromHistory(historyItem)
                }
            }
        }).filter(item => item != undefined)

        setHistoryCards(newHistoryCards)
    }, [historyItems])

    return [historyCards, setHistoryCards]
}
