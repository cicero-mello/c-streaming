import { useState } from "react"
import { delay, scrollPageToTop } from "../../../shared/utils"
import { UsePageAnimation } from "./types"

export const usePageAnimation = ():UsePageAnimation => {
    const [isHistoryClear, setIsHistoryClear] = useState(false)
    const [isPageOnTopWithNoCards, setIsPageOnTopWithNoCards] = useState(false)
    const [isActionsHidden, setIsActionsHidden] = useState(false)
    const [isAllCardsClosed, setIsAllCardsClosed] = useState(false)
    const [isHistoryHidden, setIsHistoryHidden] = useState(false)

    const clearAllHistory = async () => {
        const startAnimation = async () => {
            setIsHistoryClear(true)
            scrollPageToTop()
            await delay(800)
            setIsAllCardsClosed(true)
            await delay(400)
            setIsActionsHidden(true)
            setIsPageOnTopWithNoCards(true)
        }
        await startAnimation()
    }

    const onEveryHistoryCardWasRemoved = async () => {
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

    const hideHistory = async (hide: boolean) => {
        setIsHistoryHidden(hide)
        await delay(190)
    }

    return {
        animationState: {
            isHistoryClear,
            isPageOnTopWithNoCards,
            isActionsHidden,
            isAllCardsClosed,
            isHistoryHidden
        },
        animations: {
            clearAllHistory,
            onEveryHistoryCardWasRemoved,
            hideHistory
        }
    }
}
