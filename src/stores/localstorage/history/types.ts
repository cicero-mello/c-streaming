import { Serie } from "../serie/types"

export interface HistoryItem {
    mediaID: string
    episodeID?: string
    viewDate: number // Date.now()
}

export interface GetLastWatchedEpisodeParams {
    serieID?: string
    history?: HistoryItem[]
    serie?: Serie
}
