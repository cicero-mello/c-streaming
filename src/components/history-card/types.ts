export interface HistoryCardProps {
    mediaName: string
    season?: number
    ep?: number
    episodeName?: string
    closeAction: () => void
    clickAction: () => void
}
