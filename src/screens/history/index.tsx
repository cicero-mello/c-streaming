import React, { FC, useState } from "react"
import { type PageProps } from "gatsby"
import { BorderButton, GenericTextInput, HistoryCard, Line } from "../../components"
import { usePageAnimation, usePageMedia } from "./core"
import { customLocalStorage } from "../../localstorage"
import { stringIncludes } from "../../shared/utils"
import * as S from "./styles"

export const History: FC<PageProps> = () => {
    const animation = usePageAnimation()
    const { historyCards } = usePageMedia(animation)
    const [searchFilter, setSearchFilter] = useState("")
    // const { historyCardsFilteres, onChangeSearch } = usePageFilter(historyCards, animation)

    const isToShowClearMessage = (
        (historyCards.length === 0) ||
        (animation.states.isActionsHidden && animation.states.isPageOnTopWithNoCards)
    )

    const onClickClearAllHistory = async () => {
        await animation.clearAllHistory()
        customLocalStorage.clearAllHistory()
    }

    const historyCardsFiltered = historyCards.filter(
        ({ props }) => (
            stringIncludes(props.mediaName, searchFilter) ||
            (props.episode && stringIncludes(props.episode?.name, searchFilter))
        )
    )

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
                    >
                        {historyCards.map(
                            ({ props, key }) => <HistoryCard {...props} key={key} />
                        )}
                        {/* {historyCardsFiltered.length <= 0 && <S.NoResults />} */}
                    </S.CardsWrapper>
                    <S.ActionsWrapper $hide={animation.states.isAllCardsClosed}>
                        <GenericTextInput
                            label="Search"
                            onChange={(e) => setSearchFilter(e.target.value)}
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
