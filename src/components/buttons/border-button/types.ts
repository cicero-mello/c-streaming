import { ButtonHTMLAttributes } from "react"

export interface BorderButtonProps extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement
>, "className" | "children"> {
    $theme?: "red" | "danger" | "green"
    $text: string
}
