import { ButtonHTMLAttributes } from "react"

export interface BorderButtonProps extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">{
    text: string
}
