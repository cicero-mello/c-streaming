import { ChangeEvent, useState } from "react"
import { PageHistoryCard, UsePageFilter } from "./types"
import { stringIncludes } from "../../../shared/utils"

export const usePageFilter = (
    historyCards: PageHistoryCard[]
):UsePageFilter => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {

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
