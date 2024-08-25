import { ButtonHTMLAttributes } from "react"

export interface WatchLatterButtonProps extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "aria-label" | "aria-live"
>{
    mediaId: string,
    mediaName?: string
    text?: string
}
