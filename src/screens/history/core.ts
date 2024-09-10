import { HistoryCardProps } from "../../components"
import { stringIncludes } from "../../shared/utils"
import { UrlState } from "../../hooks"

export const getFilteredHistoryCards = (
    historyCards: HistoryCardProps[],
    urlState: UrlState
): HistoryCardProps[] => (
    historyCards.filter((card) => (
        stringIncludes(
            card.mediaName,
            urlState?.searchText ?? ""
        )
        ||
        (card.episode && stringIncludes(
            card.episode?.name,
            urlState?.searchText ?? ""
        ))
    ))
)

export const createSearchResultsMessage = (
    cardsNumber: number, { searchText } : UrlState
): string => (
    (cardsNumber === 0 ? "No" : cardsNumber)
    + " results"
    + (searchText && (" for: " + searchText))
)
