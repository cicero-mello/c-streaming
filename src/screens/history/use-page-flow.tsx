import { useState } from "react"
import { delay, scrollPageToTop } from "@utils"
import { UsePageFlow } from "./types"

export const usePageFlow = (): UsePageFlow => {
    const [isHistoryClear, setIsHistoryClear] = useState(false)
    const [isPageOnTopWithNoCards, setIsPageOnTopWithNoCards] = useState(false)
    const [isActionsHidden, setIsActionsHidden] = useState(false)
    const [isAllCardsClosed, setIsAllCardsClosed] = useState(false)
    const [isHistoryHidden, setIsHistoryHidden] = useState(false)

    const clearAllHistory = async () => {
        const startFlow = async () => {
            setIsHistoryClear(true)
            scrollPageToTop()
            await delay(800)
            setIsAllCardsClosed(true)
            await delay(400)
            setIsActionsHidden(true)
            setIsPageOnTopWithNoCards(true)
        }
        await startFlow()
    }

    const eachHistoryCardWasRemoved = async () => {
        const startFlow = async () => {
            setIsHistoryClear(true)
            setIsAllCardsClosed(true)
            await delay(400)
            setIsActionsHidden(true)
            await scrollPageToTop()
            setIsPageOnTopWithNoCards(true)
        }
        await startFlow()
    }

    const hideHistory = async (hide: boolean) => {
        setIsHistoryHidden(hide)
        await delay(190)
    }

    return [
        {
            isHistoryClear,
            isPageOnTopWithNoCards,
            isActionsHidden,
            isAllCardsClosed,
            isHistoryHidden
        },
        {
            clearAllHistory,
            eachHistoryCardWasRemoved,
            hideHistory
        }
    ]
}
