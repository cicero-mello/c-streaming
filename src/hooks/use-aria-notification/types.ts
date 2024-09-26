import { HTMLAttributes } from "react"

export interface UseAriaNotification {
    readAriaNotification: (message: string) => void
    clearAriaNotification: () => void
}

export interface AriaNotificationProps extends Omit<
    HTMLAttributes<HTMLSpanElement>,
    "className" | "aria-label"
>{
    "aria-label": string | undefined | false
}
