import { ReactNode } from "react"
import { ButtonProps } from "@components"

export interface BaseModalHandle {
    open: () => void
    close: () => void | Promise<void>
}

export interface BaseModalProps {
    id: string
    title?: string
    texts?: string[]
    buttons?: ButtonProps[]
    children?: ReactNode
}
