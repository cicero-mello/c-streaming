import React, { FC, useCallback, useLayoutEffect, useState } from "react"
import { useNavigation } from "../../../hooks"
import { customLocalStorage, useMediaStore } from "../../../stores"
import { WatchLaterCard } from "./card"
import { WatchLaterCardProps } from "./card/types"
import { PATHS } from "../../../paths"
import { WatchLaterListProps } from "./types"
import * as S from "./styles"

export const WatchLaterList: FC<WatchLaterListProps> = ({
    cards: cardsProp, ...rest
}) => {
    const { navigate } = useNavigation()
    const getMediaById = useMediaStore(state => state.getMediaById)
    const [cards, setCards] = useState<WatchLaterCardProps[]>(cardsProp ?? [])

    const createCards = useCallback(() => {
        const allWatchLater = customLocalStorage.getAllWatchLater()

        const cards = allWatchLater.map(item => {
            const media = getMediaById(item.id)
            if(!media || !media.bannerImage) return undefined

            return {
                id: media.id,
                image: media.bannerImage,
                title: media.name,
                onRemove: () => {
                    customLocalStorage.removeWatchLater(item.id)
                    setCards(
                        cards => cards.filter(card => card.id != media.id)
                    )
                },
                onGoWatch: () => navigate(
                    media.type === "movie" ? PATHS.MOVIE : PATHS.SERIES,
                    { mediaID: media.id }
                )
            }
        })

        return cards.filter(card => card != undefined)
    }, [navigate, getMediaById, setCards])

    useLayoutEffect(() => {
        if(!cardsProp) setCards(createCards())
    }, [])

    return (
        <S.Component {...rest}>
            {cards.length === 0 ? <S.NoCardsMessage /> :
                cards.map(({id, ...rest}) =>
                    <WatchLaterCard {...rest} key={id}/>
                )
            }
        </S.Component>
    )
}
