import { ChangeEvent, useState } from "react"
import { PageAnimations, PageHistoryCard, UsePageFilter } from "./types"
import { debounce, scrollPageToTop, stringIncludes } from "../../../shared/utils"

export const usePageFilter = (
    historyCards: PageHistoryCard[],
    animations: PageAnimations
):UsePageFilter => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        debounce(async () => {
            await scrollPageToTop()
            await animations.hideHistory(true)
            setSearch(event.target.value)
            await animations.hideHistory(false)
        }, 200)
    }

    const historyCardsFiltered = historyCards.filter(
        ({ props }) => (
            stringIncludes(props.mediaName, search) ||
            (props.episode && stringIncludes(props.episode?.name, search))
        )
    )

    return {
        onChangeSearch: onChangeSearch,
        historyCardsFiltered: historyCardsFiltered
    }
}
