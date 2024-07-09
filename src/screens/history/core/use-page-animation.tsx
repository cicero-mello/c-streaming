import { useState } from "react"
import { delay, scrollPageToTop } from "../../../shared/utils"
import { UsePageAnimation } from "./types"

export const usePageAnimation = ():UsePageAnimation => {
    const [isHistoryClear, setIsHistoryClear] = useState(false)
    const [isPageOnTopWithNoCards, setIsPageOnTopWithNoCards] = useState(false)
    const [isActionsHidden, setIsActionsHidden] = useState(false)
    const [isAllCardsClosed, setIsAllCardsClosed] = useState(false)

    const clearAllHistory = async () => {
        const startAnimation = async () => {
            setIsHistoryClear(true)
            await delay(800)
            setIsAllCardsClosed(true)
            await delay(400)
            setIsActionsHidden(true)
            await scrollPageToTop()
            setIsPageOnTopWithNoCards(true)
        }
        await startAnimation()
    }

    const onEveryHistoryWasRemoved = async () => {
        const startAnimation = async () => {
            setIsHistoryClear(true)
            setIsAllCardsClosed(true)
            await delay(400)
            setIsActionsHidden(true)
            await scrollPageToTop()
            setIsPageOnTopWithNoCards(true)
        }
        await startAnimation()
    }

    return {
        clearAllHistory,
        onEveryHistoryWasRemoved,
        states: {
            isHistoryClear,
            isPageOnTopWithNoCards,
            isActionsHidden,
            isAllCardsClosed
        }
    }
}
