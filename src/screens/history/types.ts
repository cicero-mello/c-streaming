import { Dispatch, SetStateAction } from "react"
import { HistoryCardProps } from "../../components"

export type UseHistoryCards = [
    historyCards: HistoryCardProps[],
    setHistoryCards: Dispatch<SetStateAction<HistoryCardProps[]>>
]

export interface PageFlowStates {
    isHistoryClear?: boolean
    isPageOnTopWithNoCards?: boolean
    isActionsHidden?: boolean
    isAllCardsClosed?: boolean
    isHistoryHidden?: boolean
}

export interface PageFlowControl {
    eachHistoryCardWasRemoved: () => Promise<void>
    clearAllHistory: () => Promise<void>
    hideHistory: (hide: boolean) => Promise<void>
}

export type UsePageFlow = [
    states: PageFlowStates,
    control: PageFlowControl
]
