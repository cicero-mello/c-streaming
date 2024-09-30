import { HTMLAttributes } from "react"

export interface UseAriaNotification {
    clearAriaNotification: () => void
    readAriaNotification: (
        message: string,
        timeToRead?: number
    ) => void
}

export interface AriaNotificationProps extends Omit<
    HTMLAttributes<HTMLSpanElement>,
    "className" | "aria-label"
>{
    "aria-label": string | undefined | false
}
