import { useCallback, useLayoutEffect, useState } from "react"
import { customLocalStorage, useMediaStore } from "../../stores"
import { UseWatchLaterCards } from "./types"
import { WatchLaterCardProps } from "../../components"

export const useWatchLaterCards = (): UseWatchLaterCards => {
    const { getMediaById } = useMediaStore()
    const [cards, setCards] = useState<WatchLaterCardProps[]>([])

    const createCards = useCallback(() => {
        const allWatchLater = customLocalStorage.getAllWatchLater()

        const cards = allWatchLater.map(item => {
            const media = getMediaById(item.id)
            if(!media || !media.bannerImage) return undefined

            const onRemoveCard = async () => {
                setCards(cards => cards.filter(
                    card => card.mediaId != media.id
                ))
            }

            return {
                mediaId: media.id,
                mediaType: media.type,
                mediaName: media.name,
                image: media.bannerImage,
                onRemove: onRemoveCard,
            }
        })

        return cards.filter(card => card != undefined)
    }, [])

    useLayoutEffect(() => {
        setCards(createCards())
    }, [])

    return [ cards ]
}
