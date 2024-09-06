import { useCallback, useLayoutEffect, useState } from "react"
import { customLocalStorage, useMediaStore } from "../../stores"
import { WatchLaterCardProps } from "../../components"
import { UseWatchLaterCards } from "./types"

export const useWatchLaterCards = (): UseWatchLaterCards => {
    const getMediaById = useMediaStore(state => state.getMediaById)
    const [cards, setCards] = useState<WatchLaterCardProps[]>([])
    const [copyCards, setCopyCards] = useState<WatchLaterCardProps[]>([])
    const isAllCardsClosed = copyCards.length === 0

    const createCards = useCallback(() => {
        const allWatchLater = customLocalStorage.getAllWatchLater()

        const cards = allWatchLater.map(item => {
            const media = getMediaById(item.id)
            if(!media || !media.bannerImage) return undefined

            const onRemoveCard = async () => {
                setCopyCards(copyCard => copyCard.filter(
                    copyCard => copyCard.mediaID != media.id
                ))
            }

            return {
                mediaID: media.id,
                mediaType: media.type,
                mediaName: media.name,
                image: media.bannerImage,
                onRemove: onRemoveCard,
            }
        })

        return cards.filter(card => card != undefined)
    }, [])

    useLayoutEffect(() => {
        const cardsCreated = createCards()
        setCards(cardsCreated)
        setCopyCards(cardsCreated)
    }, [])

    return {
        cards,
        isAllCardsClosed
    }
}
