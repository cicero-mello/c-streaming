export type UserHistory = HistoryItem[]
//TODO - usar direto HistoryItem[], pois a falta de "[]"
// pode enganar já que não pra pra ver de cara que é uma lista
// quando o mouse fica por cima

export interface HistoryItem {
    mediaID: string
    episodeID?: string
    viewDate: number // Date.now()
}
