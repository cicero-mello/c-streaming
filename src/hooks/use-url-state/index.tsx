import { SetUrlStateKey,  UseURLState, UrlState, SearchType } from "./types"
import { Stringified, delay } from "@utils"
import { useForceUpdate } from "@hooks"

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
            mediaId: URLObject.mediaId,
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
