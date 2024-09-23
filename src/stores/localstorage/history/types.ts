import { Serie } from "../serie/types"

export interface HistoryItem {
    mediaId: string
    episodeID?: string
    viewDate: number // Date.now()
}

export interface GetLastWatchedEpisodeParams {
    serieID?: string
    history?: HistoryItem[]
    serie?: Serie
}
