export interface UrlState {
    mediaID?: string
    episodeID?: string
    searchText?: string
    searchType?: SearchType
}

export type SearchType = "movie" | "anime" | "serie" | "all"

export type SetUrlStateKey<K extends keyof UrlState> = (
    key: K, value: UrlState[K]
) => void | Promise<void>

export type UseURLState = [
    urlState: UrlState,
    setUrlStateKey: SetUrlStateKey<keyof UrlState>
]
