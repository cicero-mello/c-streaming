import { ButtonHTMLAttributes } from "react"

export interface WatchLatterButtonProps extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">{
    mediaId: string,
    text?: string
}
