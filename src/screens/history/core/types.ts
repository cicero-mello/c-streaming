import { ChangeEvent } from "react"
import { HistoryCardProps } from "../../../components"

export interface UsePageData {
    historyCards: PageHistoryCard[]
    clearAllHistory: () => void
}

export interface PageHistoryCard {
    props: HistoryCardProps
    key: string
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
    historyCardsFiltered: PageHistoryCard[]
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
