import React, { ChangeEvent, FC, useCallback, useMemo } from "react"
import { BorderButton, GenericTextInput, HistoryCard, Line } from "../../components"
import { customLocalStorage } from "../../stores"
import { useUrlState } from "../../hooks"
import { debounce, scrollPageToTop } from "../../shared/utils"
import { useHistoryCards } from "./use-history-cards"
import { usePageFlow } from "./use-page-flow"
import { getFilteredHistoryCards } from "./core"
import * as S from "./styles"

export const History: FC = () => {
    const [pageFlowStates, pageFlowControl] = usePageFlow()
    const [historyCards, setHistoryCards] = useHistoryCards(pageFlowControl)
    const [urlState, setUrlStateKey] = useUrlState()

    const filteredHistoryCards = useMemo(() => (
        getFilteredHistoryCards(historyCards, urlState)
    ), [historyCards, urlState])

    const onChangeSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        debounce(async () => {
            await scrollPageToTop()
            await pageFlowControl.hideHistory(true)
            setUrlStateKey("searchText", event.target.value)
            await pageFlowControl.hideHistory(false)
        }, 200)
    }, [pageFlowControl, setUrlStateKey])

    const clearAllHistory = useCallback(async () => {
        await pageFlowControl.clearAllHistory()
        customLocalStorage.clearAllHistory()
        setHistoryCards([])
    }, [pageFlowControl, setHistoryCards])

    const haveHistoryItems = historyCards.length > 0
    const haveFilteredHistoryCards = filteredHistoryCards.length > 0

    return (
        <S.Screen>
            <Line />
            <S.Title> History </S.Title>
            <S.ContentWrapper>
                {!haveHistoryItems &&
                    <S.HistoryClearMessage>
                        Your history is already clear
                    </S.HistoryClearMessage>
                }
                {haveHistoryItems && <>
                    <S.CardsWrapper
                        $closeAllCards={pageFlowStates.isHistoryClear}
                        $removeHeight={pageFlowStates.isPageOnTopWithNoCards}
                        $hide={pageFlowStates.isHistoryHidden}
                    >
                        {filteredHistoryCards.map(
                            ({id, ...rest}) => <HistoryCard {...rest} key={id}/>
                        )}
                        {!haveFilteredHistoryCards && <S.NoResults />}
                    </S.CardsWrapper>
                    <S.ActionsWrapper $hide={pageFlowStates.isAllCardsClosed}>
                        <GenericTextInput
                            label="Search"
                            defaultValue={urlState.searchText}
                            disabled={pageFlowStates.isHistoryClear}
                            onChange={onChangeSearch}
                        />
                        <BorderButton
                            $text="Clear All History"
                            $theme="red"
                            disabled={pageFlowStates.isHistoryClear}
                            onClick={clearAllHistory}
                        />
                    </S.ActionsWrapper>
                </>}
            </S.ContentWrapper>
        </S.Screen>
    )
}
