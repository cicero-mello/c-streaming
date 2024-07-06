import { HistoryCardProps } from "../../components"

export interface PageMediaProps {
    historyCards: HistoryCardProps[]
}

export interface PageAnimationStates {
    isHistoryClear?: boolean
    isPageOnTopWithNoCards?: boolean
    isActionsHidden?: boolean
    isAllCardsClosed?: boolean
}
