import { HTMLAttributes } from "react"
import { Episode } from "../../../stores"

export interface HistoryCardProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className" | "ref" | "onClick"
> {
    mediaName: string
    episode?: Episode
    onClickClose?: () => void | Promise<void>
    onClickCard?: () => void | Promise<void>
}
