import React, { FunctionComponent, useLayoutEffect, useState } from "react"
import { type PageProps } from "gatsby"
import { BorderButton, GenericTextInput, HistoryCard, Line } from "../../components"
import { scrollPageToTop } from "../../shared/utils"
import { customLocalStorage } from "../../localstorage"
import { PageAnimationStates, PageMediaProps } from "./types"
import { useNavigation } from "../../hooks"
import * as core from "./core"
import * as S from "./styles"

export const History: FunctionComponent<PageProps> = () => {
    const { navigate } = useNavigation()
    const [pageMedia, setPageMedia] = useState<PageMediaProps>()
    const [pageAnimation, setPageAnimation] = useState<PageAnimationStates>({})

    const clearAllHistory = () => {
        customLocalStorage.clearAllHistory()

        const startAnimation = async () => {
            setPageAnimation(old => ({...old, isHistoryClear: true}))
            setTimeout(() => setPageAnimation(old => ({...old, isAllCardsClosed: true})), 800)
            setTimeout(() => setPageAnimation(old => ({...old, isActionsHidden: true})), 1200)
            await scrollPageToTop()
            setPageAnimation(old => ({...old, isPageOnTopWithNoCards: true}))
        }
        startAnimation()
    }

    const onEveryHistoryWasRemoved = () => {
        const startAnimation = async () => {
            setPageAnimation(old => ({...old, isHistoryClear: true, isAllCardsClosed: true}))
            setTimeout(() => setPageAnimation(old => ({...old, isActionsHidden: true})), 400)
            await scrollPageToTop()
            setPageAnimation(old => ({...old, isPageOnTopWithNoCards: true}))
        }
        startAnimation()
    }

    useLayoutEffect(() => {
        const history = customLocalStorage.getHistory()
        const newPageMedia = core.createPageMedia(history, navigate, onEveryHistoryWasRemoved)
        setPageMedia(newPageMedia)
    }, [])

    return (
        <S.Component>
            <Line />
            <S.Title> History </S.Title>
            <S.ContentWrapper>
                <S.HistoryClearMessage
                    $show={
                        (pageMedia && pageMedia.historyCards.length === 0) ||
                        (pageAnimation.isActionsHidden && pageAnimation.isPageOnTopWithNoCards)
                    }
                >
                    Your history is already clear
                </S.HistoryClearMessage>
                {!!pageMedia && pageMedia.historyCards.length > 0 &&
                    <>
                        <S.CardsWrapper
                            $closeAllCards={pageAnimation.isHistoryClear}
                            $removeHeight={pageAnimation.isPageOnTopWithNoCards}
                        >
                            {pageMedia.historyCards.map(media => <HistoryCard {...media} />)}
                        </S.CardsWrapper>
                        <S.ActionsWrapper $hide={pageAnimation.isAllCardsClosed}>
                            <GenericTextInput
                                label="Search"
                                disabled={pageAnimation.isHistoryClear}
                            />
                            <BorderButton
                                $text="Clear All History"
                                $theme="red"
                                disabled={pageAnimation.isHistoryClear}
                                onClick={clearAllHistory}
                            />
                        </S.ActionsWrapper>
                    </>
                }
            </S.ContentWrapper>
        </S.Component>
    )
}
