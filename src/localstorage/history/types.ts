export type UserHistory = HistoryItem[]

export interface HistoryItem {
    mediaID: string
    episodeID?: string
    viewDate: number // Date.now()
}
