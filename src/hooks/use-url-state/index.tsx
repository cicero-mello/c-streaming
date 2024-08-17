import { SetUrlStateKey,  UseURLState, UrlState, SearchType } from "./types"
import { Stringified } from "../../shared/types"
import { useForceUpdate } from "../use-force-update"
import { delay } from "../../shared/utils"

export const useUrlState = (): UseURLState => {
    const forceUpdate = useForceUpdate()

    const setUrlStateKey: SetUrlStateKey<keyof UrlState> = async (
        key, value
    ) => {
        const params = new URLSearchParams(
            window.location.search
        )
        params.set(key, value ?? "")
        window.history.pushState(
            {}, "",
            `${window.location.pathname}?${params.toString()}`
        )
        await delay(10)
        forceUpdate()
    }

    const getUrlState = (): UrlState => {
        const isBrowser = typeof window !== "undefined"
        if(!isBrowser) return {}

        const URLObject: Stringified<UrlState> = Object.fromEntries(
            new URLSearchParams(window.location.search)
        )

        return {
            mediaID: URLObject.mediaID,
            episodeID: URLObject.episodeID,
            searchText: URLObject.searchText,
            searchType: URLObject.searchType as SearchType
        }
    }

    return [
        getUrlState(),
        setUrlStateKey
    ]
}
