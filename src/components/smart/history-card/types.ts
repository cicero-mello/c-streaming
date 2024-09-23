import { HTMLAttributes } from "react"
import { Episode, HistoryItem, MediaType } from "../../../stores"

export interface HistoryCardProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className" | "ref"
> {
    mediaId: string,
    mediaType: MediaType,
    mediaName: string,
    historyViewDate: number,
    episode?: Episode,
    onRemove?: () => void | Promise<void>
}
