import React, { FC } from "react"
import { PageProps } from "gatsby"
import { BorderButton, GenericTextInput, HistoryCard, Line } from "../../components"
import { usePageAnimation, usePageFilter, usePageData } from "./core"
import * as S from "./styles"

export const History: FC<PageProps> = () => {
    const { animationState, animations } = usePageAnimation()
    const { historyCards, clearAllHistory } = usePageData(animations)
    const { historyCardsFiltered, onChangeSearch } = usePageFilter(
        historyCards, animations
    )

    const haveHistoryCards = historyCards.length > 0
    const haveFilteredHistoryCards = historyCardsFiltered.length > 0

    return (
        <S.Screen>
            <Line />
            <S.Title> History </S.Title>
            <S.ContentWrapper>
                {!haveHistoryCards &&
                    <S.HistoryClearMessage>
                        Your history is already clear
                    </S.HistoryClearMessage>
                }
                {haveHistoryCards && <>
                    <S.CardsWrapper
                        $closeAllCards={animationState.isHistoryClear}
                        $removeHeight={animationState.isPageOnTopWithNoCards}
                        $hide={animationState.isHistoryHidden}
                    >
                        {historyCardsFiltered.map(
                            (props) => <HistoryCard {...props} key={props.id} />
                        )}
                        {!haveFilteredHistoryCards && <S.NoResults />}
                    </S.CardsWrapper>
                    <S.ActionsWrapper $hide={animationState.isAllCardsClosed}>
                        <GenericTextInput
                            label="Search"
                            onChange={onChangeSearch}
                            disabled={animationState.isHistoryClear}
                        />
                        <BorderButton
                            $text="Clear All History"
                            $theme="red"
                            disabled={animationState.isHistoryClear}
                            onClick={clearAllHistory}
                        />
                    </S.ActionsWrapper>
                </>}
            </S.ContentWrapper>
        </S.Screen>
    )
}
