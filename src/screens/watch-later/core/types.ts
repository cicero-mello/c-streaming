import { WatchLaterCardsProps } from "../../../components"

export interface UsePageData {
    watchLaterCards: PageCards[]
}

export interface PageCards {
    props: WatchLaterCardsProps
    key: string
}
