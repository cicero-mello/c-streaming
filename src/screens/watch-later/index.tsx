import React, { FC, useLayoutEffect } from "react"
import { Line, WatchLaterCard } from "../../components"
import { useWatchLaterCards } from "./use-watch-later-cards"
import { useAriaNotification } from "../../hooks"
import * as S from "./styles"

export const WatchLater: FC = () => {
    const { cards, isAllCardsClosed } = useWatchLaterCards()
    const { readAriaNotification, clearAriaNotification } = useAriaNotification()

    useLayoutEffect(() => {
        if(isAllCardsClosed){
            readAriaNotification("Your 'watch later list' is empty")
        }
        return clearAriaNotification
    }, [isAllCardsClosed])

    return (
        <S.Screen>
            <Line />
            <S.Title> Watch Later </S.Title>
            <S.CardsWrapper>
                {(isAllCardsClosed || cards.length === 0) && <>
                    <S.NoCardsMessage
                        tabIndex={0}
                        aria-label="Your 'watch later list' is empty"
                    />
                </>}
                {cards.map(({mediaID, ...rest}) =>
                    <WatchLaterCard
                        {...rest}
                        id={mediaID}
                        key={mediaID}
                        mediaID={mediaID}
                        aria-label="teste"
                    />
                )}
            </S.CardsWrapper>
        </S.Screen>
    )
}
