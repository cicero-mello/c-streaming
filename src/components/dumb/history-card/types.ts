import { Episode } from "../../../localstorage"

export interface HistoryCardProps {
    mediaName: string
    episode?: Episode
    closeAction: () => void
    clickAction: () => void
}
