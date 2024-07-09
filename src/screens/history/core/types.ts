import { HistoryCardProps } from "../../../components"

export interface UsePageMedia {
    historyCards: HistoryCardProps[]
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
