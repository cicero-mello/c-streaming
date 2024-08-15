import { Episode } from "../../../stores"

export interface HistoryCardProps {
    mediaName: string
    episode?: Episode
    closeAction: () => void
    clickAction: () => void
}
