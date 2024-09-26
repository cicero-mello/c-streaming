import { HTMLAttributes } from "react"

export interface AriaNotificationProps extends Omit<
    HTMLAttributes<HTMLSpanElement>,
    "className"
>{
    message?: string
}
