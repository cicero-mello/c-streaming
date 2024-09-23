import React, { FC } from "react"
import { KeepFocusOnRemove, Line, WatchLaterCard } from "../../components"
import { useWatchLaterCards } from "./use-watch-later-cards"
import * as S from "./styles"

export const WatchLater: FC = () => {
    const [cards] = useWatchLaterCards()

    return (
        <S.Screen>
            <Line />
            <S.Title tabIndex={0}> Watch Later </S.Title>
            <S.CardsWrapper>
                {cards.length === 0 && <>
                    <S.NoCardsMessage
                        tabIndex={0}
                        aria-label="Your 'watch later list' is empty"
                    />
                </>}
                <KeepFocusOnRemove>
                    {cards.map(({mediaId, ...rest}) =>
                        <WatchLaterCard
                            {...rest}
                            id={mediaId}
                            key={mediaId}
                            mediaId={mediaId}
                        />
                    )}
                </KeepFocusOnRemove>
            </S.CardsWrapper>
        </S.Screen>
    )
}
