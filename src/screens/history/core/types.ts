import { ChangeEvent } from "react"
import { HistoryCardProps } from "../../../components"

export interface UsePageData {
    historyCards: HistoryCardProps[]
    clearAllHistory: () => void
}

export interface PageAnimationStates {
    isHistoryClear?: boolean
    isPageOnTopWithNoCards?: boolean
    isActionsHidden?: boolean
    isAllCardsClosed?: boolean
    isHistoryHidden?: boolean
}

export interface PageAnimations {
    onEveryHistoryCardWasRemoved: () => Promise<void>
    clearAllHistory: () => Promise<void>
    hideHistory: (hide: boolean) => Promise<void>
}

export interface UsePageAnimation {
    animationState: PageAnimationStates
    animations: PageAnimations
}

export interface UsePageFilter {
    historyCardsFiltered: HistoryCardProps[]
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
