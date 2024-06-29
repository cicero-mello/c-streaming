import { ReactNode } from "react"
import { BorderButtonProps } from "../../buttons"

export interface BaseModalHandle {
    open: () => void | Promise<void>
    close: () => void | Promise<void>
}

export interface BaseModalProps {
    title?: string
    text?: string
    buttons?: BorderButtonProps[]
    children?: ReactNode
}
