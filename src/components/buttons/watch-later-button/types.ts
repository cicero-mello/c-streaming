import { ButtonHTMLAttributes } from "react"

export interface WatchLatterButtonProps extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">{
    alreadySaveToWatch: boolean
}
