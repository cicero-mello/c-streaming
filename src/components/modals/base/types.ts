import { ReactNode } from "react"
import { BorderButtonProps } from "../../buttons"

export interface BaseModalHandle {
    open: (closeAction?: Function) => void
    close: () => void | Promise<void>
}

export interface BaseModalProps {
    id: string
    title?: string
    texts?: string[]
    buttons?: BorderButtonProps[]
    children?: ReactNode
}
