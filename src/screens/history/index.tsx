import React, { ChangeEvent, FC, useCallback, useLayoutEffect, useMemo } from "react"
import { Button, GenericTextInput, HistoryCard, KeepFocusOnRemove, Line } from "../../components"
import { customLocalStorage } from "../../stores"
import { useAriaNotification, useDidMountEffect, useUrlState } from "../../hooks"
import { debounce, delay, scrollPageToTop } from "../../shared/utils"
import { useHistoryCards } from "./use-history-cards"
import { usePageFlow } from "./use-page-flow"
import { createSearchResultsMessage, getFilteredHistoryCards } from "./core"
import * as S from "./styles"

export const History: FC = () => {
    const { readAriaNotification } = useAriaNotification()
    const [pageFlowStates, pageFlowControl] = usePageFlow()
    const [cards, setCards] = useHistoryCards(pageFlowControl)
    const [urlState, setUrlStateKey] = useUrlState()

    const filteredCards = useMemo(() => {
        return getFilteredHistoryCards(cards, urlState)
    }, [cards, urlState])

    const onChangeSearch = useCallback((
        event: ChangeEvent<HTMLInputElement>
    ) => {
        debounce(async () => {
            await scrollPageToTop()
            await pageFlowControl.hideHistory(true)
            setUrlStateKey("searchText", event.target.value)
            await pageFlowControl.hideHistory(false)
        }, 200)
    }, [pageFlowControl, setUrlStateKey])

    const clearAllHistory = useCallback(async () => {
        readAriaNotification("Your history was clear")
        await pageFlowControl.clearAllHistory()
        setCards([])
        customLocalStorage.clearAllHistory()
    }, [pageFlowControl])

    const readAriaNotificationWithDelay = async () => {
        await delay(50)
        const message = createSearchResultsMessage(
            filteredCards.length, urlState
        )
        readAriaNotification(message)
    }

    useDidMountEffect(() => {
        readAriaNotificationWithDelay()
    }, [urlState.searchText])

    const haveCards = cards.length > 0
    const haveFilteredCards = filteredCards.length > 0

    return (
        <S.Screen>
            <Line />
            <S.Title tabIndex={1}> History </S.Title>
            {!haveCards &&
                <S.ContentWrapper>
                    <S.HistoryClearMessage tabIndex={0}>
                        Your history is already clear
                    </S.HistoryClearMessage>
                </S.ContentWrapper>
            }
            <KeepFocusOnRemove>
                {haveCards &&
                    <S.ContentWrapper id="cw-cards-actions">
                        <S.CardsWrapper
                            $closeAllCards={pageFlowStates.isHistoryClear}
                            $removeHeight={pageFlowStates.isPageOnTopWithNoCards}
                            $hide={pageFlowStates.isHistoryHidden}
                        >
                            <KeepFocusOnRemove>
                                {filteredCards.map(({id, ...rest}) =>
                                    <HistoryCard id={id} key={id} {...rest}/>
                                )}
                            </KeepFocusOnRemove>
                            {!haveFilteredCards && <S.NoResults tabIndex={0}/>}
                        </S.CardsWrapper>
                        <S.ActionsWrapper $hide={pageFlowStates.isAllCardsClosed}>
                            <GenericTextInput
                                label="Search"
                                aria-label="Search by name: "
                                tabIndex={1}
                                defaultValue={urlState.searchText}
                                disabled={pageFlowStates.isHistoryClear}
                                onChange={onChangeSearch}
                            />
                            <Button
                                children="Clear All History"
                                aria-label="Clear all history"
                                tabIndex={1}
                                theme="border-red"
                                disabled={pageFlowStates.isHistoryClear}
                                onClick={clearAllHistory}
                                keepFocusPositionWhenDisabled
                            />
                        </S.ActionsWrapper>
                    </S.ContentWrapper>
                }
            </KeepFocusOnRemove>
        </S.Screen>
    )
}
