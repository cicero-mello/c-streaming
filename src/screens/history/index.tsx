import React, { ChangeEvent, FC, useCallback, useMemo, useRef } from "react"
import { Button, GenericTextInput, HistoryCard, KeepFocusOnRemove, Line } from "../../components"
import { useAriaNotification, useDidMountEffect, useUrlState } from "../../hooks"
import { createSearchResultsMessage, getFilteredHistoryCards } from "./core"
import { debounce, scrollPageToTop } from "../../shared/utils"
import { useHistoryCards } from "./use-history-cards"
import { customLocalStorage } from "../../stores"
import { usePageFlow } from "./use-page-flow"
import * as S from "./styles"

export const History: FC = () => {
    const historyClearMessageRef = useRef<HTMLParagraphElement>(null)
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
        await pageFlowControl.clearAllHistory()
        setCards([])
        customLocalStorage.clearAllHistory()
    }, [pageFlowControl])

    const haveCards = cards.length > 0
    const haveFilteredCards = filteredCards.length > 0

    useDidMountEffect(() => {
        const message = createSearchResultsMessage(
            filteredCards.length, urlState
        )
        readAriaNotification(message)
    }, [urlState.searchText])

    return (
        <S.Screen>
            <Line />
            <S.Title tabIndex={0}> History </S.Title>
                {!haveCards &&
                    <S.ContentWrapper>
                        <S.HistoryClearMessage
                            ref={historyClearMessageRef}
                            tabIndex={0}
                        >
                            Your history is already clear
                        </S.HistoryClearMessage>
                    </S.ContentWrapper>
                }
                <KeepFocusOnRemove ariaNotification="History is clean">
                    {haveCards &&
                        <S.ContentWrapper id="history-actions">
                            <S.ActionsWrapper $hide={pageFlowStates.isAllCardsClosed}>
                                <GenericTextInput
                                    label="Search"
                                    aria-label="Search by name: "
                                    defaultValue={urlState.searchText}
                                    disabled={pageFlowStates.isHistoryClear}
                                    onChange={onChangeSearch}
                                />
                                <Button
                                    children="Clear All History"
                                    aria-label="Clear all history"
                                    theme="border-red"
                                    disabled={pageFlowStates.isHistoryClear}
                                    onClick={clearAllHistory}
                                />
                            </S.ActionsWrapper>
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
                        </S.ContentWrapper>
                    }
                </KeepFocusOnRemove>
        </S.Screen>
    )
}
