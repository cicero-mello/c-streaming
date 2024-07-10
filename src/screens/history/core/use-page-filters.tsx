import { ChangeEvent, useState } from "react"
import { PageHistoryCard, UsePageAnimation, UsePageFilter } from "./types"
import { debounce, scrollPageToTop, stringIncludes } from "../../../shared/utils"

export const usePageFilter = (
    historyCards: PageHistoryCard[],
    animation: UsePageAnimation
):UsePageFilter => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        debounce(async () => {
            await scrollPageToTop()
            await animation.hideHistory(true)
            setSearch(event.target.value)
            await animation.hideHistory(false)
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
