import React, { FC } from "react"
import { type PageProps } from "gatsby"
import { BorderButton, GenericTextInput, HistoryCard, Line } from "../../components"
import { usePageAnimation, usePageFilter, usePageMedia } from "./core"
import { customLocalStorage } from "../../localstorage"
import * as S from "./styles"

export const History: FC<PageProps> = () => {
    const animation = usePageAnimation()
    const { historyCards } = usePageMedia(animation)
    const {
        historyCardsFiltered,
        onChangeSearch
    } = usePageFilter(historyCards, animation)

    const isToShowClearMessage = (
        (historyCards.length === 0) || (
            animation.states.isActionsHidden &&
            animation.states.isPageOnTopWithNoCards
        )
    )

    const onClickClearAllHistory = async () => {
        await animation.clearAllHistory()
        customLocalStorage.clearAllHistory()
    }

    return (
        <S.Component>
            <Line />
            <S.Title> History </S.Title>
            <S.ContentWrapper>
                <S.HistoryClearMessage $show={isToShowClearMessage}>
                    Your history is already clear
                </S.HistoryClearMessage>
                {historyCards.length > 0 && <>
                    <S.CardsWrapper
                        $closeAllCards={animation.states.isHistoryClear}
                        $removeHeight={animation.states.isPageOnTopWithNoCards}
                        $hide={animation.states.isHistoryHidden}
                    >
                        {historyCardsFiltered.map(
                            ({ props, key }) => <HistoryCard {...props} key={key} />
                        )}
                        {historyCardsFiltered.length <= 0 && <S.NoResults />}
                    </S.CardsWrapper>
                    <S.ActionsWrapper $hide={animation.states.isAllCardsClosed}>
                        <GenericTextInput
                            label="Search"
                            onChange={onChangeSearch}
                            disabled={animation.states.isHistoryClear}
                        />
                        <BorderButton
                            $text="Clear All History"
                            $theme="red"
                            disabled={animation.states.isHistoryClear}
                            onClick={onClickClearAllHistory}
                        />
                    </S.ActionsWrapper>
                </>}
            </S.ContentWrapper>
        </S.Component>
    )
}
