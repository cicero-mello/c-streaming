import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"
import { customLocalStorage, useMediaStore } from "../../stores"
import { getRandomID } from "../../shared/utils"
import { HistoryCardProps } from "../../components"
import { PageFlowControl, UseHistoryCards } from "./types"

export const useHistoryCards = (
    pageFlowControl: PageFlowControl
): UseHistoryCards => {
    const { getMediaById } = useMediaStore()
    const [cards, setCards] = useState<HistoryCardProps[]>([])
    const cardsRef = useRef<HistoryCardProps[]>([])

    const historyItems = useMemo(() => (
        customLocalStorage.getHistory()
    ), [])

    const customSetCards = (newCards: HistoryCardProps[]) => {
        cardsRef.current = newCards
        setCards(newCards)
    }

    const removeCardById = (id: string) => {
        cardsRef.current = cardsRef.current.filter(
            card => card.id !== id
        )
        setCards(cardsRef.current)
    }

    const createCards = useCallback(() => {
        const newCards = historyItems.map(historyItem => {
            const media = getMediaById(historyItem.mediaId)
            if(!media) return

            const cardId = getRandomID()
            const episode = (!historyItem?.episodeID ? undefined :
                customLocalStorage.getEpisodeByIDs(
                    historyItem.mediaId, historyItem.episodeID
                )
            )

            return {
                id: cardId,
                mediaId: media.id,
                mediaType: media.type,
                mediaName: media.name,
                historyViewDate: historyItem.viewDate,
                episode: episode,
                onRemove: async () => {
                    if(cardsRef.current.length === 1){
                        await pageFlowControl.eachHistoryCardWasRemoved()
                    }
                    removeCardById(cardId)
                }
            } as HistoryCardProps
        })

        return newCards.filter(card => card != undefined)
    }, [])

    useLayoutEffect(() => {
        cardsRef.current = createCards()
        setCards(cardsRef.current)
    }, [])

    return [cards, customSetCards]
}
