import { ButtonHTMLAttributes } from "react"

export interface ColorButtonProps extends
Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">{
    text: string
}
