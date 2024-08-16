import { ReactNode } from "react"

export type SetParam = <K extends keyof URLParams>(key: K, value: URLParams[K]) => void

export type URLParamsContextProps = [
    params: URLParams,
    setParam: SetParam
]

export interface URLParams {
    mediaID?: string
    episodeID?: string
    searchText?: string
    searchType?: SearchType
}

export type SearchType = "movie" | "anime" | "serie" | "all"

