import { ButtonHTMLAttributes } from "react"

export interface ButtonBorderProps extends
Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    text: string
    withArrows?: boolean
}
