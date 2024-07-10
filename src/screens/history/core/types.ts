import { ChangeEvent } from "react"
import { HistoryCardProps } from "../../../components"

export interface UsePageMedia {
    historyCards: PageHistoryCard[]
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
}

export interface PageAnimationHandle {
    onEveryHistoryWasRemoved: () => Promise<void>
    clearAllHistory: () => Promise<void>
}

export interface UsePageAnimation extends PageAnimationHandle {
    states: PageAnimationStates
}

export interface UsePageFilter {
    historyCardsFiltered: PageHistoryCard[]
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void
}
