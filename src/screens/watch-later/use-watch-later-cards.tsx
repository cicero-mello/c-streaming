import { useLayoutEffect, useMemo, useState } from "react"
import { customLocalStorage, useMediaStore } from "../../stores"
import { UseWatchLaterCards } from "./types"

export const useWatchLaterCards = (): UseWatchLaterCards => {
    const { getMediaById } = useMediaStore()
    const [showingCardsNumber, setShowingCardsNumber] = useState<number>()

    const cards = useMemo(() => {
        const allWatchLater = customLocalStorage.getAllWatchLater()

        const cards = allWatchLater.map(item => {
            const media = getMediaById(item.id)
            if(!media || !media.bannerImage) return undefined

            const onRemoveCard = async () => {
                setShowingCardsNumber(old => (old ?? 1) - 1)
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
        setShowingCardsNumber(cards.length)
    }, [])

    return {
        cards,
        isAllCardsClosed: showingCardsNumber === 0
    }
}
